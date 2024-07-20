import { useState } from "react"

export default function Generate(){
  let[val,setval]=useState("");
  let handlechange=(event)=>{
    let value=event.target.value;
    console.log(value);
    setval(value);
  }
  let handlesubmit=()=>{
    
  }
    return (
        <>
         <form action="">
            <input type="text" placeholder="ENTER TEXT" value={val} onChange={handlechange}/>
            <br /><br />
          <button onSubmit={handlesubmit} >Submit</button>
         </form>
        
        </>
    )
}