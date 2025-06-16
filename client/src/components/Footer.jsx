import React from 'react'
import {assets }from '../assets/assets'
const Footer = () => {
  return (
    <div className='bg-gray-800 text-white text-center py-8'>
      <img src={assets.logo} alt="" className='w-20 mx-auto my-4' />
      <p>Copyright @GreatStack.dev | All right reserved.</p>
      <div className='flex gap-2.5'>
        <img width={38}src={assets.facebook_icon} alt="" />
        <img width={38}src={assets.twitter_icon} alt="" />
        <img width={38}src={assets.instagram_icon} alt="" />
      </div>
    </div>
  )
}

export default Footer

