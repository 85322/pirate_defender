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

let wood = 100;
let stone = 100;
let tools = 0;

let resources_array = [wood,stone,tools];


//WOOD UPGRADE
function upgradeWood(){ 

	if (resources_array[0] > 60 * woodBuildingLevel&& resources_array[1] > 15 * woodBuildingLevel) {

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

	if (resources_array[0] > 45 * stoneBuildingLevel&& resources_array[1] > 22 * stoneBuildingLevel) {

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


//TEST AREA

ship1 = 0;
ship2 = 0;
ship3 = 0;
tower1 = 0;
tower2 = 0;

let militaryArrayPlayer = [ship1, ship2, ship3, tower1, tower2];

function ship1Constructor() {
	if (resources_array[0] > 100 && resources_array[1] > 100 && resources_array[2] > 25 ) {

		let result_wood = Math.floor(resources_array[0] - 100);
		let result_stone = Math.floor(resources_array[1] - 100);
		let result_tools = Math.floor(resources_array[2] - 25);

		resources_array[0] = result_wood;
		resources_array[1] = result_stone;
		resources_array[2] = result_tools;

		militaryArrayPlayer[0] += 1;

			document.getElementById("ship1Number").innerHTML = militaryArrayPlayer[0];
			//let buildLevelInfoBoxDisplayWeilJsNichtSchlauIst = stoneBuildingLevel + 1;
			//document.getElementById("mainCenterInfoNextLevelStone").innerHTML = "Material required to improve to level " + buildLevelInfoBoxDisplayWeilJsNichtSchlauIst + " :";
			//document.getElementById("stonePara").innerHTML = stoneBuildingLevel;
			document.getElementById("resource_wood").innerHTML =resources_array[0];
			document.getElementById("resource_stone").innerHTML = resources_array[1];
			document.getElementById("resource_iron").innerHTML = resources_array[2];
			//resourcesNextLevelStoneRequiredCalc();
		}
	 else {
		console.log("Not enough resources.");
	}
}

document.getElementById("ship1ConstructorImage").onclick=function(){
	ship1Constructor();
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