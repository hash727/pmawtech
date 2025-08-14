import ImageSlider from '@/components/imageSlider'
import { aboutImages } from '@/lib/tools'
import React from 'react'
import {motion} from 'framer-motion'

interface AboutPageContentProps {
    heading: string,
    description: string,
    details: any
}

const AboutPageContent: React.FC<AboutPageContentProps> = ({heading, description, details}) => {
    console.log(details);
  return (
    <main
        className="w-full mx-auto px-6 bg-gray-800 p-5 py-20 md:p-10 lg:p-20"
    >
        <div className='w-full bg-gray-300 dark:bg-gray-950 p-5'>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-gray-300 mb-8"
            >
                {heading}
            </motion.h1>


            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-700 dark:text-gray-500 mb-4 space-y-2 md:lg:space-y-4"
            >
                {description}
                {/* We are a leading solar energy solutions provider specializing in turnkey solar power plant installations across India. Our team delivers both <strong>Rooftop</strong> and <strong>Ground-Mount</strong> solar projects tailored to commercial, industrial, and utility clients. */}
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
            <ImageSlider allAbtImages={aboutImages} />
            {/* <div ref={sliderRef} className=" flex items-center justify-items-center mt-10 mb-12 rounded-lg overflow-hidden">
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
            </div> */}

            <section>
                <motion.h2 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl md:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-gray-300 mb-4"
                >
                  {details?.heading}
                </motion.h2>
                <motion.ul 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className=" text-lg md:lg:text-xl list-disc list-inside  text-gray-800 dark:text-gray-400 space-y-4"
                >
                    {details.offer.map((data)=>(
                            <li>{data.dat}</li>
                    ))}
                  {/* <li>Engineering, Procurement & Construction (EPC) Services</li>
                  <li>Custom Rooftop Solar Installations</li>
                  <li>Ground-Mounted Solar Farms</li>
                  <li>Hybrid Systems with Battery Storage</li>
                  <li>Operations & Maintenance (O&M)</li> */}
                </motion.ul>
            </section>
        </div>
    </main>
  )
}

export default AboutPageContent
