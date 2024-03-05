import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Background from "@/components/Background";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dungeons & Dragons",
  description: "Pagina para iniciar una aventura de roll",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <Background />
        {children}
        <Footer />
      </body>
    </html>
  );
}
