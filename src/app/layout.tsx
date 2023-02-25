import '../../styles/globals.css';
import Footer from './Footer';
import Header from './Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: 'all',
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/manifest.json',
  verification: { google: 'UfExZvP8OMttLFbO1FiDBWJe9aKIqYcnaFQYu-nc3iY' },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="business">
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <base href="kvarno.netlify.app/" />
      </head>
      <body className="p-4 antialiased">
        <Header />
        <div className="mx-auto mt-28 max-w-6xl">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
