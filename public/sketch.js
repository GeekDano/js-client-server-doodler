var socket;


function setup() {
	createCanvas(800, 800);
	background(190,174,174);

	socket = io.connect('http://75.97.79.48:3000');
	socket.on('mouse', newDrawing);
  }

 function newDrawing(data){
 	noStroke();
	fill(255, 0, 0);
	ellipse(data.x, data.y, 4, 4);  
 }

 function mouseDragged() {
 	console.log('sending: ' + mouseX + ',' + mouseY);

 	var data = {
 		x: mouseX,
 		y: mouseY
 	}

 	socket.emit('mouse', data);

 	noStroke();
	fill(0,0,255);
	ellipse(mouseX, mouseY, 4, 4);  
 }

function draw() {

}