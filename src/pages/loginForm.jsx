import React, {useState} from "react"
import './loginForm.css'

export const  LoginForm = (props) => {

const[token, setToken]  = useState('');
const[email, setEmail]  = useState('');






const handleSubmit = (e) => {
e.preventDefault();
	console.log(token);

}
    return (
		<div>
			<h2 className="head-text"> Check your email/phone for verification </h2>
			<form className="login-form" onSubmit={handleSubmit}>
			<label htmlFor="token">Token</label>
			<input value={token} onChange={(e) => setToken(e.target.value)}  type="text" placeholder="Enter token to view" id="token" name="token"></input>
			<button className="verify-btn" type="submit" onClick={() =>  props.onFormSwitch("./dashboard.jsx")}>Verify</button>
			</form>
			{/* <button className="click-btn" onClick={() =>  props.onFormSwitch("Register")}>Don't have a token? Click here</button> */}
		</div>
    )
}
export default LoginForm;