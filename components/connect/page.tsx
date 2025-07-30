// app/connect/page.tsx
import React from 'react';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const ConnectPage = () => {
  return (
    <main className="max-w-2xl mx-auto px-2 py-5">
      <h1 className="text-2xl font-bold text-center text-white-700 mb-5">
        Connect With Us
      </h1>
      <p className="text-center text-gray-600 mb-5">
        Reach out through any of the platforms below — we’re always ready to assist you.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-1 justify-center items-center text-white">
        <a
          href="https://wa.me/919986914022"
          target="_blank"
          rel="noopener noreferrer"
        //   className="flex flex-col items-center justify-center bg-green-500 hover:bg-green-600 rounded-xl p-4 transition"
        >
          <FaWhatsapp size={16} />
          {/* <span className="mt-2 text-sm">WhatsApp</span> */}
        </a>

        <a
          href="https://facebook.com/pmawtechnologies"
          target="_blank"
          rel="noopener noreferrer"
        //   className="flex flex-col items-center justify-center bg-blue-600 hover:bg-blue-700 rounded-xl p-4 transition"
        >
          <FaFacebookF size={16} />
          {/* <span className="mt-2 text-sm">Facebook</span> */}
        </a>

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

        <a
          href="mailto:pmawtechnologies@gmail.com"
        //   className="flex flex-col items-center justify-center bg-gray-700 hover:bg-gray-800 rounded-xl p-4 transition"
        >
          <FaEnvelope size={16} />
          {/* <span className="mt-2 text-sm">Email</span> */}
        </a>
      </div>
    </main>
  );
};

export default ConnectPage;
