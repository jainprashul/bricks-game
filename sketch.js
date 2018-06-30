let paddle;
let ball;
let bricks = [];
let playing = false;
let win = false;
let wintext;
let playtext;

function setup() {
    createCanvas(windowWidth,windowHeight);
    paddle = new Paddle();
    ball = new Ball();
    for (let i = 0; i < 20 ; i++) {
        bricks[i] = new Bricks();
    }
    createText();
}

function draw() {
    background(235);
    if(playing) paddle.update();
    paddle.render();
    if(playing) ball.move();
    ball.render();
    if(ball.meets(paddle) && ball.velocity.y > 0) {
        ball.velocity.y *= -1;
    }
    for (let i = 0 ; i < bricks.length ; i++){
        bricks[i].render();
        if(ball.hits(bricks[i])){
            if(bricks[i].r > 40){
                bricks[i].r *= 0.5;
            } else {
                bricks.splice(i,1);
            }
            ball.velocity.y *= -1;
        }
    }

    if(ball.pos.y > height){
        playing = false;
        ball.pos = createVector(width/2,height/2);
    }

    if(bricks.length === 0){
        win = true;
        playing = false;
    }

    if(!playing){
        playtext.style('display', 'block');
    }else playtext.style('display', 'none');

    if(win){
        wintext.style('display', 'block');
    }else wintext.style('display', 'none');
}

function keyPressed() {
    if( (key === 'a') || (key === 'A')) {
        paddle.isMovingLeft = true;
    } else if ((key === 'd') || (key === 'D')) {
        paddle.isMovingRight = true;
    } else if ((key === 's') || (key === 'S')) {
        playing = true;
        win = false;
        if (bricks.length === 0){
            for (let i = 0; i <20 ; i++) {
                bricks.push(new Bricks());
            }
        }
    }

}

function keyReleased() {
    if(paddle.isMovingLeft) paddle.isMovingLeft = false;
    else if(paddle.isMovingRight) paddle.isMovingRight = false;
}

function createText() {
    wintext = createP('YOU WIN!!!');
    playtext = createP("Press S to Play");
    wintext.position(width/2-50, 80);
    playtext.position(width/2-120,height-200);
}