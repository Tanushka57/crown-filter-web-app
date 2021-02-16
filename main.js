headX = 0;
headY = 0;

function setup() {
    canvas = createCanvas(600, 600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function take_snapshot() {
    save("royal.png");
}

function modelLoaded() {
    console.log("model has loaded");
}

function draw() {
    image(video, 0, 0, 600, 600);
    image(crown,headX,headY,350,250);
}


function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        headX = results[0].pose.nose.x - 195;
        headY = results[0].pose.nose.y - 255;
    }
}

function preload() {
    crown=loadImage('https://i.postimg.cc/dVsNhDWH/crown.png');
}
