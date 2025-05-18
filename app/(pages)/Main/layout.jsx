"use client"
import { useAppcontext } from '@/app'
import Design from '@/app/components/Design'
import Head from '@/app/compo/head'
import MyImage from '@/app/components/MyImage'
import Project from '@/app/components/Project'
import Projectss from '@/app/components/Projectss'
import Link from 'next/link'
import React, { Component, useState } from 'react'

const Layout = ({ children }) =>  {
  const [state,setState]=useState('')
  const{data,setData}=useAppcontext();
  const{height,setHeight,width,setWidth}=useAppcontext();
  const{left,setLeft,top,setTop,rotate,bb,setBb,savr,setSavr,setRotate,opacity,setOpacity,saviour,setSaviour}=useAppcontext();

const{font,setFont,padding,setPadding,weight,setWeight,baap,setBaap}=useAppcontext();
const addNew=()=>{
  let a=0;
setBb(parseInt(baap.length));
a=a+baap.length
const components=[   { 
  name:'main',
  type: "ref",
  id:0,
  inde:a,
  height: data.h,  // Fallback to 0 if `data.h` is null or undefined
  width: data.w,    // Fallback to 0 if `data.w` is null or undefined
  z_index: 1,
  opacity:1,
  color: '#fff',
  image: "",
  setCurentComponent: (a) => setCurentComponent(a) ,   // Typing the function properly                                 
}
]

console.log(baap)
let total=[...baap]
total.push(components)
setBaap(total)

}

     const {curentComponent, setCurentComponent} = useAppcontext();  // Initialized as undefined

const {components,setComponents}=useAppcontext();
   const {image,setImage}= useAppcontext();

    const [show,setShow]=useState({
        status:true,
        name:''
    });

// Move element function
const moveElement = (id, currentInfo, indjd) => {
  setCurentComponent(currentInfo);
  let isMoving = true;
  const currentDiv = document.getElementById(id);
  
  const mousemove = ({ movementX, movementY }) => {
    const getStyle = window.getComputedStyle(currentDiv);
    const left = parseInt(getStyle.left);
    const top = parseInt(getStyle.top);

    if (isMoving) {
      currentDiv.style.left = `${left + movementX}px`;
      currentDiv.style.top = `${top + movementY}px`;
    }
  };

  const mouseup = (e) => {
    isMoving = false;
    // Remove event listeners after mouseup
    window.removeEventListener('mousemove', mousemove);
    window.removeEventListener('mouseup', mouseup);

    // Save updated position to state
    const newLeft = parseInt(currentDiv.style.left);
    const newTop = parseInt(currentDiv.style.top);

    // Update the savior state with the new position
    let updatedSaviour = [...saviour];
    const idid = (components[0].inde * 100) + indjd;
    const tempSave = { ix: idid, left: newLeft, top: newTop };

    // Remove old value and add updated one
    updatedSaviour = updatedSaviour.filter(c => c.ix !== idid);
    updatedSaviour.push(tempSave);

    setSaviour(updatedSaviour);
  };

  // Add event listeners for mousemove and mouseup
  window.addEventListener('mousemove', mousemove);
  window.addEventListener('mouseup', mouseup);
};

// Resize element function
const resizeElement = (id, currentInfo, indj) => {
  setCurentComponent(currentInfo);
  let isMoving = true;
  const currentDiv = document.getElementById(id);

  const mousemove = ({ movementX, movementY }) => {
    const getStyle = window.getComputedStyle(currentDiv);
    const height = parseInt(getStyle.height);
    const width = parseInt(getStyle.width);

    if (isMoving) {
      currentDiv.style.height = `${height + movementY}px`;
      currentDiv.style.width = `${width + movementX}px`;
    }
  };

  const mouseup = (e) => {
    isMoving = false;
    // Remove event listeners after mouseup
    window.removeEventListener('mousemove', mousemove);
    window.removeEventListener('mouseup', mouseup);

    // Save updated size to state
    const newHeight = parseInt(currentDiv.style.height);
    const newWidth = parseInt(currentDiv.style.width);

    let updatedSvr = [...savr];
    const idi = (components[0].inde * 100) + indj;
    const tempSv = { ix: idi, height: newHeight, width: newWidth };

    // Remove old value and add updated one
    updatedSvr = updatedSvr.filter(c => c.ix !== idi);
    updatedSvr.push(tempSv);

    setSavr(updatedSvr);
  };

  // Add event listeners for mousemove and mouseup
  window.addEventListener('mousemove', mousemove);
  window.addEventListener('mouseup', mouseup);
};

     const rotateElement=(id ,currentInfo)=>{
      setCurentComponent("")
      setCurentComponent(currentInfo)
      const target=document.getElementById(id)
      const mousemove=({movementX,movementY})=>{
        const getStyle=window.getComputedStyle(target)
        const trans=getStyle.transform
        const values=trans.split('(')[1].split(')')[0].split(',')
        const angle=Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI))
let deg=angle<0?angle+360:angle

      if (movementX){
deg=deg+movementX  
      }
      target.style.transform=`rotate(${deg}deg)`
      }  
    const mouseup=(e)=>{
      
      window.removeEventListener('mousemove',mousemove)
      window.removeEventListener('mousemove',mouseup)
      const getStyle=window.getComputedStyle(target)
      const trans=getStyle.transform
      const values=trans.split('(')[1].split(')')[0].split(',')
      const angle=Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI))
let deg=angle<0?angle+360:angle
setRotate(deg)

    }
    window.addEventListener('mousemove',mousemove)
    window.addEventListener('mouseup',mouseup)
    }
      

    
    const setElements=(type,name)=>{
        setState(type);

        setShow({
            status:false,
            name
        });
        console.log(show.status);
        console.log(state);
    }
    const add_text=(type,name)=>{
    const style={
      id:components.length,
      name:name,
      type,
      left:10,
      top:10,
      opacity:1,
      zIndex:components.length+1,
      color:'#FFF700',
      rotate,
      title:'add text',
      padding:6,
      font:22,
      weight:400,
      setCurentComponent:(a)=>setCurentComponent(a),
      moveElement,
      resizeElement,
      rotateElement      
    }
    setWeight('')
    setFont('')
    setCurentComponent(style)
    setComponents([...components,style])

    }

    const createShape=(name,type)=>{
      const style={
        id:components.length,
        name:name,
        type,
        left:10,
        top:10,
        opacity:1,
        height:100,
        width:100,
        z_index:6,
        color:'#FFF700',
        rotate,
        setCurentComponent:(a)=>setCurentComponent(a),
        moveElement,
        resizeElement,
        rotateElement
        
      }
  setComponents([...components,style])
}
const createImage=(name,type,src)=>{
  const styl={
    id:components.length,
    name:name,
    type,
    src,
    left:10,
    top:10,
    opacity:1,
    height:100,
    width:100,
    z_index:6,
    rotate,
    setCurentComponent:(a)=>setCurentComponent(a),
    moveElement,
    resizeElement,
    rotateElement
    
  }
setComponents([...components,styl])
setBaap(baap,components)
}
      
    
  return (
    <div className='bg-blue-950'>
        <Head/>
 <aside className=" text-fuchsia-900 w-[5vw] h-full  fixed  z-20 bg-sky-50">
            

     <ul className='mt-20'>
     <li className="  rounded-md " >
         <button className=" text-white relative mb-2  h-10 w-10 bg-violet-900 rounded-md text-center " style={{left:'50%',translate:'-50%' }} onClick={show.status || state!='design'?()=>setElements('design','design'):()=>setShow({name:'',status:true})} >H</button>
       </li>
       <li className=" rounded-md" >
         <button className=" text-white relative mb-2  h-10 w-10 bg-violet-900 rounded-md text-center " style={{left:'50%',translate:'-50%' }} onClick={show.status || state!='shape'?()=>setElements('shape','shape'):()=>setShow({name:'',status:true})} >S</button>
       </li>
       <li className="  rounded-md " >
         <button className=" text-white relative mb-2   h-10 w-10 bg-violet-900 rounded-md text-center " style={{left:'50%',translate:'-50%' }} onClick={show.status || state!='Image'?()=>setElements('Image','Image'):()=>setShow({name:'',status:true})} >I</button>
       </li>
       <li className=" rounded-md" >
         <button className="  text-white relative mb-2  h-10 w-10 bg-violet-900 rounded-md text-center " style={{left:'50%',translate:'-50%' }} onClick={show.status || state!='text'?()=>setElements('text','text'):()=>setShow({name:'',status:true})} >T</button>
       </li>
       <li className="  rounded-md " >
         <button className="  text-white relative mb-2 h-10 w-10 bg-violet-900 rounded-md text-center " style={{left:'50%',translate:'-50%' }} onClick={show.status || state!='projects'?()=>setElements('projects','projects'):()=>setShow({name:'',status:true})} >P</button>
       </li>
       <li className=" rounded-md" >
         <button className="text-white relative mb-2  h-10 w-10 bg-violet-900 rounded-md text-center " style={{left:'50%',translate:'-50%' }} onClick={show.status || state!='shape'?()=>setElements('shape','shape'):()=>setShow({name:'',status:true})} >S</button>
       </li>
       <li className=" rounded-md" >
         <button className="text-white relative mb-2  h-10 w-10 bg-violet-900 rounded-md text-center " style={{left:'50%',translate:'-50%' }} onClick={()=>addNew()} >N</button>
       </li>
   
      
       
     </ul>
   </aside>
   <div className='h-full w-[calc(100%-75px)] z-20'>
    <div className={`${show.status? 'p-0 -left-[350px]':'px-4 left-[75px] py-5 overflow-y-scroll scroll-ms-0 scrollbar-hide -z-10'} bg-purple-300 h-full fixed transition-all w-[300px] z-10 duration-700`}>
    <div style={{zIndex:100,color:'black'}} className='mt-7 z-500 '>
      {state=='design' && (<div>
<div className='grid grid-cols-2 gap-2'>
<Design/>
</div>

      </div>)
      }
          {state=='projects' && (<div>
<div className='grid grid-cols-2 gap-2'>
<Projectss/>
</div>

      </div>)
      }
        {state=='shape' && (<div className='grid grid-cols-3 gap-5'>
     <div onClick={()=>createShape('shape','rect')} className='h-[80px] w-[80px] bg-slate-700 cursor-pointer' > </div>
     <div onClick={()=>createShape('shape','circle')} className='h-[80px] w-[80px] bg-slate-700 cursor-pointer rounded-full'> </div>
     <div onClick={()=>createShape('shape','triangle')} style={{clipPath:'polygon(50% 0,100% 100%,0 100%) '}} className='h-[80px] w-[80px] bg-slate-700 cursor-pointer'> </div>


     <div></div>

</div>)
}
{
  state=='Image' && (<div >
    <MyImage createImage={createImage}/>
  </div>)
}

{
  state=='text' && (<div className=' grid grid-cols-1 gap-2' >
<div onClick={()=>add_text('text','text')} className='bg-black cursor-pointer font-bold p-3 text-white text-xl rounded-sm'>
  <h2>
    Add Text
  </h2>
  </div>
  </div>)
}

{
  state=='Project' && (<div >
    <Project/>
  </div>)
}

    </div>
    <div onClick={()=>setShow({name:'',status:true})} className='flex absolute justify-center items-center bg-blue-600 w-[20px] -right-3 text-slate-300 top-[40%] cursor-pointer h-[100px]'>

</div>


</div>
    
      <main className=" left-[5vw] top-[80px] pt-2 pr-0">{children}</main>

    </div>
    </div>
  )}
      
   
export default Layout;