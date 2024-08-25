"use client"
import React, { useState } from 'react'
import Modals from './Modals';
import CustomButton from '../forms/CustomButton';
import useSignupModal from '@/app/hooks/useSignUpModal';
import { useRouter } from 'next/navigation';
import apiService from '@/app/services/apiService';
import { handleLogin } from '@/app/lib/actions';

const SignUpModal = () => {
    const signupModal = useSignupModal();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState<string[]>([]);
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('')

    const submitSignup = async (event: React.FormEvent) => {
        event.preventDefault(); // Prevent the default form submission
        const formData = {
            email: email,
            password1: password1,
            password2: password2,
        }

        try {
            const response = await apiService.postWithoutToken('/api/auth/register/', formData);
            console.log('Response from /api/auth/register:', response);

            if (response.access) {
                // Handle login
                handleLogin(response.user.pk, response.access, response.refresh)
                signupModal.close();
                router.push('/')
            } else {
                const tempErr: string[] = Object.values(response).map((error: any) => {
                    return error;
                });
                setErrors(tempErr);
            }
        } catch (error) {
            console.error('Signup error:', error);
        }
    }

    const content = (
        <>
            <form onSubmit={submitSignup} className='space-y-4'>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Your email address'
                    type="email"
                    className='w-full px-4 h-[54px] border border-gray-100 rounded-xl'
                />
                <input
                    onChange={e => setPassword1(e.target.value)}
                    placeholder='Your password'
                    type="password"
                    className='w-full px-4 h-[54px] border border-gray-100 rounded-xl'
                />
                <input
                    onChange={e => setPassword2(e.target.value)}
                    placeholder='Repeat password'
                    type="password"
                    className='w-full px-4 h-[54px] border border-gray-100 rounded-xl'
                />
                {errors.map((error, index) => (
                    <div className="p-5 bg-airbnb text-white rounded-xl opacity-80" key={`error_${index}`}>
                        {error}
                    </div>
                ))}
                <CustomButton label="Submit" onClick={submitSignup}  />
            </form>
        </>
    )

    return (
        <Modals
            isOpen={signupModal.isOpen}
            close={signupModal.close}
            label='Signup'
            content={content}
        />
    )
}

export default SignUpModal

// "use client"
// import React, { useState } from 'react'
// import Modals from './Modals';
// import CustomButton from '../forms/CustomButton';
// import useSignupModal from '@/app/hooks/useSignUpModal';
// import { useRouter } from 'next/navigation';
// import apiService from '@/app/services/apiService';


// const SignUpModal = () => {
//     const signupModal = useSignupModal();
//     const router = useRouter();
//     const [email, setEmail] = useState('');
//     const [errors, setErrors] = useState<string[]>([]);
//     const [password1, setPassword1] = useState('');
//     const [password2, setPassword2] = useState('')

//     const submitSignup = async ()=>{
//         const formData = {
//             email:email,
//             password1:password1,
//             password2:password2,

//         }
//         const response = await apiService.post('/api/auth/register', formData);

//         console.log('Response from /api/auth/register:', response);
        
        
//         if(response.access){
//             //handle login
//             signupModal.close();
//             router.push('/')
//         }
//         else{
//             const tempErr: string[] = Object.values(response).map((error:any)=>{
//                     return error;
//             })
//             setErrors(tempErr)
//         }
//     }
//     const content = (
//         <>
//         {/* <h2 className="mb-6 text-2xl">
//             welcom djangoairbnb , please login
//         </h2> */}

//         <form action={submitSignup} className='space-y-4'>
//             <input onChange={(e)=>setEmail(e.target.value)} placeholder='your email address ' type="email"  className='w-full px-4 h-[54px] border border-gray=100 rounded-xl'/>
//             <input onChange={e=>setPassword1(e.target.value)} placeholder='your password ' type="password"  className='w-full px-4 h-[54px] border border-gray=100 rounded-xl'/>
//             <input onChange={e=>setPassword2(e.target.value)} placeholder='repeat password ' type="password"  className='w-full px-4 h-[54px] border border-gray=100 rounded-xl'/>
//            {
//             errors.map((error, index)=>{
//                 return(
//                     <div className="p-5 bg-airbnb text-white rounded-xl opacity-80"
//                     key={`error_${index}`}>
//                    {
//                     errors
//                    } 
//                 </div>
//                 )
//             })
//            }
           
//             <CustomButton onClick={submitSignup} label="Submit"  />


//         </form>
//         </>
//     )
//   return (
//     <Modals isOpen={signupModal.isOpen}
//     close={signupModal.close}
//     label='Signup '
//     content={content} />
//   )
// }

// export default SignUpModal
