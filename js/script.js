$(document).ready(function () {

        
        //Local Storage to set time picker
        if (window.localStorage.getItem('timePicker') == null){
            window.localStorage.setItem('timePicker', '13:00')
            $('#to').attr('value', '13:00')
            $('#to')[0].value = '13:00'
        }else{
            t = window.localStorage.getItem('timePicker')
            $('#to').attr('value', t)
            $('#to')[0].value = t
        }


        //on change save value
        $('#to').on('change', function (t) {
            var t = $('#to')[0].value;
            // $('#to').attr('value', t)
            window.localStorage.setItem('timePicker', t);
            console.log(t)
        })


});

var nt;
var nm;
var ss;
var rs;
var hs;
var ms;
var tl;
var ml;
var ct;
var cm;
var cs;
var wk;
var dy;

function n(n) {
    return n > 10 ? "" + n : "0" + n;
}

function d(d) {
    return parseInt(d);
}

function m(m) {
    return ("0" + m).slice(-2);
}

function timet() {
    var rh = document.getElementById("rh1");
    var rm = document.getElementById("rm1");

    var output1 = document.getElementById("slider1");
    var output2 = document.getElementById("slider2");
    output1.innerHTML = rh.valueAsNumber;
    output2.innerHTML = rm.valueAsNumber;

    var rh1 = rh.valueAsNumber;
    var rh2 = rm.valueAsNumber;

    rh.oninput = function () {
        output1.innerHTML = this.value;
        console.log(rh.value);
    };
    rm.oninput = function () {
        output2.innerHTML = this.value;
        console.log(rm.value);
    };



   //read time picker value from local storage
    t = window.localStorage.getItem('timePicker')

    // var t = document.getElementById("to").value;

    nt = parseInt(t.substr(0, 2));
    nm = parseInt(t.substr(3, 5));
    //    console.log("Time in - " + nt + ":" + n(nm));
    nt = nt + rh1; //8
    nm = nm + rh2; //45
    //console.log(d(rh1)+"rh");

    if (nm > 59) {
        nt = nt + 1;
        nm = 60 - nm;
        nm = m(Math.abs(nm));
    } else {
        nm = m(nm);
    }

    if (nt === 24) {
        nt = m(0).substr(0, 1);

    } else if (nt > 24) {
        nt = Math.abs(nt - 24);
    }

    nt = m(nt);
    rs = nt + ":" + m(nm);

    document.getElementById("hs").innerHTML = rs;
    //    console.log("Time out - " + rs);

}

function timeLeft() {
    var dT = new Date();
    ct = parseInt(nt - dT.getHours());
    cm = parseInt(nm - dT.getMinutes());
    ss = new Date().getSeconds();
    ss = 59 - ss;
    //console.log(n(ct) + ":" + n(Math.abs(cm)) + ":" + n(ss));
    document.getElementById("hs1").innerHTML = m(dT.getHours()) + ":" + m(dT.getMinutes());
}

// time left

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor(ss);
    var minutes = Math.floor(cm);
    var hours = Math.floor(ct);
    // var days = Math.floor(t / (1000 * 60 * 60 * 24));
    if (minutes < 0) {
        hours = hours - 1;
        minutes = parseInt(59 + minutes);
        // console.log("aca" + minutes)
    } else {
        minutes = minutes;
    }

    return {
        'total': t,
        // 'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    // var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);
        // daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        timet();
        timeLeft();
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }
    updateClock();
    var timeinterval = setInterval(updateClock,
        1000);
}
var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
// initializeClock('clockdiv', deadline);


