"use server"

import { cookies } from "next/headers"
import { useId } from "react"

export async function handleLogin(userId:string, accessToke: string, refreshToken: string) {
    console.log(useId)

    cookies().set('session_userid', userId,
        {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge:60*60*24*7, //one week
            path:'/' 

        }
    )
    cookies().set('session_access_token', accessToke,
        {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge:60*60, //60 minute
            path:'/' 

        }
    )
    cookies().set('session_refresh_token', refreshToken,
        {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge:60*60*24*7, //one week
            path:'/' 


        }
    )
    const Id = cookies().get('session_userid')?.value;
    console.log(Id, 'chk')
}

export async function resetAuthCookies() {
    cookies().set('session_userid','');
    cookies().set('session_access_token','');
    cookies().set('refersh_token', '')

}

export async function getUserId(){
    const userId = cookies().get('session_userid')?.value;
    return userId ? userId : null
    console.log('bla bla ', userId)
}