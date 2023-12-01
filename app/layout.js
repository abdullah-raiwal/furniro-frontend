import Navbar from "@/components/Navbar";
import "./globals.css";
import { AOSInit } from "@/components/aos/aosInit";

export const metadata = {
  title: "Furniro",
  description: "Online Furniture Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AOSInit />
      <body className="">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
