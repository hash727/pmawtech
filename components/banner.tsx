import ScrollingImages from "./scroll_images";


function MainBanner(){
    return(
        <main className="py-2 w-full h-[240px] md:h-[320px] lg:h-[480px] overflow-clip items-center justify-center ">
            <ScrollingImages />
        {/* <ScroulingCrousel /> */}
       
      </main>
    )
}

export default MainBanner;