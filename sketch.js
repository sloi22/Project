let  button, button2, button3, button4, button5, button6, button7, button8;
let cookie, mk, wa, van, choc, straw, whitep, redp, bluep,beach,table,nature,cloud, a = 'Cool! Now please choose milk or water:', b = 'Great! Next please choose an ice cream flavor:', c = 'Finally, choose a plate for your cookies:', d = 'Welcome to the cookie simulator! First, please choose a background for your cookies!', e = 'Enjoy your customized cookies! Click "I want to play again!" to restart';
let t1, co = 220;

function preload () {
  cookie = loadImage('unnamed.png');
  mk = loadImage('milk.png');
  wa = loadImage('water.png');
  van = loadImage('van.png');
  choc = loadImage('choc.png');
  straw = loadImage('straw.png');
  whitep = loadImage('white.png');
  redp = loadImage('red.png');
  bluep = loadImage ('blue.png');
  beach = loadImage ('beach.jpg');
  table = loadImage ('table.jpg');
  nature = loadImage ('nature.jpg');
  cloud =loadImage ('cloud.jpg');
}

function setup() {
t1 = 0;
  createCanvas(400, 400);
  background(co);

  button = createButton('Milk');
  button.mousePressed(milk);
  button.hide();
  
  button2 = createButton('Water');
  button2.mousePressed(water);
  button2.hide();

  button3 = createButton('Vanilla Ice Cream');
  button3.mousePressed(vanilla);
  button3.hide();
  
  button4 = createButton('Chocolate Ice Cream');
  button4.mousePressed(chocolate);
  button4.hide();
  
  button5 = createButton('Strawberry Ice Cream');
  button5.mousePressed(strawberry);
  button5.hide();
  
  button6 = createButton('White Plate')
  button6.mousePressed(whiteplate);
  button6.hide();
  
  button7 = createButton('Blue Plate')
  button7.mousePressed(blueplate);
  button7.hide();
  
  button8 = createButton('Red Plate')
  button8.mousePressed(redplate);
  button8.hide();
  
  button9 = createButton('Beach')
  button9.mousePressed(beacht);
  
  button10 = createButton('Cafe')
  button10.mousePressed(cafet);
  
  button11 = createButton('Outdoors')
  button11.mousePressed(naturet);

  button12 = createButton('Cloud')
  button12.mousePressed(cloudt);
  
  button13 = createButton('I want to play again!')
  button13.mousePressed(restart)
  button13.hide();
}

function draw() {
  noStroke();
  textSize(22);
  textFont('Georgia')
  if (t1 == 0) {
  rect(30,20,350,75);
 text(d, 30, 20,350,80);
  }
  if (t1 == 2) {
rect(30,20,350,50);
 text(a, 30, 20,350,80);
    button.show();
    button2.show();
  }
    if (t1 == 3) {
rect(30,20,350,50);
text(b, 30, 20,350,80);
      
  }
  if (t1 == 4) {
rect(30,20,350,50);
text(c, 30, 20,350,80);   
  }
   if (t1 == 5) {
rect(30,20,350,75);
text(e, 30, 20,350,80);   
  }
  
  scale(0.5);
  noStroke();
  image(cookie, 200,500);
}

function beacht(){
  scale(1.7);
  image(beach,-200,0);
  t1 = 2
  button9.hide();
  button10.hide();
  button11.hide();
  button12.hide();
}

function cafet(){
  scale(2.0);
  image(table,0,0);
  t1 = 2
  button9.hide();
  button10.hide();
  button11.hide();
  button12.hide();
}

function naturet() {
  scale(2.0);
  image(nature,0,0);
  t1 = 2
  button9.hide();
  button10.hide();
  button11.hide();
  button12.hide();
}

function cloudt(){
  image(cloud,0,0); 
    t1 = 2
  button9.hide();
  button10.hide();
  button11.hide();
  button12.hide();
}

function milk() {
  image(mk, 450,400);
  button.hide();
  button2.hide(); 
  t1 = 3
  button3.show();
  button4.show();
  button5.show();
  } 

function water() {
  scale(0.15);
  image(wa, 4000,2550);
  button.hide();
  button2.hide(); 
  t1 = 3
  button3.show();
  button4.show();
  button5.show();
  }

function vanilla() {
  scale(0.5)
    image(van, 0,950);
  t1 = 4
button3.hide(); 
button4.hide(); 
button5.hide();
button6.show();
button7.show();
button8.show();
  }

function chocolate() {
  scale(0.2)
image(choc, 350,1900);
    t1 = 4
button3.hide(); 
button4.hide(); 
button5.hide();
button6.show();
button7.show();
button8.show();
}

function strawberry(){
  scale(0.15)
image(straw, 170,2050); 
    t1 = 4;
button3.hide(); 
button4.hide(); 
button5.hide();
button6.show();
button7.show();
button8.show();
}

function whiteplate() {
  scale(0.25)
  image(whitep, 780,2320);
  t1 = 5;
  button6.hide();
  button7.hide();
  button8.hide();
  button13.show();
}

function blueplate() {
  scale(0.8)
  image(bluep, 290,720);
  t1 = 5;
  button6.hide();
  button7.hide();
  button8.hide();
  button13.show();
}

function redplate() {
  scale(1.2)
  image(redp, 200,480);
  t1 = 5;
  button6.hide();
  button7.hide();
  button8.hide();
  button13.show();
}

function restart(){
  clear();
  background(220);
  t1 = 0
  button13.hide();
  button9.show();
  button10.show();
  button11.show();
  button12.show();
}