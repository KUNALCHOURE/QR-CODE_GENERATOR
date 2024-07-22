import { useRef, useState,useEffect } from "react"
import "./generator.css"
export default function Generate(){
  let[val,setval]=useState("");
  let[qrcode,setqrcode]=useState(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example`);
  const downloadl=useRef(null);


  let handlechange=(event)=>{
    let value=event.target.value;
    console.log(value);
    setval(value);
  }
  useEffect(() => {
    if (downloadl.current) {
      downloadl.current.href = qrcode;
    }
  }, [qrcode]);

  let handlesubmit=(event)=>{
event.preventDefault();
let qr=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${val}`
setqrcode(qr);  
console.log("Done");
if(downloadl.current){
  downloadl.current.href=qr;
}

    
  }
    return (
        <>
        <div className="main">
          <div className="form">
         <form action="" onSubmit={handlesubmit}>
            <input type="text" placeholder="ENTER TEXT" value={val} onChange={handlechange}/>
            <br /><br />
            <button>SUBMIT</button>
         </form>
         </div>
         <div className="code">
       
          <img src={qrcode} alt="" />
          <br />
         
        
         </div>
       
         </div>
        
        </>
    )
}