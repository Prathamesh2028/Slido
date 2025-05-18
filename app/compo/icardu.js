import "./Cardu.css";
import k from "./assets/groups_black_24dp (1) 1 (1).svg"
import l from "./assets/Vector (7).svg"
import m from "./assets/Vector (8).svg"
import n from "./assets/Vector (9).svg"
import o from "./assets/Vector (10).svg"
import { useState } from "react";
import Link from 'next/link';

export default function Tard({id,img,title,para,btn}){
    const[col,setCol]=useState("white");
return(
    <div>
                {id=='5'?
                
                <div className="card-big" style={{width:"71.5vw"}}  >
                <div className="tile">
                    <img src={img} style={{height:"100%"}}/>
                    <h4>{title} </h4>
                </div>
                <p>{para}</p>
                
              <Link href="./sign" ><button onClick={()=>setCol("blue")} style={{backgroundColor:{col}}} >{btn}</button></Link>
                </div>
                
                :

       <div className="card"  >
        <div className="tile">
            <img src={img} style={{height:"100%"}}/>
            <h4>{title} </h4>
        </div>
        <p>{para}</p>
      
                    <button >{btn}</button>

        
       </div>
}
    </div>
)
}