import '../styles/globals.css'; 
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Feedback Form',
  description: 'Send us your thoughts',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
