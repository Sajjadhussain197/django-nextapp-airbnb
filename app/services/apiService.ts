
// import 'dotenv/config'

import { error } from "console"

const apiService = {
get: async function (url: string): Promise<any> {
    console.log(process.env.NEXT_PUBLIC_API_HOST,url)
    return new Promise((resolve,reject)=>{
        fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`,{
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then((json)=>{
            console.log('Response:', json )
            resolve(json)
        })
        .catch(error=> {
            reject('error', error);
        })
    })
    
},
post: async function(url: string,data:any): Promise<any>{

    console.log('post', url, data)
}
}

export default apiService
