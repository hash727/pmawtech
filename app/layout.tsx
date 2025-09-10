import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBarN from "@/components/NavBarN";
import FooterSection from "@/components/Footer";
import { Toaster } from 'react-hot-toast';
import { ContactDetails, MainCont } from "@/lib/tools";
import SocialMedia from "@/components/socialMedia";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const position = {
  grid: 'grid-cols-1 md:grid-cols-1 lg:grid-cols-1',
  size: "h-[16px] w-[16px] md:lg:h-[24px] md:lg:w-[24px]"
}

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
          <div className="">
            {children}
          </div>
          <div className="fixed right-0 top-[40%] bg-amber-400/50 p-2 md:lg:p-4 rounded-md opacity-20 hover:opacity-100 hover:transition-opacity z-[999]">
            <SocialMedia ContactDetails={ContactDetails} position={position} />
          </div>
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
