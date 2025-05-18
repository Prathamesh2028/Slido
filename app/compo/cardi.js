import "./cardi.css"
import { useState } from "react";
import Image from "next/image";

export default function Dard({id,img,title,para,btn,color}){
    const[col,setCol]=useState("white");
    const[colors,setColors]=useState([]);

return(
    <div>
        <div className="card-bi"  >
                <div className="til">
                    <Image src={img} style={{height:"100%"}}/>
                    <h4>{title} </h4>
                </div>
                <p>{para}</p>
                
                <button style={{backgroundColor:{col}}} >{btn}{col}</button>
                </div>
    </div>)}