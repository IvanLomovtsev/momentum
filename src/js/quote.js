async function getQuotes() {  
    const quotes = './assets/data/quote-data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    console.log(data);
  }
  getQuotes();