"use client"
import React from 'react'
import Modals from './Modals'
import useAddPropertyModal from '@/app/hooks/usePropertyModal'
import LoginModal from './LoginModal'

const AddPropertyModal = () => {
    const addPropertyModal = useAddPropertyModal();
  return (
    <>
    <Modals isOpen={addPropertyModal.isOpen}
            close={addPropertyModal.close}
            label='Add Property'
            content={
                <p>yo</p>
            }/>
    </>
  )
}

export default AddPropertyModal
