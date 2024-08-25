import Image from "next/image";

interface CategoryProps {
    dataCategory:string;
    setCategory: (category: string)=>void;

}
const Categories: React.FC<CategoryProps> = ({
    dataCategory,setCategory
}) => {
  return (
    <>
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
    <div
    onClick={()=>setCategory('Beach') }
    className={`pb-4 flex flex-col items-center opacity-70 space-y-2 mx-3 border-b-2 ${dataCategory === 'Beach'? 'border-gray-800' : 'border-white'}  hover:border-gray-200 hover:opacity-100`}>
            <Image
            height={24}
            width={24}
            alt="icon"
            src={'/assets/asset 6.webp'} />
            <span className="text-xs">Beach</span>
        </div>
        <div 
         onClick={()=>setCategory('Villas') }
        className="pb-4 flex flex-col items-center opacity-70 space-y-2 mx-3 border-b-2 border-white hover:border-gray-200 hover:opacity-100">
            <Image
            height={24}
            width={24}
            alt="icon"
            src={'/assets/asset 6.webp'} />
            <span className="text-xs">Villas</span>
        </div>
        <div 
         onClick={()=>setCategory('Tiny Homes') }
        className="pb-4 flex flex-col items-center opacity-70 space-y-2 mx-3 border-b-2 border-white hover:border-gray-200 hover:opacity-100">
            <Image
            height={24}
            width={24}
            alt="icon"
            src={'/assets/asset 6.webp'} />
            <span className="text-xs">Tiny Homes</span>
        </div>
    </div>
    </>
  )
}

export default Categories
