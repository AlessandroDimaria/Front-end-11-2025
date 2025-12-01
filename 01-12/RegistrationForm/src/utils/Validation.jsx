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
    if (!values.email.trim()) {
            errors.email = 'Email obbligatoria';
        } else if (!values.email.includes('@')) {
            errors.email = 'Email non valida';
        }

  if (!values.password) {
    errors.password = "La password è obbligatoria";
  } else if (values.password.length < 6) {
    errors.password = "La password deve avere almeno 6 caratteri";
  }

  return errors;
}
