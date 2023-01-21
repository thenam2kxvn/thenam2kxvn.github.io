// var fut = new Date("jan 12, 2023 13:29:00").getTime()
// let x = setInterval(function stime(){
//     var now = new Date().getTime()
//     var D = fut - now
//     var days = Math.floor(D/(1000*60*60*24))
//     var hours = Math.floor(D/(1000*60*60))
//     var minutes = Math.floor(D/(1000*60))
//     var seconds = Math.floor(D/(1000))
//     hours %=24
//     minutes %=60
//     seconds %=60
//     document.getElementById("days").innerText = days
//     document.getElementById("hours").innerText = hours
//     document.getElementById("minutes").innerText = minutes
//     document.getElementById("seconds").innerText = seconds

//     if(D<0){
//         clearInterval(x);
//         window.location.href="intro.html"
//     }
// }, 0.1);

var countDate = new Date('Jan 22, 2023 00:00:00').getTime();
let x = setInterval(function stime(){
    var now = new Date().getTime();
    var gap = countDate - now;

    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var d = Math.floor(gap / (day));
    var h = Math.floor((gap % (day)) / (hour));
    var m = Math.floor((gap % (hour)) / (minute));
    var s = Math.floor((gap % (minute)) / (second));

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;

    // if(gap<0){
    //     clearInterval(x);
    //     window.location.href="intro.html"
    // }
    if(d == 0 && h == 0 && m == 0 && s == 0){
        clearInterval(x);
        window.location.href="intro.html"
    }
}, 0.5);


// ------audio------------
var mySong = document.getElementById("song")

document.body.onclick= function(){
        if(mySong.paused){
            mySong.play()
        }
    }
