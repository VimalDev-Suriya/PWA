var header=document.getElementsByClassName("header");

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/serviceWorker.js');
    console.log("sw registerd");
}