import React ,{useContext, useEffect, useState}from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Reclogin = () => {
    const[state,setState] = useState('Login')
    const[name,setName] = useState('')
    const[password,setPassword] = useState('')
    const[email,setEmail] = useState('')
    const[image,setImage] = useState(false)
    const[isTextDataSubmited, setIsTextDataSubmited] = useState(false);
    const {setShowRecruiterLogin}=useContext(AppContext)
    const onSubmitHandler=async(e)=>{
    e.preventDefault();
    if(state==='sign Up'&&!isTextDataSubmited){
        setIsTextDataSubmited(true);
    }}
    useEffect(()=>{
        document.body.style.overflow = 'hidden';
        return ()=>{
            document.body.style.overflow = 'unset';
        }
    },[])
  return (
    <div className='absolute top-0 left-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center w-full h-full'>
     <form onSubmit={onSubmitHandler}className='realtive bg-white p-10 rounded-xl text-slate-500'>
        <h1 className='text-center text-2xl text-neutral-700 font-medium'>recruiter {state}</h1>
        <p className='text-sm'>Welcome back! Please sign in to continue</p>
        {
            state==="sign Up"&&isTextDataSubmited?<>
            <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
                <label htmlFor="image">
                    <img src={image ? URL.createObjectURL(image):assets.upload_area} alt=""/>
                    <input onChange={e=>setImage(e.target.files[0])} type="file" id='image' hidden/>
                </label>
                <p>upload company <br/>logo</p>
            </div>
            </>:
            <>
        {state!=='Login'&&(
            <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
            <img src={assets.person_icon} alt=" "/>
            <input type="text" placeholder='company Name' value ={name} onChange={(e)=>setName(e.target.value)}  required/>
        </div>
        )}
        
        <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
            <img src={assets.email_icon} alt=" "/>
            <input type="email" placeholder='email id' value ={email} onChange={(e)=>setEmail(e.target.value)}  required/>
        </div>
        <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
            <img src={assets.lock_icon} alt=" "/>
            <input type="password" placeholder='password' value ={password} onChange={(e)=>setPassword(e.target.value)}  required/>
        </div>
        {state==='Login'&&<p className='text-sm text-blue-600 my-4 cursor-pointer'>forgot password </p>}
        </>


        }
        
        <button  type='submit'className='bg-blue-600 text-white px-4 py-2 rounded-full w-full mt-6 hover:bg-blue-700 transition-all duration-300'>
            {state==='Login'?'Login':isTextDataSubmited?'create account':'next'}
        </button>
        {
            state==='Login'?
            <p className='mt-5 text-center'>dont have an account?   <span className='text-blue-600 cursor-pointer' onClick={()=>setState("sign Up")}> sign up</span> </p>:
            <p className='mt-5 text-center'>already have an account <span className='text-blue-600 cursor-pointer' onClick={()=>setState("Login")}>login</span></p>

        }
        
        <img  onClick={()=>setShowRecruiterLogin(false)}className='absolute top-5 right-5 cursor-pointer' src={assets.cross_icon} alt=""/>
     </form>
    </div>
  )
}

export default Reclogin
