var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function start() {
    document.getElementById("text").innerHTML=" ";
    Recognition.start();
}

Recognition.onresult=function(event){ 
    console.log(event);
    var message=event.results[0][0].transcript;
    document.getElementById("text").innerHTML=message;
    console.log(message);
    
    if(message=="take my selfie"){
        console.log("taking selfie-");
        speak();
    }
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    var utter = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter);
    Webcam.attach(camera); 

    setTimeout(function(){
        take_snapshot();
        save();

    }, 5000)
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="picture" src="'+data_uri+'"/>';


    });
}

function save() {
    link=document.getElementById("link");
    image=document.getElementById("picture").src;
    link.href=image;
    link.click();
}