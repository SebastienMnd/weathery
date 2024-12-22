import "./globals.css";

export const metadata = {
  title: "Weathery - Votre application météo",
  description: "Weathery - Votre application météo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
