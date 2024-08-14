import React from 'react'
import PropertyList from '../components/properties/PropertyList'

const MyPropertiesPage = () => {
  return (
    
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
        <h1 className='my-6 text-2xl'>

        my properties
        </h1>
        <div className="mt-4 grid grid-cols-1 mg:grid-cols-3 lg:grid-cols-5 gap-6 ">
      <PropertyList />
      </div>
    </main>
  )
}

export default MyPropertiesPage
