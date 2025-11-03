export const metadata = {
  title: "Agentic Starter",
  description: "Deployed on Vercel by an autonomous agent"
};

import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="header">
            <h1>Agentic Starter</h1>
            <p>Built with Next.js 14 ? Deployed to Vercel</p>
          </header>
          <main>{children}</main>
          <footer className="footer">? {new Date().getFullYear()} Agentic Starter</footer>
        </div>
      </body>
    </html>
  );
}
