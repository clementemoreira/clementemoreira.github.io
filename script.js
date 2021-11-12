var id = null;
var back = false;
var pause = true;
var pos = 0;
function myMove() {
  console.log(pause);
  if(pause==true){
    pause=false;
  }else{
    pause=true;
  }
  if(!pause){
    var elem = document.getElementById("myAnimation");
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
      if (pos == 350) {
        back = true;
      }
      if (pos == 0){
        back = false;
      }
  
      if(back){
        pos--;
        elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';
      }else{
        pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';
      }
    }
  }else{
    elem.style.top = pos + 'px';
    elem.style.left = pos + 'px';
  }
 
}
