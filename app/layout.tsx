import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBarN from "@/components/NavBarN";
import FooterSection from "@/components/Footer";
import { Toaster } from 'react-hot-toast';
import { MainCont } from "@/lib/tools";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PMAW Technologies",
  description: `${MainCont[0].description} --Develped by Harish"`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Toaster position="bottom-right" />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <NavBar /> */}
          <div className="fixed mt-0 mx-auto z-50 w-full">
            <NavBarN />
          </div>
          {children}
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
