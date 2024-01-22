import {useState,useRef} from "react";

function Login(){
const [name,setName]=useState("");
const [ans,setAns]=useState("");

const hName=(event)=>{setName(event.target.value);}

return(
<>
<center>
<form>
<h1>LOGIN PAGE:</h1>
<input type="text" placeholder="Enter your name" onChange={hName}/>
<br/><br/>
<input type="email" placeholder="Enter your Email"/>
<br/><br/>
<input type="submit"/>
</form>
</center>
</>
);
}
export default Login;