"use client"
import useLoginModal from '@/app/hooks/useLoginModal'
import React, { useState } from 'react'
import Modals from './Modals';
import CustomButton from '../forms/CustomButton';
import { useRouter } from 'next/navigation';
import apiService from '@/app/services/apiService';
import { handleLogin } from '@/app/lib/actions';


const LoginModal = () => {
    const loginModal = useLoginModal();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState<string[]>([])
    const router = useRouter()
    const submitLogin = async ()=>{
        const formData = {
            email: email,
            password:password
        }

        const response = await apiService.post('/api/auth/login/',formData);
        
        if (response.access) {
            // Handle login
            handleLogin(response.user.pk, response.access, response.refresh)
            loginModal.close();
            router.push('/')
        } else {
            
            setErrors(response.non_find_errors);
        }



    }
    const content = (
        <>
        {/* <h2 className="mb-6 text-2xl">
            welcom djangoairbnb , please login
        </h2> */}

        <form action={submitLogin} className='space-y-4'>
            <input onChange={(e)=>setEmail(e.target.value)} placeholder='your email address ' type="email"  className='w-full px-4 h-[54px] border border-gray=100 rounded-xl'/>
            <input onChange={(e)=>setPassword(e.target.value)}placeholder='your password ' type="password"  className='w-full px-4 h-[54px] border border-gray=100 rounded-xl'/>
            {errors.map((error, index) => (
                    <div className="p-5 bg-airbnb text-white rounded-xl opacity-80" key={`error_${index}`}>
                        {error}
                    </div>
                ))}
            <CustomButton label="Submit" onClick={submitLogin}/>


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
