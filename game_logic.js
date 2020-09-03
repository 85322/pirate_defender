(function (){

var woodBuildingLevel = 0;
var stoneBuildingLevel = 0;
var ironBuildingLevel = 0;

var wood = 100;
var stone = 100;
var iron = 0;

var resources_array = [wood,stone,iron];


//WOOD UPGRADE
function upgradeWood(){ 

	if (resources_array[0] > 60 * woodBuildingLevel && resources_array[1] > 15 * woodBuildingLevel) {

		var result_wood = Math.floor(resources_array[0] - 60 * woodBuildingLevel);
		var result_stone = Math.floor(resources_array[1] - 15 * woodBuildingLevel);

		resources_array[0] = result_wood;
		resources_array[1] = result_stone;

			woodBuildingLevel += 1;
			document.getElementById("woodPara").innerHTML =woodBuildingLevel;

			document.getElementById("resource_wood").innerHTML = resources_array[0];
			document.getElementById("resource_stone").innerHTML =  resources_array[1];
		}
	 else {
		console.log("Not enough resources.");
	}
}

document.getElementById("woodCutter_icon").onclick=function (){
	upgradeWood();
}

//STONE UPGRADE
function upgradeStone(){

	if (resources_array[0] > 45 * stoneBuildingLevel && resources_array[1] > 22 * stoneBuildingLevel) {

		var result_wood = Math.floor(resources_array[0] - 45 * stoneBuildingLevel);
		var result_stone = Math.floor(resources_array[1] - 22 * stoneBuildingLevel);

		resources_array[0] = result_wood;
		resources_array[1] = result_stone;

			stoneBuildingLevel += 1;
			document.getElementById("stonePara").innerHTML =stoneBuildingLevel;

			document.getElementById("resource_wood").innerHTML =resources_array[0];
			document.getElementById("resource_stone").innerHTML = resources_array[1];
		}
	 else {
		console.log("Not enough resources.");
	}
}

document.getElementById("stoneCutter_icon").onclick=function(){
	upgradeStone();
}

//IRON UPGRADE
function upgradeIron(){

			if (resources_array[0] > 225 * ironBuildingLevel && resources_array[1] > 112 * ironBuildingLevel) {

		var result_wood = Math.floor(resources_array[0] - 225 * ironBuildingLevel);
		var result_stone = Math.floor(resources_array[1] - 112 * ironBuildingLevel);

		resources_array[0] = result_wood;
		resources_array[1] = result_stone;

			ironBuildingLevel += 1;
			document.getElementById("ironPara").innerHTML =ironBuildingLevel;

			document.getElementById("resource_wood").innerHTML =resources_array[0];
			document.getElementById("resource_stone").innerHTML = resources_array[1];
		}
	 else {
		console.log("Not enough resources.");
	}
}

document.getElementById("ironSmelter_icon").onclick=function(){
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
		image.src = "images/woodcutter_icon.png";
	} else {
		image.src = "images/woodcutter_unable_icon.png";
	}
}

	window.setInterval(iconImageChangerWoodCutterIcon, 500);


function iconImageChangerStoneCutterIcon() {
	let image = document.getElementById('stoneCutter_icon');
	if (resources_array[0] > 45 * stoneBuildingLevel && resources_array[1] > 22 * stoneBuildingLevel) {
		image.src = "images/stonecutter_icon.png";
	} else {
		image.src = "images/stonecutter_unable_icon.png";
	}
}
	
	window.setInterval(iconImageChangerStoneCutterIcon, 500);


function iconImageChangerIronCutterIcon() {
	let image = document.getElementById('ironSmelter_icon');
	if (resources_array[0] > 225 * ironBuildingLevel && resources_array[1] > 112 * ironBuildingLevel)  {
		image.src = "images/smelter_icon.png";
	} else {
		image.src = "images/smelter_unable_icon.png";
	}
}
	
	window.setInterval(iconImageChangerIronCutterIcon, 500);


//RESOURCE PRODUCTION

window.setInterval(production_wood, 2000);
window.setInterval(production_stone, 2000);
window.setInterval(production_iron, 2000);

function production_wood(){
	var production = Math.floor(3 * woodBuildingLevel * 1,1);
	resources_array[0] = resources_array[0] + production;

	document.getElementById("resource_wood").innerHTML = resources_array[0];
}

function production_stone(){
	var production = Math.floor(2 * stoneBuildingLevel * 1,1);
	resources_array[1] = resources_array[1] + production;
	
	document.getElementById("resource_stone").innerHTML = resources_array[1];
}

function production_iron(){
	var production = Math.floor(1 * ironBuildingLevel * 1,1);
	resources_array[2] = resources_array[2] + production;
	
	document.getElementById("resource_iron").innerHTML = resources_array[2];
}


//TEST AREA

	//document.getElementById("woodCutter_icon").onmouseover=




 //RESOURCE STATISTICS

let resourceArrayStatisticMinute = [wood, stone, iron];

function resourceMenuCalcProductionMinute(){
	let productionWood = Math.floor(3 * woodBuildingLevel * 1,1);
	let productionStone = Math.floor(2 * stoneBuildingLevel * 1,1);
	let productionIron = Math.floor(1 * ironBuildingLevel * 1,1);

	resourceArrayStatisticMinute[0] = productionWood * 30;
	resourceArrayStatisticMinute[1] = productionStone * 30;
	resourceArrayStatisticMinute[2] = productionIron * 30;

	document.getElementById("woodPerMinute").innerHTML = resourceArrayStatisticMinute[0] + " wood / min";
	document.getElementById("stonePerMinute").innerHTML = resourceArrayStatisticMinute[1] + " stone / min";
	document.getElementById("ironPerMinute").innerHTML = resourceArrayStatisticMinute[2] + " iron / min";
}

	window.setInterval(resourceMenuCalcProductionMinute, 2000);





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

//KEYBINDS

const Action = {
  help()    { console.log(window.alert("Help string")) },
};

const keyAction = {
  F1: { keydown: Action.help},
};

const keyHandler = (ev) => {
  if (ev.repeat) return;  
  if (!(ev.key in keyAction) || !(ev.type in keyAction[ev.key])) return;
  keyAction[ev.key][ev.type]();
};

['keydown', 'keyup'].forEach((evType) => {
  document.body.addEventListener(evType, keyHandler);
});





}());