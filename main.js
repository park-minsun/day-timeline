const now = new Date();
const firstDay = new Date("2020-07-07");
const toNow = now.getTime(); //getTime() 함수는 밀리초를 반환한다.
const toFirst = firstDay.getTime();
const passedTime = toNow - toFirst;
const passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24)); //밀리초를 날짜로 바꾸고 반올림
document.querySelector("#accent").innerText = `${passedDay}`;

calcDate(100);
calcDate(365);