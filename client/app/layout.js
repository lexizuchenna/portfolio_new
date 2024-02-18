import { Inter } from "next/font/google";

import "@/styles/style.scss";
import "@/styles/style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alexander Ukwueze",
  description: "Personal porfolio by Alexander Ukwueze (lexizuchenn)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} app`}>{children}</body>
    </html>
  );
}
