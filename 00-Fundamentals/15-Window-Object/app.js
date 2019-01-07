// WINDOW METHODS / OBJECTS / PROPERTIES
window.console.clear();
/** 
window.console.log(window);

// alert
window.alert('Hello World!!');

//prompt
const  input = prompt();
alert(input);

// confirm
if(confirm('Are you sure')){
    console.log('YES')
}else{
    console.log('No');
}

*/

let val;
// Outter height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

//Scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.search;
val = window.location.href;

// Redirect
//val = window.location.href = 'http://www.reveweb.com.br';
//Reload
//val = window.location.reload();

// History Object
//val = window.history.go();

val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;



console.log(val);