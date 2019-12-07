(function (){

var woodBuildingLevel = 0;
var stoneBuildingLevel = 0;
var ironBuildingLevel = 0;

var wood = 300;
var stone = 300;
var iron = 0;

var resources_array = [wood,stone,iron];


//WOOD UPGRADE
function upgradeWood(){ 

	if (resources_array[0] > 40 * 1.5 * woodBuildingLevel && resources_array[1] > 10 * 1.5 * woodBuildingLevel) {

		var result_wood = Math.floor(resources_array[0] - 40 * 1.5 * woodBuildingLevel);
		var result_stone = Math.floor(resources_array[1] - 10 * 1.5 * woodBuildingLevel);

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

	if (resources_array[0] > 30 * 1.5 * stoneBuildingLevel && resources_array[1] > 15 * 1.5 * stoneBuildingLevel) {

		var result_wood = Math.floor(resources_array[0] - 30 * 1.5 * stoneBuildingLevel);
		var result_stone = Math.floor(resources_array[1] - 15 * 1.5 * stoneBuildingLevel);

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

			if (resources_array[0] > 150 * 1.5 * ironBuildingLevel && resources_array[1] > 75 * 1.5 * ironBuildingLevel) {

		var result_wood = Math.floor(resources_array[0] - 150 * 1.5 * ironBuildingLevel);
		var result_stone = Math.floor(resources_array[1] - 75 * 1.5 * ironBuildingLevel);

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
/*function showResources(){
	console.log(resources_array[0]);
	
}

document.getElementById("showResourcesConsole").onclick=function(){showResources();
}

*/
}());