"use client"
import useCountries from '@/app/hooks/useCountries';
// import useCountries from '@/app/hooks/useCountries';
import Select from 'react-select'

export type SelectcountryValue ={
    label:string;
    value:string;
}

interface SelectcountryProps{
    vlaue?: SelectcountryValue;
    onChange:(value:SelectcountryValue)=>void;
}
const Selectcountry: React.FC<SelectcountryProps> = (
    {
        vlaue, onChange,
    }
) => {
    const {getAll} = useCountries();
  return (
    <>
    <Select
    isClearable
    placeholder='Anywhere'
    options={getAll()}
    value={vlaue}
    onChange={(vlaue)=>onChange(vlaue as SelectcountryValue)}/>
    </>
  )
}

export default Selectcountry
