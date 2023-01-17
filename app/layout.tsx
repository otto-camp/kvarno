import '../styles/globals.css';
import Header from './Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="overflow-y-scroll bg-gray-1100 bg-[url('/grid.svg')] p-4 text-white antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
