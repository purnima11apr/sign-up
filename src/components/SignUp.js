import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

 
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

 
  const validateEmail = (value) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setEmailValid(isValid);
  };

  
  const validatePassword = (value) => {
    const isValid = value.length >= 8;
    setPasswordValid(isValid);
  };

  const validateConfirmPassword = (value) => {
    const isValid = value === password;
    setConfirmPasswordValid(isValid);
  };

  
  const handleSubmit = () => {
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully');
    } else {
      alert('Form cannot be submitted');
    }
  };

  return (
    <div className="container">
        <h2>Sign Up Form</h2>
      <div className="form-group">
        <label className="label">Email:</label>
        <input
          type="email"
          className="input"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail(e.target.value);
          }}
          style={{ border: emailValid ? '1px solid green' : '1px solid red' }}
        />
        {!emailValid && <div className="error">invalid email format</div>}
      </div>

      <div className="form-group">
        <label className="label">Password:</label>
        <input
          type="password"
          className="input"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            validatePassword(e.target.value);
          }}
          style={{ border: confirmPasswordValid ? '1px solid green' : '1px solid red' }}
        />
        {!passwordValid && <div className="error">password must be atleast 8 characters</div>}
      </div>

      <div className="form-group">
        <label className="label">Confirm Password:</label>
        <input
          type="password"
          className="input"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            validateConfirmPassword(e.target.value);
          }}
          style={{ border: confirmPasswordValid ? '1px solid green' : '1px solid red' }}
        />
        {!confirmPasswordValid && <div className="error">passwords do not match.</div>}
      </div>

      <button onClick={handleSubmit} className='submit'>Submit</button>
    </div>
  );
};

export default SignUp;
