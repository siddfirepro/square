nosex=0;
nosey=0;
difference=0;
rightwristx=0;
leftwristx=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,550);
    canvas=createCanvas(550,550);
    canvas.position(560,160);
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotposes);
}
function draw(){
    background('#000000');
    document.getElementById("squaresize").innerHTML="width and height of square will be"+difference+"px";
    fill('#FFFFFF');
    stroke('#FFFFFF');
    square(nosex,nosey,difference);
}
 function modelLoaded(){
     console.log("model is Loaded");
 }
 function gotposes(results){
     if(results.length>0){
         console.log(results);
         nosex=results[0].pose.nose.x;
         nosey=results[0].pose.nose.y;
         console.log("nosex="+nosex+"nosey"+nosey);
         leftwristx=results[0].pose.leftWrist.x;
         rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx)
     }
 }