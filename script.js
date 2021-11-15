var id = null;
var back = false;
var back1 = false;
var pause = true;
var pos = 0;
var pos1 = 0;
function myMove() {
  console.log(pause);
  if(pause==true){
    pause=false;
  }else{
    pause=true;
  }

  var elem = document.getElementById("myAnimation");

  if(!pause){
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
      if (pos >= 350) {
        back = true;
      }
      if (pos <= 0){
        back = false;
      }

      if (pos1 >= 350) {
        back1 = true;
      }
      if (pos1 <= 0){
        back1 = false;
      }
      
      if(back){
        pos=pos-(50*Math.random());
        elem.style.top = pos + 'px';
      }else{
        pos=pos+(50*Math.random());
        elem.style.top = pos + 'px';
      }

      if(back1){
        pos1=pos1-(50*Math.random());
        elem.style.left = pos1 + 'px';
      }else{
        pos1=pos1+(50*Math.random());
        elem.style.left = pos1 + 'px';
      }


    }
  }else{
    clearInterval(id);
  }
 
}
