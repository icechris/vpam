import React, {useState} from "react"
import LoginForm from "./loginForm"
import Register from "./register"
import Phone from "./number"
import './loginForm.css'


export const  House = (props) => {
    const [currentForm, setCurrentForm] = useState("Register")


    const toggleForm = (formName, data) => {
        console.log(data);
        setCurrentForm(formName);
        // setData(data);
    }  
    
    return (
		
		<div className="auth-form-container">
		    <span className="close" onClick={() => props.toggleForm(false)}>&times;</span>
            { currentForm === "loginForm"  && <LoginForm onFormSwitch={toggleForm} />}
            { currentForm === "Register" && <Register onFormSwitch={toggleForm} />}
            { currentForm === "Phone" && <Phone onFormSwitch={toggleForm} />}
		</div>
		
    
    )
}
export default House;