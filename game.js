// alert("Hello");
var buttonColors=["red", "blue", "green", "yellow" ];
var gamePattern=[];
var userClickedPattern=[];

var delayInMilliseconds = 1000; //1 second
var started=false;
var level=0;
$(document).keypress(function() {
  if (!started) {

    $("#level-title").text("Level " + level);
    nextsequence();
    started = true;
  }
});


$(".btn").click(function(){
    userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playsound(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
    });

 
    function checkAnswer(currentLevel) {
      // console.log(currentLevel);
      // console.log(gamePattern[currentLevel])
      // console.log(userClickedPattern[currentLevel])
      if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
  
        console.log("success");
        if (userClickedPattern.length === gamePattern.length){
          setTimeout(function () {
            nextsequence();
          }, 1000);
  
        }
  
      } else {
  
        console.log("wrong");
        var wrong=new Audio("sounds/wrong.mp3");
        wrong.play();
        $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
       // $("level-title").text("Game Over, Press Any Key to Restart");
       
      }, 50);

      $("#level-title").text("Game Over, Press Any Key to Restart");
     
       startover();

      }
  
  }
  
  
function nextsequence(){
  userClickedPattern = [];
   level++;
  $("#level-title").text("Level " + level);
    randomNumber=Math.floor(Math.random()*4);
    console.log(randomNumber);
    var randomChosenColor=buttonColors[randomNumber];

     gamePattern.push(randomChosenColor);
     $("#"+randomChosenColor).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50);
      playsound(randomChosenColor);
      
      
};

function playsound(n){
    var audio = new Audio("sounds/"+n+".mp3");
      audio.play();
      $("#"+n).addClass("pressed");
      setTimeout(function () {
        $("#" + n).removeClass("pressed");
      }, 50);
    
}

function startover(){
  userClickedPattern=[];
   gamePattern=[];
    level=0;
    started=false;
}














//    $("#blue").click(function (){
//    nextsequence();
    
//    });



