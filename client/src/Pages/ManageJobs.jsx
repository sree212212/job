import React from 'react'
import { manageJobsData } from '../assets/assets'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
const ManageJobs = () => {
  const navigate=useNavigate()
  return (
    <div className='container max-w-5xl p-4'>
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white border border-gray-200 max-sm:text-sm'>
          <thead>
            <tr>
              <th className='py-2 px-4 border-b text-left max-sm:hidden'>#</th>
              <th className='py-2 px-4 border-b text-left'>job title</th>
              <th className='py-2 px-4 border-b text-left  max-sm:hidden'>date</th>
              <th className='py-2 px-4 border-b text-left  max-sm:hidden'>location</th>
              <th className='py-2 px-4 border-b text-center'>applicants</th>
              <th className='py-2 px-4 border-b text-left'>visible</th>
            </tr>
          </thead>
          <tbody>
            {manageJobsData.map((job,index)=>(
              <tr key={index} className='text-gray-700 '>
<td className='py-2 px-4 border-b max-sm:hidden'>{index+1}</td>
<td className='py-2 px-4 border-b'>{job.title}</td>
<td className='py-2 px-4 border-b max-sm:hidden'>{moment(job.date).format('ll')}</td>
<td className='py-2 px-4 border-b max-sm:hidden'>{job.location}</td>
<td className='py-2 px-4 border-b text-center'>{job.applicants}</td>
<td className='py-2 px-4 border-b'>
  <input className='scale-125 ml4 'type="checkbox" />
</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='flex justify-end mt-4'>
        <button onClick={()=>navigate('/dashboard/add-job')} className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors'> 
          add new job
        </button>
      </div>
    </div>
  )
}

export default ManageJobs
