import "./globals.css";

export const metadata = {
  title: "Rive Test",
  description: "Next.js Rive starter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}