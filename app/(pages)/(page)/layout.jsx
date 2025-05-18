'use client';
import React from 'react'
import Link from 'next/link';
import Header from '@/app/compo/Header';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';



const Layout = ({ children }) =>  {
  const pathname = usePathname(); // Gets the current pathname
  const router = useRouter();


  // The 'pathname' is inferred as string by TypeScript
  return (
  
 
   <div className='bg-purple-200' >
     <Header/>
      
   {/* Left Sidebar  <div className="flex h-screen bg-gray-100"> */}
  
   <aside className="bg-blue-950 text-white w-[18vw] h-full p-4 fixed top-30 roun">
   <div className="relative pb-6">
          <img
            src="/profile.jpg" // Your profile image
            alt="Profile"
            className="h-10 w-10 rounded-full border-2 border-white"
          />
        </div>     <ul>
       <li className={`${pathname==='/dashboard'?' bg-gray-500':''} pl-3 pt-2   pb-2 rounded-md cursor-pointer`} onClick={()=>router.push('/dashboard')}>
         <Link href="/" className=" text-white" >Home</Link>
       </li>
       <li className={`${pathname==='/About'?' bg-gray-500':''} pl-3 pt-2   pb-2 rounded-md cursor-pointer`}onClick={()=>router.push('/About')}>
       <Link href="/" className=" text-white" >About</Link>
       </li>
       <li className={`${pathname==='/Blog'?' bg-gray-500':''} pl-3 pt-2   pb-2 rounded-md cursor-pointer`}onClick={()=>router.push('/Blog')}>
       <Link href="/" className=" text-white" >Blog</Link>
       </li>
      
     </ul>
   </aside>
   

   {/* Main Content Area */}
     {/* Header is at the top */}
   
     
     {/* Page Content */}
     <main className="ml-[19vw]  top-[200px] pt-20 pr-3">{children}</main>
     </div>

 
  )
}

export default Layout