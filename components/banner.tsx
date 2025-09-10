import ScrollingImages from "./scroll_images";


function MainBanner(){
    return(
        <main className="py-2 w-full h-[240px] md:h-[320px] lg:h-[480px] items-center justify-center overflow-hidden mt-[4.5rem] md:lg:mt-0 rounded-[20px]">
            <ScrollingImages />
        {/* <ScroulingCrousel /> */}
       
      </main>
    )
}

export default MainBanner;