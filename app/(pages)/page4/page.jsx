"use client";
                                 
import { useEffect, useState } from "react";   
import dsa from '../images/intra.png'
import Image from "next/image";
import { useAppcontext } from "@/app";
import Element from "@/app/compo/Element";


const Page4 = ({
  removeComponent,
  naa
 }) => {

const{curentComponent,setCurentComponent}=useAppcontext();

  const[ass,setAss]=useState(naa.image);
  const[a,setA]=useState(false);
  const {inpRef}=useAppcontext()
  const {inpRe}=useAppcontext()


  const{font,setFont,padding,width,left,top,baap,setSaviour,setSavr,setPadding,weight,height,setWeight,saviour,components,savr,setHeight,setWidth,opacity,setOpacity,zindex,setZindex,setLeft,setTop}=useAppcontext();
  
const handleset=()=>{  


    console.log(baap)

  setCurentComponent(naa)



  if(curentComponent.name=='main'){
    if(inpRef.current){
      inpRef.current.value=1
    }
    if(inpRe.current){
      inpRe.current.value=10
    }
   
   setOpacity(1)
   setZindex(1)
   
  }
  else{
    const a=curentComponent.opacity
    const aaa=curentComponent.z_index
    setZindex(aaa)
    setOpacity(a)

  

    if(inpRef.current){
      inpRef.current.value=a
    }
    if(inpRe.current){
      inpRe.current.value=aaa
    }
    

  }   
  

}
 
  const randomvalue=String(Math.floor(Math.random() * 100 + 1));
  let html='';
  if(naa.name=='main'){
    html= 
    <div onClick={handleset}  className="hover:border-[2px] hover:border-indigo-500 shadow-md" style={{ height:naa.height+'px', width:naa.width+'px', zIndex:naa.z_index, backgroundColor:naa.color
    }}>
     {
  naa.image &&    <Image
  src={naa.image}  // Path relative to the public folder
  alt="Example Image"
  width={1000}
  height={1000}
  className="w-full h-full"
/>

} 
    </div>
    
  }

  if(naa.name==='shape'&& naa.type=='rect'){
    html= <div id={randomvalue}  onClick={handleset}  style={{  zIndex:naa.z_index,left:naa.left+'px',top:naa.top+'px',transform:naa.rotate?`rotate(${naa.rotate}deg)`:`rotate(0deg)` }} className="absolute group hover:border-[2px] hover:border-red-600">
     <div id={`${randomvalue}c`}  style={
      {
height:naa.height+'px', width:naa.width+'px', backgroundColor: naa.color,opacity:naa.opacity
      }
     }
     >

     </div>
     <Element id={randomvalue} info={naa} exd={`${randomvalue}c`}/>
     {
       curentComponent.id===naa.id && <div onClick={()=>removeComponent(naa.id)} className="h-4 w-4 bg-white">
         Delete
         </div>
     }
 
       </div>
   }
  if(naa.name==='shape'&& naa.type=='circle'){
    html= <div id={randomvalue}  onClick={()=>setCurentComponent(naa)}  style={{  zIndex:naa.z_index,left:naa.left+'px',top:naa.top+'px'    }} className="absolute group hover:border-[2px] hover:border-red-600">
     <div id={`${randomvalue}c`} className="rounded-full" style={
      {
height:naa.height+'px', width:naa.width+'px', backgroundColor: naa.color,opacity:naa.opacity
      }
     }
     >

     </div>
     <Element id={randomvalue} info={naa} exd={`${randomvalue}c`}/>
     {
       curentComponent.id===naa.id && <div onClick={()=>removeComponent(naa.id)} className="h-4 w-4 bg-white">
         Delete
         </div>
     }
 
       </div>
   }
   if(naa.name==='shape'&& naa.type=='triangle'){
    html= <div id={randomvalue}   onClick={()=>setCurentComponent(naa)}style={{  zIndex:naa.z_index,left:naa.left+'px',top:naa.top+'px'    }} className="absolute group hover:border-[2px] hover:border-red-600">
     <div id={`${randomvalue}c`} style={
      {
height:naa.height+'px', width:naa.width+'px', backgroundColor: naa.color,opacity:naa.opacity,clipPath:'polygon(50% 0,100% 100%,0 100%) '
      }
     }
     >
     <Element id={randomvalue} info={naa} exd={`${randomvalue}c`}/>

     </div>
     {
       curentComponent.id===naa.id && <div onClick={()=>removeComponent(naa.id)} className="h-4 w-4 bg-white">
         Delete
         </div>
     }
 
       </div>
   }
   if(naa.name==='text'){
    html= 
    <div id={randomvalue}  onClick={handleset}style={{  zIndex:naa.z_index,left:naa.left+'px',top:naa.top+'px'    }} className="absolute group hover:border-[2px] hover:border-red-600">
   
     <Element id={randomvalue} info={naa} exd=""/>
<h2 style={{fontSize:naa.font+'px',fontWeight:naa.weight,color:naa.color}} className="w-full h-full">{naa.title}</h2>
     </div>
     {
       curentComponent.id===naa.id && <div onClick={()=>removeComponent(naa.id)} className="h-4 w-4 bg-white">
         Delete
         </div>
     }
 
  }
  if(naa.name==='imge'){
    html= <div id={randomvalue}   onClick={()=>setCurentComponent(naa)}style={{ left:naa.left+'px',top:naa.top+'px'}} className="absolute group hover:border-[2px] hover:border-red-600">
   
     <Element id={randomvalue} info={naa} exd=""/>
     <img src={naa.src} style={
      {
height:naa.height+'px', width:naa.width+'px'
      }
     }
     />    
      </div>
     {
       curentComponent.id===naa.id && <div onClick={()=>removeComponent(naa.id)} className="h-4 w-4 bg-white">
         Delete
         </div>
     }
 
  }
 
  return (
   html
  );
};
export default Page4;
