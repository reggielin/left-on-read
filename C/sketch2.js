var table;
var space=200;
var firstTxt =100;
var left =30;
var right=460;
var row,column;
var missingTxt=0;
var input,showResp;
var afterLine;
var line;
function preload(){
    table = loadTable("data/LeaveonReadData.csv","csv","header");

}
function setup(){
    var cnv = createCanvas(innerWidth,innerHeight);
    cnv.mouseClicked(switchConvo);
    row=5;
    column=0; 
    textSize(30);
    input = createInput();
    input.style('z-index', '3')
    input.position(left,1400);
    input.size(windowWidth-200,55);
    button = createButton("send");
    button.size(150, 55);
    button.position(input.x+input.width,input.y);
    button.mouseClicked(send);
    button.style("background-color", "BLUE");
    showResp=false;
    noStroke();
    print(round(table.getColumnCount()/2)-1);
}

function draw(){
    background(250);
    //    noFill();
    //    strokeWeight(15);
    //    stroke("BLUE");
    //    rect(0,0,innerWidth,innerHeight);
    for (var i=0; i<=(round(table.getColumnCount()/2)-2); i++ ) {
        if (i%2 == 0) {
            console.log(i+" "+table.getString(row,column+i));
            fill(0);
            textAlign(LEFT);
            if(table.getString(row,column)== ""){ //check column=0 if the first one is empty;
                line=(firstTxt+space*i)-firstTxt*2.5; 
                console.log(i+ " this row has no 0");
            }else{
                if(table.getString(row,column+i).length>=50 ){
                    console.log(i+ " long txt");
//									line  = (200 + ((.length-50))*fraction));
                     line=firstTxt+(space*i)/2;  
                }else{
                     console.log(i+" short txt");
                     line=firstTxt+(space*i)/2;  
//                    console.log(i+" "+table.getString(row,column+i)+" "+line);
                }
            }
            text(table.getString(row,column+i),left,line,windowWidth-100, windowHeight);
        } else {
            fill(0);
            textAlign(RIGHT);
            if(table.getString(row,column)== ""){
                // if(table.getString(row,column+i).length>=30 ){
                line=(firstTxt+space*(i-1));  
            }else{
                line=firstTxt+(space*i)/2;
//                console.log(i+" "+table.getString(row,column+i)+" "+line);
            }
            text(table.getString(row,column+i),right,line,windowWidth/2, windowHeight);
        }
    }
    if(showResp){
        var i=5;
        afterLine=firstTxt+space*i/2;
        fill(150);
        textAlign(RIGHT);
        text(table.getString(row,column+i),right,afterLine,windowWidth/2, windowHeight);
        //        console.log("here");
        console.log(table.getString(row,column+i).length);
    }

}

function send(){
    if(!showResp){
        showResp=true;
    }else{
        showResp=false;
    }
    print(showResp);

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



