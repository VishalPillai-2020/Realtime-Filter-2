noseX=0;
noseY=0;

function preload (){
mustache= loadImage("https://i.postimg.cc/HnW2T0Wj/151-1516315-french-mustache-clipart-transparent-background-mustache-png.png");
};
function setup(){
    canvas= createCanvas(350, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();  
    video.size(350, 300)
   posenet= ml5.poseNet(video, modelLoaded);
   posenet.on('pose', getPoses);

}
function getPoses(results){
    if (results.length > 0){
        console.log(results);
         noseX= results[0].pose.nose.x -27;
         noseY= results[0].pose.nose.y -5;
    }
}
function modelLoaded(){
    console.log("modelLoaded");
}
function draw(){
    image(video, 0, 0, 350, 300);
    image(mustache, noseX, noseY, 50, 50)
}
function take_snapshot(){
    save("img.jpeg");
}