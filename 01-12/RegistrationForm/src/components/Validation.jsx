export default function Validation(values) {
  const errors = {};

if (!values.name.trim()) {
  errors.name = "Il nome è obbligatorio";
} else if (values.name.trim().length < 3) {
  errors.name = "Il nome deve avere almeno 3 caratteri";
}

if (!values.surname.trim()) {
  errors.surname = "Il cognome è obbligatorio";
} else if (values.surname.trim().length < 3) {
  errors.surname = "Il cognome deve avere almeno 3 caratteri";
}
  if (!values.email) {
    errors.email = "L'email è obbligatoria";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Formato email non valido";
  }

  if (!values.password) {
    errors.password = "La password è obbligatoria";
  } else if (values.password.length < 6) {
    errors.password = "La password deve avere almeno 6 caratteri";
  }

  return errors;
}
