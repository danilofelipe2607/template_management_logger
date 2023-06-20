import "./globals.css";
import { Inter } from "next/font/google";
//theme
import "primereact/resources/themes/tailwind-light/theme.css";

//core
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tron Logger",
  description: "Veja os loggers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
