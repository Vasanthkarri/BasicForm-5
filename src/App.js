import React, {useState} from 'react';
import './App.css';

function App(){
  const [values,setValues] = useState({
  firstName:"",
  lastName:"",
  email:"",
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  
  const handleFirstNameInputChange = (event) => {
     setValues({...values, firstName: event.target.value})
     }
  const handleLastNameInputChange = (event) => {
     setValues({...values, lastName: event.target.value})
     }
   const handleemailInputChange = (event) => {
   setValues({...values,email: event.target.value})
   }
   
   const handleSubmit = (event) => {
   event.preventDefault();
   if(values.firstName && values.lastName && values.email){
   setValid(true);
   }
   setSubmitted(true);
   }
   
   return (
   <div className="form-container">
     <form className="register-form" onSubmit={handleSubmit}>
     {submitted && valid ? <div className="success-message">Success! Thankyou for Registering</div> : null}
     <input
    onChange={handleFirstNameInputChange}
     value={values.firstName}
     className="form-field"
     placeholder="first Name"
     name="firstName"/>
     {submitted && !values.lastName ? <span>Please enter a firstName</span> : null}
     
     <input
       onChange={handleLastNameInputChange}
     value={values.lastName}
     className="form-field"
     placeholder="LastName"
     name="LastName"/>
     {submitted && !values.lastName ? <span>Please enter a lastName</span> : null}
     
     <input
       onChange={handleemailInputChange}
     value={values.email}
     className="form-field"
     placeholder="Email"
     name="Email"/>
     {submitted && !values.email ? <span>Please enter a email</span> : null}
     
     <button 
     className="form-field" 
     type="submit" >Register</button>
     </form>
     </div>
     );
     }

export default App;
