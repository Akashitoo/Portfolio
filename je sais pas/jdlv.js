
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
var isStart = false; 
class Game{
    constructor(){
        this.currenttab = [];
    }

    generateTab(){
        for(var i = 1 ; i< 51 ; i++){
            var l = []
            for(var j = 1 ; j<51 ; j++){
                l.push(false);
            }
            this.currenttab.push(l);
        }
        console.log(this.currenttab);
    }
    randomFill(range){
        for(var x = 0 ; x < range ;x++){
            this.currenttab[Math.floor(Math.random() * 50)][ Math.floor(Math.random() * 50)] = true ;
        }
        this.displayGrid();
    }
    
    displayGrid(){
        for(var i = 0 ; i< 50 ; i++){
            for(var j = 0 ; j<50 ; j++){
                if(this.currenttab[i][j]){
                    ctx.fillStyle = "red";
                    ctx.fillRect(i*10,j*10,10,10);
                }
            }
        }

    }
    emptyTab(){
        isStart = false;
        for(var i = 0 ; i<50; i++){
            for(var j = 0 ; j<50 ; j++){
                this.currenttab[i][j] = false;
            }
        }
        ctx.clearRect(0,0,500,500);
        this.displayGrid();
        this.play = false;
        
    }
    countNeighbor(x,y){

        var nbvoisin = 0;
        if(x!==0 && x!== 49 && y!==0 && y!==49){
            
            var listX = [-1,0,1]
            var listY = [-1,0,1];

            for(const l of listY){
                for(const c of listX){
                    if(c===0 && l===0){}
                    else{
                        if(this.currenttab[y+l][x+c]){
                            nbvoisin += 1;
                        }
                    }   
                }
            }
        }

        if(x===0 && y!==0 && y!==49){

            var listX = [1,0,49];
            var listY = [-1,0,1];

            for(const l of listY){
                for(const c of listX){
                    if(c===0 && l===0){}
                    else{
                        if(this.currenttab[y+l][c]){
                            nbvoisin += 1;
                        }
                    }   
                }
            }
        }
        if(x===49 && y!==0 && y!==49){
            var listX = [48,49,0];
            var listY = [-1,0,1];
            var neighbor = [];
            for(const l of listY){
                for(const c of listX){
                    if(c===49 && l===0){}
                    else{
                        neighbor.push([c,y+l]);
                        if(this.currenttab[y+l][c]){
                            nbvoisin += 1;
                        }
                    }   
                }
            }   
            console.log(x,y,neighbor);
            
        }

        if(y=== 0 && x!==0 && x!==49){
            var listX = [-1,0,1];
            var listY = [1,0,49];

            for(const l of listY){
                for(const c of listX){
                    if(c===0 && l===0){}
                    else{
                        if(this.currenttab[l][x+c]){
                            nbvoisin += 1;
                        }
                    }   
                }
            }   
        }
        if(y=== 49 && x!==0 && x!==49){
            var listX = [-1,0,1];
            var listY = [48,49,0];

            for(const l of listY){
                for(const c of listX){
                    if(c===49 && l===0){}
                    else{
                        if(this.currenttab[l][x+c]){
                            nbvoisin += 1;
                        }
                    }   
                }
            }   
        }
        return nbvoisin
    }

    evolution(){
        var nexttab = []
        for(var i = 0 ; i< 50 ; i++){
            var l = []
            for(var j = 0 ; j<50 ; j++){
                l.push(false);
            }
            nexttab.push(l);
        }    
        for(var y = 0 ; y <50 ; y++){
            for(var x = 0 ; x < 50 ; x++){
                var nbvoisin = this.countNeighbor(x,y);
                if(nbvoisin === 3 && this.currenttab[y][x] === false){
                    nexttab[y][x] = true;
                }   
                else if (this.currenttab[y][x] && (nbvoisin === 2 || nbvoisin ===3)){
                    nexttab[y][x] = true;
                }
                else{
                    nexttab[y][x] = false;
                }
            }           
        }
        this.currenttab = nexttab;
    
    }
}
var jdlv = new Game();
jdlv.generateTab();

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

function draw(evt) {
    if(!isStart){
        ctx.clearRect(0,0,500,500);
        jdlv.displayGrid();
        var pos = getMousePos(canvas, evt);
        var c = Math.floor(pos.x/10);
        var l = Math.floor(pos.y/10);
        ctx.fillStyle = "#D7C4FF";
        ctx.fillRect (10*c, 10*l,10, 10);
    }
    
}

function putCase(evt) {
    if(!isStart){
        var pos = getMousePos(canvas, evt);
        var c = Math.floor(pos.x/10);
        var l = Math.floor(pos.y/10);
        if(jdlv.currenttab[c][l]){
          jdlv.currenttab[c][l]= false; 
        }
        else{
          jdlv.currenttab[c][l]= true; 
        }
    }
}

function play(){
    if(isStart){
        ctx.clearRect(0,0,500,500);
        jdlv.displayGrid();
        jdlv.evolution();
        setTimeout(play,60);
    }
    else{
        return
    }
    
}
function start(){
    isStart = !isStart;
    if(start){
        play();
    } 
}
//jdlv.displayGrid();
//play();
