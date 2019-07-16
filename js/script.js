/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
  Storing Quotes in an Array
***/

var quotes = [ 
  
  {quote: "any random text", source: "ayman", citation: "google", year: "2015"},
  {quote: "any random text 1", source: "ayman", citation: "google", year: "2016"},
  {quote: "any random text 2", source: "ayman", year: "2017"},
  {quote: "any random text 3", source: "ayman", citation: "google", year: "2018"},
  {quote: "any random text 4", source: "ayman", citation: "google"}

];


/***
  Declaring Function to Get a Random Quote
***/

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}



/***
  Declaring Function to Print the Random Quote 
***/

function printQuote() {
  var text = getRandomQuote();

  document.getElementById('quote-box').innerHTML = '<p class="quote">'+ text.quote +'</p><p class="source">'+ text.source +'<span class="citation">'+ (text.citation ? text.citation : "No Citation Found") +'</span><span class="year">'+ (text.year ? text.year : "No year Found") +'</span></p>';

}


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
