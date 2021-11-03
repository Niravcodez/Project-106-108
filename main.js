function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/iLVx-pFR5/model.json", modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}