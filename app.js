
var divs = document.getElementsByTagName("div");
const sec = document.getElementById("time");
let timer = 0;
let isRunning = false;
let interval;

function hide_all () {
    for (let i=0; i < divs.length; i++)
    {
        divs[i].style.display = "none";
    }
}

function display_by_id (id)
{
    console.log(id);
    const monElement = document.getElementById(id);
    monElement.style.display = "block";
    //console.log(monElement);
    if (monElement.children.length != 1){
        for (let i = 0; i < monElement.children.length; i++) {
            display_by_id(monElement.children[i].id);
        }
    }
}

function hidden_by_id (id)
{
    document.getElementById(id).style.display = "none";
}

function pad(number){
    return (number <10) ? "0"+number : number;
}

function incrementTimer() {
    timer++;

    const numberMin = Math.floor(timer / 6000);
    const numberSec = parseInt((timer % 6000)/100);
    const numbercent = timer % 100;
    sec.innerHTML = pad(numberMin)+ ":" + pad(numberSec)+","+ pad(numbercent);
    
  }

function resetChrono()
{
    if(isRunning) {
        isRunning = false;
        clearInterval(interval);
    }
    timer = 0;
    sec.innerHTML = "00:00";

}

function startChrono()
{
    if(isRunning) {
        isRunning = false;
        clearInterval(interval);
    }
    else{
        isRunning = true;
        interval = setInterval(incrementTimer, 10)
    }
}

hide_all();

document.getElementById("chrono_button").addEventListener("click", function(){
    hide_all();
    display_by_id("chrono");
    display_by_id("back_button");
});

document.getElementById("duree_button").addEventListener("click", function(){
    hide_all();
    display_by_id("calculator");
    display_by_id("back_button");
    hidden_by_id("duree_label_input");
});

document.getElementById("vitesse_button").addEventListener("click", function(){
    hide_all();
    display_by_id("calculator");
    display_by_id("back_button");
    hidden_by_id("distance_label_input");
});

document.getElementById("distance_button").addEventListener("click", function(){
    hide_all();
    display_by_id("calculator");
    display_by_id("back_button");
    hidden_by_id("distance_label_input");
});

document.getElementById("back_button").addEventListener("click", function(){
    hide_all();
    //display the menu
    display_by_id("affichage_vma");
    display_by_id("menu");
});

//chrono
document.getElementById("start_pause_button").addEventListener("click", startChrono);

document.getElementById("reset_tour_button").addEventListener("click", resetChrono);

//display the menu
display_by_id("affichage_vma");
display_by_id("menu");
/*
Liste des choses à faire :

- récupérer les données dans les différents champs
- faire les calculs
- faire un chronomètre
- fonction start stop et pause
- fonction tour
- le css à la fin (on aura un problème avec les blocks)
- option héberger le site
*/