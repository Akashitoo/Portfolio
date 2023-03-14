
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

class Case{
    constructor(x,y,d){
        this.x = x;
        this.y = y;
        this.direction = d; 
    }
    displayCase(){
        ctx.fillStyle = "green";
        ctx.fillRect(this.x*50, this.y*50, 50, 50);
    }

    updatePosition(){

        if(this.direction === "right"){
            if(this.x < 19){
                this.x += 1;
            } else{
                this.x = 0;
            }
        }
        if(this.direction === "left"){
            if(this.x !== 0){
                this.x -= 1;
            } else{
                this.x = 19;
            }
        }
        if(this.direction === "down"){
            if(this.y !== 19){
                this.y += 1;
            } else{
                this.y = 0;
            }
        }
        if(this.direction === "up"){
            if(this.y !== 0){
                this.y -= 1;
            } else{
                this.y = 19;
            }
        }
    }
}

class Snake{
    constructor(){
        this.lst_case = [new Case(3,3,"right"), new Case(2,3,"right"), new Case(1,3,"right")];
        this.head = this.lst_case[0];
        this.tail = this.lst_case[2];
        this.isAlive = true;
        this.score = 3;
    }

    updateSnake(){
        for(var elt of this.lst_case){
            elt.updatePosition();
        }
        
        for(var x = this.lst_case.length-1 ; x > 0 ; x--){
            this.lst_case[x].direction = this.lst_case[x-1].direction;
        }
    }

    displaySnake(){
        for(var elt of this.lst_case){
            elt.displayCase();
        }
    }

    addCase(){
        if(this.tail.direction ==="down"){
            this.lst_case.push(new Case(this.tail.x,this.tail.y-1,this.tail.direction));
            this.tail = this.lst_case[this.lst_case.length-1];
        }
        if(this.tail.direction ==="up"){
            this.lst_case.push(new Case(this.tail.x,this.tail.y+1,this.tail.direction));
            this.tail = this.lst_case[this.lst_case.length-1];
        }
        if(this.tail.direction ==="left"){
            this.lst_case.push(new Case(this.tail.x+1,this.tail.y,this.tail.direction));
            this.tail = this.lst_case[this.lst_case.length-1];
        }
        if(this.tail.direction ==="right"){
            this.lst_case.push(new Case(this.tail.x-1,this.tail.y,this.tail.direction));
            this.tail = this.lst_case[this.lst_case.length-1];
        }
    }

    checkCollision(){
        for (var i = 1 ; i < this.lst_case.length ; i++){
            if(this.head.x === this.lst_case[i].x && this.head.y === this.lst_case[i].y){
                ctx.fillStyle = "red";
                ctx.fillRect(this.head.x*50,this.head.y*50,50,50);
                window.alert("Perdu ! Votre score est de :",this.score);
                this.isAlive = false ;
            }
        }
    }
}

class Apple{
    constructor(){
        this.x = Math.floor(Math.random() * 20);
        this.y = Math.floor(Math.random() * 20); 
    }

    displayApple(){
        ctx.fillStyle = "red";
        ctx.fillRect(this.x*50, this.y*50, 50, 50);
    }
}


var snake = new Snake();
var apple = new Apple();

function updateApple(){
    if (apple.x === snake.head.x && apple.y === snake.head.y){
        apple.x = Math.floor(Math.random() * 20);
        apple.y = Math.floor(Math.random() * 20);
        snake.addCase();
        snake.score += 1;
    }
}

document.addEventListener('keypress', function(event){
    if(event.code === "KeyS"){
        snake.head.direction = "down";
    }
    else if(event.code === "KeyW"){
        snake.head.direction = "up";
    }
    else if(event.code === "KeyA"){
        snake.head.direction = "left";
    }
    else if(event.code === "KeyD"){
        snake.head.direction = "right";
    }
})



function start(){
    ctx.clearRect(0,0,1000,1000);
    snake.updateSnake();
    snake.checkCollision();
    if (snake.isAlive){
        updateApple();
        snake.displaySnake();
        apple.displayApple();
        setTimeout(start, 100);
    }
    else{
        snake = new Snake();
        apple = new Apple();
        setTimeout(start, 100);
    }

    
    
}
start();