var canvas;
var img;
var leaveLink; var leftLink;
var canvasHeight = ((2208*innerWidth)/1242);

function preload() {
  img = loadImage("LeftOnReadIndex.jpg");
}

function setup() {
  canvas = createCanvas(innerWidth, canvasHeight);
	
	imageMode(CORNERS);
	// fill(249);
	// noStroke;
	// rect(-50,-50, (innerWidth + 100), 100);
	image(img, 0, 0, innerWidth, canvasHeight);
	
//	rectMode(CORNERS);
//	var leave = rect(0, ((729/2208)*canvasHeight), innerWidth, ((960/2208)*canvasHeight));
//	var left = rect(0, ((1188/2208)*canvasHeight), innerWidth, ((1421/2208)*canvasHeight));
//	
//	leaveLink = createA('http://i.imgur.com/WXaUlrK.gif', '');
//	leftLink = createA('http://i.imgur.com/WXaUlrK.gif', '');
	
}

function mouseClicked(){
  if ( (mouseX > 0) && (mouseX < innerWidth) && (mouseY > ((729/2208)*canvasHeight)) && (mouseY < ((960/2208)*canvasHeight)) ) {
		document.getElementById('leaveLink').click();
  } 
	else if ((mouseX > 0) && (mouseX < innerWidth) && (mouseY > ((1188/2208)*canvasHeight)) && (mouseY < ((1421/2208)*canvasHeight)) ) {
    document.getElementById('leftLink').click();
  }
}