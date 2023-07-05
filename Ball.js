/*
A class defining the behaviour of the ball;
*/
class Ball{
    constructor(ball_id,x,y){
        this.id=ball_id;//HTML div id
        //Position of the ball
        this.pos_x=x;
        this.pos_y=y;
        //Velocity of the ball
        this.vel_x=-0.5;
        this.vel_y=-0.75;
        //ratio of the width of viewport to Height
        let ratio=window.innerWidth/window.innerHeight
        //width of ball
        this.width=2
        //height of ball
        this.height=Math.floor(this.width*ratio);
    }
    initialize(){
        //Setting the properties of the ball in CSS
        document.getElementById(this.id).style=`top:${this.pos_y}vh;left:${this.pos_x}vw;width:${this.width}vw;height:${this.height}vh;`
    }
    serve(x,y,vx,vy){
        //Setting the positon and velocity off the ball
        this.pos_x=x;
        this.pos_y=y;
        this.vel_x=vx;
        this.vel_y=vy;
    }
    move(){
        //incrementing the ball positions
        this.pos_x+=this.vel_x;
        this.pos_y+=this.vel_y;
        //Writing changes to CSS
        document.getElementById(this.id).style=`top:${this.pos_y}vh;left:${this.pos_x}vw;width:${this.width}vw;height:${this.height}vh;`
        
    }
}