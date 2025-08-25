import ConnectPage from "@/components/connect/page";

function FooterSection(){
    return(
        <footer >
          <div className="flex flex-col md:lg:flex-row my-5 items-center justify-evenly bg-slate-100 text-shadow-xs dark:bg-slate-950 w-full h-full p-5">
            <div className="text-gray-900 dark:text-white font-semibold text-xs w-full/2">
              {/* <p>
                #515, 2nd Floor, 1st Stage, Bhavani Nagar, 
                Railway Layout, Ullal Road, Bengaluru - 560056 
              </p> */}
              <ConnectPage />
            </div>
            <div className=" text-gray-900 dark:text-white px-5 font-semibold text-xl md:lg:text-2xl">
              <ul className="list-none">
                <li>
                  Roof Top Solar
                </li>
                <li>
                  Ground Mount Solar
                </li>
                <li>
                  Residential / commercial Solar
                </li>
              </ul>
            </div>
          </div>
          <div className="text-gray-950 bg-slate-200 dark:text-white dark:bg-gray-950 items-center justify-items-center font-semibold text-sm md:lg:text-md">
            <p className="py-2">@2009 - 2025 PMAW Technologies, All Rights Reserved</p>
          </div>
        
      </footer>
    )
}

export default FooterSection;