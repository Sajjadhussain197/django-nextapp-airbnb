"use client"
import { useRouter } from "next/navigation"
import MenuLinks from "./navbar/MenuLinks"
import { resetAuthCookies } from "../lib/actions"

const LogoutButton: React.FC = () => {
    const rotuer = useRouter()

    const submitLogout = async ()=>{
        resetAuthCookies();

        rotuer.push('/')
    }
  return (
    <MenuLinks 
    label="Log out"
    onClick={submitLogout}/>
  )
}

export default LogoutButton
