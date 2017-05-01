var date = new Date();
 var daysOfWeek = ['poniedzia�ek', 'wtorek', '�roda', 'czwartek', 'pi�tek', 'sobota', 'niedziela'];
var months = ['stycznia', 'lutego', 'marzec', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'wrze�nia', 'pa�dziernika', 'listopada', 'grudnia'];
var m = months[date.getMonth()];

var day = daysOfWeek[date.getDay()];
document.getElementById('data').innerHTML = date.getDay() + '.' + date.getMonth() + '.' + date.getFullYear() + ' ' + date.getHours() + ":" + date.getMinutes();