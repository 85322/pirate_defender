

//RIGHT SIDE NAV TABS
//alle tabs der klasse display none, ausser das ausgewählte display block
function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

document.getElementById("menuBuildings").onclick=function(){
	openTab('buildingsNav');
}

document.getElementById("menuResources").onclick=function(){
	openTab('resourcesNav');
}
/*
document.getElementById("menuFacilities").onclick=function(){
	openTab('facilityNav');
}

document.getElementById("menuResearch").onclick=function(){
	openTab('researchNav');
}

document.getElementById("menuMilitary").onclick=function(){
	openTab('militaryNav');
}
*/

document.getElementById("menuHelp").onclick=function(){
	openTab('helpNav');
	alert("F1 = Help screen \n\nF4 = Reset \n\nGeneral tips: Build up your economy first, then invest into military.");
}


//BUILDING DETAIL TABS

function openTabBuildings(tabNameBuildings) {
	var i, x;
	x = document.getElementsByClassName("containerTabBuildings");
	for (i = 0; i < x.length; i++) {
	  x[i].style.display = "none";
	}
	document.getElementById(tabNameBuildings).style.display = "block";
  }
 
	document.getElementById("woodCutter_tooltip").onclick=function () {
		openTabBuildings('woodCutter_iconDetailTab');
}

	document.getElementById("ironSmelter_tooltip").onclick=function () {
		openTabBuildings('ironSmelter_iconDetailTab');
}

	document.getElementById("stoneCutter_tooltip").onclick=function () {
		openTabBuildings('stoneCutter_iconDetailTab');
}

	document.getElementById("ship1ConstructorImage").onclick=function () {
		openTabBuildings('ship1_iconDetailTab');
}

	document.getElementById("ship2ConstructorImage").onclick=function () {
		openTabBuildings('ship2_iconDetailTab');
}

	document.getElementById("ship3ConstructorImage").onclick=function () {
		openTabBuildings('ship3_iconDetailTab');
}

	document.getElementById("tower1ConstructorImage").onclick=function () {
		openTabBuildings('tower1_iconDetailTab');
}

	document.getElementById("tower2ConstructorImage").onclick=function () {
		openTabBuildings('tower2_iconDetailTab');
}

	document.getElementById("atkUpgradeShipIcon").onclick=function () {
		openTabBuildings('atkUpgrade_iconDetailTab');
}

	document.getElementById("defUpgradeShipIcon").onclick=function () {
		openTabBuildings('defUpgrade_iconDetailTab');
}

	document.getElementById("ecoUpgradeShipIcon").onclick=function () {
		openTabBuildings('ecoUpgrade_iconDetailTab');
}

//KEYBINDS

const Action = {
	help()    {
		(window.alert("F1 = Help screen \n\nF4 = Reset \n\nGeneral tips: Build up your economy first, then invest into military.\n\nThe first level of production buildings is free.")) 
	},
	
	reset(){
		(window.alert("Restarting game"))
		location.reload();
	}
  };
  
  const keyAction = {
	F1: { keydown: Action.help},
	F4: { keydown: Action.reset}
  };
  
  const keyHandler = (ev) => {
	if (ev.repeat) return;  
	if (!(ev.key in keyAction) || !(ev.type in keyAction[ev.key])) return;
	keyAction[ev.key][ev.type]();
  };
  
  ['keydown', 'keyup'].forEach((evType) => {
	document.body.addEventListener(evType, keyHandler);
  });