import "./Homee.css";
import Image from "next/image";

import { useState } from "react";
import k from "./assets/groups_black_24dp (1) 1 (1).svg"
import a from "./assets/2.svg"
import b from "./assets/3.svg"
import c from "./assets/c.svg"
import Logo from "./assets/HobbyCue Logo v2 1.svg";
import search from "./assets/vect.svg";
import hob from "./assets/Hobbies.svg";
import explo from "./assets/Group.svg";
import drop from "./assets/drop.svg";
import q from "./assets/Ellipse 12 (1).svg"

import l from "./assets/Vector (7).svg"
import m from "./assets/Vector (8).svg"
import n from "./assets/Vector (9).svg"
import g from "./assets/Vector (4).svg"
import "./cardi.css"
import h from "./assets/Vector (5).svg"
import i from "./assets/HobbyCue Logo v2 2.svg"
import j from "./assets/Vector (6).svg"
import Link from 'next/link';
import a1 from "./assets/Group (2).svg"
import a2 from "./assets/Program.svg"
import a3 from "./assets/Vector (13).svg"
import z5 from"./assets/_x31__stroke.svg"
import d from "./assets/lock_black_24dp 1.svg"

import z6 from"./assets/Group (4).svg"
import crop from "./assets/Vector (15).svg"

import z7 from"./assets/Password (1).svg"
import a4 from "./assets/Product 2.svg"
import titleimg from "./assets/Vector (10).svg"

const Color = () => {


    const[co,setCo]=useState(false);
    const[col,setCol]=useState(false);
    const[colo,setColo]=useState(false);
    const[color,setColor]=useState(false);
    const[to,setTo]=useState(false);
    const[tol,setTol]=useState(false);
    const[tolo,setTolo]=useState(false);
    const[tolor,setTolor]=useState(false);
    const[togle,setTogle]=useState("continue");

    const[toggle,setToggle]=useState(false);
    const[toglu,setToglu]=useState(false);




    return(
        <div className="colou_cards"> 
            <nav className="navbar">
                           
           
                           <Link href="/" style={{background:"white"}} ><img className="as" src={Logo} style={{width:"240px",background:"white"}}/>  </Link>
        <div className="inpu">
            <input style={{width:'270px',height:'40px'}}/>
            <button className="search-bt"><img className="search-icon" src={search} /></button>
        </div>

        <div className="rightside">
        <div className="expl" onClick={()=>setToglu(!toglu)}> 
            <Image alt="Profile" style={{backgroundColor:'white',height:'100%'}} src={explo}></Image>
            <p style={{backgroundColor:'white',height:'100%'}}>Exploration</p>
            <Image alt="Profile" style={{backgroundColor:'white',height:'100%'}}src={drop}></Image>
      

        </div>
        <div className="hob">
            <Image alt="Profile" style={{backgroundColor:'white'}} src={hob}></Image>
            <p style={{backgroundColor:'white'}}>Hobbies</p>
            <Image alt="Profile" style={{backgroundColor:'white'}} src={drop}></Image>

        </div>
       
        <Image alt="Profile" style={{backgroundColor:'white'}} src={a}></Image>

        <Image alt="Profile" style={{backgroundColor:'white'}}src={b}></Image>
        <Image alt="Profile" style={{backgroundColor:'white'}}src={c}></Image>
       <a href="/sign" className="logged" style={{background:"white",display:"flex",alignItems:"center",gap:'4px'}}><img src={q} style={{height:'100%',background:"white"}}/>            <Image style={{backgroundColor:'white'}} src={drop}></Image>

       </a>
        </div>
    {toggle?  <div className="mini-nav">
        <Image alt="Profile" className="as" src={i} style={{width:'32px',height:'32px'}}/> 
        <Image alt="Profile" style={{backgroundColor:'white'}}src={j}onClick={()=>setToggle(!toggle)}></Image>


    </div> :(
        <div className="mini-nav" >
        
        <Image className="as" src={Logo} style={{width:'156px',height:'32px'}}/> 
        <div className="sub-right"style={toggle?{display:'none'}:{display:'flex'}}>
         
        <Image alt="Profile" style={{backgroundColor:'white'}}src={h}></Image>

        <Image alt="Profile" style={{backgroundColor:'white'}}src={b}></Image>
        <Image alt="Profile" style={{backgroundColor:'white'}}src={g} onClick={()=>setToggle(!toggle)}></Image>

        
        </div>
        </div>)

        }
       




    </nav>
    <div className="hero" style={toggle?{display:""}:{display:"none"}} >
    <div className="Rightu" style={toggle?{top:'50px'}:{top:'50px'}}>
                    
                    <div>
                    <div className="session"> <button onClick={()=>setTogle("continue") }style={togle=="continue"?{borderBottom:" 2px solid purple",color:"purple"}:{border:"none",color:"gray"}}> Sign In</button>
                    <button onClick={()=>setTogle("agree")}style={togle=="agree"?{borderBottom:" 2px solid purple",color:"purple"}:{border:"none",color:"gray"}}>Join In</button></div>
                    </div>

                     <button className="sign sa" style={{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"30%",paddingLeft:"20px"}}>
                         <Image alt="Profile" style={{backgroundColor:'white',height:'60%',display:"block",background: "#F7F5F9",borderRadius:'100%'}}src={z5}></Image>Continue with google</button>

                     <button className="sign sa" style={{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"30%",paddingLeft:"20px"}}>
                         <Image alt="Profile" style={{backgroundColor:'white',height:'60%',display:"block",background: "#F7F5F9",borderRadius:'100%'}}src={z6}></Image>

                         Continue with Facebook</button>
                     <div className="line"></div>
                 <input className="in" placeholder="Email" style={{paddingLeft:'5px'}}></input>
                 <div>
                 <input className="in" placeholder="Password" style={{paddingLeft:'5px'}}>   
                 
                 </input>
                 <div className="</Image>u hs">
                 <Image alt="Profile" style={{backgroundColor:'white',display:"block",background: "#F7F5F9",borderRadius:'100%',position:"relative",right:"30px"}}src={z7}></Image>

                 </div>

                 </div>

                 {togle=="continue"?<>
                     <div className="check">
                 <div className="checkin">
                     <input className="checked" type="checkbox"/><h4 style={{paddingLeft:'10px'}}>Remember me</h4>
                 </div>
                 <div className="checking">
                     <Image alt="Profile" src={d} style={{height:'23px',width:'23px'}}/><h4 style={{paddingLeft:'10px'}}>Remember me</h4>

                 </div>
                 </div>
                 
                 <button className="sign sa" >Continue with Facebook</button></>:(<>
                      <div className="check">
                      <p style={{fontSize:'12px'}}>By continuing, you agree to our Terms of Service and Privacy Policy.</p>
                          
                      
                      </div>
                      
                      <button className="sign sa" style={{background:'purple',color:"white"}}>Agree and continue</button>
                      </>

                 )}

                 
             </div>
             </div>

    <div className="Heading" style={toggle?{display:'none'}:{display:''}} >
        <Image alt="Profile"  src={titleimg} style={{background:"white"}}>
        </Image>
        <h1 style={{background:"white"}}>
            Add Your Listing
        </h1>

    </div>
            <div className="tens" style={toggle?{display:'none'}:{display:'grid'}}>
    <div className="cards clouou" style={{paddingTop:"-10px"}} >
            <div className={tolor?"card-bi c1":"card-bi td1"} onClick={(()=>setTolor(!tolor))&&(()=>setColor(!color))} onMouseEnter={!tolor?(()=>setTolor(!tolor)):(()=>setTolor(tolor))}onMouseLeave={!color ?(()=>setTolor(!tolor)):(()=>setTolo(tolor))}>    
            <div className={tolor?"til t0":"til"} >
                <Image alt="Profile"  src={tolor?a1:k} style={{height:"100%"}}/>
                <h4>People </h4>
            </div>
            <p>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
            
    
            </div>
          
            <div  className={tolo?"card-bi c2":"card-bi td2"} onClick={(()=>setTolo(!tolo))&&(()=>setColo(!colo))} onMouseEnter={!tolo?(()=>setTolo(!tolo)):(()=>setTolo(tolo))}onMouseLeave={!colo ?(()=>setTolo(!tolo)):(()=>setTolo(tolo))}>  
            <div className={tolo?"til t1":"til"} >
                <Image alt="Profile" src={tolo?a3:l} style={{height:"100%"}}/>
                <h4>Place </h4>
            </div>
<p>An Address.  Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus.</p>                
            </div>
            <div className={tol?"card-bi c3":"card-bi td3"} onClick={(()=>setTol(!tol))&&(()=>setCol(!col))} onMouseEnter={!tol?(()=>setTol(!tol)):(()=>setTol(tol))}onMouseLeave={!col ?(()=>setTol(!tol)):(()=>setTol(tol))}>
            <div className={tol?"til t2":"til"} >
                <Image alt="Profile"  src={tol?a4:m} style={{height:"100%"}}/>
                <h4>Product </h4>
            </div>
<p>An Item that you can Book, Buy or Rent.  Appointment, Ticket, or Voucher.  Equipment, Instrument or Activity Kit.</p>                
            </div>
            <div className={to?"card-bi c4":"card-bi td4"} onClick={(()=>setTo(!to))&&(()=>setCo(!co))} onMouseEnter={!to?(()=>setTo(!to)):(()=>setTo(to))}onMouseLeave={!co ?(()=>setTo(!to)):(()=>setTo(to))}>
            <div className={to?"til t3":"til"} >
                <Image alt="Profile"  src={to?a2:n} style={{height:"100%"}}/>
                <h4>Program </h4>
            </div>
<p>An Event with Venue and Date.  Meetup, Workshop or Webinar.  Exhibition, Performance or Competition.</p>                
            </div>
            </div>





</div>
</div>
    );
}
export default Color;