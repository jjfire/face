NoseX=0
NoseY=0
function preload(){
 clown_nose= loadImage('face.png');
} 

function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',  gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw(){
image(video, 0, 0, 300, 300 );
fill(127,255,212);
stroke(255,0,0);
//circle(NoseX, NoseY,40);
image(clown_nose,NoseX-25,NoseY ,50,50);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        NoseX=results[0].pose.nose.x;
        NoseY=results[0].pose.nose.y;
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    }
}