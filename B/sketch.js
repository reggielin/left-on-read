var table;
function preload(){
    table = loadTable("data/LeaveonReadData.csv","csv","header");

}
function setup(){
     createCanvas(windowWidth, windowHeight);
    console.log(table.getColumn("You1"));
    text(table.getColumn("You1"),50,50,windowWidth, windowHeight);
}
function draw(){
 
}