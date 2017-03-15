$(document).ready(function () {

	// initialize variables
	var redNum = 0;
	var greenNum = 0;
	var blueNum = 0;
	var yellowNum = 0;
	var sumCrystals = 0;
	var clickColor = "";
	var wins = 0;
	var loses = 0;
	var targetNum = 0;
	var cClick = new Audio("assets/sounds/click.mp3");
	var snd = new Audio("assets/sounds/cheer.mp3");

	$(".sDown").hide().slideDown({duration:2000, queue:false}).fadeIn(2000);
	$(".sHide").hide();

	// create and store random numbers from 1 - 12 for each crystal
	redNum = Math.floor(Math.random() * 12) + 1;
	blueNum = Math.floor(Math.random() * 12) + 1;
	greenNum = Math.floor(Math.random() * 12) + 1;
	yellowNum = Math.floor(Math.random() * 12) + 1;

	// create the random target number, 19 - 120
	targetNum = Math.floor(Math.random() * 102) + 19;
	// refresh html with target number
	$("#targetNumber").html("Target Number: "+targetNum.toString());

	// function to reset variables, random numbers and reset html to default state
    function gameReset() {
	    redNum = 0;
		greenNum = 0;
		blueNum = 0;
		yellowNum = 0;
		sumCrystals = 0;
		clickColor = "";
		sumCrystals = 0;

		$("#playerTot").html("Total: "+sumCrystals.toString());

		redNum = Math.floor(Math.random() * 12) + 1;
		blueNum = Math.floor(Math.random() * 12) + 1;
		greenNum = Math.floor(Math.random() * 12) + 1;
		yellowNum = Math.floor(Math.random() * 12) + 1;

		targetNum = Math.floor(Math.random() * 102) + 19;

	    $("#targetNumber").html("Target Number: "+targetNum.toString());
    }

    // listen for clicks on crystal images and add value of each to running total

		$(".crystal").on('click', function() {
		clickColor = $(this).attr('id'); 

	    switch (clickColor) {
			case "red":
			   sumCrystals += redNum;
			   break;
			case "green":
			   sumCrystals += greenNum;
			   break;
			case "blue":
			   sumCrystals += blueNum;
			  break;
			case "yellow":
			   sumCrystals += yellowNum;
			   break;
		};

		cClick.play();

		// refresh HTML with running total
		$("#playerTot").html("Total: "+sumCrystals.toString());

		//check to see if total equals (win) or goes over (lose) target number
        if (sumCrystals > targetNum) {
        		loses++;
        		alert("You lost, try again");
        		gameReset();
        		$("#sLoses").html("Loses: " + loses.toString());
        } else if (sumCrystals === targetNum) {
        		wins++;
        		// alert("You won!");
        		// $(".sHide").slideDown({duration:2000, queue:false}).fadeIn(2000);
        		$(".sHide").hide().slideDown(2000).slideUp(3000);
        		snd.play();
        		gameReset();
        		$("#sWins").html("Wins: " + wins.toString());
        }
    });

});