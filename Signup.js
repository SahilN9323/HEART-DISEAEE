import {useState,useRef} from "react";
import db from "./Firebaseconfig.js"
import {ref,set} from "firebase/database";

function Sign(){
const [name,setName]=useState("");
const [mail,setMail]=useState("");
const [ans,setAns]=useState("");

const hName=(event)=>{setName(event.target.value);}
const hEmail=(event)=>{setMail(event.target.value);}
const find=(event)=>{
    event.preventDefault();
    
let data={name,mail};
let n=name+"--"+new Date().toString();
let r=ref(db,"student/"+n);
set(r,data);
setAns("Thank YOu");
}
return(
<>
<center>
<form onSubmit={find}>
<h1>SIGN UP PAGE:</h1>
<input type="text" placeholder="Enter your name" onChange={hName}/>
<br/><br/>
<input type="number" step="any" placeholder="enter ur age"/>
<br/><br/>

<input type="email" placeholder="Enter your Email" onChange={hEmail}/>
<br/><br/>
<input type="submit"/>
</form>
<h1>{ans}</h1>
</center>
</>
);
}
export default Sign;