let tg = window.Telegram.WebApp;

tg.expand();
var mb=tg.MainButton;
mb.text="Відправити";





 //document.getElementById("usercard").innerText = tg.initDataUnsafe.user.first_name;


function send_form()
{

let txt1=document.getElementById("txt1").value;
let txt2=document.getElementById("txt2").value;

if(txt1.length<3 || txt2.length<3)
{


	mb.hide();
}
else
{
	mb.show();
}

}




function sendData()
{
let txt1=document.getElementById("txt1").value;
let txt2=document.getElementById("txt2").value;
let array = [txt1, txt2];

tg.sendData(array);


}

Telegram.WebApp.onEvent("mainButtonClicked", function(){
	sendData();
});
