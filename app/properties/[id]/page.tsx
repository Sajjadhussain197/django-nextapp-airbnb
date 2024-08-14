import Image from 'next/image'
import React from 'react'

const PropertyDetailPage = () => {
  return (
    
    <main className="max-w-[1500px] mx-auto px-6">
        <div className="w-full h-[64vh] overflow-hidden rounded-xl relative">
            <Image
            fill
            src='/assets/asset 68.webp'
            alt='img'
            className='h-full w-full object-cover ' />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4 ">
            <div className="col-span-3 py-6 pr-6 bg-red-400">
                <h1 className="mb-4 text-4xl">
                    Property Name
                </h1>
                <span className='mb-6 block text-lg text-gray-600 '></span>
            </div>
            <div>right</div>
        </div>
    </main>
  )
}

export default PropertyDetailPage
