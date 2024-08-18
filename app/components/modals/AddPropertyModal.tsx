"use client"
import Modals from './Modals'
import useAddPropertyModal from '@/app/hooks/usePropertyModal'
import LoginModal from './LoginModal'
import CustomButton from '../forms/CustomButton'
import { useState } from 'react'



const AddPropertyModal = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const addPropertyModal = useAddPropertyModal();
    

    const content = (
        <>
        {currentStep === 1 ? (
            <><h2>Choose Category</h2>
        <CustomButton label='next' onClick={()=>setCurrentStep(2)} />
            </>
        ):(
            <p>step 2</p>
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
