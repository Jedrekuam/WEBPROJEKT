var date = new Date();
 var daysOfWeek = ['poniedzia�ek', 'wtorek', '�roda', 'czwartek', 'pi�tek', 'sobota', 'niedziela'];
 var months = ['01', 'lutego', 'marzec', 'kwietnia', '05', '06', '07', 'sierpnia', 'wrze�nia', 'pa�dziernika', 'listopada', 'grudnia'];var m = months[date.getMonth()];

var day = daysOfWeek[date.getDay()];
document.getElementById('data').innerHTML = date.getDate() + '.' + m + '.' + date.getFullYear() + ' ' + date.getHours() + ":" + date.getMinutes();