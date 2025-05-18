"use client";
import { createContext,useContext,useRef,useState}  from "react";


const Appcontext=createContext(undefined);
export function AppWrapper({children}){
    let [name,setName]=useState('Guillaume');
      const [data, setData] = useState({h:300,w:300});    
      const [image,setImage]=useState('')
      const [curentComponent, setCurentComponent] = useState([]);  // Initialized as undefined
      const[left,setLeft]=useState('')
      const[top,setTop]=useState('')
      const[height,setHeight]=useState('')
      const[width,setWidth]=useState('')
      const[images,setImages]=useState([])

      const refi = useRef();
      const[saviour,setSaviour]=useState([]);
      const[savr,setSavr]=useState([]);
      const moveElement=(id,currentInfo,indjd)=>{
        setCurentComponent(currentInfo);
        let isMoving=true
        const currentDiv=document.getElementById(id)
        const mousemove=({movementX,movementY})=>{
          const getStyle=window.getComputedStyle(currentDiv)
          const left=parseInt(getStyle.left)
          const top=parseInt(getStyle.top)
        
        if (isMoving){
          currentDiv.style.left=`${left+ movementX}px`
          currentDiv.style.top=`${top+ movementY}px`
    
        }
      }
        
        const mouseup=(e)=>{
          isMoving=false
          window.removeEventListener('mousemove',mousemove)
          window.removeEventListener('mousemove',mouseup)
         let lll=parseInt(currentDiv.style.left)
         let ttt=parseInt(currentDiv.style.top)
         let tempoo=[...saviour]
       
    
         let idid=(components[0].inde*100)
         idid=idid+indjd
         const tempsav={ix:idid,left:lll,top:ttt}
         tempoo=tempoo.filter(c=>c.ix!==idid)
         tempoo.push(tempsav)
         setSaviour(tempoo)
        }
    
    
        window.addEventListener('mousemove',mousemove)
        window.addEventListener('mouseup',mouseup)
    
      }
         const resizeElement=(id,currentInfo,indj)=>{
    
    
          setCurentComponent(currentInfo);
          let isMoving=true
          const currentDiv=document.getElementById(id)
          const mousemove=({movementX,movementY})=>{
            const getStyle=window.getComputedStyle(currentDiv)
            const height=parseInt(getStyle.height)
            const width=parseInt(getStyle.width)
          
          if (isMoving){
            currentDiv.style.height=`${height+ movementY}px`
            currentDiv.style.width=`${width+ movementX}px`
      
          }
        }
          
          const mouseup=(e)=>{
            isMoving=false
            window.removeEventListener('mousemove',mousemove)
            window.removeEventListener('mousemove',mouseup)
            const inex = components.findIndex((c) => c.id === curentComponent.id);
            
            let aass=parseInt(currentDiv.style.height)
            let aasas=parseInt(currentDiv.style.width)
            let tempo=[...savr]
            let idi=(components[0].inde*100)
            idi=idi+indj
            const tempsv={ix:idi,height:aass,width:aasas}
            tempo=tempo.filter(c=>c.ix!==idi)
            tempo.push(tempsv)
            setSavr(tempo)
    
           
            
       
    
          }
         
        
          window.addEventListener('mousemove',mousemove)
          window.addEventListener('mouseup',mouseup)
      
    
        }

      const[rotate,setRotate]=useState(0);
      const[padding,setPadding]=useState(4)
      const[font,setFont]=useState(10)
      const[text,setText]=useState('add text')


      const[weight,setWeight]=useState(100)
      const inpRef = useRef();
      const inpRe = useRef();
      const [bb,setBb]=useState(0)



      const[opacity,setOpacity]=useState(1)
      const[zindex,setZindex]=useState(99999)

      const[badebaap,setBadebapp]=useState(
        [
          [
            {
              "name": "main",
              "type": "ref",
              "id": 0,
              "inde": 0,
              "height": 400,
              "width": 600,
              "z_index": 1,
              "opacity": 1,
              "color": "#f0f0f0",
              "image": "",
              setCurentComponent: (a) => setCurentComponent(a)
            },
            {
              "id": 1,
              "name": "shape",
              "type": "rect",
              "left": 100,
              "top": 150,
              "opacity": 0.8,
              "height": 150,
              "width": 200,
              "z_index": 6,
              "color": "lightblue",
              setCurentComponent: (a) => setCurentComponent(a),
              moveElement: moveElement,
              resizeElement: resizeElement
            },
            {
              "id": 2,
              "name": "shape",
              "type": "circle",
              "left": 400,
              "top": 250,
              "opacity": 1,
              "height": 120,
              "width": 120,
              "z_index": 5,
              "color": "red",
              setCurentComponent: (a) => setCurentComponent(a),
              moveElement: moveElement,
              resizeElement: resizeElement
            },
            {
              "id": 3,
              "name": "shape",
              "type": "ellipse",
              "left": 150,
              "top": 180,
              "opacity": 0.7,
              "height": 150,
              "width": 250,
              "z_index": 4,
              "color": "green",
              setCurentComponent: (a) => setCurentComponent(a),
              moveElement: moveElement,
              resizeElement: resizeElement
            },
            {
              "id": 4,
              "name": "shape",
              "type": "rect",
              "left": 150,
              "top": 500,
              "opacity": 1,
              "height": 100,
              "width": 100,
              "z_index": 3,
              "color": "#FFF700",
              setCurentComponent: (a) => setCurentComponent(a),
              moveElement: moveElement,
              resizeElement: resizeElement
            },
            {
              "id": 5,
              "name": "shape",
              "type": "circle",
              "left": 850,
              "top": 350,
              "opacity": 0.9,
              "height": 140,
              "width": 140,
              "z_index": 2,
              "color": "purple",
              setCurentComponent: (a) => setCurentComponent(a),
              moveElement: moveElement,
              resizeElement: resizeElement
            }
          ],
          [
            {
              "name": "main",
              "type": "ref",
              "id": 0,
              "inde": 1,
              "height": 400,
              "width": 600,
              "z_index": 1,
              "opacity": 1,
              "color": "#fff",
              "image": "",
              setCurentComponent: (a) => setCurentComponent(a)
            },
            {
              "id": 1,
              "name": "shape",
              "type": "rect",
              "left": 50,
              "top": 50,
              "opacity": 0.9,
              "height": 100,
              "width": 200,
              "z_index": 5,
              "color": "blue",
              setCurentComponent: (a) => setCurentComponent(a),
              moveElement: moveElement,
              resizeElement: resizeElement
            },
            {
              "id": 2,
              "name": "shape",
              "type": "circle",
              "left": 300,
              "top": 400,
              "opacity": 1,
              "height": 150,
              "width": 150,
              "z_index": 4,
              "color": "orange",
              setCurentComponent: (a) => setCurentComponent(a),
              moveElement: moveElement,
              resizeElement: resizeElement
            },
            {
              "id": 3,
              "name": "shape",
              "type": "rect",
              "left": 600,
              "top": 100,
              "opacity": 0.8,
              "height": 200,
              "width": 250,
              "z_index": 3,
              "color": "pink",
              setCurentComponent: (a) => setCurentComponent(a),
              moveElement: moveElement,
              resizeElement: resizeElement
            },
            {
              "id": 4,
              "name": "shape",
              "type": "ellipse",
              "left": 850,
              "top": 550,
              "opacity": 0.6,
              "height": 120,
              "width": 180,
              "z_index": 2,
              "color": "brown",
              setCurentComponent: (a) => setCurentComponent(a),
              moveElement: moveElement,
              resizeElement: resizeElement
            },
            {
              "id": 5,
              "name": "shape",
              "type": "circle",
              "left": 150,
              "top": 600,
              "opacity": 0.7,
              "height": 130,
              "width": 130,
              "z_index": 1,
              "color": "lime",
              setCurentComponent: (a) => setCurentComponent(a),
              moveElement: moveElement,
              resizeElement: resizeElement
            }
          ]
        ]
      )
      let apires;
      { /*
        
              [
          {
            name: "main",
            type: "ref",
            id: 0,
            inde:bb,
            height: data.h??0,  // Fallback to 0 if `data.h` is null or undefined
            width: data.w??0,    // Fallback to 0 if `data.w` is null or undefined
            z_index: 1,
            opacity:1,
            color: '#fff',
            image: "",
            setCurentComponent: (a) => setCurentComponent(a) , // Typing the function properly

          }
        ]
            [
          {
            color: "#ffffff",
            height: 400,
            id: 0,
            image: "",
            inde: 0,
            name: "main",
            opacity: 1,
            setCurentComponent: (a) => setCurentComponent(a),
            type: "ref",
            width: 600,
            z_index: 1
          }
          
        ]
      */}
      
      const [components, setComponents] = useState(

      
        [
          {
            color: "#fff",
            height: 400,
            id: 0,
            image: "",
            inde: 0,
            name: "main",
            opacity: 1,
            setCurentComponent: (a) => setCurentComponent(a),
            type: "ref",
            width: 600,
            z_index: 1
          }
        ]
      );  
      const[baapu,setBaapu]=useState(
        // [
        //   [
        //   {
        //     color: "#4834ad",
        //     height: 400,
        //     id: 0,
        //     image: "",
        //     inde: 0,
        //     name: "main",
        //     opacity: 1,
        //     setCurentComponent: (a) => setCurentComponent(a),
        //     type: "ref",
        //     width: 600,
        //     z_index: 1
        //   },
        //   {
        //     color: "#FFF700",
        //     height: 281,
        //     id: 1,
        //     image: "",
        //     left: -84,
        //     moveElement: moveElement,
        //     name: "shape",
        //     opacity: 0.6,
        //     resizeElement: resizeElement,
        //     rotate: 0,
  
        //     setCurentComponent: (a) => setCurentComponent(a),
        //     top: 152,
        //     type: "circle",
        //     width: 182,
        //     z_index: 6
        //   },
        //   {
        //     color: "#FFF700",
        //     font: 22,
        //     id: 2,
        //     left: 215,
        //     moveElement: moveElement,
        //     name: "text",
        //     opacity: 1,
        //     padding: 4,
        //     resizeElement: resizeElement,
        //     rotate: 0,
  
        //     setCurentComponent: (a) => setCurentComponent(a),
        //     title: "Final Year Project",
        //     top: 45,
        //     type: "text",
        //     weight: 400,
        //     z_index: 1
        //   },
        //   {
        //     color: "#ffffff",
        //     font: "30",
        //     id: 3,
        //     left: 206,
        //     moveElement: moveElement,
        //     name: "text",
        //     opacity: 1,
        //     padding: 4,
        //     resizeElement: resizeElement,
        //     rotate: 0,
  
        //     setCurentComponent: (a) => setCurentComponent(a),
        //     title: "DOCUMENT EDITOR PROJECT",
        //     top: 124,
        //     type: "text",
        //     weight: "800",
        //     z_index: 1
        //   },
        //   {
        //     color: "#FFF700",
        //     font: "24",
        //     id: 4,
        //     left: 209,
        //     moveElement: moveElement,
        //     name: "text",
        //     opacity: 1,
        //     padding: 4,
        //     resizeElement: resizeElement,
        //     rotate: 0,
  
        //     setCurentComponent: (a) => setCurentComponent(a),
        //     title: "By Swami Prathamesh &",
        //     top: 248,
        //     type: "text",
        //     weight: 400,
        //     z_index: 1
        //   },
        //   {
        //     color: "#FFF700",
        //     font: 22,
        //     id: 5,
        //     left: 210,
        //     moveElement: moveElement,
        //     name: "text",
        //     opacity: 1,
        //     padding: 4,
        //     resizeElement: resizeElement,
        //     rotate: 0,
  
        //     setCurentComponent: (a) => setCurentComponent(a),
        //     title: "Khose Abhishek",
        //     top: 282,
        //     type: "text",
        //     weight: 400,
        //     z_index: 1
        //   }
        // ],

        //  [
        //   {
        //     color: "#432ead",
        //     height: 400,
        //     id: 0,
        //     image: "",
        //     inde: 1,
        //     name: "main",
        //     opacity: 1,
        //     setCurentComponent: (a) => setCurentComponent(a),
        //     type: "ref",
        //     width: 600,
        //     z_index: 1
        //   },
        //   {
        //     color: "#FFF700",
        //     height: 202,
        //     id: 1,
        //     image: "",
        //     left: 291,
        //     moveElement: moveElement,
        //     name: "shape",
        //     opacity: 0.5,
        //     resizeElement: resizeElement,
        //     rotate: 0,
  
        //     setCurentComponent: (a) => setCurentComponent(a),
        //     top: 254,
        //     type: "circle",
        //     width: 320,
        //     z_index: 1
        //   },
        //   {
        //     color: "#FFF700",
        //     height: 253,
        //     id: 2,
        //     image: "",
        //     left: -16,
        //     moveElement: moveElement,
        //     name: "shape",
        //     opacity: 0.5,
        //     resizeElement: resizeElement,
        //     rotate: 0,
  
        //     setCurentComponent: (a) => setCurentComponent(a),
        //     top: 254,
        //     type: "circle",
        //     width: 139,
        //     z_index: 1
        //   },
        //   {
        //     color: "#b6e1fb",
        //     font: "50",
        //     id: 3,
        //     left: 56,
        //     moveElement: moveElement,
        //     name: "text",
        //     opacity: 1,
        //     padding: 4,
        //     resizeElement: resizeElement,
        //     rotate: 0,
  
        //     setCurentComponent: (a) => setCurentComponent(a),
        //     title: "WHAT IT CAN DO",
        //     top: 7,
        //     type: "text",
        //     weight: "800",
        //     z_index: 1
        //   },
        //   {
        //     color: "#FFF700",
        //     height: 72,
        //     id: 4,
        //     image: "",
        //     left: 6,
        //     moveElement: moveElement,
        //     name: "shape",
        //     opacity: 1,
        //     resizeElement: resizeElement,
        //     rotate: 0,
  
        //     setCurentComponent: (a) => setCurentComponent(a),
        //     top: 9,
        //     type: "rect",
        //     width: 11,
        //     z_index: 1
        //   },
        //   {
        //     color: "#f0f0f0",
        //     height: 80,
        //     id: 5,
        //     image: "",
        //     left: 21,
        //     moveElement: moveElement,
        //     name: "shape",
        //     opacity: 0.3,
        //     resizeElement: resizeElement,
        //     rotate: 0,
  
        //     setCurentComponent: (a) => setCurentComponent(a),
        //     top: 7,
        //     type: "rect",
        //     width: 576,
        //     z_index: 1
        //   },
        //   {
        //     color: "#ffc2c2",
        //     font: "20",
        //     id: 6,
        //     left: 257,
        //     moveElement: moveElement,
        //     name: "text",
        //     opacity: 1,
        //     padding: 4,
        //     resizeElement: resizeElement,
        //     rotate: 0,
  
        //     setCurentComponent: (a) => setCurentComponent(a),
        //     title: "# Can create           # Can edit              # Can design ",
        //     top: 138,
        //     type: "text",
        //     weight: 400,
        //     z_index: 1
        //   },
        //   {
        //     color: "#c2e4ff",
        //     font: 22,
        //     id: 7,
        //     left: 147,
        //     moveElement: moveElement,
        //     name: "text",
        //     opacity: 1,
        //     padding: 4,
        //     resizeElement: resizeElement,
        //     rotate: 0,
  
        //     setCurentComponent: (a) => setCurentComponent(a),
        //     title: "# Can create           # Can edit              # Can design ",
        //     top: 175,
        //     type: "text",
        //     weight: 400,
        //     z_index: 1
        //   },
        //   {
        //     color: "#a0ea85",
        //     font: 22,
        //     id: 8,
        //     left: -4,
        //     moveElement: moveElement,
        //     name: "text",
        //     opacity: 1,
        //     padding: 4,
        //     resizeElement: resizeElement,
        //     rotate: 0,
  
        //     setCurentComponent: (a) => setCurentComponent(a),
        //     title: "# Can create           # Can edit              # Can design ",
        //     top: 218,
        //     type: "text",
        //     weight: 400,
        //     z_index: 1
        //   }
        // ],
        //  [
        //   {
        //     color: "#42e407",
        //     height: 400,
        //     id: 0,
        //     image: "",
        //     inde: 2,
        //     name: "main",
        //     opacity: 1,
        //     setCurentComponent: (a) => setCurentComponent(a),
        //     type: "ref",
        //     width: 600,
        //     z_index: 1
        //   },
        //   {
        //     color: "#FFF700",
        //     height: 268,
        //     id: 1,
        //     image: "",
        //     left: -133,
        //     moveElement: moveElement,
        //     name: "shape",
        //     opacity: 0.7,
        //     resizeElement: resizeElement,
        //     rotate: 0,
  
        //     setCurentComponent: (a) => setCurentComponent(a),
        //     top: -122,
        //     type: "rect",
        //     width: 568,
        //     z_index: 6
        //   },
        //   {
        //     color: "#FFF700",
        //     height: 79,
        //     id: 2,
        //     image: "",
        //     left: -51,
        //     moveElement: moveElement,
        //     name: "shape",
        //     opacity: 0.8,
        //     resizeElement: resizeElement,
        //     rotate: 0,
  
        //     setCurentComponent: (a) => setCurentComponent(a),
        //     top: 340,
        //     type: "rect",
        //     width: 649,
        //     z_index: 6
        //   },
        //   {
        //     color: "#bbff00",
        //     height: 116,
        //     id: 3,
        //     image: "",
        //     left: 206,
        //     moveElement: moveElement,
        //     name: "shape",
        //     opacity: 0.7,
        //     resizeElement: resizeElement,
        //     rotate: 0,
  
        //     setCurentComponent: (a) => setCurentComponent(a),
        //     top: 187,
        //     type: "circle",
        //     width: 426,
        //     z_index: 6
        //   },
        //   {
        //     color: "#ffffff",
        //     font: "30",
        //     id: 4,
        //     left: 22,
        //     moveElement: moveElement,
        //     name: "text",
        //     opacity: 1,
        //     padding: 4,
        //     resizeElement: resizeElement,
        //     rotate: 0,
  
        //     setCurentComponent: (a) => setCurentComponent(a),
        //     title: "Try every possible combination",
        //     top: 148,
        //     type: "text",
        //     weight: "400",
        //     z_index: 6
        //   }
        // ],
        //  [
        //   {
        //     color: "#f0e5e5",
        //     height: 400,
        //     id: 0,
        //     image: "",
        //     inde: 3,
        //     name: "main",
        //     opacity: 1,
        //     setCurentComponent: (a) => setCurentComponent(a),
        //     type: "ref",
        //     width: 600,
        //     z_index: 1
        //   },
        //   {
        //     color: "#ffa238",
        //     height: 235,
        //     id: 1,
        //     image: "",
        //     left: -39,
        //     moveElement: moveElement,
        //     name: "shape",
        //     opacity: 1,
        //     resizeElement: resizeElement,
        //     rotate: 37,
  
        //     setCurentComponent: (a) => setCurentComponent(a),
        //     top: -5,
        //     type: "rect",
        //     width: 242,
        //     z_index: 1
        //   },
        //   {
        //     color: "#29fbff",
        //     height: 231,
        //     id: 2,
        //     image: "",
        //     left: 177,
        //     moveElement: moveElement,
        //     name: "shape",
        //     opacity: 1,
        //     resizeElement: resizeElement,
        //     rotate: 37,
  
        //     setCurentComponent: (a) => setCurentComponent(a),
        //     top: 110,
        //     type: "rect",
        //     width: 120,
        //     z_index: 1
        //   },
        //   {
        //     color: "#ff94eb",
        //     height: 226,
        //     id: 3,
        //     image: "",
        //     left: 276,
        //     moveElement: moveElement,
        //     name: "shape",
        //     opacity: 1,
        //     resizeElement: resizeElement,
        //     rotate: 37,
  
        //     setCurentComponent: (a) => setCurentComponent(a),
        //     top: 203,
        //     type: "rect",
        //     width: 176,
        //     z_index: 1
        //   },
        //   {
        //     color: "#69ff29",
        //     height: 155,
        //     id: 4,
        //     image: "",
        //     left: 188,
        //     moveElement: moveElement,
        //     name: "shape",
        //     opacity: 1,
        //     resizeElement: resizeElement,
        //     rotate: 37,
  
        //     setCurentComponent: (a) => setCurentComponent(a),
        //     top: -76,
        //     type: "rect",
        //     width: 206,
        //     z_index: 1
        //   },
        //   {
        //     color: "#ff2929",
        //     height: 135,
        //     id: 5,
        //     image: "",
        //     left: 363,
        //     moveElement: moveElement,
        //     name: "shape",
        //     opacity: 0.8,
        //     resizeElement: resizeElement,
        //     rotate: 37,
  
        //     setCurentComponent: (a) => setCurentComponent(a),
        //     top: 71,
        //     type: "rect",
        //     width: 227,
        //     z_index: 1
        //   },
        //   {
        //     color: "#FFF700",
        //     height: 182,
        //     id: 6,
        //     image: "",
        //     left: -69,
        //     moveElement: moveElement,
        //     name: "shape",
        //     opacity: 1,
        //     resizeElement: resizeElement,
        //     rotate: 37,
  
        //     setCurentComponent: (a) => setCurentComponent(a),
        //     top: 264,
        //     type: "rect",
        //     width: 152,
        //     z_index: 6
        //   },
        //   {
        //     color: "#ce70f0",
        //     height: 101,
        //     id: 7,
        //     image: "",
        //     left: 480,
        //     moveElement: moveElement,
        //     name: "shape",
        //     opacity: 1,
        //     resizeElement: resizeElement,
        //     rotate: 37,
  
        //     setCurentComponent: (a) => setCurentComponent(a),
        //     top: -26,
        //     type: "rect",
        //     width: 162,
        //     z_index: 1
        //   },
        //   {
        //     color: "#1529c1",
        //     height: 100,
        //     id: 8,
        //     image: "",
        //     left: 93,
        //     moveElement: moveElement,
        //     name: "shape",
        //     opacity: 1,
        //     resizeElement: resizeElement,
        //     rotate: 37,
  
        //     setCurentComponent: (a) => setCurentComponent(a),
        //     top: 359,
        //     type: "rect",
        //     width: 100,
        //     z_index: 6
        //   },
        //   {
        //     color: "#15c188",
        //     height: 203,
        //     id: 9,
        //     image: "",
        //     left: 495,
        //     moveElement: moveElement,
        //     name: "shape",
        //     opacity: 0.6,
        //     resizeElement: resizeElement,
        //     rotate: 37,
  
        //     setCurentComponent: (a) => setCurentComponent(a),
        //     top: 251,
        //     type: "rect",
        //     width: 125,
        //     z_index: 1
        //   },
        //   {
        //     color: "#ffffff",
        //     height: 246,
        //     id: 10,
        //     image: "",
        //     left: 89,
        //     moveElement: moveElement,
        //     name: "shape",
        //     opacity: 0.6,
        //     resizeElement: resizeElement,
        //     rotate: 1,
  
        //     setCurentComponent: (a) => setCurentComponent(a),
        //     top: 68,
        //     type: "rect",
        //     width: 444,
        //     z_index: 1
        //   },
        //   {
        //     color: "#ffffff",
        //     font: "60",
        //     id: 11,
        //     left: 152,
        //     moveElement: moveElement,
        //     name: "text",
        //     opacity: 1,
        //     padding: 4,
        //     resizeElement: resizeElement,
        //     rotate: 1,
  
        //     setCurentComponent: (a) => setCurentComponent(a),
        //     title: "Thank You",
        //     top: 126,
        //     type: "text",
        //     weight: "600",
        //     z_index: 12
        //   }
        // ]
        // ]
        

        
        
        
        
    
    
    );
const[baapi,setBaapi]=useState(
  // [
  //   // Page 1
  //   [
  //     {
  //       color: "#1e3a8a",
  //       height: 400,
  //       id: 0,
  //       image: "",
  //       inde: 0,
  //       name: "main",
  //       opacity: 1,
  //       setCurentComponent: (a) => setCurentComponent(a),
  //       type: "ref",
  //       width: 600,
  //       z_index: 1
  //     },
  //     {
  //       color: "#FFF700",
  //       height: 250,
  //       id: 1,
  //       image: "",
  //       left: 100,
  //       moveElement: moveElement,
  //       name: "shape",
  //       opacity: 0.6,
  //       resizeElement: resizeElement,
  //       rotate: 45,
  //       setCurentComponent: (a) => setCurentComponent(a),
  //       top: 100,
  //       type: "circle",
  //       width: 150,
  //       z_index: 3
  //     },
  //     {
  //       color: "red",
  //       font: 32,
  //       id: 2,
  //       left: 200,
  //       moveElement: moveElement,
  //       name: "text",
  //       opacity: 1,
  //       padding: 10,
  //       resizeElement: resizeElement,
  //       rotate: 0,
  //       setCurentComponent: (a) => setCurentComponent(a),
  //       title: "Welcome to the Presentation",
  //       top: 50,
  //       type: "text",
  //       weight: 700,
  //       z_index: 2
  //     },
  //     {
  //       color: "#b6e1fb",
  //       font: 24,
  //       id: 3,
  //       left: 220,
  //       moveElement: moveElement,
  //       name: "text",
  //       opacity: 0.8,
  //       padding: 8,
  //       resizeElement: resizeElement,
  //       rotate: 0,
  //       setCurentComponent: (a) => setCurentComponent(a),
  //       title: "Let's explore the features.",
  //       top: 200,
  //       type: "text",
  //       weight: 400,
  //       z_index: 1
  //     }
  //   ],
  //   // Page 2
  //   [
  //     {
  //       color: "#34d399",
  //       height: 400,
  //       id: 0,
  //       image: "",
  //       inde: 1,
  //       name: "main",
  //       opacity: 1,
  //       setCurentComponent: (a) => setCurentComponent(a),
  //       type: "ref",
  //       width: 600,
  //       z_index: 1
  //     },
  //     {
  //       color: "green",
  //       height: 250,
  //       id: 1,
  //       image: "",
  //       left: 120,
  //       moveElement: moveElement,
  //       name: "shape",
  //       opacity: 0.8,
  //       resizeElement: resizeElement,
  //       rotate: 30,
  //       setCurentComponent: (a) => setCurentComponent(a),
  //       top: 50,
  //       type: "rect",
  //       width: 200,
  //       z_index: 4
  //     },
  //     {
  //       color: "#1f2937",
  //       font: 40,
  //       id: 2,
  //       left: 160,
  //       moveElement: moveElement,
  //       name: "text",
  //       opacity: 1,
  //       padding: 15,
  //       resizeElement: resizeElement,
  //       rotate: 0,
  //       setCurentComponent: (a) => setCurentComponent(a),
  //       title: "Features of the System",
  //       top: 120,
  //       type: "text",
  //       weight: 700,
  //       z_index: 2
  //     },
  //     {
  //       color: "#9ca3af",
  //       font: 22,
  //       id: 3,
  //       left: 180,
  //       moveElement: moveElement,
  //       name: "text",
  //       opacity: 0.9,
  //       padding: 5,
  //       resizeElement: resizeElement,
  //       rotate: 0,
  //       setCurentComponent: (a) => setCurentComponent(a),
  //       title: "Feature 1: User-friendly interface",
  //       top: 220,
  //       type: "text",
  //       weight: 400,
  //       z_index: 1
  //     },
  //     {
  //       color: "#9ca3af",
  //       font: 22,
  //       id: 4,
  //       left: 180,
  //       moveElement: moveElement,
  //       name: "text",
  //       opacity: 0.9,
  //       padding: 5,
  //       resizeElement: resizeElement,
  //       rotate: 0,
  //       setCurentComponent: (a) => setCurentComponent(a),
  //       title: "Feature 2: Customizable components",
  //       top: 260,
  //       type: "text",
  //       weight: 400,
  //       z_index: 1
  //     }
  //   ],
  //   // Page 3
  //   [
  //     {
  //       color: "#fbbf24",
  //       height: 400,
  //       id: 0,
  //       image: "",
  //       inde: 2,
  //       name: "main",
  //       opacity: 1,
  //       setCurentComponent: (a) => setCurentComponent(a),
  //       type: "ref",
  //       width: 600,
  //       z_index: 1
  //     },
  //     {
  //       color: "#facc15",
  //       height: 220,
  //       id: 1,
  //       image: "",
  //       left: 180,
  //       moveElement: moveElement,
  //       name: "shape",
  //       opacity: 0.5,
  //       resizeElement: resizeElement,
  //       rotate: 60,
  //       setCurentComponent: (a) => setCurentComponent(a),
  //       top: 70,
  //       type: "circle",
  //       width: 220,
  //       z_index: 3
  //     },
  //     {
  //       color: "#1f2937",
  //       font: 40,
  //       id: 2,
  //       left: 220,
  //       moveElement: moveElement,
  //       name: "text",
  //       opacity: 1,
  //       padding: 12,
  //       resizeElement: resizeElement,
  //       rotate: 0,
  //       setCurentComponent: (a) => setCurentComponent(a),
  //       title: "Design Principles",
  //       top: 50,
  //       type: "text",
  //       weight: 700,
  //       z_index: 2
  //     },
  //     {
  //       color: "#9ca3af",
  //       font: 22,
  //       id: 3,
  //       left: 180,
  //       moveElement: moveElement,
  //       name: "text",
  //       opacity: 0.8,
  //       padding: 6,
  //       resizeElement: resizeElement,
  //       rotate: 0,
  //       setCurentComponent: (a) => setCurentComponent(a),
  //       title: "Simple, intuitive, and powerful.",
  //       top: 200,
  //       type: "text",
  //       weight: 400,
  //       z_index: 1
  //     }
  //   ],
  //   // Page 4
  //   [
  //     {
  //       color: "#8b5cf6",
  //       height: 400,
  //       id: 0,
  //       image: "",
  //       inde: 3,
  //       name: "main",
  //       opacity: 1,
  //       setCurentComponent: (a) => setCurentComponent(a),
  //       type: "ref",
  //       width: 600,
  //       z_index: 1
  //     },
  //     {
  //       color: "blue",
  //       height: 250,
  //       id: 1,
  //       image: "",
  //       left: 50,
  //       moveElement: moveElement,
  //       name: "shape",
  //       opacity: 0.7,
  //       resizeElement: resizeElement,
  //       rotate: 90,
  //       setCurentComponent: (a) => setCurentComponent(a),
  //       top: 100,
  //       type: "rect",
  //       width: 300,
  //       z_index: 4
  //     },
  //     {
  //       color: "#f1f5f9",
  //       font: 28,
  //       id: 2,
  //       left: 180,
  //       moveElement: moveElement,
  //       name: "text",
  //       opacity: 1,
  //       padding: 10,
  //       resizeElement: resizeElement,
  //       rotate: 0,
  //       setCurentComponent: (a) => setCurentComponent(a),
  //       title: "How It Works",
  //       top: 50,
  //       type: "text",
  //       weight: 600,
  //       z_index: 2
  //     },
  //     {
  //       color: "#9ca3af",
  //       font: 20,
  //       id: 3,
  //       left: 160,
  //       moveElement: moveElement,
  //       name: "text",
  //       opacity: 0.9,
  //       padding: 6,
  //       resizeElement: resizeElement,
  //       rotate: 0,
  //       setCurentComponent: (a) => setCurentComponent(a),
  //       title: "Step 1: Set up your project",
  //       top: 150,
  //       type: "text",
  //       weight: 400,
  //       z_index: 1
  //     }
  //   ],
  //   // Page 5
  //   [
  //     {
  //       color: "#9d174d",
  //       height: 400,
  //       id: 0,
  //       image: "",
  //       inde: 4,
  //       name: "main",
  //       opacity: 1,
  //       setCurentComponent: (a) => setCurentComponent(a),
  //       type: "ref",
  //       width: 600,
  //       z_index: 1
  //     },
  //     {
  //       color: "#fcd34d",
  //       height: 200,
  //       id: 1,
  //       image: "",
  //       left: 250,
  //       moveElement: moveElement,
  //       name: "shape",
  //       opacity: 0.7,
  //       resizeElement: resizeElement,
  //       rotate: 135,
  //       setCurentComponent: (a) => setCurentComponent(a),
  //       top: 50,
  //       type: "rect",
  //       width: 150,
  //       z_index: 3
  //     },
  //     {
  //       color: "black",
  //       font: 36,
  //       id: 2,
  //       left: 180,
  //       moveElement: moveElement,
  //       name: "text",
  //       opacity: 1,
  //       padding: 14,
  //       resizeElement: resizeElement,
  //       rotate: 0,
  //       setCurentComponent: (a) => setCurentComponent(a),
  //       title: "Interactive Elements",
  //       top: 80,
  //       type: "text",
  //       weight: 700,
  //       z_index: 2
  //     }
  //   ],
  //   // Page 6
  //   [
  //     {
  //       color: "#2c3e50",
  //       height: 400,
  //       id: 0,
  //       image: "",
  //       inde: 5,
  //       name: "main",
  //       opacity: 1,
  //       setCurentComponent: (a) => setCurentComponent(a),
  //       type: "ref",
  //       width: 600,
  //       z_index: 1
  //     },
  //     {
  //       color: "#16a085",
  //       height: 250,
  //       id: 1,
  //       image: "",
  //       left: 100,
  //       moveElement: moveElement,
  //       name: "shape",
  //       opacity: 0.7,
  //       resizeElement: resizeElement,
  //       rotate: 180,
  //       setCurentComponent: (a) => setCurentComponent(a),
  //       top: 120,
  //       type: "rect",
  //       width: 200,
  //       z_index: 3
  //     },
  //     {
  //       color: "#ecf0f1",
  //       font: 26,
  //       id: 2,
  //       left: 180,
  //       moveElement: moveElement,
  //       name: "text",
  //       opacity: 1,
  //       padding: 10,
  //       resizeElement: resizeElement,
  //       rotate: 0,
  //       setCurentComponent: (a) => setCurentComponent(a),
  //       title: "Final Thoughts",
  //       top: 50,
  //       type: "text",
  //       weight: 600,
  //       z_index: 2
  //     },
  //     {
  //       color: "#9ca3af",
  //       font: 20,
  //       id: 3,
  //       left: 150,
  //       moveElement: moveElement,
  //       name: "text",
  //       opacity: 0.8,
  //       padding: 8,
  //       resizeElement: resizeElement,
  //       rotate: 0,
  //       setCurentComponent: (a) => setCurentComponent(a),
  //       title: "Thank you for your time!",
  //       top: 250,
  //       type: "text",
  //       weight: 400,
  //       z_index: 1
  //     }
  //   ]
  // ]
  
);
  const[baap,setBaap]=useState(
    [   [
      {
        color: "#fff",
        height: 400,
        id: 0,
        image: "",
        inde: 0,
        name: "main",
        opacity: 1,
        setCurentComponent: (a) => setCurentComponent(a),
        type: "ref",
        width: 600,
        z_index: 1
      },
      {
        color: "#FFF700",
        height: 281,
        id: 1,
        image: "",
        left: -84,
        moveElement: moveElement,
        name: "shape",
        opacity: 0.6,
        resizeElement: resizeElement,
        rotate: 0,

        setCurentComponent: (a) => setCurentComponent(a),
        top: 152,
        type: "circle",
        width: 182,
        z_index: 6
      },
      {
        color: "#FFF700",
        font: 22,
        id: 2,
        left: 215,
        moveElement: moveElement,
        name: "text",
        opacity: 1,
        padding: 4,
        resizeElement: resizeElement,
        rotate: 0,

        setCurentComponent: (a) => setCurentComponent(a),
        title: "Final Year Project",
        top: 45,
        type: "text",
        weight: 400,
        z_index: 1
      },
      {
        color: "#ffffff",
        font: "30",
        id: 3,
        left: 206,
        moveElement: moveElement,
        name: "text",
        opacity: 1,
        padding: 4,
        resizeElement: resizeElement,
        rotate: 0,

        setCurentComponent: (a) => setCurentComponent(a),
        title: "DOCUMENT EDITOR PROJECT",
        top: 124,
        type: "text",
        weight: "800",
        z_index: 1
      },
      {
        color: "#FFF700",
        font: "24",
        id: 4,
        left: 209,
        moveElement: moveElement,
        name: "text",
        opacity: 1,
        padding: 4,
        resizeElement: resizeElement,
        rotate: 0,

        setCurentComponent: (a) => setCurentComponent(a),
        title: "By Swami Prathamesh &",
        top: 248,
        type: "text",
        weight: 400,
        z_index: 1
      },
      {
        color: "#FFF700",
        font: 22,
        id: 5,
        left: 210,
        moveElement: moveElement,
        name: "text",
        opacity: 1,
        padding: 4,
        resizeElement: resizeElement,
        rotate: 0,

        setCurentComponent: (a) => setCurentComponent(a),
        title: "Khose Abhishek",
        top: 282,
        type: "text",
        weight: 400,
        z_index: 1
      }
    ]]
  )  
  const [baapii,setBaapii]=useState([components])
  const[hugh,setHugh]=useState();
  const[toke,setToke]=useState("");

    return (
        <Appcontext.Provider value={{
            name,setName,data,setData,toke,setToke,setImage,image,badebaap,setBadebapp,images,setImages,apires,hugh,setHugh,badebaap,curentComponent,saviour,setSaviour,bb,setBb,savr,setSavr, setCurentComponent,components,setComponents,left,setLeft,top,setTop,height,setHeight,width,setWidth,rotate,setRotate,padding,setPadding,weight,setWeight,font,setFont,opacity,setOpacity,refi,inpRef,inpRe,zindex,setZindex,text,setText,baap,setBaap}}>
                {children}
            </Appcontext.Provider>
        
    )

}
export function useAppcontext(){
    return useContext(Appcontext);
}




