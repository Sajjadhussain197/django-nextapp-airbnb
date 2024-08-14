import React from 'react'

interface CustomButtonProps{
  label:string;
}
const CustomButton:React.FC<CustomButtonProps> = ({
  label
}) => {
  return (
    <div className='w-full py-4 bg-airbnb hover:bg-airbnbdark text-white cursor-pointer rounded-xl transition text-center lg:w-[100px]'>
      {label}
    </div>
  )
}

export default CustomButton
