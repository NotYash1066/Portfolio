import './globals.css';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import CommandPalette from '@/components/CommandPalette';

export const metadata = {
    title: 'Yash Karthiya | Backend Engineer',
    description: 'Engineering documentation and system design portfolio.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className="layout-container">
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
