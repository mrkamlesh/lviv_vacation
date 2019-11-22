const validate = values => {
    const errors = {}

    if(!values.budget) {
        errors.budget = "Budget can't be blank!";
    } else if(isNaN(values.budget)) {
        errors.budget = "Budget must be a number!";
    }
    
    return errors;
}

export default validate;