"use strict";
let delay = 250;
let i = 0;
let ondisplaytext;
let timer = null;
let seleElem;

window.onload = function () {
   let startElem = document.getElementById('starter');
   let animElem = document.getElementById("anim");
   let displayElem = document.getElementById('display');
   let stopElem = document.getElementById('stoper');
   let sizeElem = document.getElementById("sizes");
   let speedElem = document.getElementById('speedo');

    function displayAnimation() {
        seleElem = animElem.options[animElem.selectedIndex].text;
        displayElem.value = ANIMATIONS[seleElem];
    }

    function playAnimation() {
        MenuControl('start');
        ondisplaytext = displayElem.value;
        if (timer === null) {
            timer = setInterval(runFrames, delay);
        }
    }


    function runFrames() {
        let frames = ondisplaytext.split("=====\n");
        displayElem.value = frames[i];
        i++;

        if (i === frames.length) {
            i = 0;

        }
    }
    function stopAnimation() {
        MenuControl('stop');
        if (timer != null) {
            clearInterval(timer);
        }
        displayElem.value = "";
        timer = null;
        i = 0;
    }
    function MenuControl(current) {
        if (current === 'start') {
            startElem.disabled = true;
            stopElem.disabled = false;
            animElem.disabled = true;
        }
        else if (current === 'stop') {
            startElem.disabled = false;
            stopElem.disabled = true;
            animElem.disabled = false;

        }

    }
    function sizeControl() {

        let chosen = sizeElem.options[sizeElem.selectedIndex].text;


        if (chosen === "Tiny") {
            displayElem.style.fontSize = "7pt";
        }
        else if (chosen === "Small") {
            displayElem.style.fontSize = "10pt";
        }
        else if (chosen === "Medium") {
            displayElem.style.fontSize = "12pt";
        }
        else if (chosen === "Large") {
            displayElem.style.fontSize = "16pt";
        }
        else if (chosen === "Extra Large") {
            displayElem.style.fontSize = "24pt";
        }
        else if (chosen === "XXL") {
            displayElem.style.fontSize = "32pt";
        }
    }
    function speedControl() {

        if (speedElem.checked==true) {
            delay = 50;
            clearInterval(timer);
           timer=setInterval(runFrames, delay);
           }
        else if(speedElem.checked==false) {
            delay = 250;
            clearInterval(timer);
            timer=setInterval(runFrames, delay);
        }
            
        
    }
    sizeElem.onchange = sizeControl;
    stopElem.onclick = stopAnimation;
    animElem.onchange = displayAnimation;

    startElem.onclick = playAnimation;
    speedElem.onchange = speedControl;

}

