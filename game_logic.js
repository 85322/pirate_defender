document.getElementById("startButton").onclick = function() {
	startButton.disabled = true;
	application();
	
}

function application(){

//TIMER

alert("Greetings commander, we need to build up our economy and defenses before the first wave of pirates attack!\n\nClick Start to begin the first round.",
timer());

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
			timer = duration;
			combatArray();
        }
	}, 1000);
}

function timer() {
    let Minutes = 60 * 1.0,
        display = document.getElementById("timer");
    startTimer(Minutes, display);
};


//GENERAL RESOURCES

let woodBuildingLevel = 0;
let stoneBuildingLevel = 0;
let ironBuildingLevel = 0;

let wood = 600;
let stone = 500;
let tools = 300;

let resources_array = [wood,stone,tools];


//BUILDINGS
//prüfen ob resourcen reichen aus array, dann preis * current lvl, in zwischenarray, dann ausgabe

function upgradeWood(){ 

	if (resources_array[0] > 60 * woodBuildingLevel && resources_array[1] > 15 * woodBuildingLevel) {

		let result_wood = Math.floor(resources_array[0] - 60 * woodBuildingLevel);
		let result_stone = Math.floor(resources_array[1] - 15 * woodBuildingLevel);

		resources_array[0] = result_wood;
		resources_array[1] = result_stone;

			woodBuildingLevel += 1;

			document.getElementById("woodPara").innerHTML = woodBuildingLevel;
			let buildLevelInfoBoxDisplayWeilJsNichtSchlauIst = woodBuildingLevel + 1;
			document.getElementById("mainCenterInfoNextLevelWood").innerHTML = "Material required to improve to level " + buildLevelInfoBoxDisplayWeilJsNichtSchlauIst + " :";
			document.getElementById("resource_wood").innerHTML = resources_array[0];
			document.getElementById("resource_stone").innerHTML =  resources_array[1];
			resourcesNextLevelWoodRequiredCalc();
		} else {
		console.log("Not enough resources.");
	}
}

document.getElementById("upgradeWoodButtonMainCenterInfo").onclick=function (){
	upgradeWood();
}

function upgradeStone(){

	if (resources_array[0] > 45 * stoneBuildingLevel && resources_array[1] > 22 * stoneBuildingLevel) {

		let result_wood = Math.floor(resources_array[0] - 45 * stoneBuildingLevel);
		let result_stone = Math.floor(resources_array[1] - 22 * stoneBuildingLevel);

		resources_array[0] = result_wood;
		resources_array[1] = result_stone;

			stoneBuildingLevel += 1;

			document.getElementById("stonePara").innerHTML = stoneBuildingLevel;
			let buildLevelInfoBoxDisplayWeilJsNichtSchlauIst = stoneBuildingLevel + 1;
			document.getElementById("mainCenterInfoNextLevelStone").innerHTML = "Material required to improve to level " + buildLevelInfoBoxDisplayWeilJsNichtSchlauIst + " :";
			document.getElementById("resource_wood").innerHTML =resources_array[0];
			document.getElementById("resource_stone").innerHTML = resources_array[1];
			resourcesNextLevelStoneRequiredCalc();
		} else {
		console.log("Not enough resources.");
	}
}

document.getElementById("upgradeStoneButtonMainCenterInfo").onclick=function(){
	upgradeStone();
}


function upgradeIron(){

	if (resources_array[0] > 225 * ironBuildingLevel && resources_array[1] > 112 * ironBuildingLevel) {

		let result_wood = Math.floor(resources_array[0] - 225 * ironBuildingLevel);
		let result_stone = Math.floor(resources_array[1] - 112 * ironBuildingLevel);

		resources_array[0] = result_wood;
		resources_array[1] = result_stone;

			ironBuildingLevel += 1;

			document.getElementById("ironPara").innerHTML = ironBuildingLevel;
			let buildLevelInfoBoxDisplayWeilJsNichtSchlauIst = ironBuildingLevel + 1;
			document.getElementById("mainCenterInfoNextLevelTools").innerHTML = "Material required to improve to level " + buildLevelInfoBoxDisplayWeilJsNichtSchlauIst + " :";
			document.getElementById("resource_wood").innerHTML =resources_array[0];
			document.getElementById("resource_stone").innerHTML = resources_array[1];
			resourcesNextLevelToolsRequiredCalc();
		} else {
		console.log("Not enough resources.");
	}
}

document.getElementById("upgradeToolsButtonMainCenterInfo").onclick=function(){
	upgradeIron();
}


//REQUIRED RESOURCES INFO DISPLAY
//preis mal current building level für nächste stufe

let resourceNextLevelArray = [wood, stone, tools];

function resourcesNextLevelWoodRequiredCalc() {
	wood = Math.floor(60 * woodBuildingLevel); 
	stone = Math.floor(15 * woodBuildingLevel);	
	tools = Math.floor(0 * woodBuildingLevel);

	resourceNextLevelArray[0] = wood;
	resourceNextLevelArray[1] = stone;
	resourceNextLevelArray[2] = tools;

	document.getElementById("mainCenterInfoNextLevelWoodRequiredResources").innerHTML = 
	"Wood : " + resourceNextLevelArray[0] + " Stone: " + resourceNextLevelArray[1] + " Tools: " + resourceNextLevelArray[2] ;	
}

function resourcesNextLevelStoneRequiredCalc() {
	wood = Math.floor(45 * stoneBuildingLevel); 
	stone = Math.floor(22 * stoneBuildingLevel);	
	tools = Math.floor(0 * stoneBuildingLevel);

	resourceNextLevelArray[0] = wood;
	resourceNextLevelArray[1] = stone;
	resourceNextLevelArray[2] = tools;

	document.getElementById("mainCenterInfoNextLevelStoneRequiredResources").innerHTML = 
	"Wood : " + resourceNextLevelArray[0] + " Stone: " + resourceNextLevelArray[1] + " Tools: " + resourceNextLevelArray[2] ;
	
}

function resourcesNextLevelToolsRequiredCalc() {
	wood = Math.floor(225 * ironBuildingLevel); 
	stone = Math.floor(112 * ironBuildingLevel);	
	tools = Math.floor(0 * ironBuildingLevel);

	resourceNextLevelArray[0] = wood;
	resourceNextLevelArray[1] = stone;
	resourceNextLevelArray[2] = tools;

	document.getElementById("mainCenterInfoNextLevelToolsRequiredResources").innerHTML = 
	"Wood : " + resourceNextLevelArray[0] + " Stone: " + resourceNextLevelArray[1] + " Tools: " + resourceNextLevelArray[2] ;
}



//UPGRADE ICONS CHECK

document.getElementById("menuBuildings").onlclick=function(){
	iconImageChangerWoodCutterIcon();
	iconImageChangerStoneCutterIcon();
	iconImageChangerIronCutterIcon();
	iconImagechangerShip1Icon();
	iconImagechangerShip2Icon();
	iconImagechangerShip3Icon();
	iconImagechangerTower1Icon();
	iconImagechangerTower2Icon();
}


function iconImageChangerWoodCutterIcon() {
	let image = document.getElementById('woodCutter_icon');
	if (resources_array[0] > 60 * woodBuildingLevel && resources_array[1] > 15 * woodBuildingLevel) {
		image.src = "images/icons/Lumberjack_hut_icon.png";
		upgradeWoodButtonMainCenterInfo.disabled = false;
	} else {
		image.src = "images/icons/Lumberjack_hut_unable_icon.png";
		upgradeWoodButtonMainCenterInfo.disabled = true;
	}
}

	window.setInterval(iconImageChangerWoodCutterIcon, 500);


function iconImageChangerStoneCutterIcon() {
	let image = document.getElementById('stoneCutter_icon');
	if (resources_array[0] > 45 * stoneBuildingLevel && resources_array[1] > 22 * stoneBuildingLevel) {
		image.src = "images/icons/Stone_masons_hut_icon.png";
		upgradeStoneButtonMainCenterInfo.disabled = false;
	} else {
		image.src = "images/icons/Stone_masons_hut_unable_icon3.png";
		upgradeStoneButtonMainCenterInfo.disabled = true;
	}
}
	
	window.setInterval(iconImageChangerStoneCutterIcon, 500);


function iconImageChangerIronCutterIcon() {
	let image = document.getElementById('ironSmelter_icon');
	if (resources_array[0] > 225 * ironBuildingLevel && resources_array[1] > 112 * ironBuildingLevel)  {
		image.src = "images/icons/Iron_smelter_icon.png";
		upgradeToolsButtonMainCenterInfo.disabled = false;
	} else {
		image.src = "images/icons/Iron_smelter_unable_icon.png";
		upgradeToolsButtonMainCenterInfo.disabled = true;
	}
}
	
	window.setInterval(iconImageChangerIronCutterIcon, 500);


function iconImagechangerShip1Icon(){
	let image = document.getElementById('ship1ConstructorImage');
	if (resources_array[0] > 100 && resources_array[2] > 25)  {
		image.src = "images/ships/ship1.png";
		constructShip1ButtonMainCenterInfo.disabled = false;
	} else {
		image.src = "images/ships/ship1_unable.png";
		constructShip1ButtonMainCenterInfo.disabled = true;
	}
}
	window.setInterval(iconImagechangerShip1Icon, 500);


function iconImagechangerShip2Icon(){
	let image = document.getElementById('ship2ConstructorImage');
	if (resources_array[0] > 150 && resources_array[2] > 35)  {
		image.src = "images/ships/ship2.png";
		constructShip2ButtonMainCenterInfo.disabled = false;
	} else {
		image.src = "images/ships/ship2_unable.png";
		constructShip2ButtonMainCenterInfo.disabled = true;
	}
}
	window.setInterval(iconImagechangerShip2Icon, 500);


function iconImagechangerShip3Icon(){
	let image = document.getElementById('ship3ConstructorImage');
	if (resources_array[0] > 200 && resources_array[2] > 60)  {
		image.src = "images/ships/ship3.png";
		constructShip3ButtonMainCenterInfo.disabled = false;
	} else {
		image.src = "images/ships/ship3_unable.png";
		constructShip3ButtonMainCenterInfo.disabled = true;
	}
}
	window.setInterval(iconImagechangerShip3Icon, 500);


function iconImagechangerTower1Icon(){
	let image = document.getElementById('tower1ConstructorImage');
	if (resources_array[0] > 50 && resources_array[1] > 200 && resources_array[2] > 20)  {
		image.src = "images/towers/tower1.png";
		constructTower1ButtonMainCenterInfo.disabled = false;
	} else {
		image.src = "images/towers/tower1_unable.png";
		constructTower1ButtonMainCenterInfo.disabled = true;
	}
}
	window.setInterval(iconImagechangerTower1Icon, 500);

function iconImagechangerTower2Icon(){
	let image = document.getElementById('tower2ConstructorImage');
	if (resources_array[0] > 75 && resources_array[1] > 300 && resources_array[2] > 30)  {
		image.src = "images/towers/tower2.png";
		constructTower2ButtonMainCenterInfo.disabled = false;
	} else {
		image.src = "images/towers/tower2_unable.png";
		constructTower2ButtonMainCenterInfo.disabled = true;
	}
}
	window.setInterval(iconImagechangerTower2Icon, 500);

	function iconImageChangerAtkUpgradeIcon() {
		let image = document.getElementById('atkUpgradeShipIcon');
		if (resources_array[0] > 20 && resources_array[2] > 5) {
			image.src = "images/upgrades/atkUpgradeShipIcon.png";
			upgradeWoodButtonMainCenterInfo.disabled = false;
		} else {
			image.src = "images/upgrades/atkUpgradeShipIconUnable.png";
			upgradeWoodButtonMainCenterInfo.disabled = true;
		}
	}
	window.setInterval(iconImageChangerAtkUpgradeIcon, 500);

	function iconImageChangerDefUpgradeIcon() {
		let image = document.getElementById('defUpgradeShipIcon');
		if (resources_array[0] > 20 && resources_array[2] > 5) {
			image.src = "images/upgrades/defUpgradeShipIcon.png";
			upgradeWoodButtonMainCenterInfo.disabled = false;
		} else {
			image.src = "images/upgrades/defUpgradeShipIconUnable.png";
			upgradeWoodButtonMainCenterInfo.disabled = true;
		}
	}
	window.setInterval(iconImageChangerDefUpgradeIcon, 500);
			
//RESOURCE PRODUCTION

function production_wood(){
	let production = Math.floor(3 * woodBuildingLevel * 1,1);
	let upgradeEcoValue = parseInt(document.getElementById("ecoUpgrade").innerHTML) * 10;
	let upgradeEco = Math.floor(((upgradeEcoValue / 100) * production ));
	resources_array[0] = resources_array[0] + production + upgradeEco;

	document.getElementById("resource_wood").innerHTML = resources_array[0];
}

function production_stone(){
	let production = Math.floor(2 * stoneBuildingLevel * 1,1);
	let upgradeEcoValue = parseInt(document.getElementById("ecoUpgrade").innerHTML) * 10;
	let upgradeEco = Math.floor(((upgradeEcoValue / 100) * production ));
	resources_array[1] = resources_array[1] + production + upgradeEco;
	
	document.getElementById("resource_stone").innerHTML = resources_array[1];
}

function production_iron(){

	let production = Math.floor(1 * ironBuildingLevel * 1,1);
	let upgradeEcoValue = parseInt(document.getElementById("ecoUpgrade").innerHTML) * 10;
	let upgradeEco = Math.floor(((upgradeEcoValue / 100) * production ));
	resources_array[2] = resources_array[2] + production +  + upgradeEco;
	
	document.getElementById("resource_iron").innerHTML = resources_array[2];
}

window.setInterval(production_wood, 2000);
window.setInterval(production_stone, 2000);
window.setInterval(production_iron, 2000);

//MILITARY

let ship1 = {hp:150, attack:25, amount:0};
let ship2 = {hp:225, attack:40, amount:0};
let ship3 = {hp:350, attack:65, amount:0};
let tower1 = {hp:325, attack:20, amount:0};
let tower2 = {hp:500, attack:40, amount:0};

let militaryArrayPlayer = [ship1.amount, ship2.amount, ship3.amount, tower1.amount, tower2.amount];


function ship1Constructor() {
	if (resources_array[0] > 100 && resources_array[1] > 0 && resources_array[2] > 25 ) {

		let result_wood = Math.floor(resources_array[0] - 100);
		let result_stone = Math.floor(resources_array[1] - 0);
		let result_tools = Math.floor(resources_array[2] - 25);

		resources_array[0] = result_wood;
		resources_array[1] = result_stone;
		resources_array[2] = result_tools;

		militaryArrayPlayer[0] += 1;

			document.getElementById("ship1Number").innerHTML = militaryArrayPlayer[0] + "x";
			document.getElementById("resource_wood").innerHTML =resources_array[0];
			document.getElementById("resource_stone").innerHTML = resources_array[1];
			document.getElementById("resource_iron").innerHTML = resources_array[2];
		} else {
		console.log("Not enough resources.");
	}
}

document.getElementById("constructShip1ButtonMainCenterInfo").onclick=function(){
	ship1Constructor();
}

function ship2Constructor() {
	if (resources_array[0] > 150 && resources_array[1] > 0 && resources_array[2] > 35 ) {

		let result_wood = Math.floor(resources_array[0] - 150);
		let result_stone = Math.floor(resources_array[1] - 0);
		let result_tools = Math.floor(resources_array[2] - 35);

		resources_array[0] = result_wood;
		resources_array[1] = result_stone;
		resources_array[2] = result_tools;

		militaryArrayPlayer[1] += 1;

			document.getElementById("ship2Number").innerHTML = militaryArrayPlayer[1] + "x";
			document.getElementById("resource_wood").innerHTML =resources_array[0];
			document.getElementById("resource_stone").innerHTML = resources_array[1];
			document.getElementById("resource_iron").innerHTML = resources_array[2];
		} else {
		console.log("Not enough resources.");
	}
}

document.getElementById("constructShip2ButtonMainCenterInfo").onclick=function(){
	ship2Constructor();
}

function ship3Constructor() {
	if (resources_array[0] > 200 && resources_array[1] > 0 && resources_array[2] > 60 ) {

		let result_wood = Math.floor(resources_array[0] - 200);
		let result_stone = Math.floor(resources_array[1] - 0);
		let result_tools = Math.floor(resources_array[2] - 60);

		resources_array[0] = result_wood;
		resources_array[1] = result_stone;
		resources_array[2] = result_tools;

		militaryArrayPlayer[2] += 1;

			document.getElementById("ship3Number").innerHTML = militaryArrayPlayer[2] + "x";
			document.getElementById("resource_wood").innerHTML =resources_array[0];
			document.getElementById("resource_stone").innerHTML = resources_array[1];
			document.getElementById("resource_iron").innerHTML = resources_array[2];
		} else {
		console.log("Not enough resources.");
	}
}

document.getElementById("constructShip3ButtonMainCenterInfo").onclick=function(){
	ship3Constructor();
}


function tower1Constructor() {
	if (resources_array[0] > 50 && resources_array[1] > 200 && resources_array[2] > 20 ) {

		let result_wood = Math.floor(resources_array[0] - 50);
		let result_stone = Math.floor(resources_array[1] - 200);
		let result_tools = Math.floor(resources_array[2] - 20);

		resources_array[0] = result_wood;
		resources_array[1] = result_stone;
		resources_array[2] = result_tools;

		militaryArrayPlayer[3] += 1;

			document.getElementById("tower1Number").innerHTML = militaryArrayPlayer[3] + "x";
			document.getElementById("resource_wood").innerHTML =resources_array[0];
			document.getElementById("resource_stone").innerHTML = resources_array[1];
			document.getElementById("resource_iron").innerHTML = resources_array[2];
		} else {
			console.log("Not enough resources.");
	}
}

document.getElementById("constructTower1ButtonMainCenterInfo").onclick=function(){
	tower1Constructor();
}


function tower2Constructor() {
	if (resources_array[0] > 75 && resources_array[1] > 300 && resources_array[2] > 30 ) {

		let result_wood = Math.floor(resources_array[0] - 75);
		let result_stone = Math.floor(resources_array[1] - 300);
		let result_tools = Math.floor(resources_array[2] - 30);

		resources_array[0] = result_wood;
		resources_array[1] = result_stone;
		resources_array[2] = result_tools;

		militaryArrayPlayer[4] += 1;

			document.getElementById("tower2Number").innerHTML = militaryArrayPlayer[4] + "x";
			document.getElementById("resource_wood").innerHTML =resources_array[0];
			document.getElementById("resource_stone").innerHTML = resources_array[1];
			document.getElementById("resource_iron").innerHTML = resources_array[2];
		} else {
		console.log("Not enough resources.");
	}
}

document.getElementById("constructTower2ButtonMainCenterInfo").onclick=function(){
	tower2Constructor();
}

//TEST AREA

/*
Kosten upgrades: 
atk ship = 20 wood , 0 stone, 5 tools
def ship = 20 wood , 0 stone, 5 tools
def tower = 0 wood , 20 stone, 5 tools
atk tower = 0 wood , 20 stone, 5 tools
eco wood = 20 wood , 0 stone, 5 tools
eco stone = 0 wood , 20 stone, 5 tools
eco tools = 5 wood , 0 stone, 10 tools
*/

let upgradeAtkShipLevel = 0;

function atkUpgradeShip(){
	if (resources_array[0] > 20 && resources_array[2] > 5 ) {

		let result_wood = Math.floor(resources_array[0] - 20);
		let result_tools = Math.floor(resources_array[2] - 5);

		resources_array[0] = result_wood;
		resources_array[2] = result_tools;

		upgradeAtkShipLevel += 10;


			console.log(upgradeAtkShipLevel);
			document.getElementById("atkUpgrade").innerHTML = Math.floor(upgradeAtkShipLevel / 10);
			document.getElementById("resource_wood").innerHTML =resources_array[0];
			document.getElementById("resource_iron").innerHTML = resources_array[2];
		} else {
			console.log("Not enough resources.");
	}
}

document.getElementById("upgradeAtkShipButtonMainCenterInfo").onclick=function(){
	atkUpgradeShip();
}

let upgradeDefShipLevel = 0;

function defUpgradeShip(){
	if (resources_array[0] > 20 && resources_array[2] > 5 ) {

		let result_wood = Math.floor(resources_array[0] - 20);
		let result_tools = Math.floor(resources_array[2] - 5);

		resources_array[0] = result_wood;
		resources_array[2] = result_tools;

		upgradeDefShipLevel += 10;


			console.log(upgradeDefShipLevel);
			document.getElementById("defUpgrade").innerHTML = Math.floor(upgradeDefShipLevel / 10);
			document.getElementById("resource_wood").innerHTML =resources_array[0];
			document.getElementById("resource_iron").innerHTML = resources_array[2];
		} else {
			console.log("Not enough resources.");
	}
}

document.getElementById("upgradeDefShipButtonMainCenterInfo").onclick=function(){
	defUpgradeShip();
}

let upgradeEcoShipLevel = 0;

function ecoUpgradeShip(){
	if (resources_array[0] > 15 && resources_array[1] > 10 && resources_array[2] > 5 ) {

		let result_wood = Math.floor(resources_array[0] - 15);
		let result_stone = Math.floor(resources_array[1] - 10);
		let result_tools = Math.floor(resources_array[2] - 5);

		resources_array[0] = result_wood;
		resources_array[1] = result_stone;
		resources_array[2] = result_tools;

		upgradeEcoShipLevel += 10;

			console.log(upgradeEcoShipLevel);
			document.getElementById("ecoUpgrade").innerHTML = Math.floor(upgradeEcoShipLevel / 10);
			document.getElementById("resource_wood").innerHTML =resources_array[0];
			document.getElementById("resource_stone").innerHTML = resources_array[1];
			document.getElementById("resource_iron").innerHTML = resources_array[2];
		} else {
			console.log("Not enough resources.");
	}
}

document.getElementById("upgradeEcoShipButtonMainCenterInfo").onclick=function(){
	ecoUpgradeShip();
}

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

//amount * atk/hp, for array summe = total atk/hp weil properties multiplizieren nicht geht
function combatArray(){

	let playerTotalHealth = 1;
	
	let militaryArrayTotalHealth = [
		militaryArrayPlayer[0] * 150, 
		militaryArrayPlayer[1] * 225, 
		militaryArrayPlayer[2] * 350, 
		militaryArrayPlayer[3] * 325, 
		militaryArrayPlayer[4] * 500]; 
	
	for(var i in militaryArrayTotalHealth) { playerTotalHealth += militaryArrayTotalHealth[i]; }
	console.log("Total health player: " + playerTotalHealth);

	let militaryArrayTotalAttack = [
		militaryArrayPlayer[0] * 25,
		militaryArrayPlayer[1] * 40, 
		militaryArrayPlayer[2] * 65, 
		militaryArrayPlayer[3] * 20, 
		militaryArrayPlayer[4] * 40];													

	let playerTotalAttack = 1;

	for(var i in militaryArrayTotalAttack) { Math.floor(playerTotalAttack += militaryArrayTotalAttack[i]); }
	
	/*Upgrades bonus % values*/
	let upgradeAttackValue = parseInt(document.getElementById("atkUpgrade").innerHTML) * 10;
	let upgradeAtk = Math.floor(((upgradeAttackValue / 100) * playerTotalAttack));
	
	let upgradeDefenseValue = parseInt(document.getElementById("defUpgrade").innerHTML) * 10;
	let upgradeDef = Math.floor(((upgradeDefenseValue / 100) * playerTotalHealth));
	
	console.log("Total attack player: " + playerTotalAttack);
	console.log('Bonus ATK = ' + upgradeAtk);
	console.log('Bonus DEF = ' + upgradeDef);

	playerTotalHealthWithBonus = playerTotalHealth + upgradeDef; //weil -= nicht mit 2 argumenten in front funktioniert
	playerTotalAttackWithBonus = playerTotalAttack + upgradeAtk; //
	
	let combatTextArray = []; //nimmt mit .push daten aus while, gibt mit .join als string wieder

	combatTextArray.push(
	"Opponent total hp: " + opponentTotalHealth[0] + "\nPlayer total hp: " + playerTotalHealthWithBonus);

    while (playerTotalHealth && opponentTotalHealth[0] > 0) {

        playerTotalHealthWithBonus -= opponentTotalAttack[0];
		opponentTotalHealth[0] -= playerTotalAttackWithBonus;

		console.log ("Opponent.hp: " + opponentTotalHealth[0] + "\nPlayer.hp: " + playerTotalHealthWithBonus);
		combatTextArray.push("Opponent.hp: " + opponentTotalHealth[0] + "\nPlayer.hp: " + playerTotalHealthWithBonus);

		if (playerTotalHealthWithBonus < 1) {
				console.log("Defeat!");
				alert("Combat results:")
				alert(combatTextArray.join("\n\n"));
				alert("Defeat!");
				location.reload();
		}
	} 
		if (opponentTotalHealth[0] < 1 ) {
			console.log("YOU WIN!");
			alert("Combat results:")
			alert(combatTextArray.join("\n\n"));

		if (currentLevel > 4) {
			alert("You defeated the pirates!\n\nVictory!");
			location.reload();

		} else {
			currentLevel +=1 ;
			document.getElementById("menuCurrentLevelDisplay").innerHTML = ("Level: " + currentLevel);
			alert("Victory!\n\nTo the next challenge!\n\n");

			opponentTotalHealth = opponentTotalHealth.map(function(val){return opponentTotalHealth=3000;});
			opponentTotalAttack = opponentTotalAttack.map(function(val){return opponentTotalAttack*2;});
			}
		}
}

 //RESOURCE STATISTICS

let resourceArrayStatisticMinute = [wood, stone, tools];

function resourceMenuCalcProductionMinute(){

	let productionWood = Math.floor(3 * woodBuildingLevel * 1,1);
	let productionStone = Math.floor(2 * stoneBuildingLevel * 1,1);
	let productionIron = Math.floor(1 * ironBuildingLevel * 1,1);

	resourceArrayStatisticMinute[0] = productionWood * 30;
	resourceArrayStatisticMinute[1] = productionStone * 30;
	resourceArrayStatisticMinute[2] = productionIron * 30;

	classIdCounterWood();
	classIdCounterStone();
	classIdCounterTools();
}

	window.setInterval(resourceMenuCalcProductionMinute, 2000);

	//ByClass for-schleife, weil byID nicht mehrere parameter kann
	function classIdCounterWood() {
		let i, x;
		x = document.getElementsByClassName("resourcesProductionInfoWood");
		for (i = 0; i < x.length; i++) {
		  x[i].innerHTML = resourceArrayStatisticMinute[0] + " Wood / min";;
		};
	}

		function classIdCounterStone() {
		let i, x;
		x = document.getElementsByClassName("resourcesProductionInfoStone");
		for (i = 0; i < x.length; i++) {
		  x[i].innerHTML = resourceArrayStatisticMinute[1] + " Stone / min";;
		};
	}

	function classIdCounterTools() {
		let i, x;
		x = document.getElementsByClassName("resourcesProductionInfoTools");
		for (i = 0; i < x.length; i++) {
		  x[i].innerHTML = resourceArrayStatisticMinute[2] + " Tools / min";
		};
	}



//MAP GENERATION


/*function mapGenerationRandomizer() {
	let mapTileArray = ["images/island_tile.png", "images/water_tile.gif"]
	let num = Math.floor(Math.random() * 1);
	document.getElementById("mapCell1").appendChild(num);
	
}
	geht, ein image bis jetzt, noch nicht random, noch kein weg alle cellIDs/class anzusprechen
	(array alle IDs, randomizer?)
	|
	|
	v
 
function mapGenerationRandomizer() { 
	let img = new Image(); 
	img.src ='images/water_tile.gif';
	const mapTileArray = [] 
	document.getElementById('mapCell1').appendChild(img); 
	//document.getElementById("mapCell1").innerHTML = "Image Element Added.";  
}  
 document.getElementById("menuReset").onclick=function() {
	 mapGenerationRandomizer();
	 ;
 }
 */

 //MISC

 	function mapReset() {
	location.reload();	 
	}
	document.getElementById("menuReset").onclick=function() {
	mapReset();
}
};