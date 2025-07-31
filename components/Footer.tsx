import ConnectPage from "@/components/connect/page";

function FooterSection(){
    return(
        <footer className="flex flex-col md:lg:flex-row my-5 items-center justify-evenly bg-slate-950 text-shadow-white w-full h-36 p-5">
          <div className="text-white font-semibold text-xs w-full/2">
            {/* <p>
              #515, 2nd Floor, 1st Stage, Bhavani Nagar, 
              Railway Layout, Ullal Road, Bengaluru - 560056 
            </p> */}
            <ConnectPage />
          </div>
          <div className="text-white font-semibold text-xl md:lg:text-2xl">
            <ul className="list-disc">
              <li>
                pmawtechnologies@gmail.com
              </li>
              <li>
                suhailsalva@gmail.com
              </li>
              <li>
                pharishkumar123@gmail.com
              </li>
            </ul>
          </div>
        
      </footer>
    )
}

export default FooterSection;