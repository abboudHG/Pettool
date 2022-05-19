export default function validateInfo(values) {
    let errors = {};
  
    if (!values.FirstName.trim()) {
        errors.FirstName = 'First name required';
    }
    if (!values.LastName.trim()) {
        errors.LastName = 'Last name required';
    }
    /*if (!values.username.trim()) {
      errors.username = 'Username required';
    }*/
    if (!values.Age) {
        errors.Age = 'Age required';
      } else if (!/^[0-9\b]+$/.test(values.Age)) {
        errors.Age = 'Only numbers are allowed';
      }
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password needs to be 8 characters or more';
    }
    if (!values.password2) {
      errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords do not match';
    }
    return errors;
  }