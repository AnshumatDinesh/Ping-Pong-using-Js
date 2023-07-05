class Game{
    constructor( player1obj,player2obj,ballobj){
        this.player1=player1obj;
        this.player2=player2obj;
        this.ball=ballobj;
        this.points=[0,0];
    }
    checkCollisions(){
        let a=this.ball.pos_y>=this.player1.pos_y && this.ball.pos_y<=this.player1.pos_y+15
        let b=this.ball.pos_x>=this.player1.pos_x-1&& this.ball.pos_x<=this.player1.pos_x+2 && this.ball.vel_x<0 
        let c=this.ball.pos_y>=this.player2.pos_y && this.ball.pos_y<=this.player2.pos_y+15 
        let d=this.ball.pos_x>=99-(this.player2.pos_x+1)&& this.ball.pos_x<=99-(this.player2.pos_x-2) && this.ball.vel_x>0 
        // let c=this.ball.pos_x>=this.player1.pos_x+this.player1.vel_x&& this.ball.pos_x<=this.player1.pos_x+1&& this.ball.vel_x<0 && this.player1.vel_x<0
        let collisions=[]
        collisions.push(a && b)
        collisions.push(c && d)
        collisions.push((this.ball.pos_x<0+this.ball.width+this.ball.vel_x && this.ball.vel_x<0))
        collisions.push((this.ball.pos_y<0+this.ball.height+this.ball.vel_y && this.ball.vel_y<0))
        collisions.push((this.ball.pos_x>99-this.ball.width-this.ball.vel_x && this.ball.vel_x>0))
        collisions.push((this.ball.pos_y>99-this.ball.height-this.ball.vel_y && this.ball.vel_y>0))
        // console.log(collisions)
        return collisions
        // this.ball.move()
    }
    checkcourt(){
        if(this.ball.pos_x>50){
            return 2
        }
        return 1;
    }
    AI(){
        if(this.ball.vel_x>0){
            if(this.player1.pos_y>45){
                this.player1.moveUp();
                return;
            }
            else{
                this.player1.moveDown();
            }
            
            if(this.player1.pos_x>25){
                this.player1.moveLeft();
            }
            else{
                this.player1.moveRight();
            }
        }
        else if(this.ball.pos_x<50 && this.ball.vel_y<0){
            // let dist=this.ball.pos_x-(this.ball.pos_x*Math.abs(this.ball.vel_x)/Math.abs(this.ball.vel_y))
            let angle=Math.atan2((-1*this.ball.vel_y),(-1*this.ball.vel_x));
            let dist=Math.round(this.ball.pos_x-Math.tan((Math.PI/2)-angle)*this.ball.pos_y)
            if(dist<0){
                if(this.ball.pos_y>this.player1.pos_y){
                    this.player1.moveDown()
                }
                else{
                    this.player1.moveUp()
                }
                this.player1.moveLeft()
            }
            else if(dist>=this.player1.pos_x-1 &&dist<=this.player1.pos_x+1){
                this.player1.moveUp();
                this.player1.moveUp();
            }
            else if(dist<this.player1.pos_x-1){
                this.player1.moveLeft()
                this.player1.moveUp()
            }
            else if(dist>this.player1.pos_x+1){
                this.player1.moveRight();
                this.player1.moveUp()
            }
            console.log(Math.round(this.ball.pos_x-Math.tan((Math.PI/2)-angle)*this.ball.pos_y));

        }
        else if(this.ball.pos_x<50 && this.ball.vel_y>0){
            let angle=Math.atan2((this.ball.vel_y),(-1*this.ball.vel_x));
            let dist=Math.round(this.ball.pos_x-Math.tan((Math.PI/2)-angle)*this.ball.pos_y)
            if(dist<0){
                if(this.ball.pos_y>this.player1.pos_y){
                    this.player1.moveDown()
                }
                else{
                    this.player1.moveUp()
                }
                this.player1.moveLeft()
            }
            else if(dist>=this.player1.pos_x-1 &&dist<=this.player1.pos_x+1){
                this.player1.moveDown();
                this.player1.moveDown();
            }
            else if(dist<this.player1.pos_x-1){
                this.player1.moveLeft()
                this.player1.moveDown();
            }
            else if(dist>this.player1.pos_x+1){
                this.player1.moveRight();
                this.player1.moveDown();
            }
            console.log(Math.round(this.ball.pos_x-Math.tan((Math.PI/2)-angle)*this.ball.pos_y));
        }
    }
    DisplayScore(){
        document.getElementById("score").innerHTML=`${this.points[0]}-${this.points[1]}`
    }
    tick(){
        let collisions=this.checkCollisions()
        if(collisions[0]){
            // this.points[0]++;
            // console.log(this.points)
            this.ball.vel_x=1;
            // this.ball.vel_x+=this.player1.vel_x
            this.ball.vel_y+=this.player1.vel_y
            // this.DisplayScore()

        }
        if(collisions[1]){
            // this.points[0]++;
            // console.log(this.points)
            this.ball.vel_x=-1;
            // this.ball.vel_x-=this.player2.vel_x
            this.ball.vel_y+=this.player2.vel_y
            // this.DisplayScore()

        }
        else if(collisions[2] || collisions[4]){
            this.ball.vel_x*=-1;
        }
        if(collisions[2]){
            // this.end();
            this.points[1]++;
            this.ball.serve(75,75,-0.5,-0.5)
            this.DisplayScore()
        }
        if(collisions[4]){
            // this.end();
            this.points[0]++;
            this.ball.serve(25,75,0.5,-0.5)
            this.DisplayScore()
        }
        if(collisions[3]||collisions[5]){
            this.ball.vel_y*=-1;
            // console.log(this.ball.pos_x)
        }
        this.ball.move()
        this.player1.vel_x=0;
        this.player1.vel_y=0;
        if(this.points[0]==21 ||this.points[1]==21){
            this.end()
        }
    }
    end(){
        let mssg;
        if(this.points[0]==21){
            mssg=`Left Won by ${this.points[0]}-${this.points[1]}`
        }
        else if(this.points[1]==21){
            mssg=`Right Won by ${this.points[0]}-${this.points[1]}`
        }
        document.getElementById("home").style="visibility:visible"
        document.getElementById("label").innerHTML=mssg;
    }
}