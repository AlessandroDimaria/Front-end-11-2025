import { useState } from "react";

export default function Form(){
    const [values, setValues] = useState({
        name: "",
        surname: "",
        email: "",
        password:""
    });

    const handleChange =(e) =>{
        const{name, value} = e.target;
        setValues((prev) =>({...prev, [name]: value }));
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
       alert(`Username inserito: ${values.name}`);
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

          <label htmlFor="surname">Cognome</label>
          <input 
          name="surname"
          value={values.surname}
          onChange={handleChange}
          placeholder="Rossi" />

          <label htmlFor="email">Email</label>
          <input 
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="mario.rossi@gmail.com"/>

          <label htmlFor="password">Password</label>
          <input 
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Almeno 6 caratteri"/>
          <button type="submit">Invia</button>
</form>)};
