import { useState } from "react"
export default function Generate(){
  let[val,setval]=useState("");
  let[qrcode,setqrcode]=useState(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example`);


  let handlechange=(event)=>{
    let value=event.target.value;
    console.log(value);
    setval(value);
  }
  
  let handlesubmit=(event)=>{
event.preventDefault();
setqrcode( `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${val}` )
console.log("Done");

    
  }
    return (
        <>
        <div className="main">
         <form action="" onSubmit={handlesubmit}>
            <input type="text" placeholder="ENTER TEXT" value={val} onChange={handlechange}/>
            <br /><br />
            <button>SUBMIT</button>
         </form>
         <div className="code">
       
          <img src={qrcode} alt="" />
          <br />
         
        
         </div>
         </div>
        
        </>
    )
}