music1 = "";
music2 = "";
lWX = 0;
lWY = 0;
rWX = 0;
rWY = 0;

function preload()
{
    music1 = loadSound("music.mp3");
    music2 = loadSound("music2.mp3");
}

function setup()
{
    canvas = createCanvas(800, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("POSENET MODEL HAS STARTED");
}

function gotPoses(result)
{
    if(result.length > 0)
    {
        console.log(result);
        lWX = result[0].pose.leftWrist.x;
        lWY = result[0].pose.leftWrist.y;
        rWX = result[0].pose.rightWrist.x;
        rWY = result[0].pose.rightWrist.y;
    }
}

function draw()
{
    image(video, 0, 0, 800, 500);
}

function play()
{
    music.play();
    music.rate(1);
    music.setVolume(1);
}

function stop()
{
    music.stop();
}