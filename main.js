noseX=0;
noseY=0;
function preload(){
    dog_nose=loadImage("dog.nose.png")
}
function setup(){
    canvas = createCanvas (300, 300);
canvas.center();
video= createCapture (VIDEO);
video.size(300, 300);
video.hide();
poseNet=m15.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('posenet Is Intentalized'); ()
    function gotPoses(results)
}
{
    if(results.legnth > 0 )
}
{
    console.log(results);
    noseX=results[0].pose.nose.X;
    noseY=results[0].pose.nose.Y;
    console.log("nose X = " + results[0].pose.nose.x);
    console.log("nose Y = " + results[0].pose.nose.y);
}
function draw() {
    image(video,0,0,300, 300);
    image(dog_nose,noseX-50,noseY-50,100,100);
}
function take_snapshot(){
 save('myFilterImage.png');}