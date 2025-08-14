import Image from 'next/image'
import React from 'react'

function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Image
        src="/images/LoadingDotsBlue.gif" // Path to your GIF in the public folder
        alt="Loading animation"
        width={100} // Adjust width as needed
        height={100} // Adjust height as needed
        unoptimized={true} // Avoid Next.js image optimization for GIFs
      />
      <p className="mt-4 text-gray-700">Loading content...</p>
    </div>
  )
}

export default LoadingPage
