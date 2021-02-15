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
    fill(231, 181, 55);
    stroke(231, 181, 55);
    triangle(headX, headY - 70, headX + 200, headY, headX - 70, headY + 100, );
}


function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        headX = results[0].pose.nose.x - 100;
        headY = results[0].pose.nose.y - 100;
    }
}
