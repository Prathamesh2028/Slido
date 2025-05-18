"use Client"
import Logo from "./assets/HobbyCue Logo v2 1.svg";
import search from "./assets/vect.svg";
import hob from "./assets/Hobbies.svg";
import explo from "./assets/Group.svg";
import drop from "./assets/drop.svg";
import router from 'next/navigation';

import a from "./assets/2.svg"
import b from "./assets/3.svg"
import c from "./assets/c.svg"
import d from "./assets/lock_black_24dp 1.svg"
import e from "./assets/OBJECTS.svg"
import f from "./assets/5793401 1.svg"
import g from "./assets/Vector (4).svg"
import h from "./assets/Vector (5).svg"
import i from "./assets/HobbyCue Logo v2 2.svg"
import j from "./assets/Vector (6).svg"
import k from "./assets/groups_black_24dp (1) 1 (1).svg"
import l from "./assets/Vector (7).svg"
import m from "./assets/Vector (8).svg"
import n from "./assets/Vector (9).svg"
import o from "./assets/Vector (10).svg"
import p from "./assets/Vector (11).svg"
import q from "./assets/Ellipse 12 (1).svg"
import r from "./assets/End.svg"
import s from "./assets/OBJECTS (1).svg"
import t from "./assets/OBJECTS (2).svg"
import u from "./assets/Group 56.svg"
import v from "./assets/Group 57.svg"
import w from "./assets/Group 58.svg"
import x from "./assets/Group 59.svg"
import y from "./assets/Group 60.svg"
import z from "./assets/Group 61.svg"
import z1 from "./assets/Group 62.svg"
import z2 from "./assets/Group 63.svg"
import z3 from"./assets/Ellipse 9.svg"
import z4 from"./assets/Ellipse 9 (1).svg"
import z5 from"./assets/_x31__stroke.svg"

import z6 from"./assets/Group (4).svg"
import crop from "./assets/Vector (15).svg"

import z7 from"./assets/Password (1).svg"


import Tard from './icardu';
import Link from 'next/link';
import Dard from './cardi';



import Image from "next/image";

import "./Homee.css";
import { useState } from "react";
import Color from "./color_cards";

export default function Homy(){
    const[toggle,setToggle]=useState(false);
   
 const[togle,setTogle]=useState("continue");
 const[toglu,setToglu]=useState(false);
 const[toglui,setToglui]=useState(false);

 const[togli,setTogli]=useState(false);
 
 const[mogli,setMogli]=useState(false);
 const[nogli,setNogli]=useState(false);
 const [typer,SetTyper]=useState("text");
function top(){
   
}
function down(){
    if(toglui==false){
    window.scrollTo(0,4000);
    setToglui(!toglui);}
    else{
        window.scrollTo(0,0);
        setToglui(!toglui);
    }
}



      return(
        <div>
            <div>
                <nav className="navbar">
                    
                    <Image className="as"  src={Logo}             alt="Profile"
                    /> 
                    <div className="inpu">
                        <input style={{width:'270px',height:'40px',paddingLeft:'20px'}} placeholder="Search here..."/>
                        <button className="search-bt"><Image className="search-icon" src={search} /></button>
                    </div>

                    <div className="rightside">
                    <div className="expl" onClick={()=>setToglu(!toglu)}> 
                        <Image style={{backgroundColor:'white',height:'100%'}}    alt="Profile" src={explo}></Image>
                        <p style={{backgroundColor:'white',height:'100%'}}>Exploration</p>
                        <Image style={{backgroundColor:'white',height:'100%'}}src={drop}alt="Profile" ></Image>
                  

                    </div>
                    <div className="hob">
                        <Image style={{backgroundColor:'white'}}alt="Profile"  src={hob}></Image>
                        <p style={{backgroundColor:'white'}}>Hobbies</p>
                        <Image style={{backgroundColor:'white'}}alt="Profile"  src={drop}></Image>

                    </div>
                   
                    <Image style={{backgroundColor:'white'}}alt="Profile"  src={a}></Image>

                    <Image style={{backgroundColor:'white'}}alt="Profile" src={b}></Image>
                    <Image style={{backgroundColor:'white'}}alt="Profile" src={c}></Image>
                   <Link href="/sign"> <button className="sign">Sign In</button></Link>
                    </div>
                {toggle?  <div className="mini-nav">
                    <Image className="as" src={i}alt="Profile"  style={{width:'32px',height:'32px'}}/> 
                    <Image style={{backgroundColor:'white'}}alt="Profile" src={j}onClick={()=>setToggle(!toggle)}></Image>


                </div> :(
                    <div className="mini-nav">
                    
                    <Image className="as"alt="Profile"  src={Logo} style={{width:'156px',height:'32px'}}/> 
                    <div className="sub-right">
                     
                    <Image style={{backgroundColor:'white'}}alt="Profile" src={h}></Image>

                    <Image style={{backgroundColor:'white'}}alt="Profile" src={b}></Image>
                    <Image style={{backgroundColor:'white'}}alt="Profile" src={g} onClick={()=>setToggle(!toggle)}></Image>

                    
                    </div>
                    </div>)

                    }
                   




                </nav>
                <div  className="up btns" onClick={()=>down() } style={toglui?{background:"purple"}:{background:'white'}} ><Image src={!toglui?drop:crop}style={toglui?{background:"purple"}:{background:'white'}} ></Image></div>
                <div className="dropdown" style={!toglu?{display:'none'}:{display:'flex'}}>
                            <ul>
                                <li><h4>People-communities</h4></li>
                                <li><h4>Places-venues</h4></li>
                                <li><h4>Programs-events</h4></li>
                                <li><h4>Product-store</h4></li>
                                <li><h4>Blogs</h4></li>

                            </ul>
                        </div>
                <div className="hero" >
                    
                <div className="leftu" style={toggle?{display:'none'}:{display:'grid'}}> 
                    <h1>Explore your <span style={{color:"#0096C8"}}>Hobby</span> or <span style={{color:"purple"}}>Passion</span></h1>
                
                  <div className="p1">
                  <p>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform.Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
                  </p>
                  </div>
                    
                    <p className="p2">
                    If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.
                    </p>
                    
                    <p className="p-s">Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform.</p>
                    <div className="vecty">
        <Image alt="Profile"   src={e} />
        <Image alt="Profile"    src={f} />
        </div>
                </div>
                <div className="Rightu" style={toggle?{top:'50px'}:{top:'0px'}}>
                    
                       <div>
                       <div className="session"> <button onClick={()=>setTogle("continue") }style={togle=="continue"?{borderBottom:" 2px solid purple",color:"purple"}:{border:"none",color:"gray"}}> Sign In</button>
                       <button onClick={()=>setTogle("agree")}style={togle=="agree"?{borderBottom:" 2px solid purple",color:"purple"}:{border:"none",color:"gray"}}>Join In</button></div>
                       </div>

                        <button className="sign sa" style={{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"30%",paddingLeft:"20px"}}>
                            <Image alt="Profile"  style={{backgroundColor:'white',height:'60%',display:"block",background: "#F7F5F9",borderRadius:'100%'}}src={z5}></Image>Continue with google</button>

                        <button className="sign sa" style={{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"30%",paddingLeft:"20px"}}>
                            <Image alt="Profile"  style={{backgroundColor:'white',height:'60%',display:"block",background: "#F7F5F9",borderRadius:'100%'}}src={z6}></Image>

                            Continue with Facebook</button>
                        <div className="line"></div>
                    <input className="in" placeholder="Email" style={{paddingLeft:'5px'}}></input>
                    <div>
                    <input className="in" placeholder="Password" type={typer} style={{paddingLeft:'5px'}}>   
                    
                    </input>
                    <div className="imgu hs" onClick={typer=="text"?()=>SetTyper("password"):()=>SetTyper("text")}>
                    <Image alt="Profile"  style={{backgroundColor:'white',display:"block",background: "#F7F5F9",borderRadius:'100%',position:"relative",right:"30px"}}src={z7}></Image>

                    </div>

                    </div>

                    {togle=="continue"?<>
                        <div className="check">
                    <div className="checkin">
                        <input className="checked" type="checkbox"/><h4 style={{paddingLeft:'10px'}}>Remember me</h4>
                    </div>
                    <div className="checking">
                        <Image src={d} style={{height:'23px',width:'23px'}}/><h4 style={{paddingLeft:'10px'}}>Remember me</h4>

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
        </div>
        <div className="vect">
        <Image  alt="Profile"  src={e} />
        <Image alt="Profile"   src={f} />
        </div>
{!toggle?
<>
<div className="cards" >
<Tard id='1' Image="/static/media/groups_black_24dp (1) 1 (1).ad9fbdc2915e8442d3777b3ca35ff7fc.svg"title="People"para="Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator." btn="Connect" />
<Tard id='2' Image="/static/media/Vector (7).c1b74ea28d5dc5bffca7bab914f7daf0.svg"title="Place"para="Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue." btn="Meet up" />

<Tard id='3' Image="/static/media/Vector (8).aa2c60d64c75feb99e6207ccb25837cd.svg"title="Product"para="Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members." btn="Get it" />

<Tard id='4' Image="/static/media/Vector (9).c34a324a1c2ca503d324699496196402.svg"title="Program"para="Find events, meetups and workshops related to your hobby.  Register or buy tickets online." btn="Attend" />

</div>
<div className="biggy">
<div className="bigs">
<Tard id='5' Image="/static/media/Vector (10).1fbeca9fe01c79e0580a57893ea4db46.svg"title="Add your own"para="Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page" btn="Add new" />
</div>
<div className="bigu" style={{background:' #F7F5F9'}}>
    <div className="testimonial" style={{background:' #F7F5F9'}}>
                <Image alt="Profile"  src={p} style={{height:"100%",}}/>
                <h3>Testimonials</h3>
            </div>
            <div className="test" style={{background:' #F7F5F9'}}>
                <p>
                In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
                </p>
            </div>
            <div className="testimonial-end" style={{background:' #F7F5F9'}}>
                <audio controls>
                    

                </audio>
                <div>
                    <div className="feedbacker">
                        <Image alt="Profile"  src={q} style={{height:'100%'}}/>
                        <div className="stmt">
                        <h4>Shubha Nagarajan</h4>
                        <h3>Classical Dancer</h3>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="End">
            <div className="ending">
                <h1>Your Hobby, Your Community...</h1>
                <button>Get Started</button>
            </div>
            <div className="imgu">
                <Image alt="Profile"  src={s} />
                <Image alt="Profile"  src={t} />
             

            </div>
          
           
            
        </div>
        <div className="footer">
                <div className="foot">
                    <div className="footu">

                    <div className="foot-1">
                    <ul>
                       <div className="subi-title"> <h4>HobbyCue</h4>                        <Image style={{backgroundColor:'white',height:'100%'}}src={drop} onClick={()=>setTogli(!togli)}></Image>
                       </div>
                
                    <li>About Us</li>
                        <li>Our services</li>
                        <li>Work with us</li>
                        <li>FAQ</li>
                        <li>Contact Us</li>     
                        
                    </ul>
                </div>
                <div className="foot-1">
                    <ul>
                    <div className="subi-title"> <h4>How do I</h4>                        <Image style={{backgroundColor:'white'}} src={drop} onClick={()=>setMogli(!mogli)} ></Image>
                    </div>
                    

                    <li>Sign up</li>
                        <li>Add a Listing</li>
                        <li>Claim Listing</li>
                        <li>Post a Query</li>
                        <li>Add a Blogpost</li>
                        <li>Other Queries</li>
                        
                    </ul>
                </div>
                <div className="foot-1">
                    <ul>
                    <div className="subi-title"> <h4>Quick Links</h4>                        <Image style={{backgroundColor:'white'}} src={drop} onClick={()=>setNogli(!nogli)}></Image>
                    </div>

                        <li>Listing</li>
                        <li>Blogpost</li>
                        <li>Shop/Store</li>
                        <li>Community</li>
                        
                    </ul>
                </div>
                <div className="foot-2">
                    <div className="st">
                    <h4>Social Media</h4>
                    <div className="conn">
                    <Image alt="Profile"  style={{backgroundColor:'white'}}src={u}></Image>
                    <Image alt="Profile"  style={{backgroundColor:'white'}}src={v}></Image>
                    <Image alt="Profile"  style={{backgroundColor:'white'}}src={w}></Image>
                    <Image alt="Profile"  style={{backgroundColor:'white'}}src={x}></Image>
                    <Image alt="Profile"  style={{backgroundColor:'white'}}src={y}></Image>
                    <Image alt="Profile"  style={{backgroundColor:'white'}}src={z}></Image>
                    <Image alt="Profile"  style={{backgroundColor:'white'}}src={z1}></Image>
                    <Image alt="Profile"  style={{backgroundColor:'white'}}src={z2}></Image>

                    </div>

                    </div>
                    <div className="nd">
                    <h4>Invite Friends</h4>
                    <div className="inpu inpa">
                        <input style={{width:'260px',height:'30px'}}/>
                        <button className="search-bt"><Image alt="Profile"  className="search-icon" src={search} /></button>
                    </div>
                    <div className="inpu">
                        <input style={{width:'260px',height:'30px'}}/>
                        <button className="search-bt"><Image alt="Profile"  className="search-icon" src={search} /></button>
                    </div>
                    </div>

                    </div>
                    </div>
                    <div className="fitu">

                    <div className="foot-1">
                    <ul>
                       <div className="subi-title"> <h4>HobbyCue</h4>                        <Image alt="Profile" style={{backgroundColor:'white',height:'100%'}}src={drop} onClick={()=>setTogli(!togli)}></Image>
                       </div>
                  {togli?<>
                    <li>About Us</li>
                        <li>Our services</li>
                        <li>Work with us</li>
                        <li>FAQ</li>
                        <li>Contact Us</li></>      
                        :
                        <></>
                  }
                    </ul>
                </div>
                <div className="foot-1">
                    <ul>
                    <div className="subi-title"> <h4>How do I</h4>                        <Image alt="Profile" style={{backgroundColor:'white'}} src={drop} onClick={()=>setMogli(!mogli)} ></Image>
                    </div>
                    {mogli?<>

                    <li>Sign up</li>
                        <li>Add a Listing</li>
                        <li>Claim Listing</li>
                        <li>Post a Query</li>
                        <li>Add a Blogpost</li>
                        <li>Other Queries</li>
                        </>:<></>}
                    </ul>
                </div>
                <div className="foot-1">
                    <ul>
                    <div className="subi-title"> <h4>Quick Links</h4>                        <Image alt="Profile" style={{backgroundColor:'white'}} src={drop} onClick={()=>setNogli(!nogli)}></Image>
                    </div>
{nogli?<>
                        <li>Listing</li>
                        <li>Blogpost</li>
                        <li>Shop/Store</li>
                        <li>Community</li>
                        </>:<></>}
                    </ul>
                </div>
                <div className="foot-2">
                    <div className="st">
                    <h4>Social Media</h4>
                    <div className="conn">
                    <Image alt="Profile" style={{backgroundColor:'white'}}src={v}></Image>
                    <Image alt="Profile" style={{backgroundColor:'white'}}src={u}></Image>
                    <Image alt="Profile" style={{backgroundColor:'white'}}src={w}></Image>
                    <Image alt="Profile" style={{backgroundColor:'white'}}src={x}></Image>
                    <Image alt="Profile" style={{backgroundColor:'white'}}src={y}></Image>
                    <Image alt="Profile" style={{backgroundColor:'white'}}src={z}></Image>
                    <Image alt="Profile" style={{backgroundColor:'white'}}src={z1}></Image>
                    <Image alt="Profile" style={{backgroundColor:'white'}}src={z2}></Image>

                    </div>

                    </div>
                    <div className="nd">
                    <h4>Invite Friends</h4>
                    <div className="inpa">
                        <input style={{width:'80vw',height:'30px'}}/>
                        <button className="search-bt"><Image alt="Profile"  className="search-icon" src={search} /></button>
                    </div>
                    <div className="inpu">
                        <input style={{width:'260px',height:'30px'}}/>
                        <button className="search-bt"><Image alt="Profile"  className="search-icon" src={search} /></button>
                    </div>
                    </div>

                    </div>
                        
                    </div>
              
              
                   
                </div>
                
                <div className="copy">
                    <p>© Purple Cues Private Limited</p>
                </div>
                
                </div>
    
       

</>
:<></>

}
       
        
       
      

        </div>

      );
}