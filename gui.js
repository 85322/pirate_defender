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

document.getElementById("menuMilitary").onclick=function(){
	openTab('militaryNav');
}

document.getElementById("menuMap").onclick=function(){
	openTab('mapNav');
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


//KEYBINDS

const Action = {
	help()    {(window.alert("F1 - Helpscreen \n" + "F4 - Reset")) },
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