'use client';

import './globals.css';
import { RegisterProvider } from '@/store/registerStore';

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js" async></script>
            <RegisterProvider>
                <body>{children}</body>
            </RegisterProvider>
        </html>
    );
}
