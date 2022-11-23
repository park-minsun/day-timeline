var acc = document.getElementsByClassName("accordion-btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("accordion-active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

//$('.moreless-button').click(function() {
   // $('.moretext').slideToggle();
   // if ($('.moreless-button').text() == "Read more") {
    //  $(this).text("Read less")
   // } else {
    //  $(this).text("Read more")
   // }
 // });

 $(".praivacy_toggle").click(function(){
    if($(".praivacy_wrap").is(":visible")){
        $(".praivacy_wrap").slideUp();
    }
    else{
        $(".praivacy_wrap").slideDown();
    }
})
  
const now = new Date();
const firstDay = new Date("1997-12-03");
const toNow = now.getTime(); //getTime() 함수는 밀리초를 반환한다.
const toFirst = firstDay.getTime();
const passedTime = toNow - toFirst;
const passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24)); //밀리초를 날짜로 바꾸고 반올림
document.querySelector("#accent").innerText = `${passedDay}`;

calcDate(100);
calcDate(365);




