// app/connect/page.tsx
import { Metadata } from 'next';
import React from 'react';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Services Offered - PMAW Solar Technologies, Bangalore, Karnataka",
    description: " Various serves offered for Solar Powerplant projects in Karnataka."
}

const ContactDetails = [
    {name:"Prasanna", mobile: "987654321", href: "http://wa.me/987654321", faceBook: "https://facebook.com/pmawtechnologies", email:"pmawtechnologies@gmail.com"},
    {name:"Suhail", mobile: "876543210", href: "http://wa.me/876543210", faceBook: "https://facebook.com/suhailahamed", email:"suhailsalva@gmail.com"},
    {name:"Harish", mobile: "765432109", href: "http://wa.me/765432109", faceBook: "https://facebook.com/pharishkumar123", email:"pharishkumar123@gmail.com"},
  ]

const ConnectPage = () => {
  const openExternalLink = (whatsappLink: string | URL | undefined) => {
    // window.open("http://wa.me/"+whatsappLink, '_blank'); // Opens in a new tab
  };
  return (
    <main className="max-w-2xl mx-auto px-2 py-5">
      <h1 className="text-2xl font-bold text-center text-white-700 mb-5">
        Connect With Us
      </h1>
      <p className="text-center text-gray-600 mb-5">
        Reach out through any of the platforms below — we’re always ready to assist you.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-1 justify-center items-center text-white">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            
            <FaWhatsapp size={16} />
        
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            {ContactDetails.map((data)=> (
              <DropdownMenuItem
                key={data.name}
              >
                {data.name}
                <Link
                  key={data.name}
                  href={data.href}
                  target='_blank'
                >
                  {data.mobile}
                </Link>
              </DropdownMenuItem>
            ))}

            {/* <DropdownMenuItem>
              <a
                href="https://wa.me/919986914022"
                target="_blank"
              >
              +91-987654321
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a
                href="https://wa.me/919986914022"
                target="_blank"
              >
              +91-876543210
              </a>
            </DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
        
        {/* <a
          href="https://wa.me/919986914022"
          target="_blank"
          rel="noopener noreferrer"
        //   className="flex flex-col items-center justify-center bg-green-500 hover:bg-green-600 rounded-xl p-4 transition"
        >
          <FaWhatsapp size={16} />
          {/* <span className="mt-2 text-sm">WhatsApp</span> 
        </a> */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild> 
            <FaFacebookF size={16} />
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            {ContactDetails.map((data)=> (
              <DropdownMenuItem
                key={data.name}
              >
                {/* {data.name} */}
                <Link
                  key={data.name}
                  href={data.faceBook}
                  target='_blank'
                >
                  {data.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        {/* <a
          href="https://facebook.com/pmawtechnologies"
          target="_blank"
          rel="noopener noreferrer"
        //   className="flex flex-col items-center justify-center bg-blue-600 hover:bg-blue-700 rounded-xl p-4 transition"
        >
          <FaFacebookF size={16} />
          {/* <span className="mt-2 text-sm">Facebook</span> 
        </a> */}

        <a
          href="https://instagram.com/pmawtechnologies"
          target="_blank"
          rel="noopener noreferrer"
        //   className="flex flex-col items-center justify-center bg-pink-500 hover:bg-pink-600 rounded-xl p-4 transition"
        >
          <FaInstagram size={16} />
          {/* <span className="mt-2 text-sm">Instagram</span> */}
        </a>

        <a
          href="https://linkedin.com/company/pmawtechnologies"
          target="_blank"
          rel="noopener noreferrer"
        //   className="flex flex-col items-center justify-center bg-blue-800 hover:bg-blue-900 rounded-xl p-4 transition"
        >
          <FaLinkedinIn size={16} />
          {/* <span className="mt-2 text-sm">LinkedIn</span> */}
        </a>
        <DropdownMenu>
          <DropdownMenuTrigger asChild> 
            <FaEnvelope size={16} />
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            {ContactDetails.map((data)=> (
              <DropdownMenuItem
                key={data.name}
              >
                {data.name} - 
                <Link
                  key={data.name}
                  href={data.email}
                  target='_blank'
                >
                  {data.email}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        {/* <a
          href="mailto:pmawtechnologies@gmail.com"
        //   className="flex flex-col items-center justify-center bg-gray-700 hover:bg-gray-800 rounded-xl p-4 transition"
        >
          <FaEnvelope size={16} />
          {/* <span className="mt-2 text-sm">Email</span> *
        </a> */}
      </div>
    </main>
  );
};

export default ConnectPage;
