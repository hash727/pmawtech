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

function ScrollingImages(){
  const images = [
    "/Home/solar_main.jpg",
    "/Home/solar_main1.jpg",
    "/Home/solar_main2.jpg",
  ];

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
    <div className="items-center justify-items-center ">
      {/* <div className={`bg-[url(${images[0]})})] w-96 h-[250px] bg-center bg-no-repeat bg-cover`}>
                  .
                </div> */}
        <Carousel
          setApi={setApi}
          className="h-full w-full inset-0"
          plugins={[
            Autoplay({
              delay: 5000,
            })
          ]}
        >
          <CarouselContent>
            {images.map((src, i) => (
              <CarouselItem key={i}>
                <div className={`bg-[url(${src})})] bg-center bg-no-repeat bg-cover`}>
                  
                
                  <img
                    src={src}
                    alt={`image-dub-${1}`}
                    className="
                      md:object-fill
                      w-full h-[480px] object-cover
                     
                    "                      
                  />
                    
                     </div>
                  
              </CarouselItem>
            ))}
          </CarouselContent>
            {/* <CarouselPrevious /> */}
            {/* <CarouselNext /> */}
        </Carousel>
      {/* </div> */}
      
      
    </div>
  );
}

export default ScrollingImages;