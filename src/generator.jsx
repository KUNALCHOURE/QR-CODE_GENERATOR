import { useState } from "react"
import QRCode from "react-qr-code";
import { useEffect } from "react";
export default function Generate(){
  let[val,setval]=useState("");
  let[bgcolor,setcolor]=useState("fffff");
  let[qrcode,setqrcode]=useState("");
  let [size,setsize]=useState("");

  let handlechange=(event)=>{
    let value=event.target.value;
    console.log(value);
    setval(value);
  }
  useEffect(() => { 
    setqrcode 
 (`http://api.qrserver.com/v1/create-qr-code/?data=${val}!&size=${size}x${size}&bgcolor=${bgcolor}`); 
  }, [val, size, bgcolor]); 
  
  let handlesubmit=(event)=>{
event.preventDefault();
setval(val);

    
  }
    return (
        <>
        <div className="main">
         <form action="" onSubmit={handlesubmit}>
            <input type="text" placeholder="ENTER TEXT" value={val} onChange={handlechange}/>
            <br /><br />
          
         </form>
         <div className="code">
       
          <img src={qrcode} alt="" />
        
         </div>
         </div>
        
        </>
    )
}