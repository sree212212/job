import React,{useState,useRef, useEffect} from 'react'
import Quill from 'quill'
import { assets, JobCategories, JobLocations } from '../assets/assets'
const AddJob = () => {
    const[title, setTitle] =useState('')
    const[location, setLocation] =useState('Bangalore')
    const[category, setCategory] =useState('Programming')
    const[level, setLevel] =useState('Beginner level')
    const[salary, setSalary] =useState(0)
    const editorRef= useRef(null);
    const quillRef= useRef(null);
    useEffect(()=>{
     // Initialize Quill editor
     if(!quillRef.current&&editorRef.current){
      quillRef.current=new Quill(editorRef.current, {
        theme:'snow',
     })
    }
    },[])
  return (
    <form className='container p-4 flex flex-col w-full items-start gap-3'>
        <div className='w-full'>
            <p className='mb-2'>
job title
            </p>
            <input type="text" placeholder='type here'
            onChange={e=>setTitle(e.target.value)} value={title} required
            className='w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded'/>
        </div>

        <div  className='w-full max-w-lg'>
          <p className='my-2'>job description</p>
          <div ref={editorRef}>
 
          </div>
        </div>
        <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
          <div>
            <p className='mb-2'>job category </p>
        <select   className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e=>setCategory(e.target.value)}>
          {JobCategories.map((category,index)=>(
<option key={index}value={category}>{category}</option>
          ))}
        </select>
          </div>

          <div>
            <p className='mb-2'>job location </p>
        <select  className='w-full px-3 py-2 border-2 border-gray-300 rounded'onChange={e=>setLocation(e.target.value)}>
          {JobLocations.map((location,index)=>(
<option key={index}value={location}>{location}</option>
          ))}
        </select>
          </div>

          <div>
            <p className='mb-2'>job level</p>
        <select  className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e=>setLevel(e.target.value)}>
          <option value="Beginner level">Beginner level</option>
          <option value="Intermediate level">Intermediate level</option>
          <option value="Advanced level">Advanced level</option>
        </select>
          </div>

          
        </div>
    <div>
      <p className='mb-2'>salery
        <input min={0} className='w-full px-3 py-2 border-2 border-gray-300 rounded sm:w-[120px]' onChange={e=>setSalary(e.target.value)}type='number' placeholder='type here'/>
      </p>
    </div>
    <button className='w-28 py-3 mt-4 bg-black text-white rounded'>add</button>
    </form>
  )
}

export default AddJob
