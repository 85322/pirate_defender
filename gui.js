//RIGHT SIDE NAV TABS

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

document.getElementById("menuFacilities").onclick=function(){
	openTab('facilityNav');
}

document.getElementById("menuResearch").onclick=function(){
	openTab('researchNav');
}

document.getElementById("menuDefence").onclick=function(){
	openTab('defenceNav');
}

document.getElementById("menuMap").onclick=function(){
	openTab('mapNav');
}

document.getElementById("menuShipyard").onclick=function(){
	openTab('shipyardNav');
}

document.getElementById("menuFleet").onclick=function(){
	openTab('fleetNav');
}


//BUILDING DETAIL TABS

function openTabBuildings(tabNameBuildings) {
	var i, x;
	x = document.getElementsByClassName("mainCenterInfo");
	for (i = 0; i < x.length; i++) {
	  x[i].style.display = "none";
	}
	document.getElementById(tabNameBuildings).style.display = "block";
  }
  
document.getElementById("woodCutter_tooltip").onclick=function () {
	document.getElementById("woodCutter_iconDetailTab").style.display="block";
}

document.getElementById("stoneCutter_tooltip").onclick=function () {
	document.getElementById("stoneCutter_iconDetailTab").style.display="block";
}

document.getElementById("ironSmelter_tooltip").onclick=function () {
	document.getElementById("ironSmelter_iconDetailTab").style.display="block";
}
//noch nicht in der funktion drin

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