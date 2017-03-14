$(document).ready(function () {

	// initialize variables
	var redNum = 0;
	var greenNum = 0;
	var blueNum = 0;
	var yellowNum = 0;
	var target = 0;
	var sumCrystals = 0;
	var clickColor = "";
	var wins = 0;
	var loses = 0;

	$("#gameTitle").html("Crystals Collector").hide().slideDown({duration:2000, queue:false}).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(3000);
	$(".sDown").hide().slideDown({duration:2000, queue:false}).fadeIn(500);

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
		target = 0;
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
			   sumCrystals = sumCrystals + redNum;
			   break;
			case "green":
			   sumCrystals = sumCrystals + greenNum;
			   break;
			case "blue":
			   sumCrystals = sumCrystals + blueNum;
			  break;
			case "yellow":
			   sumCrystals = sumCrystals + yellowNum;
			   break;
		};

		// refresh HTML with running total
		$("#playerTot").html("Total: "+sumCrystals.toString());

		//check to see if total equals (win) or goes over (lose) target number
        if (sumCrystals > targetNum) {
        		loses = loses + 1;
        		alert("You lost, try again");
        		gameReset();
        		$("#sLoses").html("Loses: "+loses.toString());
        } else if (sumCrystals === targetNum) {
        		wins = wins +1;
        		alert("You won!");
        		gameReset();
        		$("#sWins").html("Wins: "+wins.toString());
        }
    });

});