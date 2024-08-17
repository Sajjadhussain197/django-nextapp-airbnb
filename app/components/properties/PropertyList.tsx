"use client"
import PropertyListItem from "./PropertyListItem"
import { useEffect, useState } from "react"
import apiService from "@/app/services/apiService"

export type PropertyType= {
      image_url: any
      price_per_night: number
      title: string
      id:string
}


const PropertyList = () => {
  const [properties, setProperties] = useState<PropertyType[]>([])
  const getProperties = async () => {
    const tempProperties= await apiService.get('/api/properties/')
    setProperties(tempProperties.data)
    
  };
  
  useEffect(() => {
    getProperties();
   
 
  }, [])
  
  return (
    <>
    {
      properties.map((property)=>{
        return(

          <PropertyListItem 
            key={property.id}
            property={property} title={""} price_per_night={0} image_url={""}           />
        )
      })
    }
    </>
  )
}

export default PropertyList
