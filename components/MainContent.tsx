"use client"
import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { MainCont } from '@/lib/tools'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

function MainContent() {
    const [apiHeading, setApiHeading] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if(!apiHeading){
            return
        }

        setCount(apiHeading?.scrollSnapList().length)
        setCurrent(apiHeading?.selectedScrollSnap() + 1)

        apiHeading?.on("select", () => {
            setCurrent(apiHeading.selectedScrollSnap() + 1)
        })
    }, [apiHeading])

  return (
    <div className='grid grid-cols-1 space-y-4 '>
        <div className='relative'>
            <Carousel
                setApi={setApiHeading}
                className='w-full inset-0'
                plugins={[
                    // Autoplay({
                    //     delay:15000,
                    // })
                    
                ]}
            >
                <CarouselContent>
                    {MainCont.map((data, i)=>(
                        <CarouselItem key={i}>
                            <Card className='p-8'>
                                <CardHeader>
                                    <span className='text-3xl md:text-4xl lg:text-5xl font-semibold text-shadow-2xs'>
                                        {data.heading}
                                    </span>
                                </CardHeader>
                                <CardContent>
                                    <p className='text-xl lg:text-2xl'>
                                        {data.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className='absolute left-0.5 top-[50%] cursor-pointer ' />
                <CarouselNext className='absolute right-0.5 top-[50%] cursor-pointer '/>
            </Carousel>
        </div>
       
        <div className="flex  flex-1/2 justify-evenly items-center w-full bg-gray-900 py-10">
            <img
                src="/Home/solar_main.jpg"
                className=" aspect-auto
                    w-25 md:w-60 lg:w-100
                    "
            />
            <span className="py-4 ml-10 items-center justify-items-center align-middle">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-300">WE OFFER</h2>
            <ul className="list-disc list-inside text-blue-950 dark:text-blue-300 md:lg:text-xl" >
                
                <li>OPEX model projects</li>
                <li>CAPEX model projects</li>
                
            </ul>
            </span>
        </div>
      {/* <Card>
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
              <span className="py-4 ml-10 items-center justify-items-center align-middle">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-300">WE OFFER</h2>
                <ul className="list-disc list-inside text-blue-950 dark:text-blue-300 md:lg:text-xl" >
                  
                    <li>OPEX model projects</li>
                    <li>CAPEX model projects</li>
                  
                </ul>
              </span>
            </div>
          </CardContent>

        </Card> */}

        <div 
            className="flex flex-col md:flex-row bg-gray-300 dark:bg-gray-900 w-full p-10 rounded-t-xl items-center justify-evenly"
            
        >
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
    </div>
    
    
  )
}

export default MainContent
