let tg = window.Telegram.WebApp;

tg.expand();

let usercard = document.getElementById("usercard").innerText = tg.initDataUnsafe.user.first_name;


function btn_click()
{

let txt1=document.getElementById("txt1").value;
let txt2=document.getElementById("txt2").value;

let array = [txt1, txt2];
let jsonString = JSON.stringify(array);


tg.sendData(jsonString);

}






