
// import 'dotenv/config'

import { error } from "console"
import { headers } from "next/headers"
import { resolve } from "path"

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
            reject( error);
        })
    })
    
},
post: async function (url: string, data: any): Promise<any> {
    const fullUrl = `${process.env.NEXT_PUBLIC_API_HOST}${url}`;
    console.log(`Full request URL: ${fullUrl}`);

    return new Promise((resolve, reject) => {
        fetch(fullUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(async response => {
            // Attempt to parse as JSON, or return plain text if JSON parsing fails
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                return await response.json();
            } else {
                // Handle non-JSON responses (like HTML error pages)
                const textResponse = await response.text();
                console.error('Non-JSON response received:', textResponse);
                throw new Error(`Unexpected response format: ${textResponse}`);
            }
        })
        .then((json) => {
            console.log('Response:', json);
            resolve(json);
        })
        .catch((error => {
            console.error('Fetch error:', error);
            reject(error);
        }));
    });
}



// post: async function (url: string, data: any): Promise<any> {
//     console.log(process.env.NEXT_PUBLIC_API_HOST,url, data)
//     return new Promise((resolve,reject)=>{
//         fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`,{
//             method: 'POST',
//             body:data
//         })
//         .then(response => response.json())
//         .then((json)=>{
//             console.log('Response:', json )
//             resolve(json)
//         })
//         .catch(error=> {
//             console.error('Fetch error:', error);
//             reject(error);
//         })
//     })
// }
}

export default apiService
