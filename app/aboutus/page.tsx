// app/about/page.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
// import {motion, useScroll} from "motion/react"
import {motion} from "framer-motion";
import { aboutImages } from '@/lib/tools';


// const images = [
//   {
//     href:'/images/rooftop1.jpg', 
//     description:"Roof Top: ", 
//     details:"A photovoltaic (PV) system installed on the roof of a building to generate electricity from sunlight."
//   },
//   {
//     href:'/images/rooftop2.jpg', 
//     description: "Roof Top:",
//     details:" These systems convert solar energy into usable electricity, which can be used to power the building or be fed back into the grid"
//   },
//   {
//     href:'/images/rooftop3.jpg', 
//     description: "Roof Top:",
//     details:"They offer a clean, renewable energy source and can help reduce electricity bills and reliance on traditional power sources. "
//   },
//   {
//     href:'/images/groundmount1.jpg',  
//     description: "Ground Mount:",
//     details: "A ground-mounted solar system is a photovoltaic (PV) system where solar panels are installed on the ground rather than on rooftops."
//   },
//   {
//     href:'/images/groundmount2.jpg', 
//     description: "Ground Mount:",
//     details: " These systems are designed with mounting structures that hold the panels at an optimal angle to the sun, often using frameworks that are anchored to the ground with posts, concrete, or screws."
//   },
//   {
//     href:'/images/groundmount3.jpg', 
//     description: "Ground Mount:",
//     details:"They offer flexibility in terms of size and placement, making them suitable for both large-scale projects and individual households with ample open space"
//   },
// ];

const AboutPage = () => {

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
    <main
        className="w-full mx-auto px-6 bg-gray-800 p-5 py-20 md:p-10 lg:p-20">
        <div className='w-full bg-gray-300 dark:bg-gray-950 p-5'>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-gray-300 mb-8"
            >
                About Us
            </motion.h1>


            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-700 dark:text-gray-500 mb-4 space-y-2 md:lg:space-y-4"
            >
                We are a leading solar energy solutions provider specializing in turnkey solar power plant installations across India. Our team delivers both <strong>Rooftop</strong> and <strong>Ground-Mount</strong> solar projects tailored to commercial, industrial, and utility clients.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-700 dark:text-gray-500 mb-4 space-y-2 md:lg:space-y-4"
            >
                With a mission to drive clean and affordable energy, we focus on high-performance systems, customer satisfaction, and long-term sustainability.
            </motion.p>

            {/* Image Slider */}
            <div ref={sliderRef} className=" flex items-center justify-items-center mt-10 mb-12 rounded-lg overflow-hidden">
                {aboutImages.map((src, index) => (
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

            <section>
                <motion.h2 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl md:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-gray-300 mb-4"
                >
                  What We Offer
                </motion.h2>
                <motion.ul 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className=" text-lg md:lg:text-xl list-disc list-inside  text-gray-800 dark:text-gray-400 space-y-4"
                >
                  <li>Engineering, Procurement & Construction (EPC) Services</li>
                  <li>Custom Rooftop Solar Installations</li>
                  <li>Ground-Mounted Solar Farms</li>
                  <li>Hybrid Systems with Battery Storage</li>
                  <li>Operations & Maintenance (O&M)</li>
                </motion.ul>
            </section>
        </div>
    </main>
  );
};

export default AboutPage;
