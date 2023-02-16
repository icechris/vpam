import React, {useState} from "react"
import './register.css'
import { useFormik } from 'formik';
import * as Yup from "yup";

export const  Phone = (props) => {
    const[phone, setPhone]  = useState('')
    const[email, setEmail]  = useState('')

   

    const handleSubmit = (e) => {
        e.preventDefault();
            console.log(phone);
    }
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
      

       const formik = useFormik( {
      initialValues:{
           phone:""
           
      },
      validationSchema: Yup.object({
       phone: Yup.string().required("Required").matches(phoneRegExp, 'Phone number is not valid')
  .min(10, "too short")
  .max(10, "Your phone number must be up to 10"),
       

      }),
      onSubmit:  () => {
            formik.preventDefault()
      // console.log(formik.values);
      
      } 
     });
          console.log(formik.errors);
     

    
    return (
       
         <div>
         <h2 className ="head-text">Enter Phone/Email to recieve token</h2>
             <form className="login-form" >
           <label htmlFor="phone">Mobile Number</label>
		  <input id="phone" 
             name="phone"
             type="tel"
             placeholder="number is a required field"
             onChange={formik.handleChange} 
             onBlur={formik.handleBlur}
             
             
             value= {formik.values.number}
             />
		    { formik.errors.phone ? <p style= {{ color:"red" }} >{formik.errors.phone}</p> : null}

		   <button  className="send-btn"  type="submit"  onClick ={() =>  props.onFormSwitch("loginForm")} > Send </button>
		 </form>
		<button className="link-btn" onClick={() =>  props.onFormSwitch("Register")}>Use Email</button>
         </div>
      
        
    )
}
export default Phone;