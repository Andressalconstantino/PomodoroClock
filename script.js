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
    document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/1223148.jpg')";
});
img2.addEventListener('click', function (){
    document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/1223169.jpg')";
});
img3.addEventListener('click', function (){
    document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/1223616.jpg')";
});
img4.addEventListener('click', function (){
    document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/6863016.png')";
});
img5.addEventListener('click', function (){
    document.body.style.backgroundImage = "url('https://cdn.wallpapersafari.com/5/79/9kWJjU.jpg')";
});
img6.addEventListener('click', function (){
    document.body.style.backgroundImage = "url('https://cutewallpaper.org/21/cozy-wallpaper-hd/A-Cozy-Night-To-Lament-On-Things-HD-Wallpaper-Background-.jpg')";
});