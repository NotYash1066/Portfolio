import ContactForm from '@/components/ContactForm';

import { MotionSection } from '@/components/MotionSection';
import TypewriterText from '@/components/TypewriterText';

export const metadata = {
    title: 'Contact | Yash Karthiya',
    description: 'Get in touch with Yash Karthiya for backend engineering opportunities, collaborations, or technical inquiries.',
};

export default function ContactPage() {
    return (
        <div className="section-container">
            <MotionSection id="contact" data-rail="Contact" className="hero">
                <div className="hero-eyebrow">Let's Build</div>
                <h1><TypewriterText text="Contact" /></h1>
                <p className="hero-sub" style={{ marginBottom: '0.5rem' }}>
                    For collaborations, opportunities, or technical inquiries.
                </p>
            </MotionSection>

            <MotionSection className="split" delay={0.1} id="reach-out" data-rail="Reach Out">
                <div>
                    <ContactForm />
                </div>
                <div className="panel panel-ruled">
                    <div className="panel-title">Direct Line</div>
                    <p className="text-sec">
                        For quick replies, email directly at
                        <strong> yash.karthiya.1066@gmail.com</strong>.
                    </p>
                    <div className="hero-actions">
                        <span className="hero-chip chip-accent">Open to backend roles</span>
                        <span className="hero-chip">Remote • Ahmedabad</span>
                    </div>
                    <div style={{ marginTop: '1.5rem' }} className="text-sec">
                        Typical response time: 24-48 hours.
                    </div>
                </div>
            </MotionSection>
        </div>
    );
}
