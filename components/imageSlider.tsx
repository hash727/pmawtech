// import { aboutImages } from '@/lib/tools';
import { useKeenSlider } from 'keen-slider/react';
import React, { useEffect, useRef } from 'react'
import {motion} from "framer-motion";


const ImageSlider = ({allAbtImages}) => {
    const timer = useRef<NodeJS.Timeout | null>(null);
        const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
            loop: true,
            slides: {
                perView: 1,
                spacing: 10,
            },
        });
    
       // Autoplay logic
      useEffect(() => {
        if (!instanceRef.current) return;
    
        timer.current = setInterval(() => {
          instanceRef.current?.next();
        }, 3000); // Change every 3 seconds
    
        return () => {
          if (timer.current) clearInterval(timer.current);
        };
      }, [instanceRef]);
  return (
    <div ref={sliderRef} className=" flex items-center justify-items-center mt-10 mb-12 rounded-lg overflow-hidden">
                {allAbtImages.map((src, index) => (
                <div className="keen-slider__slide relative" key={index}>
                  <>
                    <motion.img 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      src={src.href} 
                      alt={`Solar Project ${index + 1}`} 
                      className="w-full h-[240px] md:h-[320px] lg:h-[400px] object-cover z-0" 
                    />
                  </>
                  <div className='relative -mt-[180px] space-x-1 space-y-2 h-auto p-5 left-0 w-full bg-gray-100/40 dark:bg-gray-900/40 z-40'>
                    <h1 className='text-xl md:text-3xl lg:text-4xl font-bold text-shadow-md text-gray-950 dark:text-gray-100'>{src.description}</h1>
                    <p className='text-sm md:text-lg lg:text-xl text-black dark:text-gray-300 text-shadow-2xs'>{src?.details}</p>
                  </div>
                </div>
                ))}
            </div>
  )
}


export default ImageSlider
