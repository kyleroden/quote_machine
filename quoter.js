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

$('#quote_button').click(function() {
  var num = Math.floor(Math.random() * 10 + 1);
  var random_quote = quotes[num];
  $("#quote").text(random_quote);
});
