class Ball {
    constructor(){
        this.pos = createVector(width/2,height/2);
        this.velocity = createVector(1,-1).mult(4);
        this.r = 20;
    }

    move(){
        this.pos.add(this.velocity);
        this.edge();
    }

    render(){
        noFill();
        ellipse(this.pos.x , this.pos.y , this.r , this.r);
    }

    meets(paddle){
        if(this.pos.y < paddle.pos.y &&
            this.pos.y > paddle.pos.y - this.r &&
            this.pos.x > paddle.pos.x - this.r &&
            this.pos.x < paddle.pos.x + paddle.w + this.r ){
            return true;
        } else return false;
    }

    hits(brick){
        let d = dist(this.pos.x , this.pos.y ,brick.pos.x ,brick.pos.y);
        return (d < this.r + brick.r);
    }


    edge(){
        if(this.pos.x <  this.r && this.velocity.x < 0)
            this.velocity.x *= -1;
        else if (this.pos.x > width - this.r && this.velocity.x > 0)
            this.velocity.x *= -1;
        if(this.pos.y <  this.r  && this.velocity.y < 0)
            this.velocity.y *= -1;
        /*else if (this.pos.y > height - this.r && this.velocity.y > 0)
            this.velocity.y *= -1;*/
    }
}