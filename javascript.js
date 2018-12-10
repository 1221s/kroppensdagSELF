 // her starter NANNA's jscript til headeren //

 window.onscroll = function() {headerScroll()};

function headerScroll() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("headerList").classList.add("headerListSmall");
        document.getElementById("headerItem1").classList.add("headerItemSmall");
        document.getElementById("headerItem2").classList.add("headerItemSmall");
        document.getElementById("headerItem3").classList.add("headerItemSmall");
        document.getElementById("headerItem4").classList.add("headerItemSmall");

        document.getElementById("headerVideoText").style.transitionDelay="0s";
        document.getElementById("headerBilledeText").style.transitionDelay="0s";
        document.getElementById("headerForumText").style.transitionDelay="0s";
        document.getElementById("headerProgramText").style.transitionDelay="0s";

    } else {
      document.getElementById("headerList").classList.remove("headerListSmall");
      document.getElementById("headerItem1").classList.remove("headerItemSmall");
      document.getElementById("headerItem2").classList.remove("headerItemSmall");
      document.getElementById("headerItem3").classList.remove("headerItemSmall");
      document.getElementById("headerItem4").classList.remove("headerItemSmall");

      document.getElementById("headerVideoText").style.transitionDelay="0.4s";
      document.getElementById("headerBilledeText").style.transitionDelay="0.4s";
      document.getElementById("headerForumText").style.transitionDelay="0.4s";
      document.getElementById("headerProgramText").style.transitionDelay="0.4s";
    }
}

// Laura Jscript
function slide(event){
    event.target.previousElementSibling.style.clip = "rect(0px, "+(event.clientX-event.target.offsetLeft)+"px, 427px, 0px)";
}

// Her start max Countdown
var countDownDate = new Date("Apr 5, 2019 00:00:00").getTime();

var x = setInterval(function() {


var now = new Date().getTime();
var distance = count - now;

var days = Math.floor(distance/(1000*60*60*24));

document.getElementById("days").innerHTML = days;


if(distance <= 0) {
  clearInterval(x);
}
},1000);


//Her Starter Lightbox JS//
//Projekt 2: Langeskov  Borgerforening



//Javascript for event 1

document.getElementById("clickme").addEventListener("click", function() {

  document.getElementById("lightbox").className = "open";

});



document.getElementById("close").addEventListener("click", function() {

  document.getElementById("lightbox").className = "";

});



document.getElementById("lightbox").addEventListener("click", function(e) {

  if (e.target.id == "lightbox") {

    document.getElementById("lightbox").className = "";

  }

});



//Javascript for event 2

document.getElementById("clickme_1").addEventListener("click", function() {

  document.getElementById("lightbox_1").className = "open";

});



document.getElementById("close_1").addEventListener("click", function() {

  document.getElementById("lightbox_1").className = "";

});



document.getElementById("lightbox_1").addEventListener("click", function(e) {

  if (e.target.id == "lightbox_1") {

    document.getElementById("lightbox_1").className = "";

  }

});
