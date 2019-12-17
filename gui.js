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
