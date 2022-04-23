

window.onload = function() {
    var minut = 00;
    var seconds = 00;

    var appaneMinut = document.getElementById("minut");
    var appensecondss = document.getElementById("seconds");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var clock;

    buttonStart.onclick = function(){
        clearInterval(clock);
        clock = setInterval(startTimer, 100);
    }
    buttonStop.onclick = function(){
        clearInterval(clock)
    }
    buttonReset.onclick = function(){
        clearInterval(clock)
        minut = '00';
        seconds = '00';
        appaneMinut.innerHTML = minut;
        appensecondss.innerHTML = seconds;
    }

    function startTimer(){
        seconds++;
        if(seconds <= 9){
            appensecondss.innerHTML = "0" + seconds;
        }
        if(seconds > 9){
            appensecondss.innerHTML = seconds;
        }
        if(seconds > 59){
            minut++;
            appaneMinut.innerHTML = '0' + minut;
            seconds = 0;
            appensecondss.innerHTML = '0' + 0;
        }
        if(minut > 9){
            appaneMinut.innerHTML = minut;
        }
    }
}