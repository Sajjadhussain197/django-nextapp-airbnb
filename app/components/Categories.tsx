import Image from "next/image"

const Categories = () => {
  return (
    <div className="pt-3 cursor-pointer pb-6 flex items-center sapce-x-12 ">
        
        <div className="pb-4 flex flex-col items-center opacity-70 space-y-2 mx-3 border-b-2 border-white hover:border-gray-200 hover:opacity-100">
            <Image
            height={24}
            width={24}
            alt="icon"
            src={'/assets/asset 6.webp'} />
            <span className="text-xs">Icon</span>
        </div>
        <div className="pb-4 flex flex-col items-center opacity-70 space-y-2 mx-3 border-b-2 border-white hover:border-gray-200 hover:opacity-100">
            <Image
            height={24}
            width={24}
            alt="icon"
            src={'/assets/asset 6.webp'} />
            <span className="text-xs">Amazing views</span>
        </div>
        <div className="pb-4 flex flex-col items-center opacity-70 space-y-2 mx-3 border-b-2 border-white hover:border-gray-200 hover:opacity-100">
            <Image
            height={24}
            width={24}
            alt="icon"
            src={'/assets/asset 6.webp'} />
            <span className="text-xs">Rooms</span>
        </div>
        

        
    </div>
  )
}

export default Categories
