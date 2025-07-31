import React from 'react'
import ContactForm from '@/components/contactForm';

function contactUs() {
  return (
    <div className='p-5 md:p-10 lg:p-20 bg-gray-800'>
      <main className="w-full mx-auto px-4 py-12 bg-gray-300 dark:bg-gray-950">
        <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-gray-300 mb-4">Contact Us</h1>
        <p className=" text-2xl md:lg:text-xl text-center text-gray-700 dark:text-gray-400 mb-10">
          We&apos;d love to hear from you. Reach out to us for any solar project inquiries, quotes, or feedback.
        </p>

        <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white shadow-md rounded-lg p-6">
          <ContactForm />
        </div>
        {/* Google Map */}
        <div className="rounded-lg py-10 overflow-hidden shadow-md h-[400px]">
          {/* <iframe
            title="Our Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1749972034233!2d78.48667357497926!3d17.439192301878547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9761a3875c01%3A0x71e6c380e582cf49!2sSolar%20Company%20XYZ!5e0!3m2!1sen!2sin!4v1692134567890!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full"
          ></iframe> */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.320759614072!2d77.49051767484495!3d12.951315115323188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ea504cf17f9%3A0x63b45afab3ab218c!2sUllal%20Main%20Rd%2C%20Jnana%20Ganga%20Nagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1753792711919!5m2!1sen!2sin" 
            width="100%" 
            height="100%"
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full"
            ></iframe>
          {/* Overlay Pin or Logo */}
          <div className="absolute transform -translate-x-1/2 -translate-y-[85%] z-10">
            <img
              src="/Logo/logo.png" // replace with your pin or logo image
              alt="pb=!1m18!1m12!1m3!1d3806.1749972034233!2d78.48667357497926!3d17.439192301878547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9761a3875c01%3A0x71e6c380e582cf49!2sSolar%20Company%20XYZ!5e0!3m2!1sen!2sin!4v1692134567890!5m2!1sen!2sin"
              className="w-12 h-12 drop-shadow-lg"
            />
        </div>
        </div>
      </main>
    </div>
  )
}

export default contactUs
