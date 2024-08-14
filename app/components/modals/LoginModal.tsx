"use client"
import useLoginModal from '@/app/hooks/useLoginModal'
import React from 'react'
import Modals from './Modals';
import CustomButton from '../forms/CustomButton';


const LoginModal = () => {
    const loginModal = useLoginModal();
    const content = (
        <>
        {/* <h2 className="mb-6 text-2xl">
            welcom djangoairbnb , please login
        </h2> */}

        <form action="" className='space-y-4'>
            <input placeholder='your email address ' type="email"  className='w-full px-4 h-[54px] border border-gray=100 rounded-xl'/>
            <input placeholder='your password ' type="password"  className='w-full px-4 h-[54px] border border-gray=100 rounded-xl'/>
            <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                the error message  
            </div>
            <CustomButton label="Submit" />


        </form>
        </>
    )
  return (
    <Modals isOpen={loginModal.isOpen}
    close={loginModal.close}
    label='Login '
    content={content} />
  )
}

export default LoginModal
