import ReservationSidebar from '@/app/components/properties/ReservationSidebar'
import Image from 'next/image'
import React from 'react'

const PropertyDetailPage = () => {
  return (
    
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
        <div className="w-full mb-4 h-[64vh] overflow-hidden rounded-xl relative">
            <Image
            fill
            src='/assets/asset 68.webp'
            alt='img'
            className='h-full w-full object-cover ' />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4 ">
            <div className="col-span-3 py-6 pr-6 ">
                <h1 className="mb-4 text-4xl">
                    Property Name
                </h1>
                <span className='mb-6 block text-lg text-gray-600 '>
                    4-guest - 2 bedroom - 1 bathroom
                </span>
                <hr />
                <div className="flex py-6 items-center space-4">
                    <Image
                    src='/assets/asset 71.webp'
                    alt='profile pic'
                    width={50}
                    height={50}
                    className='rounded-full'/>
                    <p><strong>Jonh Doe</strong> is your host</p>
                </div>
                <hr />
                <div className="mt-6 text-lg">
                    kdsf lkdsfds flkds flkds f Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus saepe beatae voluptatum natus perferendis commodi atque amet fugit laborum earum dolores, velit assumenda expedita neque id alias obcaecati nam dolorem!
                </div>
            </div>
            
            <ReservationSidebar />
        </div>
    </main>
  )
}

export default PropertyDetailPage
