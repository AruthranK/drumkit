
//Detecting button press
var numberofdrums = document.querySelectorAll("button").length;
for(var i = 0; i < numberofdrums; i++ ){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var BUttonInnerHTML = this.innerHTML;

        makesound(BUttonInnerHTML);

        buttonAnimation(BUttonInnerHTML);
    });
}

//Detecting keyboard press
document.addEventListener("keypress", function(event){
    makesound(event.key);

    buttonAnimation(event.key);
});

function makesound(key){
    switch (key){
        case 'w':
            var tom1 = new Audio('assets/sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            var crash = new Audio('assets/sounds/crash.mp3');
            crash.play();
            break;

        case 's':
            var kick = new Audio('assets/sounds/kick-bass.mp3');
            kick.play();
            break;

        case 'd':
            var tom2 = new Audio('assets/sounds/tom-2.mp3');
            tom2.play();
            break;

        case 'j':
            var snare = new Audio('assets/sounds/snare.mp3');
            snare.play();
            break;
            
        case 'k':
            var tom3 = new Audio('assets/sounds/tom-3.mp3');
            tom3.play();
           break;

        case 'l':
            var tom4 = new Audio('assets/sounds/tom-4.mp3');
            tom4.play();
            break;

        default: console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentkey){
    var activebutton = document.querySelector("."+ currentkey);

    activebutton.classList.add("pressed");
    
    setTimeout(function(){
        activebutton.classList.remove("pressed")
    }, 100);

}