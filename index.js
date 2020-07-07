function timer() {

  var nMinutes = document.getElementById("enterMinutes");
  var startBtn = document.getElementById("start");
  var restartBtn = document.getElementById("restart");
  var inputContent = document.getElementById("inputContent");
  var counterContent = document.getElementById("counterContent");
  var counterMinutes = document.getElementById("counterMinutes");
  var counterSeconds = document.getElementById("counterSeconds");

  // Hide elements that are not needed for countdown section
  function hideElement(el1, el2) {
    el1.style.display = "none";
    el2.style.display = "none";
  }

  // Show elements that are needed for countdown section
  function showElement(el1) {
    el1.style.display = "inline-block";
  }
  
  // Play the sound for every second
  function play(sound) {          
    new Audio(sound).play();     
  };

  // Start countdown on click
  startBtn.addEventListener("click", function() {

    var minuts = nMinutes.value;
    var seconds = 60;


    if (minuts === "") {
      window.location.reload();
      alert("Please enter the number of minutes.");
    };
    
    var interval = setInterval(function() {
      hideElement(inputContent, startBtn);
      showElement(counterContent);

      counterMinutes.innerHTML = minuts;
      counterSeconds.innerHTML = seconds;
      seconds--;

      play("sounds/1.wav");

      if (seconds === 0) {
        minuts--;
        seconds = 60;
      } else if (minuts === 0) {
        clearInterval(interval);
        showElement(restartBtn);
        counterSeconds.innerHTML = 0;
        play("sounds/2.wav");
      };

    }, 1000);

  });

  // Restart countdown on click

  function restart() {
    showElement(inputContent);
    showElement(startBtn);
    hideElement(counterContent, restartBtn);

    counterMinutes.innerHTML = "";
    nMinutes.value = "";
  };

  restartBtn.addEventListener("click", restart);
  
};

timer();