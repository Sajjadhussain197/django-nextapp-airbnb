import ContactButton from '@/app/components/ContactButton'
import PropertyList from '@/app/components/properties/PropertyList'
import Image from 'next/image'
import React from 'react'

const LandlordDetailPage = () => {
  return (
    
    <main className="max-w-[1500px] mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <aside className='col-span-1 mb-4 '>
          <div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl">
       
              <Image
            src={'/assets/asset 71.webp'}
            width={200}
            height={200}
            alt='img' 
            className=' rounded-full'
            />
            <h1 className='mt-6 text-2xl'>Landlord Name

            </h1>
            <ContactButton />
          
          </div>
          </aside>
        <div className="col-span-1 md:col-span-3 pl-0 md:pl-16">
        <div className="mt-4 grid grid-cols-1 mg:grid-cols-3 lg:grid-cols-5 gap-6 ">

        <PropertyList />
        </div>
        </div>
      </div>
    </main>
  )
}

export default LandlordDetailPage
