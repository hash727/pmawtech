import ConnectPage from "@/components/connect/page";

function FooterSection(){
    return(
        <footer className="flex flex-1 space-x-4 items-center justify-evenly bg-slate-950 text-shadow-white w-full h-36 p-5">
        <div className="text-white font-semibold text-xs w-full/2">
          {/* <p>
            #515, 2nd Floor, 1st Stage, Bhavani Nagar, 
            Railway Layout, Ullal Road, Bengaluru - 560056 
          </p> */}
          <ConnectPage />
        </div>
        <div className="text-white font-semibold text-xl">
          <p>
            pmawtechnologies@gmail.com
          </p>
          <p>
            suhailsalva@gmail.com
          </p>
          <p>
            pharishkumar123@gmail.com
          </p>
          
        </div>
        
      </footer>
    )
}

export default FooterSection;