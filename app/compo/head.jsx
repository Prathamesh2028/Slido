import Link from 'next/link'
import React from 'react'

const Head = () => {
  return (
    <header className="fixed top-0 w-full flex items-center justify-between p-4 bg-blue-950 text-white border shadow h-[4%] z-50">
    {/* Logo on the left */}
    <div className="flex items-center space-x-4">
      <h1 className="text-xl font-semibold">Slido</h1>
    </div>

    {/* Right side: Button and Profile Circle */}
    <div className="flex items-center space-x-6">
      {/* Button */}
    

      {/* Profile Circle */}
      <div className="relative">
      
      </div>
    </div>
  </header>
  )
}

export default Head