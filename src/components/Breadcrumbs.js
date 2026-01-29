import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumbs({ items }) {
    return (
        <div className="flex-row" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem', alignItems: 'center', gap: '0.5rem' }}>
            <Link href="/">~</Link>
            {items.map((item, i) => (
                <div key={i} className="flex-row" style={{ alignItems: 'center', gap: '0.5rem' }}>
                    <ChevronRight size={14} />
                    {item.href ? (
                        <Link href={item.href} style={{ color: 'inherit' }}>{item.label}</Link>
                    ) : (
                        <span style={{ color: 'var(--text-primary)' }}>{item.label}</span>
                    )}
                </div>
            ))}
        </div>
    );
}
