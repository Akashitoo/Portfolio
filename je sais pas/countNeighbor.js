
function countNeighbor(x,y){
    var nbvoisin = 0;
    if(x!==0 && x!== 49 && y!==0 && y!==49){
        if(this.current[y-1][x-1]){
            nbvoisin +=1
        }
        if(this.current[y-1][x]){
            nbvoisin +=1
        }
        if(this.current[y-1][x+1]){
            nbvoisin +=1
        }
        if(this.current[y][x-1]){
            nbvoisin +=1
        }
        if(this.current[y-1][x+1]){
            nbvoisin +=1
        }
        if(this.current[y+1][x-1]){
            nbvoisin +=1
        }
        if(this.current[y+1][x]){
            nbvoisin +=1
        }
        if(this.current[y+1][x+1]){
            nbvoisin +=1
        }
    }
    if(x===0 && y!==0 && y!==49){
        if(this.current[y-1][49]){
            nbvoisin +=1
        }
        if(this.current[y-1][x]){
            nbvoisin +=1
        }
        if(this.current[y-1][1]){
            nbvoisin +=1
        }
        if(this.current[y][49]){
            nbvoisin +=1
        }
        if(this.current[y][1]){
            nbvoisin +=1
        }
        if(this.current[y+1][49]){
            nbvoisin +=1
        }
        if(this.current[y+1][x]){
            nbvoisin +=1
        }
        if(this.current[y+1][1]){
            nbvoisin +=1
        }
    }
    if(x===49 && y!==0 && y!==49){
        if(this.current[y-1][x-1]){
            nbvoisin +=1
        }
        if(this.current[y-1][x]){
            nbvoisin +=1
        }
        if(this.current[y-1][0]){
            nbvoisin +=1
        }
        if(this.current[y][48]){
            nbvoisin +=1
        }
        if(this.current[y][0]){
            nbvoisin +=1
        }
        if(this.current[y+1][x-1]){
            nbvoisin +=1
        }
        if(this.current[y+1][x]){
            nbvoisin +=1
        }
        if(this.current[y+1][0]){
            nbvoisin +=1
        }
    }
    if(y=== 0 && x!==0 && x!==49){
        if(this.current[49][x-1]){
            nbvoisin +=1
        }
        if(this.current[49][x]){
            nbvoisin +=1
        }
        if(this.current[49][x+1]){
            nbvoisin +=1
        }
        if(this.current[y][x-1]){
            nbvoisin +=1
        }
        if(this.current[y][x+1]){
            nbvoisin +=1
        }
        if(this.current[y+1][x-1]){
            nbvoisin +=1
        }
        if(this.current[y+1][x]){
            nbvoisin +=1
        }
        if(this.current[y+1][x+1]){
            nbvoisin +=1
        }
    }
    if(y=== 49 && x!==0 && x!==49){
        if(this.current[48][x-1]){
            nbvoisin +=1
        }
        if(this.current[48][x]){
            nbvoisin +=1
        }
        if(this.current[48][x+1]){
            nbvoisin +=1
        }
        if(this.current[y][x-1]){
            nbvoisin +=1
        }
        if(this.current[y][x+1]){
            nbvoisin +=1
        }
        if(this.current[0][x-1]){
            nbvoisin +=1
        }
        if(this.current[0][x]){
            nbvoisin +=1
        }
        if(this.current[0][x+1]){
            nbvoisin +=1
        }
    }
    
}