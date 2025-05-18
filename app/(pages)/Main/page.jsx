"use client"
import { useAppcontext } from '@/app';
import Head from '@/app/compo/head';
import React, { useEffect, useRef, useState } from 'react'
import Page4 from '../page4/page';
import Image from 'next/image';
import PptxGenJS from 'pptxgenjs';

import ann from '..//images/intra.png'


const Main = () => {
  const pptx = new PptxGenJS();

  function cleanJson(data) {
    return data.map(itemArray => 
      itemArray.map(item => {
        // Destructure the item and exclude unwanted keys
        const { setCurentComponent, rotate, resizeElement, moveElement, ...cleanedItem } = item;
        return cleanedItem;
      })
    );
  }
  function asd(){
    let jsonData = cleanJson(baap);

    // Create slides based on jsonData
    jsonData.forEach((slideData) => {
      const slide = pptx.addSlide(); // Add a new slide
  
      slideData.forEach((component) => {
        if (component.name === 'main') {
          slide.background = { color: component.color || 'white' }; // Set background color
        }
  
        if (component.name === 'text') {
          slide.addText(component.title || '', {
            x: component.left / 59,
            y: component.top / 68,
            fontSize: component.font || 18,
            color: component.color || 'black',
            opacity: component.opacity || 1,
            fontFace: 'Arial',
            fontWeight: component.weight || 'normal',
            zIndex: component.z_index,
            width: component.width / 90,
            height: component.height / 90
          });
        }
  
        if (component.name === 'shape') {
          if (component.type === 'circle') {
            slide.addShape(pptx.ShapeType.ellipse, {
              x: component.left / 59,
              y: component.top / 68,
              w: component.width /59 ,
              h: component.height/68 ,
              fill: { color: component.color, opacity: component.opacity || 1 },
              zIndex: component.z_index
            });
          }
  
          if (component.type === 'rect') {
            slide.addShape(pptx.ShapeType.rect, {
              x: component.left / 59,
              y: component.top / 68,
              w: component.width /59 ,
              h: component.height/68 ,
              fill: { color: component.color, opacity: component.opacity || 1 },
              zIndex: component.z_index
            });
          }
        }
      });
    });
   console.log(baap)
    // Trigger the download of the generated PowerPoint file
    pptx.writeFile({ fileName: 'generated_presentation.pptx' });
  }
  const[state,setState]=useState('');

  const [color,setColor]=useState('#fff')
  const [toggle,setToggle]=useState(false);
  const[abs,setAbs]=useState('')
  const[align,setAlign]=useState('')

  const {image,setImage}= useAppcontext();
  const{left,setLeft,top,setTop}=useAppcontext();
  const{height,setHeight,width,setWidth,opacity,setOpacity,zindex,setZindex,text,setText,baap,setBaap,savr,setSavr,saviour,setSaviour}=useAppcontext();
  const {inpRef}=useAppcontext()
  const {inpRe}=useAppcontext()

    const remove=()=>{
    image!="" && setImage("");
  }
  const  handleOpacity=(e)=>{
    if(inpRef.current){
      inpRef.current.value=opacity
    }
    const newOpacity = parseFloat(e.target.value);
    setOpacity(newOpacity);  

    
  };
  const [trig,setTrig]=useState(false)
  const [l,setL]=useState(0)

  const setcard=(i)=>{
    setCurentComponent(baap[i][0]);
console.log(components)
console.log(saviour)

console.log(savr)

setTrig(true);
setL(i);

  }
  const handleZindex=(e)=>{
    if(inpRe.current){
      inpRe.current.value=zindex
    }
    const newOpacity = parseFloat(e.target.value);
    setZindex(newOpacity);  
  }
  // Function to handle the color change from the picker   const dom=components.filter((c) => c.id !== curentComponent.id);
//const sa={...curentComponent,opacity:opacity}
//setCurentComponent(sa);
//setComponents([sa,...dom])
  const handleColorChange = (e) => {
    let sd={}

    sd={...curentComponent}
sd.color=e.target.value;
setCurentComponent(sd);
    setColor(e.target.value);


};


  const {curentComponent, setCurentComponent,rotate,setRotate,font,setFont,weight,setWeight,padding,setPadding} = useAppcontext();  // Initialized as undefined
 const{components,setComponents}=useAppcontext();

  
  const {data,setData}= useAppcontext();


 const resizeElement=()=>{
  console.log("resixeElement")
 }
 const rotateElement=()=>{
  console.log("roatateElement")
 }

const removeComponent=(id)=>{
const temp=components.filter(c=>c.id!==id)
setCurentComponent({})
setComponents(temp);
}
const[setting,setSetting]=useState(false)
const ABCD=()=>{
  let di=curentComponent.id+(components[0].inde*100)

  let poing=saviour.filter(c=>c.ix!==di)
  let pin=savr.filter(c=>c.ix!==di)
  setSaviour(poing)
  setSetting(true)
  setSavr(pin)  
  setSetting(true)

  
  
}

const removebackground=()=>{
const dom=components.filter((c) => c.id !== curentComponent.id);
const sa={...curentComponent,image:"",height:data.h,width:data.w}

setCurentComponent(sa);
setComponents([sa,...dom])
setImage('')
}
let ds ={...curentComponent};
console.log(ds);
useEffect(() => {
  if (setting === true) {
    setSetting(false);
  } else if (trig === true) {
    setComponents([...baap[l]]);
    console.log('jKj');
    console.log(components);
    console.log('jKj');
    setTrig(false);
    setL(-1);
  } else if (curentComponent !== '') {
    // Ensure image is always defined (use a fallback if necessary)
    const currentImage = image || curentComponent.image;

    let di = curentComponent.id + (components[0].inde * 100);
    let tempoing = saviour.find((c) => c.ix === di);
    let tempin = savr.find((c) => c.ix === di);

    const ll = tempoing?.left || curentComponent.left;
    const tt = tempoing?.top || curentComponent.top;
    const hh = tempin?.height || curentComponent.height;
    const ww = tempin?.width || curentComponent.width;

    // Find the index of the selected component
    const index = components.findIndex((c) => c.id === curentComponent.id);

    if (index !== -1) {
      let updatedComponent = {};

      if (curentComponent.name === 'main') {
        updatedComponent = {
          ...components[index], // Copy the component
          color: curentComponent.color || color, // Use color if defined, otherwise keep the original
          image: currentImage,
          height: data.h,
          width: data.w,
        };
      }

      if (curentComponent.name === 'shape') {
        updatedComponent = {
          ...components[index], // Copy the component
          color: curentComponent.color || color, // Use color if defined, otherwise keep the original
          image: currentImage,
          opacity: opacity || curentComponent.opacity,
          rotate: rotate || curentComponent.rotate,
          z_index: zindex || curentComponent.z_index,
          left: ll,
          top: tt,
          height: hh,
          width: ww,
        };
      }
      if (curentComponent.name === 'imge') {
        updatedComponent = {
          ...components[index], // Copy the component
          image: currentImage,
          opacity: opacity || curentComponent.opacity,
          rotate: rotate || curentComponent.rotate,
          z_index: zindex || curentComponent.z_index,
          left: ll,
          top: tt,
          height: hh,
          width: ww,
        };
      }

      if (curentComponent.name === 'text') {
        updatedComponent = {
          ...components[index], // Copy the component
          color: curentComponent.color || color, // Use color if defined, otherwise keep the original
          font: font || curentComponent.font,
          z_index: zindex || curentComponent.z_index,
          weight: weight || curentComponent.weight,
          padding: padding || curentComponent.padding,
          title: text || curentComponent.text,
          left: ll,
          top: tt,
        };
      }

      const updatedComponents = [
        ...components.slice(0, index),
        updatedComponent,
        ...components.slice(index + 1),
      ];

      setComponents(updatedComponents);

      const idx = baap.findIndex((c) => c[0].inde === components[0].inde);
      const tembaap = [
        ...baap.slice(0, idx),
        updatedComponents,
        ...baap.slice(idx + 1),
      ];
      setBaap(tembaap);
    }

    if (inpRef.current) {
      inpRef.current.value = opacity;
    }
    setAbs(curentComponent.opacity);
  }

  // Don't mutate the state directly
  const updatedHeight = data.h;
  const updatedWidth = data.w;
  setComponents((prevComponents) => {
    const updatedMainComponent = { ...prevComponents[0], height: updatedHeight, width: updatedWidth };
    return [updatedMainComponent, ...prevComponents.slice(1)];
  });

}, [color, curentComponent, image, rotate, setImage, opacity, zindex, font, padding, weight, text, saviour, savr]);
// Ensure these are stable dependencies
// Now only depend on `color` and `curentComponent`


  return (
    <div className='flex flex-col h-screen '>
{ curentComponent.name !== 'main'&& curentComponent.name!='text'  &&<div className='bg-white mt-20 absolute left-[40%] -translate-x-[50%] border border-amber-800 rounded-3xl h-fit w-fit p-3 pr-10 pl-10 text-slate-950   '>
{
curentComponent.name !== 'main' &&  (
<div className="flex gap-3 place-items-center ">
  <div className="flex gap-1 justify-start items-start">
    <span className="text-md w-[70px]">Opacity:</span>
    <input 
      className="w-[70px] border border-gray-700 bg-transparent outline-none px-2 rounded-md"
      type='number'
    
    min={0.1}
    max={1}
    step={0.1}
      value={opacity}
      onChange={handleOpacity}
      
      // Ensures the input is controlled
    ></input>
    
  </div>
  <div className="flex gap-1 justify-start items-start">
    <span className="text-md w-[70px]">Z_Index:</span>
    <input 
      className="w-[70px] border border-gray-700 bg-transparent outline-none px-2 rounded-md"
      type='number'
    
    min={1}
    max={99999}
    step={1}
      value={zindex}
      onChange={handleZindex}
      
      // Ensures the input is controlled
    ></input>
    
  </div>
  <div className="flex gap-1 justify-start items-start ">
  
    <div onClick={()=>removeComponent(curentComponent.id)} className="h-fit w-fit p-2 pl-3 bg-red-600 text-white rounded-lg cursor-pointer">
         Delete
         </div>
     
</div>
</div>
)

}
</div>

}
<div  > 
{ curentComponent.name == 'text' &&<div className='bg-white mt-20 absolute left-[40%] -translate-x-[50%] border border-amber-800 rounded-3xl h-fit w-fit p-3 pr-10 pl-10 text-slate-950   '>
{curentComponent.name == 'text'&&  (
<div className="flex gap-3 place-items-center ">
  <div className="flex gap-1 justify-start items-start">
    <span className="text-md w-[70px]">Padding:</span>
    <input 
      className="w-[70px] border border-gray-700 bg-transparent outline-none px-2 rounded-md"
      type='number'
    
      min={1}
      max={199}
      step={1}
      value={padding}
      onChange={(e)=>setPadding(e.target.value)}
      
      // Ensures the input is controlled
    ></input>
    
  </div>
  <div className="flex gap-1 justify-start items-start">
    <span className="text-md w-[70px]">Fontsize:</span>
    <input 
      className="w-[70px] border border-gray-700 bg-transparent outline-none px-2 rounded-md"
      type='number'
      min={10}
      max={1000}
      step={10}
     
      value={font}
      onChange={(e)=>setFont(e.target.value)}
      
      // Ensures the input is controlled
    ></input>
    
  </div>
  <div className="flex gap-6 justify-start items-start">
    <span className="text-md w-[70px] pr-5">FontWeight:</span>
    <input 
      className="w-[70px] border border-gray-700 bg-transparent outline-none px-2 rounded-md"
      type='number'
    

    min={100}
    max={2000}
    step={100}
      value={weight}
      onChange={(e)=>setWeight(e.target.value)}
      
      // Ensures the input is controlled
    ></input>
    
  </div>
  <div className="flex gap-1 justify-start items-start ">
  
    <div onClick={()=>removeComponent(curentComponent.id)} className="h-fit w-fit p-2 pl-3 bg-red-600 text-white rounded-lg cursor-pointer">
         Delete
         </div>
     
</div>
<div className="flex gap-1 justify-start items-start ">
  
    <div onClick={()=>setToggle(!toggle)} className="h-fit w-fit p-2 pl-2 bg-#FFF700-600 text-white rounded-lg cursor-pointer">
         Edit
         </div>
     
</div>
</div>
)

}
</div>

}
</div>
      <div className={`min-w-screen h-screen bg-blue-950 mt-40`}>
     
    <div className='h-full'>
   
      <div className={`flex justify-center relative items-center h-fit w-[calc(100%-250px)] overflow-hidden bg-blue-950}`}>

<div className='m-w-[650px] m-h-[480px]  flex justify-center items-center overflow-hidden bg-blue-950 '>
{
    toggle && <div className='p-10 '>
      <input type='textarea' value={text} onChange={(e)=>setText(e.target.value)} style={{height:50+'px',width:200+'px',padding:'2px',top:(curentComponent.top+100)+'px',left:curentComponent.left+'px',borderRadius:'10px',borderWidth:'1px'}}/>
      </div>
  }
<div id='main_design' className='w-auto relative h-auto' >

  {
  
    components.map((c,i)=>  <Page4
    key={i} 
    naa={c}  // Spread the rest of the properties of `c`
      // Additional props
    removeComponent={removeComponent} // Additional props
  />)
 
  
  }

 
 
</div>
  
</div>


</div>
<div className={`flex  gap-3 w-fit h-16 mt-6 absolute left-[calc(20%)]`}>

{
  baap.map((d,i)=><div key={i} onClick={()=>setcard(d[0].inde)} className={`w-28 bg-white rounded-lg  cursor-pointer `} style={{background:`${d[0].color}`}}>
    <div >{i}</div>
      </div>
      )
}

</div>s

</div>

<div className='absolute right-0 top-0 h-full'>
{
 <div className='h-full w-[250px] text-gray-300 bg-sky-50 px-3 py-2 '>
  <div className='flex gap-3 flex-col items-start h-full px-3 justify-start'>
    
    <div className="p-10">

{/* Color box */}




<label
htmlFor="color-picker"
className="cursor-pointer text-blue-900 underline mt-2 block " style={{textUnderlineOffset:0}}
>
<div
className="w-[50px] h-[50px] cursor-pointer rounded-md  "
style={{
 backgroundColor:curentComponent.color,
 border:'solid',
 borderColor:'blue',
 borderWidth:'thin'
}
   // Set the background color dynamically
}
>

<input
  type="color"
  value={color} // Bind the input value to state
  onChange={handleColorChange} // Handle color change
  className="w-0 h-0 opacity-0 absolute border-blue-900" // Hide the input visually
  id="color-picker" // Label association
/>

</div>

</label>

<button className='h-fit w-fit bg-black text-white rounded-xl p-2 mt-10' onClick={()=>removebackground()}>
  Remove bg
</button>
<button className='h-fit w-fit bg-blue-400 text-white rounded-xl p-2 mt-10' onClick={()=>asd()}>
  Export as ppt
</button>
</div>

</div>

</div>
 
}


</div>


</div></div>
    


  )
}

export default Main;