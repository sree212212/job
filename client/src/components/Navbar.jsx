import React ,{useContext}from 'react'
import {assets }from '../assets/assets'
import { useClerk,UserButton,useUser } from '@clerk/clerk-react'
import { Link ,useNavigate} from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
    const {openSignIn}=useClerk()
    const {user}=useUser()
    const navigate=useNavigate()
    const {setShowRecruiterLogin}=useContext(AppContext)

  return (
    <div class='shadow py-4'>
      <div class='container px-4 2xl:px-20 mx-auto flex justify-between items-center'>
        <img onClick={()=>navigate('/')} className='cursor-pointer' src={assets.logo} alt=""/> 
        {
            user? <div class='flex items-center gap-3'>
                <Link to={'/applications'}>applied jobs</Link>
                <p></p>
                <p className='max-sm:hidden'>hi,{user.firstName+" "+user.lastName}</p>
                <UserButton className='h-10 w-10 rounded-full' />
                 </div>:
            <div class='flex gap-4 max-sm:text-xs'>
            <button  onClick={e=>setShowRecruiterLogin(true)}class='text-grey-600'>
Recruiter Login
            </button >
            <button onClick={e=>openSignIn()}class='bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full'>
Login
            </button>
        </div>

        }
        
      </div>
    </div>
  )
}

export default Navbar
