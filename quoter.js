quotes = [
  "Always do what you are afraid to do.",
  "The fruit of silence is tranquility.",
  "The carpenter's door is loose.",
  "Avoid things that will require an apology.",
  "An ant on the move does more than a dozing ox.",
  "One who is too insistent on his own views, finds few to agree with him.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
  "Someone's sitting in the shade today because someone planted a tree a long time ago.",
  "You only have to do a very few things right in your life so long as you don't do too many things wrong."
];

var current_quote = '';

$('#quote_button').click(function rand_quote() {
  //gather the text of the current quote, so we can compare the new one to it
  var current_quote = $("h2").text();
  console.log("generating quote, this is the current quote: " + current_quote);
  var num = Math.floor(Math.random() * quotes.length);
  var random_quote = quotes[num];
  console.log("Here is the new random quote: " + random_quote);
  if (current_quote !== random_quote) {
    console.log("true, the current quote is different from the new random quote.");
    $("#quote").text(random_quote);
    current_quote = $("h2").text();
  } else {
    console.log("false, the two quotes are the same, recursivly running rand_quote again.");
    rand_quote();
  }
});
