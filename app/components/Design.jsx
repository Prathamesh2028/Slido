"use client";
import React from 'react';
import Image from 'next/image';
import aa from '../images/intra.png';
import ba from '../images/C.png'
import a from '../images/F (1).png'
import b from '../images/F (2).png'
import c  from '../images/F (3).png'
import d from '../images/F (4).png'
import e from '../images/F (5).png'
import f from '../images/F (6).png'






import { useAppcontext } from '..';

const Design = () => {
  const {image,setImage}= useAppcontext();

  return (
    <>
        {
            [aa,ba,a,b,c,d,e,f].map((d,i)=><div key={i} className='group w-full rounded-md overflow-hidden bg-blue-950 cursor-pointer'>
                <Image onClick={()=>setImage(d)} src={d} alt='loading' className='w-full h-full  rounded-md'/>
                </div>
                )
        }
    </>
  )
}

export default Design