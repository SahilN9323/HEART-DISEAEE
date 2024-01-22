import {Link} from "react-router-dom";
import {useState} from "react";
function Home(){
	const[Bmi,setBmi]=useState("");
	const[Age,setAge]=useState("");
	const[Sbp,setSbp]=useState("");
	const[Dbp,setDbp]=useState("");
	const[ans,setAns]=useState("");
	const hBmi=(event)=>{setBmi(event.target.value);}
	const hAge=(event)=>{setBmi(event.target.value);}
	const hSbp=(event)=>{setBmi(event.target.value);}
	const hDbp=(event)=>{setBmi(event.target.value);}

	const save=(event)=>{
		event.preventDefault();
		
	}
	return(
	<>
	<center>
		<form onSubmit={save}>
			BMI
			<br/>
			<input type="number" step="any" placeholder="ENter YOUR BMI" onChange={hBmi}/>
			<br/> <br/>
			Age
			<br/>
			<input type="number" step="any" placeholder="ENter YOUR Age" onChange={hAge} />
			<br/> <br/>
			Systolic Blood Pressure
			<br/>
			<input type="number" step="any" placeholder="ENter YOUR Systolic Blood Pressure" 
			onChange={hSbp}/>
			<br/> <br/>
			Diastolic Blood Pressure
			<br/>
			<input type="number" step="any" placeholder="ENter YOUR Diastolic Blood Pressure"
			onChange={hDbp} />
			<br/><br/>
			<input type="submit" value="Calculate"/>
		</form>
		<h1>{ans}</h1>
	</center>
	</>
	);
}
export default Home;
/* 'BMI': 25.0,                    # Replace with the actual BMI value for the new input
    'Age': 40,                      # Replace with the actual Age for the new input
    'Systolic Blood Pressure': 180, # Replace with the actual Systolic Blood Pressure value
    'Diastolic Blood Pressure': 80
	
	*/