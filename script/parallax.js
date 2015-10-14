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
var hail = document.getElementsByClassName('hej')[0];
var hail2 = document.getElementsByClassName('hej2')[0];
var hail3 = document.getElementsByClassName('hej3')[0];
var hail4 = document.getElementsByClassName('hej4')[0];
var hail5 = document.getElementsByClassName('hej5')[0];
var hail6 = document.getElementsByClassName('hej6')[0];
var hail7 = document.getElementsByClassName('hej7')[0];
var hail8 = document.getElementsByClassName('hej8')[0];


var parallax2 = function () {
    var scroll = window.scrollY;
    var offset = scroll * 0.25;
    hail.style.transform = 'translate(' + offset + 'px,' + offset + 'px)';
    hail2.style.transform = 'translate(' + offset  + 'px,' + offset + 'px)';
    hail3.style.transform = 'translate(' + offset  + 'px,' + offset + 'px)';
    hail4.style.transform = 'translate(' + offset  + 'px,' + offset + 'px)';
    hail5.style.transform = 'translate(' + offset  + 'px,' + offset + 'px)';
    hail6.style.transform = 'translate(' + offset  + 'px,' + offset + 'px)';
    hail7.style.transform = 'translate(' + offset  + 'px,' + offset + 'px)';
    hail8.style.transform = 'translate(' + offset  + 'px,' + offset + 'px)';
    
  window.requestAnimationFrame(parallax2);
}

parallax2();
