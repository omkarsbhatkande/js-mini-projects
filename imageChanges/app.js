let imgBox = document.querySelector(".img-box");

let imgWrap = document.querySelector(".img-wrap");

let org = document.getElementById("org");

let line = document.getElementById("line");

org.style.width = imgBox.offsetWidth + "px";

let leftSpace = imgBox.offsetLeft;

imgBox.onmousemove = (e)=>{
  let boxWidth = (e.pageX - leftSpace) + "px";
  imgWrap.style.width = boxWidth;
  line.style.left = boxWidth;
}