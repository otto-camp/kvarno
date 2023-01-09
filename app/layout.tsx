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
      <body className="overflow-y-scroll p-4 text-white antialiased bg-gray-1100 bg-[url('/grid.svg')]">
        <Header />
        {children}
      </body>
    </html>
  );
}
