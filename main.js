function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/U_0RaYS3c/model.json' , modelReady)
}
function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);

        random_number_r=Math.floor(Math.random()*255) + 1;
        random_number_g=Math.floor(Math.random()*255) + 1;
        random_number_b=Math.floor(Math.random()*255) + 1;

        document.getElementById("result_hear").innerHTML='I can hear the sound of - ' +results[0].label;
        document.getElementById("result_accuracy").innerHTML='Accuracy - '+(results[0].confidence*100).toFixed(2)+'%';
        document.getElementById("result_hear").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_accuracy").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img1= document.getElementById('dog.jpeg');
        img2= document.getElementById('cow.png');
        img3= document.getElementById('cat.jpeg');
        img4= document.getElementById('lion.jpeg');

        if(results[0].label == "barking" ){
            img.src='dog.jpeg';
        }
        else if(results[0].label == "mooing"){
            img1.src= 'cow.png';
        }
        else if(results[0].label == "meowing"){
            
            img2.src= 'cat.jpeg';
           
            
        }
        else{
            img3.src= 'lion.jpeg';
            
        }
    }
}