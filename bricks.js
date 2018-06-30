class Bricks {
    constructor(){
        this.r = random(20,60);
        let x = random(20, width-20);
        let y = random(20, height-200);
        this.pos = createVector(x,y);
        this.total = 6;
    }

    render(){
        push();
        translate(this.pos.x , this.pos.y);
        beginShape();
        for (let i = 0; i < this.total; i++) {
            let angle = map(i,0,this.total,0, TWO_PI);
            let x = this.r * cos(angle);
            let y = this.r * sin(angle);
            vertex(x,y);

        }
        endShape(CLOSE);
        pop();
    }

}