"use client"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi
} from '@/components/ui/carousel'
import React from "react";
import { scrollImages } from "@/lib/tools";
import {motion} from "framer-motion";

function ScrollingImages(){
  // const images = [
  //   "/Home/solar_main.jpg",
  //   "/Home/solar_main1.jpg",
  //   "/Home/solar_main2.jpg",
  // ];

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if(!api){
      return
    }
  

    setCount(api?.scrollSnapList().length)
    setCurrent(api?.selectedScrollSnap() + 1)

    api?.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <motion.div 
      initial={{
        opacity:0,
        scale:0.85
      }}
      whileInView={{
        opacity:1,
        scale:1,
        transition:{
          duration:1
        }
      }}
      viewport={{
        amount:0.7,

      }}
      className="items-center justify-items-center "
    >
      {/* <div className={`bg-[url(${images[0]})})] w-96 h-[250px] bg-center bg-no-repeat bg-cover`}>
                  .
                </div> */}
        <Carousel
          setApi={setApi}
          className="w-full inset-0"
          plugins={[
            Autoplay({
              delay: 5000,
            })
          ]}
        >
          <CarouselContent>
            {scrollImages.map((src, i) => (
              <CarouselItem key={i} className="relative">
                {/* <div className={`bg-[url(${src})})] bg-center bg-no-repeat bg-cover`}> */}
                  <>
                      <img
                        src={src.href}
                        alt={`image-dub-${1}`}
                        className="
                          w-full
                          h-[240px] md:h-[320px] lg:h-[480px] !important
                          object-cover
                        "                      
                      />
                  </>
                  <div className='absolute top-[60%] space-x-1 p-5 left-[30%] w-full z-50'>
                    <motion.h1 
                      initial={{ 
                        opacity: 0, 
                        y: -20,
                        scale:0.25 
                      }}
                      animate={{ opacity: 0.8, y: 0, scale:1 }}
                      transition={{ duration: 0.2 }}
                      className='text-xl md:text-3xl lg:text-7xl font-bold text-shadow-lg text-shadow-blue-500 text-gray-950 dark:text-gray-100 font-Caveat'
                      whileInView={{
                        opacity:0.8,
                        scale: 1.5,
                        transition: {
                          duration: 1
                        }
                      }}
                    >
                      {src.heading}
                    </motion.h1>
                    {/* <p className='text-sm md:text-lg lg:text-xl text-black dark:text-gray-300 text-shadow-2xs'>{src?.details}</p> */}
                  </div>
                  
              </CarouselItem>
            ))}
          </CarouselContent>
            {/* <CarouselPrevious /> */}
            {/* <CarouselNext /> */}
        </Carousel>
      {/* </div> */}
      
      
    </motion.div>
  );
}

export default ScrollingImages;