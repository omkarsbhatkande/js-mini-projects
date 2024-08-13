let toastBox = document.getElementById("toastBox");

let successMsg = 'Successfully submitted';
let errorMsg = 'Please fix the Error';
let invalidMsg = 'Invalid input , check again';

function ShowToast(msg) {
  let toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerHTML =msg;
  toastBox.appendChild(toast)
}