import { Metadata } from "next";
import ScrollingImages from "@/components/scroll_images";
import ScroulingCrousel from "@/components/ScrollingCrousel";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import NavBar from "@/components/ui/navbar";
import MainBanner from "@/components/banner";
import ConnectPage from "@/components/connect/page";
import ModeToggle from "@/components/toggleTheme";
import FooterSection from "@/components/Footer";
import {motion} from "framer-motion";
import MainContent from "@/components/MainContent";

export const metadata: Metadata = {
  icons:{
    icon: "/Logo/logo.png",
  },
  title: "PMAW - Solar Projects, Bangalore, Karnataka",
  description: "PMAW technologies, Bangalore is providing wider range of Solar technologies for both commercial solar plant and home solar systems.",
};

export default function Home() {
  return (
    // <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    <div className="flex flex-col items-center justify-items-center min-h-screen pb-5 gap-5   bg-gray-800 md:p-20 static">
      
      {/* <NavBar /> */}
      <MainBanner />
      
      <div 
        className=" "
      >
        <MainContent />
      </div>
    </div>
      
  );
}
