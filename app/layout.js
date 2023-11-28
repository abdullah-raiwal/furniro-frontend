import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Furniro",
  description: "Online Furniture Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
