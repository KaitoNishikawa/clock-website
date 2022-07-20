function updateClock(){
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "午前";

        if(hou == 12){
            pe = "午後";
        }

        if(hou > 12){
            hou = hou - 12;
            pe = "午後";
        }        

        if(hou == 0){
            hou = 12;
        }        

        yr = yr + "年"
        dnum = dnum + "日"
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
        var months = ["１月", "２月", "３月", "４月", "５月", "６月", "７月", "８月", "９月", "１０月", "１１月", "１２月"];
        var week = ["日曜日", "月掉尾", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"];
        var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
        var values = [week[dname], months[mo], dnum, yr, pad(hou), pad(min), pad(sec), pe];

        for(var i = 0; i < ids.length; i++){
            document.getElementById(ids[i]).innerHTML = values[i];
        }
}

function initClock(){
    //updateClock();
    setInterval("updateClock()", 100);
    var now = new Date();
    console.log(now.getHours());
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
    mode[y]++;
    tempcounter++;


    second = sec % 60;
    hour = Math.floor(sec / 3600);
    minute = Math.floor((sec - (hour * 3600)) / 60);   
    
    document.getElementById("seconds2").innerHTML = pad(second);
    document.getElementById("minutes2").innerHTML = pad(minute);
    document.getElementById("hour2").innerHTML = pad(hour);
}

function initTimer(){
    if(interval){
        return;
    }

    //check if mode is selected
    if(y == -1){
        console.log("input mode")
        return;
    }

    tempcounter = 0;

    //disable radio button
    document.getElementById("exer").disabled = true;
    document.getElementById("free").disabled = true;
    document.getElementById("stdy").disabled = true;
    document.getElementById("work").disabled = true;
    document.getElementById("neces").disabled = true;

    interval = setInterval("updateTimer()", 1000);
}

function stop(){
    
    if(interval == null){
        return;
    }

    clearInterval(interval);
    interval = null;
    console.log(tempcounter + " logged for " + modes[y]);

    //enable radio button
    document.getElementById("exer").disabled = false;
    document.getElementById("free").disabled = false;
    document.getElementById("stdy").disabled = false;
    document.getElementById("work").disabled = false;
    document.getElementById("neces").disabled = false;
}

function reset(){
    stop();
    sec = -1;
    updateTimer();
}

var tempcounter;
var y = -1;
var exer = 0;
var free = 0;
var stdy = 0;
var work = 0;
var neces = 0;
var mode = [exer, free, stdy, work, neces];
var modes = ["exer", "free", "stdy", "work", "neces"];

function updateMode(x){
    y = x;
}
