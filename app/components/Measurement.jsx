"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from next/router
import { useAppcontext } from '..';

import "./dashy.css";
import Image from 'next/image';
import a from './images/icon1.png'
const Measurement = () => {
  // State to track the selected size
  let {data,setData}=useAppcontext();
  const router = useRouter();

  // State for cards data
  const [compo, setCompo] = useState([
    {
      name: 'card',
      height: 400,
      width: 400
    },
    {
      name: 'ppt',
      height: 400,
      width: 600
    },
    {
      name: 'A4',
      height: 600,
      width: 400
    }
  ]);

  // State to determine if we're on the client side
  // Get the router object

  // UseEffect hook to set isClient to true when component is mounted
  const{components,setComponents}=useAppcontext();

  // Handle card click to set the selected size and navigate to a new page
  const handleClick = (height,width,name) => {
    console.log(data);
    const a={h:height, w:width}
    setData({a});
    const an={...components[0]}
    an.height=height;
    an.width=width;
    const sa=[an];
    setComponents(sa);
    
    console.log(data);
    
    router.push('./Main');
    // Navigate to a different page on card click
    // For example, navigating to a page like `/details/[name]`
  };



  return (
    <div className='mt-44'>
      <div className="icons-container">
        {compo.map((d, i) => (
          <div
            key={i}
            className="icons"
            onClick={() => handleClick(d.height, d.width, d.name)}
          >
        <Image src={a} alt="hi"/>
        
        <h3>{d.name}</h3>
        <p>{d.height} x {d.width}</p>
      
           
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3>Selected Size:</h3>

   
  
 

      </div>
    </div>
  );
};

export default Measurement;
