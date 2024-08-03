let arr = [
  {
    dp : "forest.jpg" ,
    story : "forest1.jpg"
  },
  {
    dp : "forest2.jpg" ,
    story : "forest3.jpg"
  },
  {
    dp : "forest4.jpg" ,
    story : "forest5.jpg"
  },
  {
    dp : "forest6.jpg" ,
    story : "forest7.jpg"
  },
  {
    dp : "forest.jpg" ,
    story : "forest1.jpg"
  }
];


let stories = document.querySelector("#stories");
let clutter = "";
arr.forEach((elem , idx)=>{
  clutter += `<div class="story">
        <img id="${idx}" src="${elem.dp}" alt="">
      </div>`
})

stories.innerHTML = clutter;

stories.addEventListener("click" ,(e)=>{
  document.querySelector("#full-story").style.display= "block";
  document.querySelector("#full-story").style.backgroundImage = `url(${arr[e.target.id].story})`

  setTimeout(() => {
    document.querySelector("#full-story").style.display= "none";
  }, 2000);
});