$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("#result").show();
    var userInputSentence = $("#userInput").val();
    $("#result p").text(countVowels(userInputSentence).toString());
  });
  function countVowels(sentence) {
    var vowelCountCalculated = 0;
    var letters = sentence.split("");
    for (var i = 0; i < letters.length; i++) {
      var letterLowercase = letters[i].toLowerCase();
      if (Number.isInteger(parseInt(letterLowercase))) {
        vowelCountCalculated += 0;
      } else if (letterLowercase === "a" || letterLowercase === "e" || letterLowercase === "o" || letterLowercase === "e") {
        vowelCountCalculated += 1;
      } else {
        vowelCountCalculated += 0;
      }
  }
    return vowelCountCalculated;
}
});
