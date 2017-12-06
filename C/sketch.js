var table;
var space=200;
var firstTxt =100;
var left =30;
var right=300;
var row,column;
var missingTxt=0;
var input,showResp;
var afterLine;
function preload(){
    table = loadTable("data/LeaveonReadData.csv","csv","header");

}
function setup(){
    var cnv = createCanvas(innerWidth,innerHeight);
    cnv.mousePressed(switchConvo);
    row=0;
    column=0; 
    textSize(30);
    input = createInput();
    input.style('z-index', '3')
    input.position(0,1400);
    input.size(windowWidth-200,55);
    button = createButton("send");
    button.size(30, 50);
    button.position(input.x+input.width,input.y);
    button.mousePressed(send);
    showResp=false;
}

function draw(){
    background(250);
//    noFill();
//    strokeWeight(15);
//    stroke("BLUE");
//    rect(0,0,innerWidth,innerHeight);
    for(var i=0; i<=5; i+=2){
        var line;
        noStroke();
          textAlign(LEFT);
        if(i!=0){
            if(table.getString(row,column+(i-1))== ""){
                line = firstTxt+(space)*(i/2);
                console.log(i+" "+ line);

            }else{
                line=firstTxt +space*i/2; 
            }
        }else{
            console.log(i+" "+ line);
            line=firstTxt +space*i/2;  
        }
        fill(0);
        text(table.getString(row,column+i),left,line,windowWidth/2, windowHeight);  
        afterLine=line+space;
    }
    for(var i=1; i<=4; i+=2){
        var line;
        noStroke();
            textAlign(RIGHT);
        if(table.getString(row,column+(i-1))== ""){
            line = firstTxt+(space)*(i/2);
            console.log(i+" "+ line);
        } else{
            line=firstTxt +space*i;
        }
        fill(0);
        text(table.getString(row,column+i),right,line,windowWidth/2, windowHeight);
    }
     if(showResp){
            var i=5;
            fill(150);
            text(table.getString(row,column+i),right,afterLine,windowWidth/2, windowHeight);
        }

}

function send(){
    if(!showResp){
        showResp=true;
    }else{
        showResp=false;
    }
}

function switchConvo(){
    if(!showResp){
        if(row>=table.getRowCount()-1){
            row=0;  
        }else{
            row++;
        }
        console.log(row);
    }
    //return false;
}

// //You
//    noStroke();
//    textAlign(LEFT);
//    text(table.getString(row,column),left,firstTxt,windowWidth, windowHeight);
//    text(table.getString(row,column+2),left,firstTxt +space*2,windowWidth, windowHeight);
//    text(table.getString(row,column+4),left,firstTxt +space*4,windowWidth,windowHeight);
//    //ME
////    textAlign(RIGHT);
//    text(table.getString(row,column+1),right,firstTxt +space,windowWidth, windowHeight);
//    text(table.getString(row,column+3),right,firstTxt +space*3,windowWidth,windowHeight);
//    //respond
//    text(table.getString(row,column+5),right,firstTxt +space*5,windowWidth,windowHeight);