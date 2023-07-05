/**
 A class that defines the players behaviour
 */
class Player{
    constructor(player_id,x,y,Upkey,Downkey,LeftKey,RightKey,side){
        this.id=player_id;//The HTML id 
        //Position of player
        this.pos_x=x;
        this.pos_y=y;
        //momentum of player
        this.vel_x=0;
        this.vel_y=0;
        //The keybinds
        this.upKey=Upkey;
        this.downKey=Downkey;
        this.leftKey=LeftKey;
        this.rightKey=RightKey;
        //Side of the player
        this.side=side
    }
    //Movement methods
    moveUp(){
        
        if(this.pos_y<-4){
            return;
        }
        this.pos_y--;
        this.vel_y=-1;
        document.getElementById(this.id).style=`top:${this.pos_y+5}vh;${this.side}:${this.pos_x}vw`
    }
    moveDown(){
        if(this.pos_y>84){
            return
        }
        this.pos_y++;
        this.vel_y=+1;
        document.getElementById(this.id).style=`top:${this.pos_y+5}vh;${this.side}:${this.pos_x}vw`
    }
    moveLeft(){
        if(this.pos_x<3){
            return
        }
        this.pos_x--;
        this.vel_x=-1;
        document.getElementById(this.id).style=`top:${this.pos_y+5}vh;${this.side}:${this.pos_x}vw`
    }
    moveRight(){
        if(this.pos_x>40){
            return
        }
        this.pos_x++;
        this.vel_x=1;
        document.getElementById(this.id).style=`top:${this.pos_y+5}vh;${this.side}:${this.pos_x}vw`
    }
};


