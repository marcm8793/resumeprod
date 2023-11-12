import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Navbar/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Topbar } from "@/components/nav-bar/topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marc Mansour blog-portfolio",
  description: "Web portfolio and blog of Marc Mansour",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Topbar />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
