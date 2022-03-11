/* CHANGE TABS */

const clock = document.getElementsByClassName('clockbox');
const wpp = document.getElementsByClassName('wallpaper');
const sound = document.getElementsByClassName('sound');

displayPage(clock);

function displayPage(page){
    page[0].style.display = 'flex';
}

const btnclock1 = document.getElementById('goclock1');
const btnclock2 = document.getElementById('goclock2');
const btnwpp1 = document.getElementById('gowpp1');
const btnwpp2 = document.getElementById('gowpp2');
const btnsound1 = document.getElementById('gosd1');
const btnsound2 = document.getElementById('gosd2');

btnclock1.addEventListener('click', function(){
    displayPage(clock)
    wpp[0].style.display = 'none';
    sound[0].style.display = 'none';
});
btnclock2.addEventListener('click', function(){
    displayPage(clock)
    wpp[0].style.display = 'none';
    sound[0].style.display = 'none';
});

btnwpp1.addEventListener('click', function(){
    displayPage(wpp)
    clock[0].style.display = 'none';
    sound[0].style.display = 'none';
});
btnwpp2.addEventListener('click', function(){
    displayPage(wpp)
    clock[0].style.display = 'none';
    sound[0].style.display = 'none';
});

btnsound1.addEventListener('click', function(){
    displayPage(sound)
    clock[0].style.display = 'none';
    wpp[0].style.display = 'none';
});
btnsound2.addEventListener('click', function(){
    displayPage(sound)
    clock[0].style.display = 'none';
    wpp[0].style.display = 'none';
});


/* ----------------------- */

/* CHANGE BACKGROUND WALLPAPER */
const img1 = document.getElementById('oneI');
const img2 = document.getElementById('twoI');
const img3 = document.getElementById('threeI');
const img4 = document.getElementById('fourI');
const img5 = document.getElementById('fiveI');
const img6 = document.getElementById('sixI');

img1.addEventListener('click', function (){
    document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/e3/13/a0/e313a08e5b0455b1d2b5f345b2cdb97f.jpg')";
});
img2.addEventListener('click', function (){
    document.body.style.backgroundImage = "url('https://cutewallpaper.org/21/cozy-wallpapers/Cozy-Desktop-Wallpaper-Pinterest-Phone-Wallpapers.jpg')";
});

img3.addEventListener('click', function (){
    document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/3335268.jpg')";
});
img4.addEventListener('click', function (){
    document.body.style.backgroundImage = "url('https://wallpaperbat.com/img/536661-elysa-roberts-on-photography-art-desktop-wallpaper-macbook-computer-wallpaper-desktop-wallpaper-laptop-wallpaper-desktop-wallpaper.jpg')";
});
img5.addEventListener('click', function (){
    document.body.style.backgroundImage = "url('https://cdn.wallpapersafari.com/5/79/9kWJjU.jpg')";
});
img6.addEventListener('click', function (){
    document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/791.jpg')";
});

/* ---------------- */

/* COUNTDOWN TIMERS */
let end = false;
function startTimer(duration, display, state) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        if(!state) {
            document.getElementById('alarm').src = "";
            document.getElementById('sb').addEventListener('click', function (){
                timer = (60 * 5), minutes, seconds;
            })
            document.getElementById('lb').addEventListener('click', function (){
                timer = (60 * 15), minutes, seconds;
            })

            document.getElementById('pause').addEventListener('click', function (){
                state = true;
                document.getElementById('image').src = "reload.png";
                document.getElementById('continue').style.display = 'block'
                document.getElementById('play').style.display = 'block'
                document.getElementById('pause').style.display = 'none'
                document.getElementById('play').style.margin = "13.5rem 0 0 4.5rem"
            })
            document.getElementById('continue').addEventListener('click', function (){
                state = false;
                document.getElementById('play').style.display = 'none'
                document.getElementById('continue').style.display = 'none'
                document.getElementById('pause').style.display = 'block'
            })
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                state = true;
                document.getElementById('image').src = "reload.png";
                document.getElementById('play').style.display = 'block'
                document.getElementById('pause').style.display = 'none'
                document.getElementById('alarm').src = "sound/alarm.wav";
            }
        }
    }, 1000);
}

let state = false;
document.getElementById('play').addEventListener('click', function (){
    state = false;
    let countMinutes = 60 * 25,
        display = document.querySelector('#time');
    startTimer(countMinutes, display, state);
    document.getElementById('continue').style.display = 'none'
    document.getElementById('play').style.display = 'none'
    document.getElementById('pause').style.display = 'block'
})


/* ------------------------- */

/* SOUND */

document.getElementById('rain').addEventListener('click', function (){
    document.getElementById('audio').src = "sound/rain.mp3";
})
document.getElementById('crowd').addEventListener('click', function (){
    document.getElementById('audio').src = "sound/crowd.mp3";
})
document.getElementById('ocean').addEventListener('click', function (){
    document.getElementById('audio').src = "sound/ocean.mp3";
})
document.getElementById('streets').addEventListener('click', function (){
    document.getElementById('audio').src = "sound/streets.mp3";
})
document.getElementById('creepy').addEventListener('click', function (){
    document.getElementById('audio').src = "sound/creepy.mp3";
})
document.getElementById('none').addEventListener('click', function (){
    document.getElementById('audio').src = "";
})
