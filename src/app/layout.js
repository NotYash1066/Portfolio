import './globals.css';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import CommandPalette from '@/components/CommandPalette';

export const metadata = {
    metadataBase: new URL('https://yashkarthiya.in'),
    title: {
        default: 'Yash Karthiya | Backend Engineer & Systems Architect',
        template: '%s | Yash Karthiya'
    },
    description: 'Engineering documentation of Yash Karthiya. Specializing in high-throughput backend systems, distributed architectures, and applied AI pipelines. Seeking Backend Engineering Intern roles in Ahmedabad and RAG Engineer positions.',
    keywords: ['Backend Engineer', 'Systems Architect', 'Distributed Systems', 'Applied AI', 'Spring Boot', 'FastAPI', 'System Design', 'Yash Karthiya', 'Backend Engineering Intern Ahmedabad', 'AI Engineering Intern', 'RAG Engineer'],
    authors: [{ name: 'Yash Karthiya', url: 'https://yashkarthiya.in' }],
    creator: 'Yash Karthiya',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://yashkarthiya.in',
        title: 'Yash Karthiya | Backend Engineer & Systems Architect',
        description: 'Engineering documentation of Yash Karthiya. Deep dives into system design, backend architecture, and AI.',
        siteName: 'Yash Karthiya Portfolio',
        images: [
            {
                url: '/og-image.png', // We'll need to ensure this exists or use a default one
                width: 1200,
                height: 630,
                alt: 'Yash Karthiya - Backend Engineer',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Yash Karthiya | Backend Engineer',
        description: 'Building robust backend systems and scalable architectures.',
        // images: ['/twitter-image.png'], // Optional if same as OG
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Yash Karthiya',
    url: 'https://yashkarthiya.in',
    jobTitle: 'Backend Engineer',
    sameAs: [
        'https://github.com/NotYash1066',
        'https://linkedin.com/in/yash-karthiya'
    ],
    knowsAbout: ['Backend Engineering', 'Distrubuted Systems', 'System Architecture', 'Applied AI']
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className="layout-container">
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                    />
                    <Sidebar />
                    <CommandPalette />

                    <main className="content">
                        {children}

                        <footer style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                            <p>System reliability • Trust • Engineering Thinking</p>
                            <p>© 2027 Yash Karthiya. Built with Next.js (SSG).</p>
                        </footer>
                    </main>
                </div>
            </body>
        </html>
    );
}
