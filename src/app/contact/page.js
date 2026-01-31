import ContactForm from '@/components/ContactForm';

export const metadata = {
    title: 'Contact | Yash Karthiya',
    description: 'Get in touch with Yash Karthiya for backend engineering opportunities, collaborations, or technical inquiries.',
};

export default function ContactPage() {
    return (
        <div className="section-container">
            <h1>CONTACT</h1>
            <p style={{ marginBottom: '2rem' }}>
                For collaborations, opportunities, or technical inquiries.
            </p>

            <ContactForm />
        </div>
    );
}
