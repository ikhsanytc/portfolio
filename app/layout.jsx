import "./globals.css";
export const metadata = {
  title: "Portfolio",
  description: "Portfolio ikhsan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
