"use client"
import Modals from './Modals'
import LoginModal from './LoginModal'
import CustomButton from '../forms/CustomButton'
import { ChangeEvent, useState } from 'react'
import Categories from '../addproperty/Categories'
import Selectcountry, { SelectcountryValue } from '../forms/Selectcountry'
import useAddPropertyModal from '@/app/hooks/usePropertyModal'
import Image from 'next/image'
import apiService from '@/app/services/apiService'
import { useRouter } from 'next/navigation'
import { cookies } from 'next/headers'




const AddPropertyModal = () => {
    //modal
    const addPropertyModal = useAddPropertyModal();
    //Router
    const router =useRouter()
    //useStates
    const [currentStep, setCurrentStep] = useState(1);
    const [dataCategory, setDataCategory] = useState('');
    const [dataTitle, setDataTitle] = useState('')
    const [dataDescription, setDataDescription] = useState('')
    const [dataPrice, setDataPrice] = useState('');
    const [dataBedrooms, setDataBedrooms] = useState('');
    const [dataBathrooms, setDataBathrooms] = useState('');
    const [dataGustes, setDataGustes] = useState('')
    const [dataImage, setDataImage] = useState<File | null>(null)
    const [dataCountry, setDataCountry] = useState<SelectcountryValue>()
    
    const [errors, setErrors] = useState<string[]>([])



    //
    //set data
    const setCategory = (Category: string) => {
        setDataCategory(Category)
    }
    const setImage =(e:ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files && e.target.files.length >0){
            const tempimg = e.target.files[0];
            setDataImage(tempimg)
        }

    }
    const submitForm = async ()=>{
        console.log('submit form')
        if(dataTitle && dataDescription && dataPrice && dataCountry && dataImage && dataCategory){
            const formData = new FormData()
            formData.append('title',dataTitle);
            formData.append('description',dataDescription);
            formData.append('price_per_night',dataPrice);
            formData.append('country',dataCountry.label);
            formData.append('image',dataImage);
            formData.append('bedrooms',dataBedrooms);
            formData.append('category',dataCategory);
            formData.append('bathrooms',dataBathrooms);
            formData.append('guests',dataGustes);
            formData.append('country_code',dataCountry.value);
            const response = await apiService.post('/api/properties/create/',formData)
            if(response.success ){
                console.log('SUCCESS :-D')
                router.push('/')
                addPropertyModal.close();
            }
            else{
                console.log("error")
                const temperr : string[] = Object.values(response).map((error:any)=>{
                    return error;
                })
                setErrors(temperr)
            }
                
        }

    }
    const content = (
        <>
            {currentStep === 1 ? (
                <>

                    <h2 className='mb-6 text-2xl '>Choose Category</h2>
                    <Categories
                        dataCategory={dataCategory}
                        setCategory={(category) => setCategory(category)} />
                    <CustomButton label='next' onClick={() => setCurrentStep(2)} />
                </>
            ) : currentStep == 2 ? (
            <>

                <h2 className='mb-6 text-2xl '>Describe your place</h2>
                <div className="pt-3 pb-6 space-y-4">
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="">Title</label>
                        <input type="text"
                            value={dataTitle}
                            onChange={(e) => setDataTitle(e.target.value)}
                            className='w-full p-4 border-gray-600 rounded-xl' />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="">Description</label>
                        <textarea

                            value={dataDescription}
                            onChange={(e) => setDataDescription(e.target.value)}
                            className='w-full p-4 border-gray-600 h-[200px] rounded-xl' />
                    </div>
                </div>
                <CustomButton label='Previouse'
                    className='mb-2 bg-black hover:bg-gray-800'
                    onClick={() => setCurrentStep(1)} />
                <CustomButton label='Next' onClick={() => setCurrentStep(3)} />

            </>
            ) :currentStep == 3 ? (
                <>

                    <h2 className='mb-6 text-2xl '>Details</h2>
                    <div className="pt-3 pb-6 space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="">Price Per night</label>
                            <input type="number"
                                value={dataPrice}
                                onChange={(e) => setDataPrice(e.target.value)}
                                className='w-full p-4 border-gray-600 rounded-xl' />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="">Bedrooms</label>
                            <input type="number"
                                value={dataBedrooms}
                                onChange={(e) => setDataBedrooms(e.target.value)}
                                className='w-full p-4 border-gray-600 rounded-xl' />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="">Bathrooms</label>
                            <input type="number"
                                value={dataBathrooms}
                                onChange={(e) => setDataBathrooms(e.target.value)}
                                className='w-full p-4 border-gray-600 rounded-xl' />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="">Maximun number of guests</label>
                            <input type="number"
                                value={dataGustes}
                                onChange={(e) => setDataGustes(e.target.value)}
                                className='w-full p-4 border-gray-600 rounded-xl' />
                        </div>
                    </div>
                    <CustomButton label='Previouse'
                        className='mb-2 bg-black hover:bg-gray-800'
                        onClick={() => setCurrentStep(2)} />
                    <CustomButton label='Next' onClick={() => setCurrentStep(4)} />
                </>
            ): currentStep == 4 ? (<>
            <h2 className='mb-6 text-2xl '>Location</h2>
            <div className="pt-3 pb-6 space-y-4">
                <Selectcountry
                vlaue={dataCountry}
                onChange={(value)=>setDataCountry(value as SelectcountryValue)}/>
                </div>
            <CustomButton label='Previouse'
                        className='mb-2 bg-black hover:bg-gray-800'
                        onClick={() => setCurrentStep(3)} />
                    <CustomButton label='Next' onClick={() => setCurrentStep(5)} />
            </>):(
                <>
                 <h2 className='mb-6 text-2xl '>Image</h2>
                 <div className="pt-3 pb-6 space-y-4">
                    <div className="py-4 px-6 bg-gray-400 text-white rounded-xl">
                        <input type="file"
                        accept='image/*'
                        onChange={setImage} />
                    </div>
                    {dataImage && (
                        <div className="w-[200px] h-[150px] relative">
                            <Image
                            fill
                            alt='uploaded image'
                            src={URL.createObjectURL(dataImage)}
                            className='w-full h-full object-cover rounded-xl'
                             />
                        </div>
                    )}
                    </div>
                    {
                        errors.map((error,index)=>{
                            return(
                                <div
                                key={index}
                                className='p-5 mb-4 bg-airbnb text-white rounded-xl opacity-80'>
                                            {error}
                                </div>
                            )
                        })
                    
                    }
                    <CustomButton label='Previouse'
                        className='mb-2 bg-black hover:bg-gray-800'
                        onClick={() => setCurrentStep(4)} />
                    <CustomButton label='Submit' onClick={submitForm} />
                </>
               
            )}

        </>
    )
    return (
        <>
            <Modals isOpen={addPropertyModal.isOpen}
                close={addPropertyModal.close}
                label='Add Property'
                content={content
                } />
        </>
    )
}

export default AddPropertyModal
