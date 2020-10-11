function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function timer() {
    var fiveMinutes = 60 * 5,
        display = document.getElementById("timer");
    startTimer(fiveMinutes, display);
};

document.getElementById("startButton").onclick = function() {
	startButton.disabled = true;
	timer();
	application();
}



function application(){

let woodBuildingLevel = 0;
let stoneBuildingLevel = 0;
let ironBuildingLevel = 0;

let wood = 1000;
let stone = 1000;
let tools = 1000;

let resources_array = [wood,stone,tools];


//WOOD UPGRADE
function upgradeWood(){ 

	if (resources_array[0] > 60 * woodBuildingLevel && resources_array[1] > 15 * woodBuildingLevel) {

		let result_wood = Math.floor(resources_array[0] - 60 * woodBuildingLevel);
		let result_stone = Math.floor(resources_array[1] - 15 * woodBuildingLevel);

		resources_array[0] = result_wood;
		resources_array[1] = result_stone;

			woodBuildingLevel += 1;

			document.getElementById("woodPara").innerHTML = "Level " + woodBuildingLevel;
			let buildLevelInfoBoxDisplayWeilJsNichtSchlauIst = woodBuildingLevel + 1;
			document.getElementById("mainCenterInfoNextLevelWood").innerHTML = "Material required to improve to level " + buildLevelInfoBoxDisplayWeilJsNichtSchlauIst + " :";
			document.getElementById("resource_wood").innerHTML = resources_array[0];
			document.getElementById("resource_stone").innerHTML =  resources_array[1];
			resourcesNextLevelWoodRequiredCalc();
		}
	 else {
		console.log("Not enough resources.");
	}
}

document.getElementById("upgradeWoodButtonMainCenterInfo").onclick=function (){
	upgradeWood();
}

//STONE UPGRADE
function upgradeStone(){

	if (resources_array[0] > 45 * stoneBuildingLevel && resources_array[1] > 22 * stoneBuildingLevel) {

		let result_wood = Math.floor(resources_array[0] - 45 * stoneBuildingLevel);
		let result_stone = Math.floor(resources_array[1] - 22 * stoneBuildingLevel);

		resources_array[0] = result_wood;
		resources_array[1] = result_stone;

			stoneBuildingLevel += 1;

			document.getElementById("stonePara").innerHTML = "Level " + stoneBuildingLevel;
			let buildLevelInfoBoxDisplayWeilJsNichtSchlauIst = stoneBuildingLevel + 1;
			document.getElementById("mainCenterInfoNextLevelStone").innerHTML = "Material required to improve to level " + buildLevelInfoBoxDisplayWeilJsNichtSchlauIst + " :";
			document.getElementById("stonePara").innerHTML = stoneBuildingLevel;
			document.getElementById("resource_wood").innerHTML =resources_array[0];
			document.getElementById("resource_stone").innerHTML = resources_array[1];
			resourcesNextLevelStoneRequiredCalc();
		}
	 else {
		console.log("Not enough resources.");
	}
}

document.getElementById("upgradeStoneButtonMainCenterInfo").onclick=function(){
	upgradeStone();
}

//TOOLS UPGRADE
function upgradeIron(){

	if (resources_array[0] > 225 * ironBuildingLevel && resources_array[1] > 112 * ironBuildingLevel) {

		let result_wood = Math.floor(resources_array[0] - 225 * ironBuildingLevel);
		let result_stone = Math.floor(resources_array[1] - 112 * ironBuildingLevel);

		resources_array[0] = result_wood;
		resources_array[1] = result_stone;

			ironBuildingLevel += 1;

			document.getElementById("ironPara").innerHTML = "Level " + ironBuildingLevel;
			let buildLevelInfoBoxDisplayWeilJsNichtSchlauIst = ironBuildingLevel + 1;
			document.getElementById("mainCenterInfoNextLevelTools").innerHTML = "Material required to improve to level " + buildLevelInfoBoxDisplayWeilJsNichtSchlauIst + " :";
			document.getElementById("ironPara").innerHTML = ironBuildingLevel;
			document.getElementById("resource_wood").innerHTML =resources_array[0];
			document.getElementById("resource_stone").innerHTML = resources_array[1];
			resourcesNextLevelToolsRequiredCalc();
		}
	 else {
		console.log("Not enough resources.");
	}
}

document.getElementById("upgradeToolsButtonMainCenterInfo").onclick=function(){
	upgradeIron();
}

//REQUIRED RESOURCES INFO DISPLAY

let resourceNextLevelArray = [wood, stone, tools];

function resourcesNextLevelWoodRequiredCalc() {
	wood = Math.floor(60 * woodBuildingLevel); 
	stone = Math.floor(15 * woodBuildingLevel);	
	tools = Math.floor(0 * woodBuildingLevel);

	resourceNextLevelArray[0] = wood;
	resourceNextLevelArray[1] = stone;
	resourceNextLevelArray[2] = tools;

	document.getElementById("mainCenterInfoNextLevelWoodRequiredResources").innerHTML = "Wood : " + resourceNextLevelArray[0] + " Stone: " + resourceNextLevelArray[1] + " Tools: " + resourceNextLevelArray[2] ;	
}

function resourcesNextLevelStoneRequiredCalc() {
	wood = Math.floor(45 * woodBuildingLevel); 
	stone = Math.floor(22 * woodBuildingLevel);	
	tools = Math.floor(0 * woodBuildingLevel);

	resourceNextLevelArray[0] = wood;
	resourceNextLevelArray[1] = stone;
	resourceNextLevelArray[2] = tools;

	document.getElementById("mainCenterInfoNextLevelStoneRequiredResources").innerHTML = "Wood : " + resourceNextLevelArray[0] + " Stone: " + resourceNextLevelArray[1] + " Tools: " + resourceNextLevelArray[2] ;
	
}

function resourcesNextLevelToolsRequiredCalc() {
	wood = Math.floor(225 * woodBuildingLevel); 
	stone = Math.floor(112 * woodBuildingLevel);	
	tools = Math.floor(0 * woodBuildingLevel);

	resourceNextLevelArray[0] = wood;
	resourceNextLevelArray[1] = stone;
	resourceNextLevelArray[2] = tools;

	document.getElementById("mainCenterInfoNextLevelToolsRequiredResources").innerHTML = "Wood : " + resourceNextLevelArray[0] + " Stone: " + resourceNextLevelArray[1] + " Tools: " + resourceNextLevelArray[2] ;
}


//UPGRADE ICONS CHECK

document.getElementById("menuBuildings").onlclick=function(){
	iconImageChangerWoodCutterIcon();
	iconImageChangerStoneCutterIcon();
	iconImageChangerIronCutterIcon();
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
		image.src = "images/icons/Stone_masons_hut_unable_icon.png";
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


//RESOURCE PRODUCTION

window.setInterval(production_wood, 2000);
window.setInterval(production_stone, 2000);
window.setInterval(production_iron, 2000);

function production_wood(){
	let production = Math.floor(3 * woodBuildingLevel * 1,1);
	resources_array[0] = resources_array[0] + production;

	document.getElementById("resource_wood").innerHTML = resources_array[0];
}

function production_stone(){
	let production = Math.floor(2 * stoneBuildingLevel * 1,1);
	resources_array[1] = resources_array[1] + production;
	
	document.getElementById("resource_stone").innerHTML = resources_array[1];
}

function production_iron(){
	let production = Math.floor(1 * ironBuildingLevel * 1,1);
	resources_array[2] = resources_array[2] + production;
	
	document.getElementById("resource_iron").innerHTML = resources_array[2];
}


//MILITARY

let ship1 = {hp:150, attack:25, amount:0};
let ship2 = {hp:225, attack:40, amount:0};
let ship3 = {hp:350, attack:65, amount:0}
let tower1 = {hp:325, attack:20, amount:0}
let tower2 = {hp:500, attack:40, amount:0}

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
		}
	 else {
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
			//document.getElementById("mainCenterInfoNextLevelStone").innerHTML = "Material required to improve to level " + buildLevelInfoBoxDisplayWeilJsNichtSchlauIst + " :";
			document.getElementById("resource_wood").innerHTML =resources_array[0];
			document.getElementById("resource_stone").innerHTML = resources_array[1];
			document.getElementById("resource_iron").innerHTML = resources_array[2];
		}
	 else {
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
			//document.getElementById("mainCenterInfoNextLevelStone").innerHTML = "Material required to improve to level " + buildLevelInfoBoxDisplayWeilJsNichtSchlauIst + " :";
			document.getElementById("resource_wood").innerHTML =resources_array[0];
			document.getElementById("resource_stone").innerHTML = resources_array[1];
			document.getElementById("resource_iron").innerHTML = resources_array[2];
		}
	 else {
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
			//document.getElementById("mainCenterInfoNextLevelStone").innerHTML = "Material required to improve to level " + buildLevelInfoBoxDisplayWeilJsNichtSchlauIst + " :";
			document.getElementById("resource_wood").innerHTML =resources_array[0];
			document.getElementById("resource_stone").innerHTML = resources_array[1];
			document.getElementById("resource_iron").innerHTML = resources_array[2];
		}
	 else {
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
			//document.getElementById("mainCenterInfoNextLevelStone").innerHTML = "Material required to improve to level " + buildLevelInfoBoxDisplayWeilJsNichtSchlauIst + " :";
			document.getElementById("resource_wood").innerHTML =resources_array[0];
			document.getElementById("resource_stone").innerHTML = resources_array[1];
			document.getElementById("resource_iron").innerHTML = resources_array[2];
		}
	 else {
		console.log("Not enough resources.");
	}
}

document.getElementById("constructTower2ButtonMainCenterInfo").onclick=function(){
	tower2Constructor();
}



//TEST AREA

let player = {hp:150, attack:25};
let opponent = {hp:100, attack:20};

function combatArray(){


    while (player.hp && opponent.hp > 0) {
        player.hp -= opponent.attack;
        opponent.hp -= player.attack;
        console.log("Opponent.hp: " + opponent.hp + "\nPlayer.hp: " + player.hp);
    }
    return;
}

document.getElementById("startCombatButton").onclick=function(){
	combatArray();
}

document.getElementById("combatArrayTestButton").onclick=function(){
	console.log(militaryArrayPlayer[0]);
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