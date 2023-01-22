Status = "";
desk_image = "";

function preload()
{
    desk_image = loadImage('IMG_20220512_151141.jpg');
}

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(desk_image,gotResults);
}

function draw()
{
    image(desk_image,0,0,640,420);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}