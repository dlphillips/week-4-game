$( document ).ready(function() {



	var redNum = 0;
	var greenNum = 0;
	var blueNum = 0;
	var yellowNum = 0;
	var target = 0;
	var sumCrystals = 0;
	var clickColor = "";
	var wins = 0;
	var loses = 0;

	redNum = Math.floor(Math.random() * 12) + 1;
	blueNum = Math.floor(Math.random() * 12) + 1;
	greenNum = Math.floor(Math.random() * 12) + 1;
	yellowNum = Math.floor(Math.random() * 12) + 1;

	targetNum = Math.floor(Math.random() * 102) + 19;
	$("#targetNumber").html("Target Number: "+targetNum.toString());

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


	$(".crystal").on('click', function() {
		clickColor = $(this).attr('value'); 

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

		$("#playerTot").html("Total: "+sumCrystals.toString());

        if (sumCrystals > targetNum) {
        		loses = loses + 1;
        		alert("you lose");
        		gameReset();
        		$("#sLoses").html("Loses: "+loses.toString());
        } else if (sumCrystals === targetNum) {
        		wins = wins +1;
        		alert("you win");
        		gameReset();
        		$("#sWins").html("Wins: "+wins.toString());
        }
    });

});