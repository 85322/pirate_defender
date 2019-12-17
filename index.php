<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="style.css">
	<title>TEST</title>
</head>
<body>

<br>
<br>
<br>
<!-- TOP NAV-->
	<nav id="navMenuRight">
		<ul>
			<li>Resources</li>
			<li id="resource_wood">0</li>
			<li><img src="images/wood_icon.jpg"></li>
			<li id="resource_stone">0</td></li>
			<li><img src="images/stone_icon.jpg"></td></li>
			<li id="resource_iron">0</li>
			<li><img src="images/metal_icon.jpg"></li>
		</ul>
	</nav>


<!-- BUILDINGS-->
<div id="buildingsNav" class="containerTab">
	<nav id="buildings">
		<ul>
			<li>Buildings</li>
			<li><img id="woodCutter_icon" src="images/woodcutter_icon.jpg"></li>
			<li><p id="woodPara">0</p></li>
			<li><img id="stoneCutter_icon" src="images/stonecutter_icon.jpg"></li>
			<li><p id="stonePara">0</p></li>
			<li><img id="ironSmelter_icon" src="images/smelter_
			icon.jpg"></li>
			<li><p id="ironPara">0</p></li>
		</ul>
	</nav>
</div>

<!-- Resources  -->
<div id="resourcesNav" class="containerTab">
	<nav>
		<ul>
			<li>Resources</li>
			<li>Resources</li>
		</ul>
	</nav>
</div>

<!-- Facilities  -->
<div id="facilityNav" class="containerTab">
	<nav>
		<ul>
			<li>Facilities</li>
			<li>Facilities</li>
		</ul>
	</nav>
</div>

<!-- RESEARCH  -->
<div id="researchNav" class="containerTab">
	<nav>
		<ul>
			<li>asdasdasdasdasd</li>
			<li>44444444444</li>
		</ul>
	</nav>
</div>

<!-- DEFENCE  -->
<div id="defenceNav" class="containerTab">
	<nav>
		<ul>
			<li>Defence</li>
			<li>asd</li>
		</ul>
	</nav>
</div>

<!-- MAP  -->
<div id="mapNav" class="containerTab">
	<nav>
		<ul>
			<li>Map</li>
			<li>asd</li>
		</ul>
	</nav>
</div>

<!-- SHIPYARD  -->
<div id="shipyardNav" class="containerTab">
	<nav>
		<ul>
			<li>Shipyard</li>
			<li>asd</li>
		</ul>
	</nav>
</div>

<!-- FLEET  -->
<div id="fleetNav" class="containerTab">
	<nav>
		<ul>
			<li>Fleet</li>
			<li>asd</li>
		</ul>
	</nav>
</div>

<!--MAIN MENU RIGHT -->
<div id="menu">
	<ul>
		<li id="menuBuildings">Buildings</li>
		<li id="menuResources">Resources</li>
		<li id="menuFacilities">Facilities</li>
		<li id="menuResearch">Research</li>
		<li id="menuDefence">Defence</li>
		<li id="menuMap">Map</li>
		<li id="menuShipyard">Shipyard</li>
		<li id="menuFleet">Fleet</li>
	</ul>
</div>


<script src="game_logic.js"></script>	
<script src="gui.js"></script>


<?php
include 'query.php';
?> 

</body>
</html>