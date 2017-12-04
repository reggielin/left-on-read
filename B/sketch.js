var table;
var space=100;
var firstTxt =200;
var left =30;
var right=30;
var row,column;
var missingTxt=0;
function preload(){
    table = loadTable("data/LeaveonReadData.csv","csv","header");

}
function setup(){
    createCanvas(window.innerWidth,window.innerHeight);
    //    console.log(table.getColumn("You1"));
    //    text(table.getColumn("You1"),50,50,windowWidth, windowHeight);
    //getString(row,column);
    //    print(table.getString(0, 0));
    row=0;
    column=0; 
    textSize(30);
    console.log(table.getString(3,column));

}

function draw(){
    background(255);
    strokeWeight(5);
    stroke("BLUE");
    rect(0,0,window.innerWidth,window.innerHeight);
    for(var i=0; i<=5; i+=2){
        noStroke();
        //    textAlign(LEFT);
        if(table.getString(row,column+i)== ""){
            console.log(i+" xx ");
        }else{
             text(table.getString(row,column+i),left,firstTxt +space*i,windowWidth, windowHeight);
        }
    }
    for(var i=1; i<=5; i+=2){
        noStroke();
        //    textAlign(RIGHT);
        if(table.getString(row,column+i)== ""){
            console.log(i+" xx "); 
        } else{
            text(table.getString(row,column+i),left,firstTxt +space*i,windowWidth, windowHeight);
        }
    }
 
}

function touchStarted(){
    if(row>=table.getRowCount()-1){
        row=0;  
    }else{
        row++;
    }
    console.log(row);
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