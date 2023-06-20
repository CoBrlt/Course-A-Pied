
var divs = document.getElementsByTagName("div");
var vitesse_text;
var distance_text;
var duree_text;
var duree_min_text;
var duree_sec_text;
var chrono_sec_text
var chrono_min_text;
var chrono_min_text;
var allure_text;
var chrono_text;
const sec = document.getElementById("time");
let timer = 0;
let isRunning = false;
let countdown = false;
let interval;

function hide_all () {
    for (let i=0; i < divs.length; i++)
    {
        divs[i].style.display = "none";
    }
}

function display_by_id (id){
    console.log(id);
    const monElement = document.getElementById(id);
    monElement.style.display = "block";
    if (monElement.children.length != 1){
        for (let i = 0; i < monElement.children.length; i++) {
            display_by_id(monElement.children[i].id);
        }
    }
}

function hidden_by_id (id){
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

function decrementTimer() {
    if(timer > 0){

    timer--;

    const numberMin = Math.floor(timer / 6000);
    const numberSec = parseInt((timer % 6000)/100);
    const numbercent = timer % 100;
    sec.innerHTML = pad(numberMin)+ ":" + pad(numberSec)+","+ pad(numbercent);
    }
    else{
        resetChrono();
        countdown = false;
    }
}

function startCountdown(){

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
    chrono_min_text = document.getElementById("chrono_min_input").value
    chrono_sec_text = document.getElementById("chrono_sec_input").value

    if((chrono_min_text != "" && chrono_sec_text != "")){
        sec.innerHTML = chrono_min_text+ ":" + chrono_sec_text;
        countdown = true;

    }

    if (!countdown){
        if(isRunning) {
            isRunning = false;
            clearInterval(interval);
        }
        else{
            isRunning = true;
            interval = setInterval(incrementTimer, 10);
        }
    }
    //countdown
    else{
            timer = (parseInt(chrono_min_text)*60 + parseInt(chrono_sec_text))*100;
        if(isRunning) {
            isRunning = false;
            clearInterval(interval);
        }
        else{
            isRunning = true;
            interval = setInterval(decrementTimer, 10);
        }
    }
}

hide_all();

document.getElementById("chrono_button").addEventListener("click", function(){
    hide_all();
    display_by_id("titre_chrono");
    sec.innerHTML = "00:00";
    display_by_id("chrono");
    display_by_id("back_button");
    //add_listener_chrono();
});
//chrono
document.getElementById("start_pause_button").addEventListener("click", startChrono);
document.getElementById("reset_tour_button").addEventListener("click", resetChrono);


document.getElementById("duree_button").addEventListener("click", function(){
    hide_all();
    display_by_id("titre_duree");
    display_by_id("calculator");
    display_by_id("back_button");
    hidden_by_id("duree_label_input");
    add_listener_duree();
});

document.getElementById("vitesse_button").addEventListener("click", function(){
    hide_all();
    display_by_id("titre_vitesse");
    display_by_id("calculator");
    display_by_id("back_button");
    hidden_by_id("allure_label_input");
    add_listener_vitesse();
});

document.getElementById("distance_button").addEventListener("click", function(){
    hide_all();
    display_by_id("titre_distance");
    display_by_id("calculator");
    display_by_id("back_button");
    hidden_by_id("distance_label_input");
    add_listener_distance();
});

document.getElementById("infos_button").addEventListener("click", function(){
    hide_all();
    //display des infos
    display_by_id("titre_infos");
    display_by_id("affichage_vma");
    display_by_id("back_button");
});

document.getElementById("back_button").addEventListener("click", function(){
    hide_all();
    //display the menu
    display_by_id("titre_menu");
    display_by_id("affichage_vma");
    display_by_id("menu");
});

document.getElementById("infos_button").addEventListener("click", function(){
    hide_all();
    //display the menu
    display_by_id("titre_infos");
    display_by_id("affichage_vma");
    display_by_id("back_button");
});

//display the menu
display_by_id("titre_menu");
display_by_id("affichage_vma");
display_by_id("menu");


function add_listener_duree(){
    document.getElementById("distance_input").addEventListener("change", function(){
        distance_text = document.getElementById("distance_input").value;
        vitesse_text = document.getElementById("allure_input").value;
        console.log(distance_text);
        console.log(vitesse_text);
        if(distance_text != "" && vitesse_text != ""){
            duree_text = Math.round(distance_text*100/(vitesse_text/3.6))/100;
            document.getElementById("result").textContent = Math.floor(duree_text/60)+":"+ Math.floor(duree_text % 60);
        }
        console.log(duree_text);
    });

    document.getElementById("allure_input").addEventListener("change", function(){
        distance_text = document.getElementById("distance_input").value;
        vitesse_text = document.getElementById("allure_input").value;
        console.log(distance_text);
        console.log(vitesse_text);
        if(distance_text != "" && vitesse_text != ""){
            duree_text = Math.round(distance_text*100/(vitesse_text/3.6))/100;
            document.getElementById("result").textContent = Math.floor(duree_text/60)+":" + Math.floor(duree_text % 60);
        }
        console.log(duree_text);
    });

}


function add_listener_vitesse(){
    document.getElementById("distance_input").addEventListener("change", function(){
        distance_text = document.getElementById("distance_input").value;
        duree_min_text = document.getElementById("duree_min_input").value;
        duree_sec_text= document.getElementById("duree_sec_input").value;
        duree_text = parseInt(duree_min_text)*60 + parseInt(duree_sec_text);
        console.log(distance_text); 
        console.log(duree_text);
        if(distance_text != "" && duree_min_text != "" && duree_sec_text != ""){
            vitesse_text = Math.round(distance_text*3.6*100/duree_text)/100;
            document.getElementById("result").textContent = vitesse_text;
        }
        console.log(vitesse_text);
    });

    document.getElementById("duree_min_input").addEventListener("change", function(){
        distance_text = document.getElementById("distance_input").value;
        duree_min_text = document.getElementById("duree_min_input").value;
        duree_sec_text= document.getElementById("duree_sec_input").value;
        duree_text = parseInt(duree_min_text)*60 + parseInt(duree_sec_text);
        console.log(distance_text); 
        console.log(duree_text);
        if(distance_text != "" && duree_min_text != "" && duree_sec_text != ""){
            vitesse_text = Math.round(distance_text*3.6*100/duree_text)/100;
            document.getElementById("result").textContent = vitesse_text;
        }
        console.log(vitesse_text);
    });

    document.getElementById("duree_sec_input").addEventListener("change", function(){
        distance_text = document.getElementById("distance_input").value;
        duree_min_text = document.getElementById("duree_min_input").value;
        duree_sec_text= document.getElementById("duree_sec_input").value;
        duree_text = parseInt(duree_min_text)*60 + parseInt(duree_sec_text);
        console.log(distance_text); 
        console.log(duree_text);
        if(distance_text != "" && duree_min_text != "" && duree_sec_text != ""){
            vitesse_text = Math.round(distance_text*3.6*100/duree_text)/100;
            document.getElementById("result").textContent = vitesse_text;
        }
        console.log(vitesse_text);
    });
}


function add_listener_distance(){
    document.getElementById("allure_input").addEventListener("change", function(){
        vitesse_text = document.getElementById("allure_input").value;
        duree_min_text = document.getElementById("duree_min_input").value;
        duree_sec_text= document.getElementById("duree_sec_input").value;
        duree_text = parseInt(duree_min_text)*60 + parseInt(duree_sec_text);
        console.log(vitesse_text); 
        console.log(duree_text);
        if(vitesse_text != "" && duree_min_text != "" && duree_sec_text != ""){
            distance_text = Math.round(parseInt(vitesse_text)*parseInt(duree_text)/3.6);
            document.getElementById("result").textContent = distance_text;
        }
        console.log(vitesse_text);
    });

    document.getElementById("duree_min_input").addEventListener("change", function(){
        vitesse_text = document.getElementById("allure_input").value;
        duree_min_text = document.getElementById("duree_min_input").value;
        duree_sec_text= document.getElementById("duree_sec_input").value;
        duree_text = parseInt(duree_min_text)*60 + parseInt(duree_sec_text);
        console.log(vitesse_text); 
        console.log(duree_text);
        if(vitesse_text != "" && duree_min_text != "" && duree_sec_text != ""){
            distance_text = Math.round(parseInt(vitesse_text)*parseInt(duree_text)/3.6);
            document.getElementById("result").textContent = distance_text;
        }
        console.log(vitesse_text);
    });

    document.getElementById("duree_sec_input").addEventListener("change", function(){
        vitesse_text = document.getElementById("allure_input").value;
        duree_min_text = document.getElementById("duree_min_input").value;
        duree_sec_text= document.getElementById("duree_sec_input").value;
        duree_text = parseInt(duree_min_text)*60 + parseInt(duree_sec_text);
        console.log(vitesse_text); 
        console.log(duree_text);
        if(vitesse_text != "" && duree_min_text != "" && duree_sec_text != ""){
            distance_text = Math.round(parseInt(vitesse_text)*parseInt(duree_text)/3.6);
            document.getElementById("result").textContent = distance_text;
        }
        console.log(vitesse_text);
    });
}

// function add_listener_chrono(){
//     document.getElementById("chrono_min_input").addEventListener("change", function(){
//         chrono_min_text = document.getElementById("chrono_min_input").value;
//         chrono_sec_text = document.getElementById("chrono_sec_input").value;
//         console.log(chrono_min_text);
//         console.log(chrono_sec_text);
//         if(chrono_min_text != "" && chrono_sec_text != ""){
//             resetChrono();
//             timer = (parseInt(chrono_min_text)*60 + parseInt(chrono_sec_text))*100;
//             sec.innerHTML = chrono_min_text+ ":" + chrono_sec_text;
//         }
//     });

//     document.getElementById("chrono_sec_input").addEventListener("change", function(){
//         chrono_min_text = document.getElementById("chrono_min_input").value;
//         chrono_sec_text = document.getElementById("chrono_sec_input").value;
//         console.log(chrono_min_text);
//         console.log(chrono_sec_text);
//         if(chrono_min_text != "" && chrono_sec_text != ""){
//             resetChrono();
//             timer = (parseInt(chrono_min_text)*60 + parseInt(chrono_sec_text))*100;
//         }
//         else{

//         }
//     });
// }
/*
Liste des choses à faire :

- récupérer les données dans les différents champs
- faire les calculs (ali)
- faire un chronomètre (sneed)
- fonction start stop et pause
- fonction tour
- le css à la fin (on aura un problème avec les blocks) (debo et elo)
- option héberger le site
*/