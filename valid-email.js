
function validateEmail(email){

    const isValid = true;

    if(email.includes("@")){
        isValid = false;
    }

    return isValid;
}