import React from 'react'

interface CustomButtonProps{
  label:string;
  onClick: ()=>void
}
const CustomButton:React.FC<CustomButtonProps> = ({
  label, onClick, 
}) => {
  return (
    <div className='w-full py-4 bg-airbnb hover:bg-airbnbdark text-white cursor-pointer rounded-xl transition text-center lg:w-[100px]'
    onClick={onClick}>
      {label}
    </div>
  )
}

export default CustomButton
