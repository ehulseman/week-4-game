//Creates an array that lists out all the options a crystal's value can be
var crystalNumberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//Creating variables to hold the number of wins, losses, target number, values for each crystal image, and the number counter
var targetNumber = Math.floor(Math.random() * 100) + 20;
var wins = 0;
var losses = 0;
var counter = 0;

//Console Log other values here
// console.log("This is the crystal image number value: " + crystalNumberOptions);
console.log("This is the user's counter: " + counter);
console.log("This is the user's wins: " + wins);
console.log("This is the user's losses: " + losses);

$(document).ready(function () {
    console.log("ready!");

    //Dynamically update the webpage to display the number the user has to guess
    $("#numberToGuess").text(targetNumber);
    console.log("This is the target number: " + targetNumber);

    //Assign a number to each crystal image
    if (counter === 0) {
        assignCrystalValue();
    };

    function assignCrystalValue() {

        for (var i = 0; i < 4; i++) {

            //This is to generate a new unique value for each picture
            var crystalImageNumber = crystalNumberOptions[Math.floor(Math.random() * crystalNumberOptions.length)];

            // For each iteration, we will create an imageCrystal
            var imageCrystal = $("<img>");

            // Give each crystal image the following class: "crystal-image"
            imageCrystal.addClass("crystal-image");

            //Giving the imageCrystal the source of the crystal images
            imageCrystal.attr("src", "assets/images/crystal" + (i + 1) + ".jpg");

            //Now, we need to assign a value for each crystal image using numberOptions
            imageCrystal.attr("data-crystalValue", crystalImageNumber);
            console.log("Crystal image number: " + crystalImageNumber);

            //Add crystal images to the page by appending it to the crystals container div
            $("#crystals-container").append(imageCrystal);
        }

    };

    //Click event for every crystal image on the page
    $(".crystal-image").on("click", function () {

        //Determine crystal's value by extracting the value from the data attribute
        //Then we need to convert it to an integer
        //Then we add the crystalValue to the counter.
        //For every click on a crystalImage, the value gets added to the counter.
        var crystalValue = ($(this).attr("data-crystalValue"));
        crystalValue = parseInt(crystalValue);

        counter += crystalValue;

        $("#userScore").text(counter);

        //This is the logic of the game
        if (counter === targetNumber) {
            wins++;
            $("#gameOutcome").html("You win!"); 
            $("#userWins").text(wins);
            resetGame();
            assignCrystalValue();
        } else if (counter > targetNumber) {
            losses++;
            $("#gameOutcome").html("You Lose!");
            $("#userLosses").text(losses);
            resetGame();
            assignCrystalValue();
        }
        
        function resetGame() {
            targetNumber = Math.floor(Math.random() * 100) + 20;
            $("#numberToGuess").text(targetNumber);
            counter = 0;
            $("#userScore").text(counter);
            $("#gameOutcome").fadeOut(5000);
            $("#crystals-container").text("");
            console.log("New target number " + targetNumber);
        };

    });

});