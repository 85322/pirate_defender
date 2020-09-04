(function (){

let woodBuildingLevel = 0;
let stoneBuildingLevel = 0;
let ironBuildingLevel = 0;

let wood = 100;
let stone = 100;
let iron = 0;

let resources_array = [wood,stone,iron];


//WOOD UPGRADE
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

			document.getElementById("stonePara").innerHTML = stoneBuildingLevel;
			let buildLevelInfoBoxDisplayWeilJsNichtSchlauIst = stoneBuildingLevel + 1;
			document.getElementById("mainCenterInfoNextLevelStone").innerHTML = "Material required to improve to level " + buildLevelInfoBoxDisplayWeilJsNichtSchlauIst + " :";
			document.getElementById("stonePara").innerHTML = stoneBuildingLevel;
			document.getElementById("resource_wood").innerHTML =resources_array[0];
			document.getElementById("resource_stone").innerHTML = resources_array[1];
		}
	 else {
		console.log("Not enough resources.");
	}
}

document.getElementById("upgradeStoneButtonMainCenterInfo").onclick=function(){
	upgradeStone();
}

//IRON UPGRADE
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
			document.getElementById("ironPara").innerHTML = ironBuildingLevel;
			document.getElementById("resource_wood").innerHTML =resources_array[0];
			document.getElementById("resource_stone").innerHTML = resources_array[1];
		}
	 else {
		console.log("Not enough resources.");
	}
}

document.getElementById("upgradeToolsButtonMainCenterInfo").onclick=function(){
	upgradeIron();
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
/*
function getBuildingLevel {

let woodParaNumber = document.getElementById("woodPara").innerHTML;

}

function nextBuildingLevelDisplay() {
	let buildingsLevelArray = [woodParaNumber];
	document.getElementById("mainCenterInfoNextLevelWood").innerHTML = buildingsLevelArray[0];
}
window.setInterval(nextBuildingLevelDisplay, 1000);
*/


 //RESOURCE STATISTICS

let resourceArrayStatisticMinute = [wood, stone, iron];

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
 	function mapReset() {
	location.reload();	 
	}

	document.getElementById("menuReset").onclick=function() {
	mapReset();
}







}());