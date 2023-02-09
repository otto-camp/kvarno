import '../../styles/globals.css';
import Footer from './Footer';
import Header from './Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="overflow-y-scroll bg-gray-1100 p-4 text-white antialiased">
        <Header />
        <div className="mx-auto max-w-6xl">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
