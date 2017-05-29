
var arr = new Array();
var arr_numer = 0;
var duty = document.getElementById('lista');


function List() {
	var duty2 = document.getElementById("comments").value;
	if(duty2 == 0)
		alert("To nie czas na nieróbstwo. Działaj!"); //alert, o którym pisałeś w instrukcji (przypadek braku treści)
	else {
	
	var field = document.createElement('input');
	field.setAttribute('type', 'radio'); //kształt 'radio' do 'odkliknięcia'
	
	arr[arr_numer]= duty2; //do tablicy trafiają wpisane elementy
var order = document.createElement('li'); //utworzenie elementu i przechowanie go w zmiennej
var new_order = document.createTextNode(arr[arr_numer]);

order.appendChild(field); 
order.appendChild(new_order); 

duty.appendChild(order);

document.getElementById('comments').value=""; //po wpisaniu zadania odświeża puste pole
	}
arr_numer++;
}

var dodaj = document.getElementById('button');
dodaj.addEventListener('click', List, false);

function Rmv() {
	var del = document.getElementsByTagName('li')[0];
	//while (del.hasChildNodes()) {
	//	del.removeChild(del.lastChild);
	//}
	var ojciec = del.parentNode;
	ojciec.removeChild(del);
}
var usun = document.getElementById('button2');
usun.addEventListener('click', Rmv, false); //funkcja usuwa elementy od pierwszego do ostatniego

var date = new Date(); //ustawianie daty. Z tym akurat problemów nie było
 var daysOfWeek = ['poniedzia�ek', 'wtorek', '�roda', 'czwartek', 'pi�tek', 'sobota', 'niedziela'];
 var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];var m = months[date.getMonth()];

var day = daysOfWeek[date.getDay()];
document.getElementById('data').innerHTML = date.getDate() + '.' + m + '.' + date.getFullYear() + ' ' + date.getHours() + ":" + date.getMinutes();