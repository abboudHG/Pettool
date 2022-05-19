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
    if (!values.phoneNb) {
      errors.phoneNb = 'Phone number required';
    } else if (!/^[0-9\b]+$/.test(values.phoneNb)) {
      errors.phoneNb = 'Only numbers are allowed';
    }
    if (!values.prevsPets) {
      errors.prevsPets = 'Previous number of pets required';
    } else if (!/^[0-9\b]+$/.test(values.prevsPets)) {
      errors.prevsPets = 'Only numbers are allowed';
    }
    if (!values.profession.trim()) {
      errors.profession = 'Profession or occupation required';
    }
    return errors;
  }