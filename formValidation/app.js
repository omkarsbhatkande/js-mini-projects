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
  nameError.innerHTML = "<i class='fas fa-check-circle'></I>";
  return true;
}

function validatePhone(){
  let phone = document.getElementById("contact-phone").value;
  if (phone.length == 0) {
    phoneError.innerHTML = " Phone no Is Required"
    return false;
  }
  if(phone.length !== 10){
    phoneError.innerHTML = " Write valid Number"
    return false;
  }
  if(!phone.match(/^[0-9]{10}$/)){
    phoneError.innerHTML = " Write valid Number"
    return false;
  }
  phoneError.innerHTML = "<i class='fas fa-check-circle'></I>";
  return true;
}

function validateEmail(){
  let email = document.getElementById("contact-email").value;
  if (email.length == 0) {
    emailError.innerHTML = " Email Is Required"
    return false;
  }
  if(!email.match(/^[A-Za-z]\._\-[0-9]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML = " Write valid Email"
    return false;
  }
  emailError.innerHTML = "<i class='fas fa-check-circle'></I>";
  return true;
}

function validatemsg(){
  let msg = document.getElementById("contact-msg").value;
  let required = 30 ;
  let left = required - msg.length;
  if (left>0) {
    msgError.innerHTML = left + " More characters"
    return false;
  }
  msgError.innerHTML = "<i class='fas fa-check-circle'></I>";
  return true;
}

function validateform(){
  if (!validateName() || validatePhone || validateEmail || validatemsg) {
    submitError.style.display = "block"
    emailError.innerHTML = " Please fix Error to submit"
    setTimeout(()=>{
      submitError.style.display = "none"
    },2000)
    return false;
  }
}