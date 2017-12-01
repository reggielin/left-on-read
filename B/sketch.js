var table;
function preload(){
    table = loadTable("data/LeaveonReadData.csv","csv","header");

}
function setup(){
     createCanvas(windowWidth, windowHeight);
}
function draw(){
    console.log(table.getColumn("You1"));
}