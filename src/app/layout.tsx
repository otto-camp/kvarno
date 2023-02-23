import '../../styles/globals.css';
import Footer from './Footer';
import Header from './Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="business">
      <head />
      <body className="p-4 antialiased">
        <Header />
        <div className="mx-auto max-w-6xl mt-28">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
