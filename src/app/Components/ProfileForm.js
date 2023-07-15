"use client"
import React, { useState } from 'react'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ErrorIcon from '@mui/icons-material/Error';
import FolderIcon from '@mui/icons-material/Folder';
import { Avatar } from '@mui/material';
import { useFormik } from 'formik';
import {profileSchema} from '@/app/FormSchema/index';

function ProfileForm() { 

  const initialValues={
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    password:"",
    colledge_start:"",
    colledge_end:"",
    file:""
  }

  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:initialValues,
    validationSchema: profileSchema,
    onSubmit:(values)=>{
       console.log(values)
    }
  })
  // if(Object(errors.email))
  //   console.log("errrr",Object(errors.email))
  
  return (
    <div className='w-full'>
      {/* corner notification and avatar icons */}
      <div className='flex justify-end w-full items-center gap-3 p-5'>
        <NotificationsOutlinedIcon className='bg-gray-300 rounded-full p-1' sx={{ width:'2rem',height:'2rem' }}/>
        <Avatar sx={{ width:'2rem',height:'2rem' }}  src='https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp'  />
      </div>

      {/* profile form */}
      <form onSubmit={handleSubmit} className='pl-28 pr-28 pt-4  w-[90%] -mt-16 flex flex-col gap-2'>

        {/* avatar */}
        <div className='flex w-full justify-between items-center'>
          <h1 className='text-4xl font-semibold'>Edit profile</h1>
          <Avatar sx={{ width:'6rem',height:'6rem' }}  src='https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp'  />
        </div>

        {/* first and last name */}
        <div className='flex justify-between mt-1'>
          <div className='flex flex-col '>
            <label className='text-lg font-semibold'  >First Name</label>
            <input onChange={handleChange} onBlur={handleBlur} name='firstName' value={values.firstName} className=' w-96 p-3 rounded-md border-2 border-gray-400' type="text" placeholder='First Name' />
            {errors.firstName && touched.firstName?(<p className='text-xs text-red-700' >{errors.firstName}</p>):null}
          </div>
          <div className='flex flex-col  '>
            <label className='text-lg font-semibold' >Last Name</label>
            <input onChange={handleChange} onBlur={handleBlur} name="lastName" value={values.lastName} className='border-2 border-gray-400 w-96 p-3 rounded-md ' type="text" placeholder='Last Name' />
            {errors.lastName && touched.lastName?(<p className='text-xs text-red-700' >{errors.lastName}</p>):null}
          </div>
        </div>

        {/* email */}
        <div className='flex flex-col relative'>
          <label className='text-lg font-semibold' >Email</label>
          <input onChange={handleChange} onBlur={handleBlur} name="email" value={values.email} className='border-2 border-gray-400 w-full p-3 rounded-md' type="email" placeholder='Email' />
          {errors.email && touched.email?(<p className='text-xs text-red-700' >{errors.email}</p>):null}
         
          <CheckBoxIcon className='absolute right-5 bottom-3' color='success' sx={{ fontSize: 32 }}/>
        </div>

        {/*  Mobile Number */}
        <div className='flex flex-col relative'>
          <label className='text-lg font-semibold' >Mobile Number</label>
          <input onChange={handleChange} onBlur={handleBlur} name="phone" value={values.phone}  className='border-2 border-gray-400 w-full p-3 rounded-md' type="number" placeholder='Mobile Number' />
          {errors.phone && touched.phone?(<p className='text-xs text-red-700' >{errors.phone}</p>):null}
          <CheckBoxIcon className='absolute right-5 bottom-3' color='success' sx={{ fontSize: 32 }}/>
        </div>

        {/* password */}
        <div className='flex flex-col relative'>
          <label className='text-lg font-semibold' >Password</label>
          <input onChange={handleChange} onBlur={handleBlur} name="password" value={values.password}  className='border-2 border-gray-400 w-full p-3 rounded-md' type="password" placeholder='Password' />
          {errors.password && touched.password?(<p className='text-xs text-red-700' >{errors.password}</p>):null}
          <VisibilityOutlinedIcon className='absolute right-5 bottom-4'  sx={{ fontSize: 25 }} />
        </div>

        {/* colledge start and end date */}
        <div className='flex justify-between'>
          
          <div className='flex flex-col'>
            <label className='text-lg font-semibold'>College Start Date</label>
            <input onChange={handleChange} onBlur={handleBlur} name="colledge_start" value={values.colledge_start}  className='border-2 border-gray-400 w-96 p-3 rounded-md' type="date" placeholder='College Start Date' />
            {errors.colledge_start && touched.colledge_start?(<p className='text-xs text-red-700' >{errors.colledge_start}</p>):null}
          </div>

          <div className='flex flex-col  '>
            <label className='text-lg font-semibold' >College end Date</label>
            <input onChange={handleChange} onBlur={handleBlur} name="colledge_end" value={values.colledge_end}  className='border-2 border-gray-400 w-96 p-3 rounded-md' type="date" placeholder='College end Date' />
            {errors.colledge_end && touched.colledge_end?(<p className='text-xs text-red-700' >{errors.colledge_end}</p>):null}
          </div>

        </div>

        {/* resume upload */}
        <div className='flex flex-col relative'>
          <h1 className='text-lg font-semibold'>Resume</h1>
          <label htmlFor='fileIcon' className='p-3 border-gray-400 border-2 rounded-md'><h1 className='text-gray-400'>{values.file?(values.file):"upload resume"}</h1> <FolderIcon className='absolute right-5 bottom-4' sx={{ fontSize: 25 }} /></label>
          <input onChange={handleChange} onBlur={handleBlur} name="file" value={values.file}  id='fileIcon' className='bg-gray-200 w-full hidden p-3 rounded-md' type="file" />
          {errors.file && touched.file?(<p className='text-xs text-red-700' >{errors.file}</p>):null}
        </div>

        {/* buttons */}
       <div className='flex gap-3 mt-2 '>
          <button className='text-blue-400 border-2 border-blue-400 text-lg font-semibold p-1 rounded-md w-24'>Cancel</button>
          <button className='bg-blue-600 p-1 text-white text-lg font-semibold rounded-md w-24'>Save</button>
        </div>
      </form>
    </div>


  )
}

export default ProfileForm