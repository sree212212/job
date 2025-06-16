import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Dashboard = () => {
  const navigate = useNavigate()

  return (
    <div className='min-h-screen'>
      {/* Navbar for recruiter panel */}
      <div className='shadow py-4'>
        <div className='px-5 flex justify-between items-center'>
          <img
            onClick={() => navigate('/')}
            className='max-sm:w-32 cursor-pointer'
            src={assets.logo}
            alt=""
          />
          <div className='flex items-center gap-4'>
            <p className='max-sm:hidden'>Welcome</p>
            <div className='relative group'>
              <img
                className='w-8 border rounded-full'
                src={assets.company_icon}
                alt=""
              />
              <div className='absolute top-10 right-0 bg-white shadow-lg rounded hidden group-hover:block'>
                <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                  <li className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main layout: Sidebar + Content side-by-side */}
      <div className='flex'>
        {/* Sidebar */}
        <div className='min-h-screen border-r-2'>
          <ul className='flex flex-col items-start pt-5 text-gray-800'>
            <NavLink
              to='/dashboard/add-job'
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
                  isActive && 'bg-blue-100 border-r-4 border-blue-500'
                }`
              }
            >
              <img src={assets.add_icon} alt="" />
              <p className='max-sm:hidden'>Add Job</p>
            </NavLink>
            <NavLink
              to='/dashboard/manage-jobs'
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
                  isActive && 'bg-blue-100 border-r-4 border-blue-500'
                }`
              }
            >
              <img src={assets.home_icon} alt="" />
              <p className='max-sm:hidden'>Manage Jobs</p>
            </NavLink>
            <NavLink
              to='/dashboard/view-applications'
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
                  isActive && 'bg-blue-100 border-r-4 border-blue-500'
                }`
              }
            >
              <img src={assets.person_tick_icon} alt="" />
              <p className='max-sm:hidden'>View Applications</p>
            </NavLink>
          </ul>
        </div>

        {/* Outlet - renders the child component beside the sidebar */}
        <div className='flex-1 p-6'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
