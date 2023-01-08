let ragnarok = document.querySelector(".ragnarok");
let canvasR = document.querySelector(".canvasR").getContext("2d");
let torneo = document.querySelector(".torneo");
let canvasT = document.querySelector(".canvasT").getContext("2d");
let history = document.querySelector(".history");
let canvasH = document.querySelector(".canvasH").getContext("2d");
let canvasP = document.querySelector(".genkidama").getContext("2d");
let objero;
let band =false;
let eva;

class CanvasObject{
    constructor(c, st){
        this.frames = [],
        this.stages = new Image(),
        this.stages.src = st,
        this.canva = c;
    }
}

let objectR = new CanvasObject(canvasR,`../framesRengoku/stages/descarga.jpg`);
let objectT = new CanvasObject(canvasT, `../framesGoku/stages/descarga.jpg`);
let objectH = new CanvasObject(canvasH, `../framesMinato/descarga.jpg`);
let objectP = new CanvasObject(canvasP);
let i=0;
let e=0;

for ( i = 0; i < 12; i++) {
        objectP.frames[i] = new Image();
        objectP.frames[i].src = `../precarga/${i + 1}.png`;

        objectT.frames[i] = new Image();
        objectT.frames[i].src = `../framesRengoku/${i+1}.png`;

        objectR.frames[i] = new Image();
        objectR.frames[i].src = `../framesGoku/frames/${i+1}.png`;

        objectH.frames[i] = new Image();
        objectH.frames[i].src = `../framesMinato/${i+1}.png`
        console.log(i);
    }
preload();
window.addEventListener("load", drawNavR);

function drawNavR(){
    i = 0;
    canvasR.drawImage(objectR.stages, 0, 0);
    canvasR.drawImage(objectR.frames[3], 50, 30);
    canvasT.drawImage(objectT.stages, 0, 0);
    canvasT.drawImage(objectT.frames[3], 50, 30);
    canvasH.drawImage(objectH.stages, 0, 0);
    canvasH.drawImage(objectH.frames[3], 50, 30);
    }
function preload(){
    if(band == false){
        window.requestAnimationFrame(preload);
        if(e==12)e=0;
        if(i%5==0){
            canvasP.fillStyle = "#000";
            canvasP.fillRect(0, 0, 900, 420);
            canvasP.drawImage(objectP.frames[e], 0, 0);
            e++
        }       
    i++
    }        
}
    
torneo.addEventListener("mouseover", starAnimation);
torneo.addEventListener("mouseout", endAnimation);
ragnarok.addEventListener("mouseover",starAnimationR);
ragnarok.addEventListener("mouseout", endAnimation);
history.addEventListener("mouseover",starAnimationH);
history.addEventListener("mouseout", endAnimation);
let interval;

function starAnimation(){
    band = true;
    objero = objectT;
    interval = setInterval(naruto, 80);
}

function starAnimationR(){
    band = true;
    objero = objectR;
    interval = setInterval(naruto, 90);

    
}

function starAnimationH(){
    band = true;
    objero = objectH;
    interval = setInterval(naruto, 180);  
}

function naruto(){  
    if(band==true){
        if(i>=12){
            i=0;
        }else{
            objero.canva.fillStyle = "rgb(0, 0,0,0.5)";
            objero.canva.drawImage(objero.stages, 0, 0);
            objero.canva.fillRect(0, 0, 955, 420);
            objero.canva.drawImage(objero.frames[i], 50, 30);   
            i++     
        }
    }   
}

function endAnimation() {
    clearInterval(interval);
    band = false;
    objectR.canva.drawImage(objectR.stages, 0, 0);
    objectR.canva.drawImage(objectR.frames[3], 50, 30);
    objectT.canva.drawImage(objectT.stages, 0, 0);
    objectT.canva.drawImage(objectT.frames[3], 50, 30);
    objectH.canva.drawImage(objectH.stages, 0, 0);
    objectH.canva.drawImage(objectH.frames[3], 50,30);
}





