let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let msgError = document.getElementById("msg-error");
let submitError = document.getElementById("submit-error");

function validateName(){
  let name = document.getElementById("contact-name").value;
  if(name.length == 0){
    nameError.innerHTML = " Name Is Required"
    return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = " Write Full Name"
    return false;
  }
  nameError.innerHTML = "valid"
  return true;
}