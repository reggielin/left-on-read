var table;
var space=100;
var endline=35;
var firstTxt =150;
var left =30;
var right=30;
var row,column;
var missingTxt=0;
var input,showResp;
var line;
var yline =[];
var txt =[];
var txtWidth;
var char;
var rect_h;
var deleteAvailable=false;
function preload(){
    table = loadTable("data/LeaveonReadData.csv","csv","header");

}
function setup(){
    var cnv = createCanvas(innerWidth,innerHeight);
    cnv.mouseClicked(switchConvo);
    row=4;
    column=0;
    textSize(30);
    input = createInput();
    input.position(left,1400);
    input.size(innerWidth-200,55);
    button = createButton("send");
    button.size(150, 55);
    button.position(input.x+input.width,input.y);
    button.mouseClicked(send);
    button.style("background-color", "#C0C0C0");
    showResp=false;
    noStroke();
    yline[0]=firstTxt;
    getText();
}
function draw(){
    background(250);
    for (var i=0; i<=(round(table.getColumnCount()/2)-2); i++ ) {
        char = str(table.getString(row,column+i));
        txtWidth = textWidth(char);

        if(table.getString(row,column+(i)).length<=45){
            rect_h=35;
        } else if (table.getString(row,column+(i)).length>45 && table.getString(row,column+(i)).length<=90 ){
            rect_h=35*2;
//            console.log(table.getString(row,column+2).length);
        }else if (table.getString(row,column+(i)).length>90 && table.getString(row,column+(i)).length<=135 ){
            rect_h=35*3;
//            console.log(table.getString(row,column).length);
        } else if (table.getString(row,column+(i)).length>135 && table.getString(row,column+(i)).length<=180 ){
            rect_h=35*4;
        } else if (table.getString(row,column+(i)).length>180 && table.getString(row,column+(i)).length<=225 ){
            rect_h=35*5;
        } else if (table.getString(row,column+(i)).length>225 && table.getString(row,column+(i)).length<=270 ){
            rect_h=35*6;
        }else{             
            rect_h=35*7;
        }

        //            console.log(table.getString(row,column).length);
        if(table.getString(row,column+i)!=""){
            if (i%2 == 0) { 
                if(txtWidth>innerWidth/1.5){
                    txtWidth=innerWidth/1.5;
                }
                rectMode(CORNER);
                fill(225);
                noStroke();
                rect(left-20,yline[i]-20,txtWidth+40,rect_h+40,33);
                rectMode(CORNER);
                textAlign(LEFT);
                fill(0);
                text(table.getString(row,column+i),left,yline[i],innerWidth/1.5, innerHeight);
            } else{
                if(txtWidth>innerWidth/1.5){
                    txtWidth=innerWidth/1.5;
                }
                push();
                rectMode(CORNER);
                fill(0,122,255);
                noStroke();
                translate(innerWidth,0);
                scale(-1.0,1.0);
                rect(right-20,yline[i]-20,txtWidth+45,rect_h+45,33);
                pop();
                rectMode(CORNER);
                textAlign(RIGHT);
                fill(255);
                text(table.getString(row,column+i),(innerWidth-innerWidth/1.5)-right,yline[i],innerWidth/1.5, innerHeight);
            }
        }
    }

    if(showResp){
        var i=5;
        textAlign(LEFT);
        fill(200);
        var response_y= yline[i]-space+35;
        text("READ XX:XX XM", left,response_y,innerWidth/1.5, innerHeight)
        text(table.getString(row,column+i),left,response_y+35,innerWidth/1.5, innerHeight);
    }

    //console.log(i+" "+table.getString(row,column+i).length+" | "+yline[i]);
}
function switchConvo(){
    yline.splice(0,6);
    space=100;
    endline=35;
    firstTxt =150;
    left =30;
    right=30;   
    if(!showResp){
        if(row>=table.getRowCount()-1){
            row=0;
        }else{
            row++;
        }
        console.log("ROW: "+row);
    }
    //return false;
    yline[0]=firstTxt;
    getText();

}
function getText(){
    if(table.getString(row,0)!=""){
        for (var i=1; i<= (round(table.getColumnCount()/2)-1); i++ ) { 
            endline=35;
            if(table.getString(row,column+(i-1))!=""){
                if(table.getString(row,column+(i-1)).length<=45){
                    console.log(i+" x1111");
                    endline=endline*1;
                    yline[i]=yline[i-1]+space+endline;
                }else if (table.getString(row,column+(i-1)).length>45 && table.getString(row,column+(i-1)).length<=90 ){
                    console.log(i+" x2222");
                    endline=endline*2;
                    yline[i]=yline[i-1]+endline+space;   
                }else if (table.getString(row,column+(i-1)).length>90 && table.getString(row,column+(i-1)).length<=135 ){
                    console.log(i+" x3333");
                    endline=endline*3;
                    yline[i]=yline[i-1]+space+endline;
                }else if (table.getString(row,column+(i-1)).length>135 && table.getString(row,column+(i-1)).length<=180 ){          

                    console.log(i+" x4444");
                    endline=endline*4;
                    yline[i]=yline[i-1]+space+endline;
                }else{
                    console.log(i+" x5555");
                    endline=endline*5;
                    yline[i]=yline[i-1]+space+endline;
                }
            }else{
                yline[i]=yline[i-1];
            }

        }
    }else{ //input 0 is empty
        //        console.log(+i+" "+table.getString(row,column)+" "+table.getString(row,column).length );
        yline[1]=firstTxt;
        console.log(yline[1]);   
        for (var i=2; i<= (round(table.getColumnCount()/2)-1); i++ ) { 
            endline=35;
            if(table.getString(row,column+(i-1))!=""){
                if(table.getString(row,column+(i-1)).length<=45){
                    endline=endline;
                    yline[i]=yline[i-1]+endline+space;
                } else if (table.getString(row,column+(i-1)).length>45 && table.getString(row,column+(i-1)).length<=90 ){
                    endline=endline*2;
                    yline[i]=yline[i-1]+space+endline;
                }else if (table.getString(row,column+(i-1)).length>90 && table.getString(row,column+(i-1)).length<=135 ){
                    endline=endline*3;
                    yline[i]=yline[i-1]+space+endline;
                }else{             

                    endline=endline*4;
                    yline[i]=yline[i-1]+space+endline;
                }
                console.log(yline[i]);   
                console.log(i+" "+table.getString(row,column+(i)).length);

            }else{
                yline[i]=yline[i-1];
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