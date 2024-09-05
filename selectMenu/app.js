let selectFiled = document.getElementById("selectField");

let selectText = document.getElementById("selectText");

let list = document.getElementById("list");

let options = document.querySelectorAll(".options");

let arroe = document.getElementById("arrow")



selectFiled.onclick =()=>{
  list.classList.toggle("hide");
  arroe.classList.toggle("rotate");
}

for(let option of options){
  //console.log(option);
  
  // option.onclick = function(){
  //   selectText.innerHTML = this.textContent;
  option.onclick = (e)=>{
    selectText.innerHTML = e.target.textContent;
    list.classList.toggle("hide");
    arroe.classList.toggle("rotate");
  }

}