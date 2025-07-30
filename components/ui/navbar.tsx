import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from "next/image";
import ModeToggle from "@/components/toggleTheme";



const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Services', href: '/services', current: false },
  { name: 'About Us', href: '/aboutus', current: false },
  { name: 'Contact Us', href: '/contact', current: false },
]

function classNames(...classes){
    return classes.filter(Boolean).join(' ')
}

function NavBar(){
    return (
        <Disclosure as="nav" className="bg-gray-800" >
        <div className=" w-screen absolute my-5 ml-10 z-50 justify-items-center items-center justify-evenly p-2 mb-50">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className=" absolute -mx-150 -my-5 flex shrink-0 items-center rounded-full p-5 shadow-gray-800 shadow-2xs">
                    {/* <span className="font-bold text-pink-500 text-left text-7xl ">
                    <h1> PMAW </h1>
                    </span>
                    <span className="absolute top-18 left-25 right-0 text-2xl"><h4>Technologies</h4> </span> */}
                    <img 
                        src="/Logo/logo.png"
                        alt="logo"
                        className="w-24"

                    />
                </div>
                {/* <div className=" flex flex-row items-center gap-10 h-[48px] ml-20"> */}
                <div className=''>
                {/* Mobile menu button*/}
                    <DisclosureButton className=" -mx-78 mt-8 group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                        <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                    </DisclosureButton>
                </div>
                 <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                        {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium',
                            )}
                        >
                            {item.name}
                        </a>
                        ))}
                    </div>
                </div>
                <div className="hidden bg-gray-600 rounded-md sm:ml-6 sm:block">
                    

                    <div className="flex space-x-4">
                        {navigation.map((item) => (
                            <a 
                                key={item.name}
                                href={item.href}
                                aria-current={item.current ? 'page' : undefined}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium',
                                )}
                            >
                                {item.name}
                            </a>
                        ))}
                        <ModeToggle />
                    </div>


                    
                </div>
            </div>
        </div>
        </Disclosure>
    )
}

export default NavBar;