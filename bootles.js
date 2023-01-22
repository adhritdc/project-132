Status = "";
bootle_image = "";

function preload()
{
    bootle_image = loadImage('IMG_20220512_151244.jpg');
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
    object_Detector.detect(bootle_image,gotResults);
}

function draw()
{
    image(bootle_image,0,0,640,420);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}