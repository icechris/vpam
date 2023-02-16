import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import './generator.css'
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from './characters'
import 'react-toastify/dist/ReactToastify.css'
// import { COPY_SUCCESS } from './message.js'

function Generator({ close }) {
  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(20)
  const [includeUppercase, setIncludeUppercase] = useState(false)
  const [includeLowercase, setIncludeLowercase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)

  const handleGeneratePassword = (e) => {
    if (
      !includeUppercase &&
      !includeLowercase &&
      !includeNumbers &&
      !includeSymbols
    ) {
      notify('You must Select atleast one option', true)
    }
    let characterList = ''

    if (includeLowercase) {
      characterList = characterList + lowerCaseLetters
    }

    if (includeUppercase) {
      characterList = characterList + upperCaseLetters
    }

    if (includeNumbers) {
      characterList = characterList + numbers
    }

    if (includeSymbols) {
      characterList = characterList + specialCharacters
    }

    setPassword(createPasswordNew())
  }
  const createPassword = (characterList) => {
    let password = ''
    const characterListLength = characterList.length

    for (let i = 0; i < passwordLength; i++) {
      
      const characterIndex = Math.round(Math.random() * characterListLength)
      password = password + characterList.charAt(characterIndex)
    }
    return password
  }

  const shufflePassword = (password)  => {
    let shuffledPassword = ""
    let passwordText = password.split("")
    while(passwordText.length > 0) {
      shuffledPassword += passwordText.splice(passwordText.length * Math.random() << 0, 1)
    }
    console.log(shuffledPassword)

    return shuffledPassword.substring(0,passwordLength)
  }

  const createPasswordNew = () => {
    let password = ""
    for(let i=0; i<passwordLength;i++) {
      if(includeLowercase){
        const characterIndex = Math.round(Math.random() * lowerCaseLetters.length)
        password = password + lowerCaseLetters.charAt(characterIndex)
      }

      if(includeUppercase){
        const characterIndex = Math.round(Math.random() * upperCaseLetters.length)
        password = password + upperCaseLetters.charAt(characterIndex)
      }

      if(includeNumbers){
        const characterIndex = Math.round(Math.random() * numbers.length)
        password = password + numbers.charAt(characterIndex)
      }

      if(includeSymbols){
        const characterIndex = Math.round(Math.random() * specialCharacters.length)
        password = password + specialCharacters.charAt(characterIndex)
      }
    }

    return shufflePassword(password)
  }

  const notify = (message, hasError = false) => {
    if (hasError) {
      toast.error(message, {
        position: 'top-center',
        autoClose: 5000,
          hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } else {
      toast(message, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  

  return (
    <div className='generator'>
    <span className='close' onClick={() => close()}>&times;</span>
    <h2 className='generator__header'>Password Generator</h2>
    <div className='generator__password'>
      <h3>{password}</h3>
      
    </div>

    <div className='form-group'>
      <label htmlFor='password-strength'>Password length(from 7-20)</label>
      <input
        defaultValue={passwordLength}
        onChange={(e) => setPasswordLength(e.target.value)}
        type='number'
        id='password-strength'
        name='password-strength'
        max='20'
        min='7'
      />
    </div>
    <div className='form-group'>
    
      <label htmlFor='description'>Password Description</label>
      <input
      
        type='text'
        id='password-description'
        name='password-description'
      
      />
    </div>

    <div className='form-group'>
      <label htmlFor='uppercase-letters'>Include Uppercase Letters</label>
      <input
        checked={includeUppercase}
        onChange={(e) => setIncludeUppercase(e.target.checked)}
        type='checkbox'
        id='uppercase-letters'
        name='uppercase-letters'
      />
    </div>

    <div className='form-group'>
      <label htmlFor='lowercase-letters'>Include Lowercase Letters</label>
      <input
        checked={includeLowercase}
        onChange={(e) => setIncludeLowercase(e.target.checked)}
        type='checkbox'
        id='lowercase-letters'
        name='lowercase-letters'
      />
    </div>

    <div className='form-group'>
      <label htmlFor='include-numbers'>Include Numbers</label>
      <input
        checked={includeNumbers}
        onChange={(e) => setIncludeNumbers(e.target.checked)}
        type='checkbox'
        id='include-numbers'
        name='include-numbers'
      />
    </div>

    <div className='form-group'>
      <label htmlFor='include-symbols'>Include Symbols</label>
      <input
        checked={includeSymbols}
        onChange={(e) => setIncludeSymbols(e.target.checked)}
        type='checkbox'
        id='include-symbols'
        name='include-symbols'
      />
    </div>

    <button onClick={handleGeneratePassword} className='generator__btn'>
      Generate Password
    </button>
    <button   className ='save__btn'>
      Save password
     </button> 
    <div>
    
    
    </div>
   
    <ToastContainer
      position='top-center'
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </div>
  )
}

export default Generator
