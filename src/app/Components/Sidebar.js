"use client"
import { Avatar } from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SingleBedOutlinedIcon from '@mui/icons-material/SingleBedOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import React from 'react'

function Sidebar() {
  return (
    <div className='flex'>

      {/* Sidebar all icons */}

      <div className='bg-blue-500 w-20 h-screen text-center flex flex-col items-center justify-between'>
        <div className='flex flex-col gap-10 items-center'>
          <Avatar sx={{ backgroundColor: "purple", display: "inline-flex", marginTop: "1.25rem" }}>PD</Avatar>
          <HomeOutlinedIcon color='warning' sx={{ fontSize: 40 }} />
          <NotificationsOutlinedIcon color='warning' sx={{ fontSize: 40 }} />
          <SingleBedOutlinedIcon color='warning' sx={{ fontSize: 40 }} />
          <ShowChartOutlinedIcon color='warning' sx={{ fontSize: 40 }} />
          <PersonOutlinedIcon color='warning' sx={{ fontSize: 40 }} />
        </div>
        <SettingsOutlinedIcon sx={{ fontSize: 40, color: 'white', backgroundColor: "#FF4433", padding: "5px", borderRadius: "20px", marginBottom: "20px" }} />
      </div>

      {/* sidebar all options */}
      <div className='ml-8 flex flex-col gap-8 border-r-2 border-gray-400 w-48'>
        <div className='mt-5 -ml-5 flex font-bold text-lg items-center'>
          <KeyboardArrowLeftOutlinedIcon />
          <h1>Settings</h1>
        </div>

        <div className='mt-5 flex font-bold text-lg items-center text-gray-500 gap-3'>
          <CreateOutlinedIcon />
          <h1>Edit profile</h1>
        </div>
        <div className='mt-5 flex font-bold text-lg items-center text-gray-500 gap-3'>
          <NotificationsOutlinedIcon />
          <h1>Notification</h1>
        </div>
        <div className='mt-5 flex font-bold text-lg items-center text-gray-500 gap-3'>
          <LockOutlinedIcon />
          <h1>Security</h1>
        </div>
        <div className='mt-5 flex font-bold text-lg items-center text-gray-500 gap-3'>
          <SettingsOutlinedIcon />
          <h1>Appearance</h1>
        </div>
        <div className='mt-5 flex font-bold text-lg items-center text-gray-500 gap-3'>
          <HelpOutlineOutlinedIcon />
          <h1>Help</h1>
        </div>
      </div>
    </div>
  )
}

export default Sidebar