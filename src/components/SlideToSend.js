'use client';

import { useEffect, useRef, useState } from 'react';
import { Send, ChevronRight } from 'lucide-react';

export default function SlideToSend({ onSend, disabled = false, message = 'Slide to send' }) {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const containerRef = useRef(null);
    const startXRef = useRef(0);

    const SLIDER_SIZE = 48;
    const THRESHOLD = 0.85;

    const getMaxPosition = () => {
        if (!containerRef.current) return 0;
        return containerRef.current.offsetWidth - SLIDER_SIZE - 8;
    };

    const handleStart = (clientX) => {
        if (disabled || isComplete) return;
        setIsDragging(true);
        startXRef.current = clientX - position;
    };

    const handleMove = (clientX) => {
        if (!isDragging || disabled || isComplete) return;
        const maxPosition = getMaxPosition();
        let newPosition = Math.max(0, Math.min(clientX - startXRef.current, maxPosition));

        const progress = maxPosition === 0 ? 0 : newPosition / maxPosition;
        if (progress > 0.8) {
            const magnet = (progress - 0.8) / 0.2;
            newPosition = newPosition + (maxPosition - newPosition) * magnet * 0.25;
        }

        setPosition(newPosition);
    };

    const handleEnd = () => {
        if (!isDragging || disabled || isComplete) return;
        setIsDragging(false);
        const maxPosition = getMaxPosition();
        const progress = maxPosition === 0 ? 0 : position / maxPosition;

        if (progress >= THRESHOLD) {
            setPosition(maxPosition);
            setIsComplete(true);
            setTimeout(() => {
                onSend?.();
                setTimeout(() => {
                    setPosition(0);
                    setIsComplete(false);
                }, 300);
            }, 200);
        } else {
            setPosition(0);
        }
    };

    useEffect(() => {
        const handleMouseMove = (e) => handleMove(e.clientX);
        const handleTouchMove = (e) => handleMove(e.touches[0].clientX);
        const handleMouseUp = () => handleEnd();
        const handleTouchEnd = () => handleEnd();

        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('touchmove', handleTouchMove);
            document.addEventListener('mouseup', handleMouseUp);
            document.addEventListener('touchend', handleTouchEnd);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, [isDragging, position]);

    const maxPosition = getMaxPosition();
    const progress = maxPosition === 0 ? 0 : position / maxPosition;
    const textOpacity = Math.max(0, 1 - progress * 2);

    return (
        <div
            ref={containerRef}
            className={`slide-send ${disabled ? 'is-disabled' : ''} ${isComplete ? 'is-complete' : ''}`}
            style={{
                boxShadow: progress > 0 ? `0 0 22px rgba(63,255,211,${0.1 + progress * 0.25})` : 'none',
                '--slide-progress': progress,
            }}
        >
            <div
                className="slide-send__track"
                style={{ width: `${Math.max(SLIDER_SIZE + 8, position + SLIDER_SIZE + 8)}px` }}
            />
            <div className="slide-send__trail" />
            <div className="slide-send__burst" />
            <div className="slide-send__text" style={{ opacity: textOpacity }}>
                <span>{message}</span>
                <ChevronRight size={16} />
            </div>
            <div
                className={`slide-send__thumb ${isDragging ? 'is-dragging' : ''}`}
                style={{
                    transform: `translateX(${position}px)`,
                    transition: isDragging ? 'none' : 'transform 0.25s ease-out',
                }}
                onMouseDown={(e) => handleStart(e.clientX)}
                onTouchStart={(e) => handleStart(e.touches[0].clientX)}
            >
                <div className="slide-send__thumb-core">
                    <Send
                        size={18}
                        className={progress > 0.5 || isComplete ? 'is-active' : ''}
                        style={{ transform: `rotate(${progress * 40}deg)` }}
                    />
                </div>
            </div>
            {isComplete ? <div className="slide-send__status">Sending...</div> : null}
        </div>
    );
}
