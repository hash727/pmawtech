
"use client"
import Image from "next/image";


function ScroulingCrousel(){
  const images = [
    "/Home/solar_main.jpg",
    "/Home/solar_main1.jpg",
    "/Home/solar_main2.jpg",
  ];

  return (

 <div className="overflow-hidden w-full max-w-[95vw] mx-auto border border-gray-300 rounded-xl shadow-lg">
      {/* animated container */}
      <div className="flex w-max animate-scrollX">
        {/* first set */}
        {images.map((src, index) => (
          <div
            key={index}
            className="
              relative flex-shrink-0
              h-32 w-40
              sm:h-40 sm:w-52
              md:h-48 md:w-60
              lg:h-56 lg:w-72
            "
          >
            <Image
              src={src}
              alt={`carousel-img-${index}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 160px,
                     (max-width: 768px) 208px,
                     (max-width: 1024px) 240px,
                     288px"
            />
          </div>
        ))}
        {/* duplicate set for seamless loop */}
        {images.map((src, index) => (
          <div
            key={`dup-${index}`}
            className="
              relative flex-shrink-0
              h-32 w-40
              sm:h-40 sm:w-52
              md:h-48 md:w-60
              lg:h-56 lg:w-72
            "
          >
            <Image
              src={src}
              alt={`carousel-img-dup-${index}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 160px,
                     (max-width: 768px) 208px,
                     (max-width: 1024px) 240px,
                     288px"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

  export default ScroulingCrousel;