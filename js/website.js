function updateClock(){
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";

        if(hou > 12){
            hou = hou - 12;
            pe = "PM";
        }

        if(hou == 00){
            hou = 12
        }

        if(hou == 12){
            pe = "PM";
        }
/*
        function pad(digit){
            //number = new Number(digit);
            x = digit.toString();
            
            if(x.length < 2){
                x = '0' + x;
            }

            return x;
        }
*/

        

        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
        var values = [week[dname], months[mo], dnum, yr, pad(hou), pad(min), pad(sec), pe];

        for(var i = 0; i < ids.length; i++){
            document.getElementById(ids[i]).innerHTML = values[i];
        }
    }

function initClock(){
    //updateClock();
    setInterval("updateClock()", 1);
}

function pad(digit){
    if(digit < 10)
    {
        digit = '0' + digit;
    }

    return digit;
}

var sec = 0;
let interval = null;

function updateTimer(){
    sec++;

    second = sec % 60;
    hour = Math.floor(sec / 3600);
    minute = Math.floor((sec - (hour * 3600)) / 60);   
    
    document.getElementById("seconds2").innerHTML = pad(second);
    document.getElementById("minutes2").innerHTML = pad(minute);
    document.getElementById("hour2").innerHTML = pad(hour);
}

function initTimer(x){
    if(interval){
        return;
    }

    interval = setInterval("updateTimer()", 1000);
}

function stop(){
    clearInterval(interval);
    interval = null;
}

function reset(){
    stop();
    sec = -1;
    updateTimer();    
}