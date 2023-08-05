//Move the mouse to control the paddle, click to start

/* VARIABLES */
let walls, paddle, ball, bricks, hasStarted;
let ballSpeed = 8;
let playButton, directionsButton, backButton;
let startButton, restartButton;
let screen = 0;
let resetTime = 0;
let duration = 5000;
let counter = 0;
let rand = 0;
var robotoThin, robotoThick, superhotFont, superhotMusic;

/* PRELOAD LOADS FILES */
function preload() {
  robotoThin = loadFont('assets/Roboto-Thin.ttf');
  robotoThick = loadFont('assets/Roboto-Black.ttf');
  superhotFont = loadFont('assets/Superhot-Font.ttf');
  superhotMusic = loadSound("assets/Superhot_Music.mp3");
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(500, 500);
  superhotMusic.loop();
  homeScreen();
}

/* DRAW LOOP REPEATS */
function draw() {
  if (screen == 0) {
    if (directionsButton.mouse.presses()) {
      //screen 1 is directions screen
      screen = 1;
      directionsScreen();
    } else if (playButton.mouse.presses()) {
      //screen 2 is play screen 
      screen = 2;
      playScreenAssets();
    }
  } 

  if (screen == 1) {
    if (backButton.mouse.presses()) {
      //screen 0 is home screen
      screen = 0;
      homeScreen();
      backButton.pos = { x: -300, y: -300 };
    }
  }

  if (screen == 2) {
    if (millis() > resetTime + duration) {
      resetTime = millis();
      counter = 0;
    } else {
      counter++;
    }
    
    background("#f04803");
    ball.speed = ballSpeed;
  
  	paddle.moveTowards(mouse.x, height - 50, 1);

    if (ball.y >= height + 5) {
      bricks.remove();
      //text('Milliseconds \nrunning: \n' + counter, 5, 40);
      print(rand);
      
      if (rand == 0) {
        if (counter > 130) {
          startButton.pos = { x: 250, y: 250 };
          restartButton.pos = { x: -400, y: -300 };
        } else if (counter > 100) {
          restartButton.text = "UP";
        } else {
          restartButton.pos = { x: 250, y: 250 };
          restartButton.text = "GET";
        }
      } else if (rand == 1) {
        if (counter > 220) {
          startButton.pos = { x: 250, y: 250 };
          restartButton.pos = { x: -400, y: -300 };
        } else if (counter > 190) {
          restartButton.text = "CONTROL";
        } else if (counter > 160) {
          restartButton.text = "IN";
        } else if (counter > 130) {
          restartButton.text = "NOT";
        } else if (counter > 100) {
          restartButton.text = "ARE";
        } else {
          restartButton.pos = { x: 250, y: 250 };
          restartButton.text = "YOU";
        }
      } else if (rand == 2) {
        if (counter > 130) {
          startButton.pos = { x: 250, y: 250 };
          restartButton.pos = { x: -400, y: -300 };
        } else if (counter > 100) {
          restartButton.text = "HOT";
        } else {
          restartButton.pos = { x: 250, y: 250 };
          restartButton.text = "SUPER";
        }
      } else if (rand == 3) {
        if (counter > 160) {
          startButton.pos = { x: 250, y: 250 };
          restartButton.pos = { x: -400, y: -300 };
        } else if (counter > 130) {
          restartButton.text = "SOFTWARE";
        } else if (counter > 100) {
          restartButton.text = "IS";
        } else {
          restartButton.pos = { x: 250, y: 250 };
          restartButton.text = "MIND";
        }
      } else if (rand == 4) {
        if (counter > 160) {
          startButton.pos = { x: 250, y: 250 };
          restartButton.pos = { x: -400, y: -300 };
        } else if (counter > 130) {
          restartButton.text = "DISPOSABLE";
        } else if (counter > 100) {
          restartButton.text = "IS";
        } else {
          restartButton.pos = { x: 250, y: 250 };
          restartButton.text = "BODY";
        }
      } else if (rand == 5) {
        if (counter > 250) {
          startButton.pos = { x: 250, y: 250 };
          restartButton.pos = { x: -400, y: -300 };
        } else if (counter > 220) {
          restartButton.text = "FREE";
        } else if (counter > 190) {
          restartButton.text = "YOU";
        } else if (counter > 160) {
          restartButton.text = "SET";
        } else if (counter > 130) {
          restartButton.text = "WILL";
        } else if (counter > 100) {
          restartButton.text = "SYSTEM";
        } else {
          restartButton.pos = { x: 250, y: 250 };
          restartButton.text = "THE";
        }
      } else if (rand == 6) {
        if (counter > 220) {
          startButton.pos = { x: 250, y: 250 };
          restartButton.pos = { x: -400, y: -300 };
        } else if (counter > 190) {
          restartButton.text = "COMING";
        } else if (counter > 160) {
          restartButton.text = "IT";
        } else if (counter > 130) {
          restartButton.text = "SAW";
        } else if (counter > 100) {
          restartButton.text = "NEVER";
        } else {
          restartButton.pos = { x: 250, y: 250 };
          restartButton.text = "THEY";
        }
      } else if (rand == 7) {
        if (counter > 250) {
          startButton.pos = { x: 250, y: 250 };
          restartButton.pos = { x: -400, y: -300 };
        } else if (counter > 220) {
          restartButton.text = "MOVE";
        } else if (counter > 190) {
          restartButton.text = "YOU";
        } else if (counter > 160) {
          restartButton.text = "WHEN";
        } else if (counter > 130) {
          restartButton.text = "ONLY";
        } else if (counter > 100) {
          restartButton.text = "MOVES";
        } else {
          restartButton.pos = { x: 250, y: 250 };
          restartButton.text = "TIME";
        }
      } else if (rand == 8) {
        if (counter > 130) {
          startButton.pos = { x: 250, y: 250 };
          restartButton.pos = { x: -400, y: -300 };
        } else if (counter > 100) {
          restartButton.text = "TURN";
        } else {
          restartButton.pos = { x: 250, y: 250 };
          restartButton.text = "WRONG";
        }
      } else if (rand == 9) {
        if (counter > 130) {
          startButton.pos = { x: 250, y: 250 };
          restartButton.pos = { x: -400, y: -300 };
        } else if (counter > 100) {
          restartButton.text = "SHOTS";
        } else {
          restartButton.pos = { x: 250, y: 250 };
          restartButton.text = "MORE";
        }
      } else if (rand == 10) {
        if (counter > 130) {
          startButton.pos = { x: 250, y: 250 };
          restartButton.pos = { x: -400, y: -300 };
        } else if (counter > 100) {
          restartButton.text = "SIMULATION";
        } else {
          restartButton.pos = { x: 250, y: 250 };
          restartButton.text = "WRONG";
        }
      }
    }
  
    //When ball and paddle collides move ball in random direction
    if (ball.collides(paddle)) {
      ballSpeed = 10;
      ball.collider = "d";
      ball.direction = ball.direction + random(-10, 10);
    }
    if (mouseIsPressed === true) {
      if (mouseButton === LEFT) {
        ballSpeed = 10;
      }
    } else if (!mouseMoved()) {
      ballSpeed = 0.3;
    }
  }
}

function mouseMoved() {
  ballSpeed = 10;
}

function keyTyped() {
  if (key == 'r') {
    // start or restart the game
    startButton.pos = { x: -300, y: -200 };
    restartButton.pos = { x: -400, y: -300 };
    bricks.remove();
    rand = Math.floor(Math.random() * 11);
    
    new Tiles(
      [
        "===.=.=.===.===.===",
        "=...=.=.=.=.=...=.=",
        "===.=.=.===.==..===",
        "..=.=.=.=...=...==.",
        "===.===.=...===.=.=",
        "...................",
        "...................",
        "==..==.=====.======",
        "==..==.=====.======",
        "======.==.==.======",
        "======.==.==...==..",
        "======.==.==...==..",
        "==..==.=====...==..",
        "==..==.=====...==.."
      ],
      50,
      80,
      bricks.w + 3,
      bricks.h + 3
    );

    ball.x = width / 2;
    ball.y = height - 200;
    ball.direction = 90 + random(-10, 10);
    ball.speed = 10;

    hasStarted = true;
  }
}

function homeScreen() {
  background("#f04803");
  
  //Create title
  fill("#fefeff");
  textSize(80);
  textFont(robotoThin);
  text("SUPER", 43, 190);
  textFont(robotoThick);
  text("HOT", 293, 190);
  
  //Create play button
  playButton = new Sprite(370,300,160,70,"k");
  playButton.color = "#900502";
  playButton.textColor = "#fff213";
  playButton.textSize = 25;
  textFont(superhotFont);
  playButton.text = "play.exe";
  noStroke();

  //Create directions button
  directionsButton = new Sprite(143,300,190,70,"k");
  directionsButton.color = "#900502";
  directionsButton.textColor = "#fff213";
  directionsButton.textSize = 25;
  textFont(superhotFont);
  directionsButton.text = "readme.txt";
  noStroke();
}

function directionsScreen() {
  background("#010406");
  playButton.pos = { x: -200, y: -100 };
  directionsButton.pos = { x: -500, y: -100 };
  
  // Draw directions to screen
  fill("#fefeff");
  textSize(25);
  textFont(superhotFont);
  text("SUPERHOT IS THE MOST INNOVATIVE \n SHOOTER I'VE PLAYED IN YEARS! \n\n TIME MOVES ONLY WHEN YOU MOVE. \n\n       MIND IS SOFTWARE. \n\n    BODIES ARE DISPOSABLE. \n\n THE SYSTEM WILL SET YOU FREE.", 30, 52);
  
  //Create back button
  backButton = new Sprite(250,415,160,70,"k");
  backButton.color = "#900502";
  backButton.textColor = "#fff213";
  backButton.textSize = 25;
  backButton.text = "quit.exe";
  noStroke();
}

function playScreenAssets() {
  playButton.pos = { x: -200, y: -100 };
  directionsButton.pos = { x: -500, y: -100 };
  
  allSprites.collider = "s";
	allSprites.color = color(255);

  //Create walls group at the top, left, and right of the screen
	walls = new Group();
	walls.w = 30;
	walls.h = 800;

  //Top wall
	let wallTop = new walls.Sprite(width / 2, -20);
	wallTop.rotation = 90;

	//Left and right walls
	new walls.Sprite(0, height / 2);
	new walls.Sprite(width, height / 2);

  //Create ball
	ball = new Sprite(width / 2, height - 200, 11, 'd');
	ball.bounciness = 1;
	ball.friction = 0;

  //Create paddle
	paddle = new Sprite(width / 2, height - 50, 100, 20, 'd');
	paddle.rotationLock = true;

  //Create bricks group
	bricks = new Group();
	bricks.tile = "=";
	bricks.w = 19;
	bricks.h = 11;

  //The notation in the next few lines is called an arrow function 
	ball.collide(bricks, (ball, brick) => {
		brick.remove();
	});

  //Create restart button
  restartButton = new Sprite(-400,-300,200,70,"k");
  restartButton.color = "#900502";
  restartButton.textColor = "#fff213";
  restartButton.textSize = 25;
  restartButton.text = "";
  noStroke();

  //Create start button
  startButton = new Sprite(250,250,277,70,"k");
  startButton.color = "#900502";
  startButton.textColor = "#fff213";
  startButton.textSize = 25;
  textFont(superhotFont);
  startButton.text = "PRESS R TO START";
  noStroke();
}