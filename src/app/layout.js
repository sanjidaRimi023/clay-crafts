import { Playfair_Display, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Providers from "./providers";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});
export const metadata = {
  title: "ClayCrafts",

  description: "Pottery inspired website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${roboto.variable} antialiased`}>
        <Navbar />
        <Providers>
          <main className="min-h-screen"> {children} </main>
        </Providers>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
