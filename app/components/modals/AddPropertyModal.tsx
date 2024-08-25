"use client"
import Modals from './Modals'
import useAddPropertyModal from '@/app/hooks/usePropertyModal'
import LoginModal from './LoginModal'
import CustomButton from '../forms/CustomButton'
import { useState } from 'react'
import Categories from '../addproperty/Categories'



const AddPropertyModal = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const addPropertyModal = useAddPropertyModal();
    const [dataCategory, setDataCategory] = useState('');
    const [dataTitle, setDataTitle] = useState('')
    const [dataDescription, setDataDescription] = useState('')
    const [dataPrice, setDataPrice] = useState('');
    const [dataBedrooms, setDataBedrooms] = useState('');
    const [dataBathrooms, setDataBathrooms] = useState('');
    const [dataGustes, setDataGustes] = useState('')

    

        //
        //set data
        const setCategory = (Category:string)=>{
            setDataCategory(Category)
        }
    const content = (
        <>
        {currentStep === 1 ? (
            <>
            
            <h2 className='mb-6 text-2xl '>Choose Category</h2>
            <Categories
            dataCategory={dataCategory}
            setCategory={(category)=>setCategory(category)}/>
        <CustomButton label='next' onClick={()=>setCurrentStep(2)} />
            </>
        ): currentStep == 2 ?(<>

            <h2 className='mb-6 text-2xl '>Describe your place</h2>
            <div className="pt-3 pb-6 space-y-4">
                <div className="flex flex-col space-y-2">
                    <label htmlFor="">Title</label>
                    <input type="text"
                    value={dataTitle}
                    onChange={(e)=>setDataTitle(e.target.value)}
                    className='w-full p-4 border-gray-600 rounded-xl' />
                </div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="">Description</label>
                    <textarea
                    
                    value={dataDescription}
                    onChange={(e)=>setDataDescription(e.target.value)}
                    className='w-full p-4 border-gray-600 h-[200px] rounded-xl' />
                </div>
            </div>
            <CustomButton label='Previouse' 
            className='mb-2 bg-black hover:bg-gray-800' 
            onClick={()=>setCurrentStep(1)} />
            <CustomButton label='Next' onClick={()=>setCurrentStep(3)} />
        
        </>
        ):(
            <>
            
            <h2 className='mb-6 text-2xl '>Details</h2>
            <div className="pt-3 pb-6 space-y-4">
            <div className="flex flex-col space-y-2">
                    <label htmlFor="">Price Per night</label>
                    <input type="number"
                    value={dataPrice}
                    onChange={(e)=>setDataPrice(e.target.value)}
                    className='w-full p-4 border-gray-600 rounded-xl' />
                </div>
                </div>
              <CustomButton label='Previouse' 
            className='mb-2 bg-black hover:bg-gray-800' 
            onClick={()=>setCurrentStep(1)} />
            <CustomButton label='Next' onClick={()=>setCurrentStep(3)} />
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
            }/>
    </>
  )
}

export default AddPropertyModal
