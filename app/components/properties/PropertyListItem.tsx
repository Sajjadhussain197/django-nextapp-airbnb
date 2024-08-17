import Image from 'next/image'
import React from 'react'
import { PropertyType } from './PropertyList'

interface PropertyProps{
    property: PropertyType
    title:string;
    price_per_night: number;
    image_url:string;
}

const PropertyListItem:React.FC<PropertyProps> = ({
    property
 }
) => {
    return (
        <div className='cursor-pointer'>
            <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image
                    fill
                    src={property.image_url ? property.image_url: '/assets/asset 68.webp'}
                    sizes="(max-width: 768px) 768px , (max-width: 1200px): 768px, 768px "
                    className="hover:scale-110 object-cover transition h-full w-full"
                    alt="image"

                />


            </div>
            <div className="mt-2">
                <p className='text-lg font-bold '>{property.title} </p>
            </div>
            <div className="mt-2">
                <p className="text-sm text-gray-500"><strong>${property.price_per_night}</strong> per night </p>
            </div>

        </div>
    )
}

export default PropertyListItem
