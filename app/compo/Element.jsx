import React from 'react'

const Element = ({id, info, exd}) => {
  return (
    <>
{
    exd?
    <>
    <div onMouseDown={()=>info.resizeElement(exd,info,info.id)} className='hidden absolute group-hover:block -bottom-[3px] -right-[3px] w-[10px] h-[10px] cursor-nwse-resize bg-green-500 z-[905]'></div>
    <div onMouseDown={()=>info.resizeElement(exd,info,info.id)} className='hidden absolute group-hover:block -top-[3px] -right-[3px] w-[10px] h-[10px] cursor-nwse-resize    bg-green-500 z-[905]'></div>
    <div onMouseDown={()=>info.resizeElement(exd,info,info.id)} className='hidden absolute group-hover:block -bottom-[3px] -left-[3px] w-[10px] h-[10px] cursor-nwse-resize  bg-green-500 z-[5]'></div>
    
    
    </>:
    <>
    <div onMouseDown={()=>info.resizeElement(id,info,info.id)} className='hidden absolute group-hover:block -bottom-[3px] -right-[3px] w-[10px] h-[10px] cursor-nwse-resize bg-green-500 z-[905]'></div>
    <div onMouseDown={()=>info.resizeElement(id,info,info.id)} className='hidden absolute group-hover:block -top-[3px] -right-[3px] w-[10px] h-[10px] cursor-nwse-resize    bg-green-500 z-[905]'></div>
    <div onMouseDown={()=>info.resizeElement(id,info,info.id)} className='hidden absolute group-hover:block -bottom-[3px] -left-[3px] w-[10px] h-[10px] cursor-nwse-resize  bg-green-500 z-[905]'></div>

    </>
    
}
<div onMouseDown={()=>info.rotateElement(id,info)} className='hidden absolute group-hover:block -top-[3px] -left-[3px] w-[10px] h-[10px] cursor-nwse-resize    bg-red-500 z-[905]'></div>

<div onMouseDown={()=>info.moveElement(id,info,info.id)} className='hidden absolute group-hover:block -top-[3px] left-[50%] translate-[-50%,0%] w-[5px] h-[5px] cursor-col-resize    bg-green-500 z-[905]'></div>
<div onMouseDown={()=>info.moveElement(id,info,info.id)} className='hidden absolute group-hover:block top-[50%] -left-[3px] translate-[-0%,50%] w-[5px] h-[5px] cursor-n-resize    bg-green-500 z-[905]'></div>
<div onMouseDown={()=>info.moveElement(id,info,info.id)} className='hidden absolute group-hover:block -bottom-[3px] left-[50%] translate-[-50%,0%] w-[5px] h-[5px] cursor-sw-resize bg-green-500 z-[905]'></div>
<div onMouseDown={()=>info.moveElement(id,info,info.id)} className='hidden absolute group-hover:block top-[50%] -right-[3px] translate-[-0%,50%] w-[5px] h-[5px] cursor-nwse-resize   bg-green-500 z-[905]'></div>

    </>
  )
}

export default Element