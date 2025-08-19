// import './globals.css';

export const metadata = {
  title: 'My Next App',
  description: 'App Router enabled',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
