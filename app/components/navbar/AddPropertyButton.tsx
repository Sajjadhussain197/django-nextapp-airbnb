"use client"
import useAddPropertyModal from "@/app/hooks/usePropertyModal"
import useLoginModal from "@/app/hooks/useLoginModal";
import React from "react";

interface AddPropertyButtonProps{
  userId?: string | null;

}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = (
  {
    userId
  }
) => {
  const loginModal = useLoginModal();
const addPropertyModal = useAddPropertyModal();
  const  Djangoyourhome = ()=>{
    if(userId){

      addPropertyModal.open();
    }
    else{
      console.log(userId)
      loginModal.open();
    }
  }
  return (
    <div className="p-2 text-sm font-semibold rounded-full cursor-pointer hover:bg-gray-200 "
    onClick={Djangoyourhome}>
        Django your home
      
    </div>
  )
}

export default AddPropertyButton
