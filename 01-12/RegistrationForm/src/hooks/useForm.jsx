import { useState } from "react";
import Validation from "../utils/Validation";
export default function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);
    const [errors,setErrors] = useState({});
    const handleChange = (e) => {
        const{name,value} = e.target;
        setValues((prev)=>({...prev,[name]:value}));
    };
const handleSubmit = (callback) => (e) => {
  e.preventDefault();
  const validationErrors = Validation(values);
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length === 0) {
    console.log("Nuovo utente registrato:", values);
    callback();
  }
};
    return { values, handleChange,handleSubmit,errors };
}
