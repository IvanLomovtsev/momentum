
const changeQuote = document.querySelector('.change-quote');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

//loading new quote
async function getQuotes() {  
    const quotes = './assets/data/quote-data.json';
    const res = await fetch(quotes);
    const data = await res.json();
    const numQuote =  Math.floor(Math.random()*data.length);
    quote.textContent = data[numQuote].text_ru;
    author.textContent = data[numQuote].author_ru
  }
getQuotes();

changeQuote.addEventListener ('click', getQuotes)