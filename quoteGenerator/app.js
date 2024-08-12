const apiUrl = "https://favqs.com/api/qotd";

async function getQuote(url) {
  const response =  await fetch(url);
  let data = await response.json();
  console.log(data);
  
}

getQuote(apiUrl);