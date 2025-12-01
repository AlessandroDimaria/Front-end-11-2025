import { useState } from "react";
import  Validation  from "./Validation";  
export default function Form(){
    const [values, setValues] = useState({
        name: "",
        surname: "",
        email: "",
        password:""
    });

    const [errors, setErrors] = useState({});
    
    const handleChange =(e) =>{
        const{name, value} = e.target;
        setValues((prev) =>({...prev, [name]: value }));
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
       const ValidationErrors = Validation(values);
       setErrors(ValidationErrors);
       if (Object.keys(ValidationErrors).length === 0){
        alert("Registrazione completata");
       }
    };

    return(
        <form onSubmit ={handleSubmit}>
          <h2>Registrazione</h2>
          <label htmlFor="name">Nome</label>
          <input 
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Mario"/>
          {errors.name && <small style={{ color: "red" }}>{errors.name}</small>}


          <label htmlFor="surname">Cognome</label>
          <input 
          name="surname"
          value={values.surname}
          onChange={handleChange}
          placeholder="Rossi" />
          {errors.surname && <small style={{ color: "red" }}>{errors.surname}</small>}


          <label htmlFor="email">Email</label>
          <input 
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="mario.rossi@gmail.com"/>
          {errors.email && <small style={{ color: "red" }}>{errors.email}</small>}


          <label htmlFor="password">Password</label>
          <input 
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Almeno 6 caratteri"/>
          {errors.password && <small style={{ color: "red" }}>{errors.password}</small>}
          <button type="submit">Invia</button>
</form>)};
