import React from 'react'
import Sidebar from './Components/Sidebar'
import ProfileForm from './Components/ProfileForm'

function page() {
  return (
    <div className='flex'>
      <Sidebar/>
      <ProfileForm/>
    </div>
  )
}

export default page