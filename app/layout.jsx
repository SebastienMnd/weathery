import { Roboto } from "next/font/google";
import "./globals.css";

const font = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Weathery - Votre application météo",
  description: "Weathery - Votre application météo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${font.className} antialiased flex justify-center items-center h-screen bg-blue-50`}
      >
        {children}
      </body>
    </html>
  );
}
