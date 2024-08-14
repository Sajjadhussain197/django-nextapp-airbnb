
const SearchFilters = () => {
  return (
    <div className="h-[48px] lg:h-[64px] flex flex-row items-center justify-between border rounded-full">
        <div className="hidden lg:block">
            <div className="flex flex-row items-center justify-between">
                <div className="cursor-pointer w-[250px] h-[48px] lg:h-[64px] flex flex-col px-8 justify-center rounded-full hover:bg-gray-100">
                    <p className="text-sx font-semibold">Where</p>
                    <p className="text-sm">Wanted location</p>
                </div>
                <div className="cursor-pointer  h-[48px] lg:h-[64px] flex flex-col px-8 justify-center rounded-full hover:bg-gray-100">
                    <p className="text-sx font-semibold">Check in</p>
                    <p className="text-sm">Add dates</p>
                </div>
                <div className="cursor-pointer h-[48px] lg:h-[64px] flex flex-col px-8 justify-center rounded-full hover:bg-gray-100">
                    <p className="text-sx font-semibold">Check out</p>
                    <p className="text-sm">Add dates </p>
                </div>
                <div className="cursor-pointer  h-[48px] lg:h-[64px] flex flex-col px-8 justify-center rounded-full hover:bg-gray-100">
                    <p className="text-sx font-semibold">Who</p>
                    <p className="text-sm">Add guest </p>
                </div>
               
            </div>
        </div>
        <div className="p-2">
            <div className="p-2 lg:p-4 cursor-pointer bg-airbnb hover:bg-airbnbdark rounded-full text-white">
            <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 32 32" aria-hidden="true" 
            role="presentation" focusable="false" 
            style={{ display: "block", fill: "none", height:" 16px", width: "16px", stroke: "currentcolor", strokeWidth: 4, overflow: "visible" }}>
                <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path></svg>
            </div>
        </div>
    </div>
  )
}

export default SearchFilters
