 // her starter NANNA's jscript til headeren //

 window.onscroll = function() {bothScrollFunctions()};

function bothScrollFunctions(){
  scrollFunction();
}

//window.onscroll = function(){
//window.scrollBy(0, 0);
//}

// Laura Jscript

//function slide(event){
  //  event.target.previousElementSibling.style.clip = "rect(0px, "
    //+(event.clientX-event.target.offsetLeft)+"px, 427px, 0px)";
//}


//Back to top knap

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("LauraBtn").style.bottom = "30px";
  } else {
    document.getElementById("LauraBtn").style.bottom = "-160px";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// arrownDownTop animation
function arrowDownTop() {
  var firstTimeout
  var secondTimeout
  if(document.body.scrollTop < 150){

  firstTimeout =  setTimeout(function(){
    document.getElementById('arrowDownTop').style.top ="91vh";

      secondTimeout =  setTimeout(function(){
            document.getElementById('arrowDownTop').style.top ="88vh";
            }, 200);

    }, 1000);
  }
  else {
    document.getElementById('arrowDowntop').style.top ="90vh";
    clearTimeOut();
  }

}
