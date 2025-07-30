// app/about/page.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import {motion, useScroll} from "motion/react"

const images = [
  '/images/rooftop1.jpg',
  '/images/rooftop2.jpg',
  '/images/rooftop3.jpg',
  '/images/groundmount1.jpg',
  '/images/groundmount2.jpg',
  '/images/groundmount3.jpg',
];

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

  const { scrollYProgress } = useScroll()

  return (
    <motion.main
        id="scroll-indicator"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="w-full mx-auto px-6 bg-gray-800 p-20 md:p-20">
        <div className='w-full bg-gray-300 dark:bg-gray-950 p-20'>
            <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-300 mb-8">
                About Us
            </h1>

            <p className="text-lg text-gray-700 dark:text-gray-500 mb-4">
                We are a leading solar energy solutions provider specializing in turnkey solar power plant installations across India. Our team delivers both <strong>Rooftop</strong> and <strong>Ground-Mount</strong> solar projects tailored to commercial, industrial, and utility clients.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-500 mb-4">
                With a mission to drive clean and affordable energy, we focus on high-performance systems, customer satisfaction, and long-term sustainability.
            </p>

            {/* Image Slider */}
            <div ref={sliderRef} className="flex items-center justify-items-center mt-10 mb-12 rounded-lg overflow-hidden">
                {images.map((src, index) => (
                <div className="keen-slider__slide" key={index}>
                    <img 
                      src={src} 
                      alt={`Solar Project ${index + 1}`} 
                      className="w-full h-[400px] object-cover" />
                </div>
                ))}
            </div>

            <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 mb-4">What We Offer</h2>
                <ul className="list-disc list-inside  text-gray-800 dark:text-gray-400 space-y-2">
                <li>Engineering, Procurement & Construction (EPC) Services</li>
                <li>Custom Rooftop Solar Installations</li>
                <li>Ground-Mounted Solar Farms</li>
                <li>Hybrid Systems with Battery Storage</li>
                <li>Operations & Maintenance (O&M)</li>
                </ul>
            </section>
        </div>
    </motion.main>
  );
};

export default AboutPage;
