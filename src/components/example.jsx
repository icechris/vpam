import React, { useState } from 'react';

function generatePassword(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

export default function App() {
  const [password, setPassword] = useState('');

  function handleGeneratePassword() {
    setPassword(generatePassword(8));
  }

  return (
    <div>
      <button onClick={handleGeneratePassword}>Generate Password</button>
      <p>{password}</p>
    </div>
  );
}
