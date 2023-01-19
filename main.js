nosex = 0;
nosey = 0;
leftwrist = 0;
rightwrist = 0;
difference = 0;

function preload(){

}

function setup(){

Video = createCapture(VIDEO)
Video.size(450, 450)
Video.position(100,200)
canvas = createCanvas(550, 550)
canvas.position(560, 110)
net= ml5.poseNet(Video, modelLoaded)
net.on("pose", gotPoses)

}

function draw(){ 
     document.getElementById("wihe").innerHTML = "Width and Height of the font will be= " +difference+ " px";
     var canvas = document.getElementById("canvas");
     var ctx = canvas.getContext("input");
     ctx.fillText(+input+10,50);
     background("white");
    fill("black");
    stroke("grey");
    text(nosex , nosey , input);
   
}

function modelLoaded(){
console.log('Model has been Loaded successfully...')

}

function gotPoses(results){
    if(results.length > 0){
    console.log(results)
nosex = results[0].pose.nose.x;
nosey = results[0].pose.nose.y;
leftwrist = results[0].pose.leftWrist.x
rightwrist = results[0].pose.rightWrist.x;
difference = floor(leftwrist - rightwrist);
    }

}