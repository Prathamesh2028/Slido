"use client";
import React from 'react';
import Image from 'next/image';
import aa from '../images/intra.png';
import ba from '../images/C.png'

import { useAppcontext } from '..';
const Projectss = () => {
  return (
    <>
    {
        [aa,ba].map((d,i)=><div key={i} className='group w-full rounded-md overflow-hidden bg-blue-950 cursor-pointer'>
            <Image onClick={()=>setImage(d)} src={d} alt='loading' className='w-full h-full  rounded-md'/>
            </div>
            )
    }
</>  )
}

export default Projectss