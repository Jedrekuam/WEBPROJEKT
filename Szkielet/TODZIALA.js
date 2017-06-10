
var tab = [];
var przycisk = document.getElementById('button');
przycisk.addEventListener('click', Dodaj, false);
var arr_numer = 0;
var duty = document.getElementById('lista');

function List(quest){
				
		var order = document.createElement('p');
		quest.num = arr_numer; // zadek do zmiany (?)
	
		var field = document.createElement('input');
		field.setAttribute('type', 'checkbox');
		field.setAttribute('id', 'fld' + arr_numer);
	
		var field2 = document.createElement('input');
		field2.setAttribute('class', 'deleting');
		field2.setAttribute('type', 'button'); 		
		field2.setAttribute('value', 'Usuń');	
		field2.setAttribute('id', 'fld2'+ arr_numer);
	
		
		order.setAttribute('id', 'z' + arr_numer);
		order.appendChild(quest.comments);
		order.appendChild(field); 
		order.appendChild(field2); 
		duty.appendChild(order);
		document.getElementById('fld2' + arr_numer).addEventListener('click', function() {usuwanie(quest.num)}, false);
		//arr[arr_numer]= duty2; //do tablicy trafiają wpisane elementy

//var new_order = document.createTextNode(arr[arr_numer]);

//order.appendChild(new_order); 

document.getElementById('comments').value=""; //po wpisaniu zadania odświeża puste pole
	
arr_numer++;
};

function Dodaj() {
	tab[tab.length] = new Object();
	var duty2 = document.getElementById("comments").value;
	if(duty2 == 0)
		alert("To nie czas na nieróbstwo. Działaj!"); //alert, o którym pisałeś w instrukcji (przypadek braku treści)
	else 
	{
		tab[tab.length-1].comments = document.createTextNode(duty2);
		List(tab[tab.length-1]);
	}
}

document.addEventListener('keydown', function(event){
	if(event.keyCode == 13) {
		Dodaj();
	}
});

function usuwanie(zad){
	tab.splice(zad, 1);
	rfrsh();
}
function rfrsh() {
	var freshlist = document.getElementById('lista');
	while (freshlist.hasChildNodes()) {
		freshlist.removeChild(freshlist.lastChild);
	}
	arr_numer = 0;
	for (var i=0; i<tab.length; i++) {
		List(tab[i]);
	}
};

var date = new Date(); //ustawianie daty. Z tym akurat problemów nie było
 var daysOfWeek = ['poniedzia�ek', 'wtorek', '�roda', 'czwartek', 'pi�tek', 'sobota', 'niedziela'];
 var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];var m = months[date.getMonth()];

var day = daysOfWeek[date.getDay()];
document.getElementById('data').innerHTML = date.getDate() + '.' + m + '.' + date.getFullYear() + ' ' + date.getHours() + ":" + date.getMinutes();