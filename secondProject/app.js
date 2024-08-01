let con = document.querySelector("#container");

let like = document.querySelector("i");

con.addEventListener('dblclick' , () =>{
    like.style.transform = "translate(-50% , -50%) scale(1)";

    setTimeout(()=>{
      like.style.transform = "translate(-50% , -50%) scale(0)";
    },2000)
})

