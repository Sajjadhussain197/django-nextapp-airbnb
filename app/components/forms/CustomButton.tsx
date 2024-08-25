import React from 'react'

interface CustomButtonProps {
  label: string;
  onClick: () => void;
  className?: string; // Optional className prop
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label, onClick, className,
}) => {
  return (
    <div 
      className={`w-full py-4 bg-airbnb hover:bg-airbnbdark text-white cursor-pointer rounded-xl transition text-center lg:w-[100px] ${className}`} 
      onClick={onClick}
    >
      {label}
    </div>
  );
}

export default CustomButton;
