import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Real Estate App",
  description: "Property listings and details",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>

      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1000,
            background: "white",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          <Navbar />
        </div>

        <div style={{ flex: 1 }}>{children}</div>

        <Footer />
      </body>
    </html>
  );
}
