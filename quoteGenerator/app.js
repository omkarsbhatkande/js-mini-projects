const apiUrl = "https://favqs.com/api/qotd";

const quote = document.getElementById("quote");

const author = document.getElementById("author");

async function getQuote(url) {
  const response =  await fetch(url);
  let data = await response.json();
  //console.log(data);
  quote.innerHTML = data.content;
  author.innerHTML=data.author;
  
}

getQuote(apiUrl);


function tweet() {
  window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML +"...by" +author.innerHTML , "tweet Window" , "width=600 , height=300");
}