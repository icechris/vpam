import React, {useState} from "react"
import './register.css';
import { useFormik } from 'formik';
import * as Yup from "yup";


export const  Register = (props) => {
  const[phone, setPhone]  = useState("");
  const[email, setEmail]  = useState("");


    const handleSubmit = (e) => {
        e.preventDefault()
        
            console.log(email)
    };
 
     const formik = useFormik( {
      initialValues:{
           email:""
           
      },
      validationSchema: Yup.object({
       email: Yup.string().email("Invalid email address").required("email is a required field")

      }),
      onSubmit:  () => {
            formik.preventDefault()
      // console.log(formik.values);
      
      } 
     });
console.log(formik.errors);
     
    
    return (
       
         <div>
         <h2 className ="head-text">Enter Email/Phone to recieve token</h2>
          <form className="login-form"  >
          <label htmlFor="email">Email</label>
		<input id="email" 
             name="email"
             type="email"
             placeholder="enter your email"
             onChange={formik.handleChange} 
             onBlur={formik.handleBlur}

             value= {formik.values.email}
             />
             { formik.errors.email ? <p  className="errorStyle"  style= {{ color:"red" }} >{formik.errors.email}</p> : null}

             <button className="send-btn"  type="submit" onClick={() => props.onFormSwitch("loginForm")}> Send </button>
		  
		   {/* <button  className="send-btn"  type="submit"  onChange={() =>  props.onFormSwitch("loginForm")}>Send</button> */}

		</form>
		<button className="link-btn" type="button" onClick={() => props.onFormSwitch("Phone")}> Use phone  </button>
    
         </div>
      
        
    )
}
export default Register;