
// Create variable for random generated number to be selected
var targetNumber = 0;
console.log(targetNumber);

// Create variable for total score of combined crystal valyes
var crystalNumber = 0;
console.log(crystalNumber);


// Create variable for number of wins achieved by the user
var winNumber = 0;
console.log(winNumber);


// Create variable for number of losses achieved by the user
var lossNumber = 0;
console.log(lossNumber);

// method that waits for the HTML page to load then runs a function
$(document).ready(function () {



  // method that waits for the start button to be clicked
  $("#start_button").click(function () {

    console.log("Click button worked");

    // function to display number of wins and losses and draw random target number
    function roundIteration() {

      $("#num_wins").html("Number of Wins: " + winNumber)

      $("#num_loses").html("Number of Loses: " + lossNumber)

      targetNumber = Math.floor(Math.random() * 120) + 19;

      $("#target_num").html("Number of Points Targeted: " + targetNumber)

      // function to display number of crystal points and draw random crytal numbers
      function clickIteration() {

        // If statement to check for wins and losses
        if (crystalNumber < targetNumber) {

          var crystalOne = 0;
          var crystalTwo = 0;
          var crystalThree = 0;
          var crystalFour = 0;


          crystalOne = Math.floor(Math.random() * 12) + 1;
          console.log(crystalOne);
          crystalTwo = Math.floor(Math.random() * 12) + 1;
          console.log(crystalTwo);
          crystalThree = Math.floor(Math.random() * 12) + 1;
          console.log(crystalThree);
          crystalFour = Math.floor(Math.random() * 12) + 1;
          console.log(crystalFour);

          $("#gem_1").click(function () {
            crystalNumber = crystalNumber + crystalOne;
            $("#crystal_num").html("Number of Crystal Points: " + crystalNumber);
          });

          $("#gem_2").click(function () {
            crystalNumber = crystalNumber + crystalTwo;
            $("#crystal_num").html("Number of Crystal Points: " + crystalNumber);
          });

          $("#gem_3").click(function () {
            crystalNumber = crystalNumber + crystalThree;
            $("#crystal_num").html("Number of Crystal Points: " + crystalNumber);
          });

          $("#gem_4").click(function () {
            crystalNumber = crystalNumber + crystalFour;
            $("#crystal_num").html("Number of Crystal Points: " + crystalNumber);
          });

        }

        else if (crystalNumber === targetNumber) {
          winNumber++;
          alert("You won!");
          var crystalNumber = 0;
        }

        else {
          lossNumber++;
          alert("You lost!");
          var crystalNumber = 0;
        };

      };

      clickIteration();

    };

    roundIteration();

  });


});