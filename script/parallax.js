//clouds in begining
var coludsregular = document.getElementsByClassName('part1pase1')[0];
var coludsregular2 = document.getElementsByClassName('part1pase2')[0];

var parallax = function () {
    var scroll = window.scrollY;
    var offset = scroll * 0.3;
    coludsregular.style.transform = 'translateY(' + (offset * 1.5) + 'px)';
    coludsregular2.style.transform = 'translateY(' + offset + 'px)';

  window.requestAnimationFrame(parallax);
}

parallax();


//clouds war

var coludswar = document.getElementsByClassName('cloudvertical')[0];

var parallaxwar = function () {
    var scroll = window.scrollY;
    var offset = scroll * 0.25;
    coludswar.style.transform = 'translateX(' + offset + 'px) rotate(' + offset + 'deg)';


  window.requestAnimationFrame(parallaxwar);
}

parallaxwar();

//hail
var hail1 = document.getElementsByClassName('hail1')[0];

var parallaxhail = function () {
    var scroll = window.scrollY;
    var offset = scroll * 0.25;
    hail1.style.transform = 'translate(' + offset + 'px,' + offset + 'px)';

  window.requestAnimationFrame(parallaxhail);
}

parallaxhail();


var shore1 = document.getElementsByClassName('shore1')[0];
var shore2 = document.getElementsByClassName('shore2')[0];

var parallaxshore = function () {
    var scroll = window.scrollY;
    var offset = scroll * 0.3;
    shore1.style.transform = 'translateY(' + offset  + 'px)';
    shore2.style.transform = 'translateY(' + offset + 'px)';

  window.requestAnimationFrame(parallaxshore);
}

parallaxshore();