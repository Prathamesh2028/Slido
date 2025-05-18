"use client"
import Search from '@/app/components/search';
import React, { useEffect, useState } from 'react'
import Page1 from '../../page1/page';
import Measurement from '@/app/components/Measurement';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAppcontext } from '@/app';


const Dashboard = () => {
  const getCookie = (name) => {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : "";
  };
 
  
  const router = useRouter();

  const handleNavigate = () => {
    const data = { name: 'John Doe', age: 30,h:400,w:500 };
    sessionStorage.setItem('userData', JSON.stringify(data)); // Store data in sessionStorage

    // Use the `router.push()` from `next/navigation` to navigate programmatically
  };
  // State for cards data
 

  // State to determine if we're on the client side
  
  // Get the router object

  // UseEffect hook to set isClient to true when component is mounted


  // Handle card click to set the selected size and navigate to a new page
 

  // Only render on client-side (after mounting)
 
  return (
    <div  className="top-32 height z-0 ">

<Search/>
<Page1/>


<Measurement/>
    

    </div>
  )
}

export default Dashboard;