class Ball{
    constructor(ball_id,x,y,player){
        this.id=ball_id;
        this.pos_x=x;
        this.pos_y=y;
        this.vel_x=-0.5;
        this.vel_y=-0.75;
        let ratio=window.innerWidth/window.innerHeight
        this.width=2
        this.height=Math.floor(this.width*ratio);
        this.player=player
        this.points=0;
        console.log(`top:${this.pos_y}vh;left:${this.pos_x}vw;width:${this.width}vw;height:${this.height}vh;`)
        // `
    }
    initialize(){
        // console.log(document.getElementById(this.id))
        document.getElementById(this.id).style=`top:${this.pos_y}vh;left:${this.pos_x}vw;width:${this.width}vw;height:${this.height}vh;`
    }
    serve(x,y,vx,vy){
        this.pos_x=x;
        this.pos_y=y;
        this.vel_x=vx;
        this.vel_y=vy;
    }
    move(){
        // if(this.plyercollision()){
        //     this.points++;
        //     console.log(this.points);
        //     this.vel_y-=this.player.vel_y;
        //     this.vel_x*=-1;
        // }
        // else if(this.Wallcollisionx()){
        //     this.vel_x*=-1;
        // }
        // if(this.Wallcollisiony()){
        //     this.vel_y*=-1;
        // }
        this.pos_x+=this.vel_x;
        this.pos_y+=this.vel_y;
        document.getElementById(this.id).style=`top:${this.pos_y}vh;left:${this.pos_x}vw;width:${this.width}vw;height:${this.height}vh;`
        
    }
}