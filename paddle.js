class Paddle{
    constructor(){
        this.pos = createVector(width/2,height - 20);
        this.w = 120;
        this.h = 15;

        this.step = 5;
        this.isMovingRight = false;
        this.isMovingLeft = false;
    }
    render(){
        noFill();
        rect(this.pos.x , this.pos.y , this.w , this.h);
    }
    update(){
        this.edge();

        if(this.isMovingLeft){
            this.pos.x -= this.step;
        }
        if(this.isMovingRight){
            this.pos.x += this.step;
        }
    }
    edge(){
        if(this.pos.x < 0 ) this.pos.x = 0;
        else if (this.pos.x > width - this.w) this.pos.x = width - this.w;
    }
}