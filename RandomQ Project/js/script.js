// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);



/*Create a two-dimensional array with object literal that contains information about quote, source, date, category, citation   
for each object in the array.*/


const quotes = [
  {
    quote: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    source: "- Brian Kernighan",
    date: "",
    category: "",
    citation: "",
   
  },
  {
    quote: "It's not at all important to get it right the first time. It's vitally important to get it right the last time.",
    source: "- Andrew Hunt and David Thomas",
    date: "",
    category: "",
    citation: "",
   
  },
  {
    quote:  "First, solve the problem. Then, write the code.", 
    source: "- John Johnson",
    date: "",
    category: "",
    citation: "",
    
  },
  {
    quote: "Should array indices start at 0 or 1? My compromise of 0.5 was rejected without, I thought, proper consideration. ",
    source: "- Stan Kelly-Bootle",
    date: "",
    category: "",
    citation: "",
    
  },
  {
    quote: " Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. ",
    source: "- Rick Osborne",
    date: "",
    category: "",
    citation: "",
    
  },
  {
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. ",
    source: "- Martin Fowler",
    date: "",
    category: "God",
    citation: "",
    
  }
];



function getRandomQuote(list){
   var number = Math.floor(Math.random() * list.length);
    
    
    return list[number];
  
    
};

function printQuote(){
    
     var picked = getRandomQuote(quotes);
    
document.getElementById('quote-box').innerHTML =
    
   
   
"<p class='quote'>" + picked.quote +"</p>"+
    
"<p class='source'>" +  picked.source  +
  "<span class='citation'>"    +" </span>" +
 " <span class='year'>" +    "</span>"+
"</p>"
    
    
};