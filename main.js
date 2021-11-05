function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/iLVx-pFR5/model.json",{ probabilityThreshold: 0.7 }, modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

var dog = 0;
var cat = 0;
var cow = 0;

function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        random_number_r = Math.floor(Math.random()*255);
        random_number_g = Math.floor(Math.random()*255);
        random_number_b = Math.floor(Math.random()*255);

        document.getElementById("result_label").innerHTML = "Detected voice is of - " + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat+' Detected Cow - '+cow;
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")"; 
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        
        img1 = document.getElementById("animal_image");

        if(results[0].label == "Barking")
        {
            img1.src = "dog.gif";
            dog = dog+1;
        }
        else if(results[0].label == "Meowing")
        {
            img1.src = "cat.gif";
            cat = cat+1;
        }
        if(results[0].label == "Mooing")
        {
            img1.src = "cow.gif";
            cow = cow+1;
        }
        else
        {
            img1.src = "speaker.gif";
        }
        
    }
}