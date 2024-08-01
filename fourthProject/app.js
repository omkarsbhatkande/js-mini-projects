let elem = document.querySelectorAll(".elem");

elem.forEach((e)=>{
      // console.log(e.childNodes[3]);
  e.addEventListener('mouseenter' , ()=>{
    e.childNodes[3].style.opacity =1
  });

  e.addEventListener('mouseleave' , ()=>{
    e.childNodes[3].style.opacity =0
  });

  e.addEventListener('mousemove' , (e)=>{
    e.childNodes[3].style.left =e.x+"px"
    e.childNodes[3].style.top =e.y+"px"
  });

});














// let elem1Iamg = document.querySelector("#elem1 img");


// elem1.addEventListener('mousemove' , (e)=> {
//   elem1Iamg.style.left =e.x+"px"
//   elem1Iamg.style.top =e.y+"px"
// });

// elem1.addEventListener('mouseenter' , (e)=> {
//   elem1Iamg.style.opacity =1;
// });

// elem1.addEventListener('mouseleave' , (e)=> {
//   elem1Iamg.style.opacity =0;
// });



