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
      var music1 = new Audio('sounds/God Gave Me You.mp3')
<<<<<<< HEAD
      alert("You clicked on the w key for Country") // God gave me you
=======
      alert("You clicked on the w key for Country")
>>>>>>> 92f0b8bbdcda5a714cf1b48ea71be6f6453a7f0a
      music1.play();
      break;
      
       case 'a' :
      var music2 = new Audio('sounds/Fall Out Boy   Thanks For The Memories-[Extreme Music Mp3 Download].mp3')
      alert("You clicked on the a key for Alternative/Indie Rock") // Thanks for the memories
      music2.play();
      break;
      
       case 's' :
      var music3 = new Audio('sounds/Root Down.mp3')
      alert("You clicked on the s key for HipHop/Rap") // Root Down
      music3.play();
      break;
      
       case 'd' :
      var music4 = new Audio('sounds/Vanessa CarltonMaking My Way DownTown-[Extreme Music Mp3 Download].mp3')
      alert("You clicked on the d key for Pop music") // Making my way downtown
      music4.play();
      break;
      
       case 'f' :
      var music5 = new Audio('sounds/I Swear.mp3')
      alert("You clicked on the f key for Contemporary R&B") // I swear
      music5.play();
      break;
<<<<<<< HEAD

      case 'e' :
        var music6 = new Audio('sounds/Deer in the Headlights.m4a')
        alert("You clicked on the e key for Deer in the Headlights") // Deer in the headlights
        music6.play();
        break;

      case 't' :
          var music7 = new Audio('sounds/Owl City when can I see you again-[Extreme Music Mp3 Download].mp3')
          alert("You clicked on the t key for Owl City") // When can I see you again
          music7.play();
          break;

          case 'y' :
            var music8 = new Audio('sounds/Automatic.mp3') // Automatic
            alert("You clicked on the y key for R&B/Soul")
            music8.play();
            break;

            case 'r' :
            var music9 = new Audio('sounds/Sign  FLOW FLOW The Best Anime-[Extreme Music Mp3 Download].mp3')
            alert("You clicked on the r key for a hidden anime song") // FLOW FLOW
            music9.play();
            break;

            case 'q' :
              var music10 = new Audio('sounds/Colors of the Wind.m4a')
              alert("You clicked on the q key for a special disney song") // Colors of the Wind
              music10.play();
              break;

              case 'p' :
              var music11 = new Audio('sounds/One Dance.m4a')
              alert("You clicked on the p key for Afrobeat") // One Dance
              music11.play();
              break;

              case 'o' :
              var music12 = new Audio('sounds/Whos That Chick.m4a') // Who's that Chick
              alert("You clicked on the o key for Dance/Electronic")
              music12.play();
              break;

              case 'i' :
              var music13 = new Audio('sounds/God-Shaped Hole.m4a') // God-Shaped Hole
              alert("You clicked on the i key for Christian/Gospel")
              music13.play();
              break;

              case 'u' :
              var music14 = new Audio('sounds/Bad Reputation.m4a') // Bad Reputation
              alert("You clicked on the u key for Hard Rock")
              music14.play();
              break;

              case 'l' :
              var music15 = new Audio('sounds/The First Cut Is The Deepest.m4a') // The First Cut Is The Deepest
              alert("You clicked on the l key for Sheryl Crow")
              music15.play();
              break;

              case 'm' :
              var music16 = new Audio('sounds/Sweet Thing.m4a')
              alert("You clicked on the m key for Keith Urban") // Sweet Thing
              music16.play();
              break;

              case 'c' :
              var music17 = new Audio('sounds/Thriller.mp3')
              alert("You clicked on the c key for Michael Jackson") // Thriler
              music17.play();
              break;

              case 'z' :
              var music18 = new Audio('sounds/In My Head.m4a')
              alert("You clicked on the z key for Jason Derulo") // In my Head
              music18.play();
              break;

              case 'n' :
              var music19 = new Audio('sounds/Im Alright.m4a')
              alert("You clicked on the n key for Kenny Loggins") // I'm Alright
              music19.play();
              break;

              case 'b' :
              var music20 = new Audio('sounds/Keith UrbanDays Go By-[Extreme Music Mp3 Download].mp3')
              alert("You clicked on the b key for Days go by") // Days go by
              music20.play();
              break;

              case 'x' :
              var music21 = new Audio('sounds/Banjo.mp3') // Banjo
              alert("You clicked on the x key for Rascal Flatts")
              music21.play();
              break;

              case 'v' :
              var music22 = new Audio('sounds/Despacito.mp3') // Despacito
              alert("You clicked on the v key for Despacito")
              music22.play();
              break;

              case 'h' :
              var music23 = new Audio('sounds/Complicated.mp3')
              alert("You clicked on the h key for Complicated") // Complicated
              music23.play();
              break;

              case 'g' :
              var music24 = new Audio('sounds/Payphone.mp3') // PayPhone
              alert("You clicked on the g key for Maroon 5")
              music24.play();
              break;

              case 'j' :
              var music25 = new Audio('sounds/Hey Ladies.m4a')
              alert("You clicked on the j key for Hey Ladies") // Hey Ladies
              music25.play();
              break;

              case 'k' :
              var music26 = new Audio('sounds/Stand.mp3')
              alert("You clicked on the k key for Stand") // Stand
              music26.play();
              break;
=======
>>>>>>> 92f0b8bbdcda5a714cf1b48ea71be6f6453a7f0a
  }
}

var stopButton = document.getElementById('stop-button');

Audio.prototype.stop = function() {
  this.pause();
  this.currentTime = 0;
};

function stopMusic() {
  var audio = document.getElementById('music-keyboard');
  var music1stop = new Audio('sounds/God Gave Me You.mp3');
  music1stop.stop();
}

stopButton.addEventListener('onClick', stopMusic);






function buttonAnimation(currentkey) {
  
  var activeButton = document.querySelector('.' + currentkey);
  
  activeButton.classList.add('pressed')

  
  
  setTimeout(function() {
    activeButton.classList.remove('pressed');
  }, 100); 
}
