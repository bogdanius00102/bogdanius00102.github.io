let tg = window.Telegram.WebApp;

tg.expand();
/*
tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';





btn6.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 6!");
		item = "6";
		tg.MainButton.show();
	}
});


Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});


let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);
*/
let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);
function btn_click()
{

let txt1=document.getElementById("txt1").value;
let txt2=document.getElementById("txt2").value;
let array=[txt1,txt2];
tg.sendData(array);
}






