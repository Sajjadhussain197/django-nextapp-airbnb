import Image from 'next/image'
import React from 'react'

const MyReservationsPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
        
            <h1 className='my-6 mb-2 text-2xl'>
                My Reservations
            </h1>
            <div className=''>
                <div className="p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 border border-gray-300 shadow-md rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                            fill
                            src={'/assets/asset 68.webp'}
                            alt='reservation pic'
                            className='hover:scale-110 object-cover transition h-full w-full' />
                        </div>
                    </div>
                    <div className="col-span-3 space-y-2">
                        <h2 className="mb-4 text-xl">property name</h2>
                        <p><strong>Check in date:</strong> 24/2/2024</p>
                        <p><strong>Check out date:</strong> 24/2/2024</p>
                        <p><strong>Number of nights:</strong> 2</p>
                        <p><strong>Total Price :</strong> $200</p>
                    </div>
                </div>
                <div className="p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 border border-gray-300 shadow-md rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                            fill
                            src={'/assets/asset 68.webp'}
                            alt='reservation pic'
                            className='hover:scale-110 object-cover transition h-full w-full' />
                        </div>
                    </div>
                    <div className="col-span-3 space-y-4">
                        <h2 className="mb-4 text-xl">property name</h2>
                        <p className='mb-2'><strong>Check in date:</strong> 24/2/2024</p>
                        <p className='mb-2'><strong>Check out date:</strong> 24/2/2024</p>
                        <p className='mb-2'><strong>Number of nights:</strong> 2</p>
                        <p className='mb-2'><strong>Total Price :</strong> $200</p>
                        <div className="mt-6 inline-block cursor-pointer bg-airbnb py-4 px-6 text-white rounded-xl text-lg">Go to property</div>
                    </div>
                </div>
            </div>
    </main>
  )
}

export default MyReservationsPage
