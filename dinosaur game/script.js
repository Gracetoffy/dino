var character = document.getElementById('character');
var block = document.getElementById('block');
var lostMsg = document.querySelector('.loseMsg')
var youLost = false;
var scoreCounter = 0;
var score = document.getElementById('score');
var unit =document.getElementById('unit');
var tens = document.getElementById('tens');
var hundred=document.getElementById('hundred');
var thousand=document.getElementById('th');
var TH =document.getElementById('ten-th');
var gameStart = true;
var HIscore = document.getElementById('HIscore');
var interval;








  function startSC(){
    resetSC();
    clearInterval(interval);
    interval =setInterval(counter,150);
}  
function stopSC(){
    clearInterval(interval);
   
}

function resetSC(){
   
clearInterval(interval);
var unit ="0";
var tens ="0";
var hundred="0";
var thousand="0";
var TH ="0";

score.innerHTML=TH+thousand+hundred+tens+unit;
scoreCounter=0;
}
        



function counter(){

   
    scoreCounter++
    if(scoreCounter<=9){
        score.innerHTML= "0"+"0"+"0"+"0"+ scoreCounter; 
    }
    if(scoreCounter<=99 && scoreCounter >9 ){
        score.innerHTML= "0"+"0"+"0"+ scoreCounter; 
    }
    if(scoreCounter<=999 && scoreCounter>99){
        score.innerHTML= "0"+"0"+ scoreCounter; 
    }
     if(scoreCounter<=9999 && scoreCounter>999){
        score.innerHTML= "0"+ scoreCounter; 
    }
    if(scoreCounter>9999){
        score.innerHTML= scoreCounter; 
    }
     
   
}


function jump(){
    if(character.class != "animate"){
        character.classList.add("animate");
   
    }
     setTimeout(function(){
        character.classList.remove("animate");

    },500)
  
     if(youLost==true){
         startSC();
        lostMsg.style.display="none";
     block.style.display="block";
     block.style.animation="block 2s infinite linear";
    youLost=false;
   
  
    }
}

document.body.onkeyup = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||      
        e.keyCode == 32      
    ) {
        
      jump();
   


    
   
    }
  };

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

        if(blockLeft<50 && blockLeft>0 && characterTop>=180){
         
            block.style.animation ="none";
            block.style.display ="none";
            youLost=true;
            lostMsg.style.display="block";
            var newScore = score.innerHTML;
            var currentScore = HIscore.innerHTML;
            if(currentScore==""){
           HIscore.innerHTML =  newScore; 
            }else if (newScore > HIscore.innerHTML){
                HIscore.innerHTML =  newScore;
            }
            
           
             


            
          stopSC();
         

          

        }


},10)
window.onload=
startSC();

