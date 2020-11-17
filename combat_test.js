//COMBAT SYSTEM

/*
let ship1 = {hp:150, attack:25, amount:0};
let ship2 = {hp:225, attack:40, amount:0};
let ship3 = {hp:350, attack:65, amount:0};
let tower1 = {hp:325, attack:20, amount:0};
let tower2 = {hp:500, attack:40, amount:0};
*/

let opponentTotalHealth = [2000]; 
let opponentTotalAttack = [40];
let currentLevel = 1;

//weil properties multiplizieren zu schwer ist für JS. amount * atk/hp, for array summe = total atk/hp
function combatArray(){

	let playerTotalHealth = 0;
	
	let militaryArrayTotalHealth = [militaryArrayPlayer[0] * 150, militaryArrayPlayer[1] * 225, militaryArrayPlayer[2] * 350, militaryArrayPlayer[3] * 325, militaryArrayPlayer[4] * 500]; 
	
	for(var i in militaryArrayTotalHealth) { playerTotalHealth += militaryArrayTotalHealth[i]; }
	console.log("Total health player: " + playerTotalHealth);


	let militaryArrayTotalAttack = [militaryArrayPlayer[0] * 25, militaryArrayPlayer[1] * 40, militaryArrayPlayer[2] * 65, militaryArrayPlayer[3] * 20, militaryArrayPlayer[4] * 40];

	let playerTotalAttack = 0;

	for(var i in militaryArrayTotalAttack) { playerTotalAttack += militaryArrayTotalAttack[i]; }
	console.log("Total attack player: " + playerTotalAttack);


	
	let combatTextArray = []; //nimmt mit .push daten aus while, gibt mit .join als string wieder

	combatTextArray.push("Opponent total hp: " + opponentTotalHealth[0] + "\nPlayer total hp: " + playerTotalHealth);

    while (playerTotalHealth || opponentTotalHealth[0] > 0) {

		
        playerTotalHealth -= opponentTotalAttack[0];
		opponentTotalHealth[0] -= playerTotalAttack;
		console.log("Opponent.hp: " + opponentTotalHealth[0] + "\nPlayer.hp: " + playerTotalHealth);
		combatTextArray.push("Opponent.hp: " + opponentTotalHealth[0] + "\nPlayer.hp: " + playerTotalHealth);
	
	} 

	if (playerTotalHealth < 1 ) {
		console.log("Defeat!");
		alert("Combat results:")
		alert(combatTextArray.join("\n\n"));
		alert("Defeat!");
		location.reload();
		

	} else if (opponentTotalHealth[0] < 1 ) {
		console.log("YOU WIN!");
		alert("Combat results:")
		alert(combatTextArray.join("\n\n"));

		if (currentLevel > 4) {
			alert("You defeated the pirates!\nVictory!");
			location.reload();

		} else {
			currentLevel +=1 ;
			document.getElementById("menuCurrentLevelDisplay").innerHTML = ("Level: " + currentLevel);
			alert("Victory!\n\nTo the next challenge!\n\n");
			opponentTotalHealth = opponentTotalHealth.map(function(val){return opponentTotalHealth=3000;});
			opponentTotalAttack = opponentTotalAttack.map(function(val){return opponentTotalAttack*2;});
			}
		}
};
