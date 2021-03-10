var numberofMusicButtons = document.querySelectorAll(".music").length

for (var i = 0; i<numberofMusicButtons; i++) {
  document.querySelectorAll('.music')[i].addEventListener("click", function() {
    
    var buttonInnerHTML = this.innerHTML;
    
    makeSound(buttonInnerHTML);
    
    buttonAnimation(buttonInnerHTML);
    
  });
  
}

document.addEventListener('keypress', function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});





function makeSound(key) {
  switch (key) {
    case 'w' :
      var music1 = new Audio('sounds/God Gave Me You.mp3');
      alert("You clicked on the w key for Country");
      music1.play();
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


function buttonAnimation(currentkey) {
  
  var activeButton = document.querySelector('.' + currentkey);
  
  activeButton.classList.add('pressed')

  
  
  setTimeout(function() {
    activeButton.classList.remove('pressed');
  }, 100); 
}