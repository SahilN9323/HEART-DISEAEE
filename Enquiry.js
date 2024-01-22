import {useState} from "react";
import emailjs from "@emailjs/browser";

function Enquiry(){
	const[name,setName]=useState("");
	const[college,setCollege]=useState("");
	const[phone,setPhone]=useState("");
	const[query,setQuery]=useState("");
	const[ans,setAns]=useState("");
	
	const hName=(event)=>{setName(event.target.value);}
	const hCollege=(event)=>{setCollege(event.target.value);}
	const hPhone=(event)=>{setPhone(event.target.value);}
	const hQuery=(event)=>{setQuery(event.target.value);}
	
	const save=(event)=>{
		event.preventDefault();
		let data={"from_name":name,"from_college":college,
		"from_phone":phone,"message":query};
		emailjs.send("service_xmdz3bo","template_fqu44qj",data,"fE8gs5RAOY6-sop67")
		.then(res=>setAns("WILL COMMUNICATE IN 2 HRS"))
		.catch(err=>{console.log(err)});
		 
	}
	return(
	<>
	<center>
	<form onSubmit={save}>
	<input type="text" placeholder="enter ur name" onChange={hName}/>
<br/><br/>
	<input type="text" placeholder="enter ur college name" 
	onChange={hCollege}/>
	<br/><br/>
	<input type="number" placeholder="enter ur phone number" onChange={hPhone}/>
	<br/><br/>
	<textarea placeholder="enter Your Query" rows={5} cols={30} onChange={hQuery}/>
	<br/><br/>
	<input type="submit"/>
	</form>
	<h1>{ans}</h1>
	</center>
	</>
	);
}
export default Enquiry;
/*import React, { useState } from 'react';

const TabWidget = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabTitles = ['Tab 1', 'Tab 2', 'Tab 3'];
  const tabContent = ['Content 1', 'Content 2', 'Content 3'];

  return (
    <div className="tab-widget">
      <div className="tab-titles">
        {tabTitles.map((title, index) => (
          <div
            key={index}
            className={`tab-title ${index === activeTab ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {title}
          </div>
        ))}
      </div>
      <div className="tab-content">{tabContent[activeTab]}</div>
    </div>
  );
};

export default TabWidget;
*/