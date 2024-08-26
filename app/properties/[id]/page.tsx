import ReservationSidebar from '@/app/components/properties/ReservationSidebar'
import Image from 'next/image'
import React from 'react'
import apiService from '@/app/services/apiService'

const PropertyDetailPage = async (
    {params}:{params:{id:string}}
) => {

    const property = await apiService.get(`/api/properties/${params.id}/`)
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
                    {property.title}
                </h1>
                <span className='mb-6 block text-lg text-gray-600 '>
                {property.guests}guest - {property.bedrooms} bedroom - {property.bathrooms} bathroom
                </span>
                <hr />
                <div className="flex py-6 items-center space-4">
                   {property.landlord.avatar_url  &&
                   (
                    <Image
                    src={property.landlord.avatar}
                    alt='profile pic'
                    width={50}
                    height={50}
                    className='rounded-full'/>
                   )}
                    <p><strong>{property.landlord.name}
                        </strong> is your host</p>
                </div>
                <hr />
                <div className="mt-6 text-lg">
                    kdsf lkdsfds flkds flkds f Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus saepe beatae voluptatum natus perferendis commodi atque amet fugit laborum earum dolores, velit assumenda expedita neque id alias obcaecati nam dolorem!
                </div>
            </div>
            
            <ReservationSidebar
            property={property} />
        </div>
    </main>
  )
}

export default PropertyDetailPage
