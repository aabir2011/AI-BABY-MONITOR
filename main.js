
img = "";
status = "";
objects = [];
function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    
    video.size(380,380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Human...";
}
function preload() {
    img = loadSound('Baby_Sleeping_ringtone.mp3');
}
function modelLoaded(){
    console.log("Model Loaded");
    status = true;
}
function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}
function draw(){
    image(video,0, 0, 380, 380);

    for( i = 0; i < objects.length; i++){
        document.getElementById("status").innerHTML = "Baby is there";
        fill("black");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%" , objects[i].x + 15, objects[i].y + 15 );
        noFill();
        stroke("black");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

    if(objects.label = "person")
    {
        document.getElementById("status").innerHTML = "Baby Detected 👶";
        Baby_Sleeping_ringtone.play();
    }
        else
        {
        document.getElementById("status").innerHTML = "Baby not Detected ";
        Baby_Sleeping_ringtone.play();
        }
        objectDetector.detect(video, gotResult);
    }
    if(objects.length < 0){
        document.getElementById("status").innerHTML = "Baby not Detected ";
    Baby_Sleeping_ringtone.play();
    }
}