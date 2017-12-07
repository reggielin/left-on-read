var table;
var space=120;
var average=1;
var firstTxt =100;
var left =30;
var right=200;
var row,column;
var missingTxt=0;
var input,showResp;
var afterLine;
var line;
var yline =[];
var txtWidth;
var char;
function preload(){
    table = loadTable("data/LeaveonReadData.csv","csv","header");

}
function setup(){
    var cnv = createCanvas(innerWidth,innerHeight);
    cnv.mouseClicked(switchConvo);
    row=0;
    column=0; 
    textSize(30);
    input = createInput();
    //    input.style('z-index', '3')
    input.position(left,1400);
    input.size(windowWidth-200,55);
    button = createButton("send");
    button.size(150, 55);
    button.position(input.x+input.width,input.y);
    button.mouseClicked(send);
    button.style("background-color", "BLUE");
    showResp=false;
    noStroke();
    for (var i=0; i<=round((table.getColumnCount()/2)-1); i++){
        //        print(round(table.getColumnCount()/2)-1);
        yline[i] = firstTxt+(space*(i));
        console.log( yline[i]);
    }
}

function draw(){
    background(250);
    for (var i=0; i<=(round(table.getColumnCount()/2)-2); i++ ) {
        if (i%2 == 0) { //0,2,4
            //console.log(i+" "+table.getString(row,column+i));
            fill(0);
            textAlign(LEFT);
            if(table.getString(row,column)== ""){ //check column=0 if the first one is empty;
                if(i!=0){
                    if(table.getString(row,column+(i)).length>=50&&table.getString(row,column+(i)).length<90 ){
                        average=35*2;
                        line=yline[i-1]+average; 
                        yline[i]=line+space;
                        //                        console.log(i+" "+yline[i]);
                        //                         line=firstTxt+(space*i)-firstTxt;
                        //                                                fill('yellow');
                        //                                                rect(left, yline[i-1]+space,windowWidth-200,35);

                    }else  if(table.getString(row,column+(i)).length>=90 && table.getString(row,column+(i)).length<140 ){
                        //console.log(table.getString(row,column+(i-1)).length);
                        average=35*3;
                        line=yline[i-1]+average; 
                        yline[i]=line+(space);
                        //                        console.log(i+" xxxxxxxx "+yline[i]);
                        //                        fill('yellow');
                        //                        rect(left, yline[i-1]+space,windowWidth-200,35);
                        //                        ellipse(left, 410,40,40);
                    }else  if(table.getString(row,column+(i)).length>=140 ){
                        //console.log(table.getString(row,column+(i-1)).length);
                        average=35*4;
                        line=yline[i-1]+average; 
                        yline[i]=line+(space);
                    }else{
                        line=yline[i-1];  
                        yline[i]=line+space;
                        //                        console.log(i+" "+yline[i]);
//                                                                        fill('yellow');
//                                                                        rect(left, yline[i-1]+space,windowWidth-200,35);
                    }
                }else{
                    line=firstTxt;
                    yline[i]=line;
                    //                    console.log(i+" "+yline[i]);
                }
            }else{
                if(i!=0){ //2,4
                    if(table.getString(row,column+1)== ""){ //has input 0 but no input 1
                        if(table.getString(row,3)== ""){
                               if(table.getString(row,column+(i)).length>=56&&table.getString(row,column+(i)).length<85 ){
                                average=35*2;
                                line=yline[i-1];
                                yline[i]=line;
                                console.log(i+" "+table.getString(row,column+(i)).length);
//                                fill('yellow');
//                                rect(left, yline[4],windowWidth-200,35);
                            }else  if(table.getString(row,column+(i)).length>=85 ){
                                average=35*3;
                                line=yline[i-1]; 
                                yline[i]=line;
                            }else{
                                average=35;
                                line=yline[i-1];  
                                yline[i]=line;
                                 console.log(i+" "+table.getString(row,column+(i)).length);
                            }
                        }else{
                            if(table.getString(row,column+(i)).length>=50&&table.getString(row,column+(i)).length<90 ){
                                average=35*2;
                                line=yline[i-1]+space+average;
                                yline[i]=line;
                                //                            console.log(i+" "+yline[i]);
                                //                            fill('orange');
                                //                            rect(left, yline[i-1]+space,windowWidth-200,35);
                            }else  if(table.getString(row,column+(i)).length>=90 ){
                                average=35*3;
                                line=yline[i-1]+space+average; 
                                yline[i]=line;
                                //                            console.log(i+" "+yline[i]);
                                //                            fill('orange');
                                //                            rect(left, yline[i-1]+space,windowWidth-200,35);
                            }else{
                                average=35;
                                line=yline[i-1]+space+average;  
                                yline[i]=line;
                                //                                fill("brown");
                                //                                rect(left, yline[0],windowWidth-200,35);

                            }
                        }

                    }else{ // has input 0 and input 1
                        if(table.getString(row,column+(i)).length>=50&&table.getString(row,column+(i)).length<90 ){
                            if(i!=0){ 
                                average=35*2
                                line=yline[i-1]+space+average;
                                yline[i]=line;

                            }else{
                                average=35*2
                                line=firstTxt+average;  
                                yline[i]=line;
                            }
                        }else  if(table.getString(row,column+(i)).length>=90 ){
                             if(i!=0){ 
                                average=35*3
                                line=yline[i-1]+space+average;
                                yline[i]=line;

                            }else{
                                average=35*3
                                line=firstTxt+average;  
                                yline[i]=line;
                            }
                        }else{
                            if(i!=0){ 
                                average=35
                                line=yline[i-1]+space+average;
                                yline[i]=line;

                            }else{
                                average=35
                                line=firstTxt+average;  
                                yline[i]=line;
                                
                            }
                        }
                    }
                }else{ // i = 0;
                    if(table.getString(row,column+(i)).length>=50&&table.getString(row,column+(i)).length<100 ){
                        average=35*2;
                        line=firstTxt+average;
                        yline[i]=line+(space*i);
                        //                        console.log(i+" "+yline[i]);
                        //                        fill('red');
                        //                        rect(left, yline[i],windowWidth-200,35);

                    }else  if(table.getString(row,column+(i)).length>=100 ){
                        average=35*3;
                        line=firstTxt+average; 
                        yline[i]=line+(space*i);
                        //                        console.log(i+" "+yline[i]);
                        //                        fill('red');
                        //                        rect(left, yline[i],windowWidth-200,35);
                    }else{
                        average=35
                        line=firstTxt;  
                        yline[i]=line;

                    }

                }
            }
            if(table.getString(row,column+i)!= ""){
                rectMode(CENTER);
                fill(225);
                char = str(table.getString(row,column+i));
                txtWidth = textWidth(char);
                rect(left+(txtWidth/2),yline[i]+20,txtWidth+35,average+25,30);
                rectMode(CORNER);
                fill(0);
                if(i!=0){
                    if((table.getString(row,column+1))== ""&&(table.getString(row,3))== ""){
                        text(table.getString(row,column+i),left,yline[i],windowWidth-100, windowHeight);
                    }else if ((table.getString(row,column+1))== ""&& (table.getString(row,3))!= ""){
                        text(table.getString(row,2),left,yline[2-2]+space,windowWidth-100, windowHeight);
                        text(table.getString(row,4),left,yline[4-1]+space,windowWidth-100, windowHeight);
                    }else{
                        text(table.getString(row,column+i),left,yline[i],windowWidth-100, windowHeight);
                    }
                }else{
                    text(table.getString(row,column+i),left,firstTxt,windowWidth-100, windowHeight);
                }
            }



            ////////////------------------//////////////////
        } else {
            fill(0);
            textAlign(RIGHT);
            if(table.getString(row,column)== ""){ // no input 0
                if(i!=1){ // 3, 5
                    if(table.getString(row,column+(i)).length>=50&&table.getString(row,column+(i)).length<90 ){
                        average=35*2;
                        line= yline[i-1]+space+average;
                        yline[i]=line;
                        //                        console.log(i+" "+yline[i]);
                        //                        fill('blue');
                        //                        rect(right,yline[i-1]+space,windowWidth-200,35);

                    }else if(table.getString(row,column+(i)).length>=90 ){
                        average=35*3;
                        line=yline[i-1]+space+average; 
                        yline[i]=line;
                        //                        fill('blue');
                        //                        rect(right, yline[i-1]+space,windowWidth-200,35);
                        //                        console.log(i+" "+yline[i]);
                    }else{
                        average=35;
                        line=yline[i-1]+space+average;
                        yline[i]=line;
//                        //                        fill('blue');
//                                                rect(right, yline[i-1]+space,windowWidth-200,35);
//                                                console.log(i+" "+yline[i]);
                    }
                }else{ // 1
                    if(table.getString(row,column+(i)).length>=50&&table.getString(row,column+(i)).length<100 ){
                        average=35*2;
                        line=firstTxt+average;
                        yline[i]=line;
                        //                        console.log(i+" "+yline[i]);
                        //                        fill('lightblue');
                        //                        rect(right,yline[i-1]+space,windowWidth-200,35);

                    }else  if(table.getString(row,column+(i)).length>=100 ){
                        average=35*3;
                        line=firstTxt+average; 
                        yline[i]=line;
                        //                        console.log(i+" "+yline[i]);
                        //                        fill('lightblue');
                        //                        rect(right, yline[i-1]+space,windowWidth-200,35);

                    }else{
                        //                        console.log(table.getString(row,column+(i)).length);
                        line=(firstTxt+space*(i-1));
                        yline[i]=line;
                        //                        console.log(i+" "+yline[i]);
//                                                                        fill('lightblue');
//                                                                        rect(right, yline[i-1]+space,windowWidth-200,35);
                    }
                }
            }else{//has input 0
                ///
                if(table.getString(row,column+(i)).length>=50&&table.getString(row,column+(i)).length<90 ){
                    // console.log(table.getString(row,column+(i-1)).length);
                    average=35*2;
                    line=yline[i-1]+space+average;
                    yline[i]=line;
                    //                    console.log(i+" "+yline[i]);
                    //                         line=firstTxt+(space*i)-firstTxt;
                    //                                        fill('green');
                    //                                        rect(left, yline[i-1]+space,windowWidth-200,35);

                }else if(table.getString(row,column+(i)).length>=90 && table.getString(row,column+(i)).length<140 ){
                    //                    console.log(table.getString(row,column+(i-1)).length);
                    average=35*3;
                    line=yline[i-1]+space+average; 
                    yline[i]=line;
                    //                    console.log(i+"xxxx "+yline[i]);
                    //                    fill('green');
                    //                    rect(right, yline[i],windowWidth-200,35);
                }
                else if(table.getString(row,column+(i)).length>=140){
                    //                    console.log(table.getString(row,column+(i-1)).length);
                    average=35*3;
                    line=yline[i-1]+space+average;
                    yline[i]=line;
                    //                    console.log(i+" "+yline[i]);
                    //                    fill('green');
                    //                    rect(right,line,windowWidth-200,35);
                }
                else{
                    average=35;
                    line=yline[i-1]+space+average;
                    yline[i]=line;

                } 
            }
            if(table.getString(row,column+i)!=""){
                rectMode(CENTER);
                fill(225);
                char = str(table.getString(row,column+i));
                txtWidth = textWidth(char);
                rect((windowWidth-(txtWidth/2)),yline[i]+20,txtWidth+35,average+25,30);
                rectMode(CORNER);
                fill(0)
                text(table.getString(row,column+i),right,yline[i],windowWidth-200,windowHeight);
            }
        }
    }
    if(showResp){
        rectMode(CORNER);
        var i=5;
        if(table.getString(row,4)!=""){
            afterLine=yline[i-1]+space;
            fill(150);
            textAlign(LEFT);
            text("READ X:XX XM",left,afterLine,windowWidth-200, windowHeight);
            text(table.getString(row,column+i),left,afterLine+35,windowWidth-200, windowHeight);
        }else {
            if (table.getString(row,3)!=""){
                afterLine=yline[3]+space;
                fill(150);
                textAlign(LEFT);
                text("READ X:XX XM",left,afterLine,windowWidth-200, windowHeight);
                text(table.getString(row,column+i),left,afterLine+35,windowWidth-200, windowHeight);
            }else{
                if (table.getString(row,2)!=""){
                    afterLine=yline[2]+space+50;
                    fill(150);
                    textAlign(LEFT);
                    text("READ X:XX XM",left,afterLine,windowWidth-200, windowHeight);
                    text(table.getString(row,column+i),left,afterLine+35,windowWidth-200, windowHeight);

                }else{
                    console.log("here");
                    afterLine=yline[1];
                    fill(150);
                    textAlign(LEFT);
                    text("READ X:XX XM",left,afterLine,windowWidth-200, windowHeight);
                    text(table.getString(row,column+i),left,afterLine+35,windowWidth-200, windowHeight);


                }
            }
        }
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



