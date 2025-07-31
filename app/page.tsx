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


export const metadata: Metadata = {
  title: "Home - Solar Projects",
  description: "PMAW technologies, Bangalore is providing wider range of Solar technologies for both commercial solar plant and home solar systems.",
};

export default function Home() {
  return (
    // <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    <div className="flex flex-col items-center justify-items-center min-h-screen pb-5 gap-5   bg-gray-800 md:p-20 static">
      
      {/* <NavBar /> */}
      <MainBanner />
      
      <div className=" ">
        <Card>
          <CardHeader><span className="text-3xl md:text-4xl lg:text-5xl font-semibold text-shadow-2xs ">Solar Project - Ground Mount & Roof Top</span></CardHeader>
          <CardContent>
            <p className="text-xl lg:text-2xl">
              PMAW Technologies is a dynamic and innovative green energy company that is committed to build premium solar projects. 
              PMAW CAPEX Thnologies is a dynamic and innovative green energy company that is committed to build premium solar projects. 
              We work closely with clients to understand their specific energy needs and provide customized solutions that are tailored to their requirements.
            </p>
            <div className="flex justify-items-stretch py-10">
              <img
                src="/Home/solar_main.jpg"
                className=" aspect-square
                    w-25 md:w-60 lg:w-100
                  "
              />
              <span className="py-4 ml-10">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-300">WE OFFER</h2>
                <ul className="list-disc list-inside text-blue-950 dark:text-blue-300 md:lg:text-xl" >
                  
                    <li>OPEX model projects</li>
                    <li>CAPEX model projects</li>
                  
                </ul>
              </span>
            </div>
          </CardContent>

        </Card>
      </div>
      <div className="bg-gray-300 dark:bg-gray-900 w-full p-10 rounded-t-xl">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-300">OUR PRODUCT RANGES</h2>
        <div className="row-start-2 flex gap-5 flex-wrap">
          <div>
              <ul className="list-disc list-inside  text-blue-950 dark:text-blue-300" >
                  <li>WELDING PRODUCTS</li>
                  <li>POWDERS FOR POWDER COATING</li>
              </ul>
          </div>

          <div>
              <ul className="list-disc list-inside  text-blue-950 dark:text-blue-300" >
                  <li>TTO PRINTERS AND RIBBONS</li>
                  <li>SOLAR PROJECTS UNDER CAPEX AND OPEX MODEL</li>
              </ul>
          </div>
        </div>
      </div>
      {/* <FooterSection /> */}
    </div>
  );
}
