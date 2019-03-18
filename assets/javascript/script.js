

// method that waits for the HTML page to load then runs a function
$(document).ready(function () {


  // Create variable for number of wins achieved by the user
  var winNumber = 0;
  console.log(winNumber);


  // Create variable for number of losses achieved by the user
  var lossNumber = 0;
  console.log(lossNumber);


  // method that waits for the start button to be clicked
  $("#start_button").on("click", function () {

    console.log("Start button worked");

    // Create variable for random generated number to be selected
    var targetNumber = 0;
    console.log(targetNumber);


    // Create variable lock game
    var lockGame = false;
    console.log(lockGame);


    targetNumber = Math.floor(Math.random() * 120) + 19;

    $("#target_num").html("Number of Points Targeted: " + targetNumber)

    $("#gem_1").val(Math.floor(Math.random() * 12) + 1);
    $("#gem_2").val(Math.floor(Math.random() * 12) + 1);
    $("#gem_3").val(Math.floor(Math.random() * 12) + 1);
    $("#gem_4").val(Math.floor(Math.random() * 12) + 1);

    var crystalNumber = 0;
    console.log(crystalNumber);

    // Here we create the on click event that gets the user"s pick
    $(".gem").on("click", function () {

      // Here this lockGame line prevents the user from changing the option after the game is done.
      if (lockGame !== true) {


        // We get the value associated with the button the user picked from here
        var yourPick = $(this).val();
        console.log("Your Pick: " + yourPick);
        crystalNumber += parseInt(yourPick);

        $("#crystal_num").html("Number of Crystal Points: " + crystalNumber);

      }

      if (crystalNumber == targetNumber) {
        winNumber++;
        $("#num_wins").html("Number of Wins: " + winNumber);
        lockGame = true;
        crystalNumber = 0;

      } else if (crystalNumber > targetNumber) {
        lossNumber++;
        $("#num_loses").html("Number of Loses: " + lossNumber);
        lockGame = true;
        crystalNumber = 0;
      };

    });

  });

});
