var audio = document.getElementById('audio');
var stopButton = document.getElementById('stop-button');
var count = 0;

document.addEventListener('onclick', function(event) {
    stop(event.click);
  });
  
  
  
  function makeSound(click) {
    switch (click) {
      case '' :
        var audio1 = new Audio('');
        alert("You clicked on the w key for Country");
        audio1.pause();
        break;
        
         case 'a' :
        var music2 = new Audio('sounds/')
        alert("play this music")
        music2.play();
        break;
        
         case 's' :
        var music3 = new Audio('sounds/')
        alert("play this music")
        music3.play();
        break;
        
         case 'd' :
        var music4 = new Audio('sounds/')
        alert("play this music")
        music4.play();
        break;
        
         case 'f' :
        var music5 = new Audio('sounds/')
        alert("play this music")
        music5.play();
        break;
    }  
  }

function Audiostop() {
  if(count == 0){
    count = 1;
    audio.play();
    stopButton.innerHTML = 'Play';
  }else{
    count = 0;
    audio.pause();
    stopButton.innerHTML = 'Stop';
  }
}

function stop() {
  Audiostop();
  audio.pause();
  audio.currentTime = 0;
  stopButton.innerHTML = 'Stop';
}