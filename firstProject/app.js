let istatus = document.querySelector("h5");


let add = document.querySelector("#add");

let remove = document.querySelector("#remove");


//this is for add button
add.addEventListener('click' , ()=>{
  istatus.innerHTML = "Friend";
  istatus.style.color ="green";
})

//this is for remove button
remove.addEventListener('click' , () =>{
  istatus.innerHTML = "Stranger";
  istatus.style.color = "red";
})