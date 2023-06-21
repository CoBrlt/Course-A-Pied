
var divs = document.getElementsByTagName("div");
var vitesse_text;
var distance_text;
var duree_text;
var duree_min_text;
var duree_sec_text;
var chrono_sec_text
var chrono_min_text;
var chrono_min_text;
var chrono_text;
var vma_text;
const sec = document.getElementById("time");
let timer = 0;
let isRunning = false;
let countdown = false;
let interval;
let unity_kmh = true;

function hide_all () {
    for (let i=0; i < divs.length; i++)
    {
        divs[i].style.display = "none";
    }
}

function display_by_id (id){
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
});

document.getElementById("start_pause_button").addEventListener("click", startChrono);
document.getElementById("reset_tour_button").addEventListener("click", resetChrono);


document.getElementById("duree_button").addEventListener("click", function(){
    hide_all();
    display_by_id("titre_duree");
    display_by_id("calculator");
    display_by_id("back_button");
    hidden_by_id("duree_label_input");
    display_by_id("result_duree");
    hidden_by_id("result_vitesse");
    hidden_by_id("result_distance");
    add_listener_duree();
    //display_by_id("difficulty");
});

document.getElementById("vitesse_button").addEventListener("click", function(){
    hide_all();
    display_by_id("titre_vitesse");
    display_by_id("calculator");
    display_by_id("back_button");
    hidden_by_id("allure_label_input");
    hidden_by_id("button_change_unity");
    display_by_id("result_vitesse");
    hidden_by_id("result_duree");
    hidden_by_id("result_distance");
    add_listener_vitesse();
    //display_by_id("difficulty");
});

document.getElementById("distance_button").addEventListener("click", function(){
    hide_all();
    display_by_id("titre_distance");
    display_by_id("calculator");
    display_by_id("back_button");
    hidden_by_id("distance_label_input");
    display_by_id("result_distance");
    hidden_by_id("result_duree");
    hidden_by_id("result_vitesse");    
    add_listener_distance();
    //display_by_id("difficulty");
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
    display_by_id("calculator");
    display_by_id("titre_infos");
    display_by_id("affichage_vma");
    hidden_by_id("distance_label_input");
    hidden_by_id("distance_label_input");
    hidden_by_id("button_change_unity");
    hidden_by_id("duree_label_input");
    hidden_by_id("result_duree");
    hidden_by_id("result_vitesse");
    hidden_by_id("result_distance");
    display_by_id("informations");
    display_by_id("back_button");
});

//display the menu
display_by_id("titre_menu");
display_by_id("affichage_vma");
display_by_id("menu");

function display_vma_difficulty(vma){
    if(vma != -1){
        //je sais pas
        display_by_id("difficulty");
        document.getElementById("text_difficulty").textContent = "Voici le niveau de difficulté correspondant : " + Math.round(vma) + "%";
        if(vma < 59){
            hidden_by_id("difficulty_lvl2");
            hidden_by_id("difficulty_lvl3");
            hidden_by_id("difficulty_lvl4");
            hidden_by_id("difficulty_lvl5");
        }else if(vma < 74){
            hidden_by_id("difficulty_lvl1");
            hidden_by_id("difficulty_lvl3");
            hidden_by_id("difficulty_lvl4");
            hidden_by_id("difficulty_lvl5");
        }else if(vma < 84){
            hidden_by_id("difficulty_lvl1");
            hidden_by_id("difficulty_lvl2");
            hidden_by_id("difficulty_lvl4");
            hidden_by_id("difficulty_lvl5");
        }else if(vma < 94){
            hidden_by_id("difficulty_lvl1");
            hidden_by_id("difficulty_lvl2");
            hidden_by_id("difficulty_lvl3");
            hidden_by_id("difficulty_lvl5");
        }else{
            hidden_by_id("difficulty_lvl1");
            hidden_by_id("difficulty_lvl2");
            hidden_by_id("difficulty_lvl3");
            hidden_by_id("difficulty_lvl4");
        }
    }else{
        hidden_by_id("difficulty");
    }
}


function add_listener_vitesse(){
    document.getElementById("distance_input").addEventListener("keyup", calc_vitesse);
    document.getElementById("duree_min_input").addEventListener("keyup", calc_vitesse);
    document.getElementById("duree_sec_input").addEventListener("keyup", calc_vitesse);
}

function eventClickDistance(){
    console.log("distance");
    if(unity_kmh){
        document.getElementById("unity").innerHTML = "Allure (min/km): " + '<input type="number" min="0" id="allure_input" name="allure">:' + '<input type="number" min="0" id="allure_input_sec" name="allure">';
        unity_kmh = false;
        document.getElementById("allure_input_sec").addEventListener("keyup", calc_distance);

        document.getElementById("allure_input_sec").addEventListener("keyup", function(){
            vitesse_text = 60 / (parseFloat(((document.getElementById("allure_input").value))) + parseFloat(((document.getElementById("allure_input_sec").value)/60)));
            console.log(vitesse_text);
            let vma = get_vma_purcentage();
            display_vma_difficulty(vma);
        });

        document.getElementById("allure_input").addEventListener("keyup", function(){
            vitesse_text = 60 / (parseFloat(((document.getElementById("allure_input").value))) + parseFloat(((document.getElementById("allure_input_sec").value)/60)));
            console.log(vitesse_text);
            let vma = get_vma_purcentage();
            display_vma_difficulty(vma);
        });
    }
    else{
        document.getElementById("unity").innerHTML = "Allure (km/h): " + '<input type="number" min="0" id="allure_input" name="allure">';
        unity_kmh = true;
        add_listener_allure_vma();
    }

    document.getElementById("allure_input").addEventListener("keyup", calc_distance);
}

function eventClickDuree(){
    console.log("duree");
    if(unity_kmh){
        document.getElementById("unity").innerHTML = "Allure (min/km): " + '<input type="number" min="0" id="allure_input" name="allure">:' + '<input type="number" min="0" id="allure_input_sec" name="allure">';
        unity_kmh = false;
        document.getElementById("allure_input_sec").addEventListener("keyup", calc_sneed);

        document.getElementById("allure_input_sec").addEventListener("keyup", function(){
            vitesse_text = 60 / (parseFloat(((document.getElementById("allure_input").value))) + parseFloat(((document.getElementById("allure_input_sec").value)/60)));
            console.log(vitesse_text);
            let vma = get_vma_purcentage();
            display_vma_difficulty(vma);
        });

        document.getElementById("allure_input").addEventListener("keyup", function(){
            vitesse_text = 60 / (parseFloat(((document.getElementById("allure_input").value))) + parseFloat(((document.getElementById("allure_input_sec").value)/60)));
            console.log(vitesse_text);
            let vma = get_vma_purcentage();
            display_vma_difficulty(vma);
        });
    }
    else{
        document.getElementById("unity").innerHTML = "Allure (km/h): " + '<input type="number" min="0" id="allure_input" name="allure">';
        unity_kmh = true;
        add_listener_allure_vma();
    }

    document.getElementById("allure_input").addEventListener("keyup", calc_sneed);
}

function add_listener_distance(){
    document.getElementById("duree_min_input").addEventListener("keyup", calc_distance);
    document.getElementById("duree_sec_input").addEventListener("keyup", calc_distance);
    document.getElementById("allure_input").addEventListener("keyup", calc_distance);

    document.getElementById("button_change_unity").removeEventListener("click", eventClickDuree);
    document.getElementById("button_change_unity").addEventListener("click", eventClickDistance);
}

function add_listener_duree(){
    
    document.getElementById("distance_input").addEventListener("keyup", calc_sneed);
    document.getElementById("allure_input").addEventListener("keyup", calc_sneed);

    document.getElementById("button_change_unity").removeEventListener("click", eventClickDistance);
    document.getElementById("button_change_unity").addEventListener("click", eventClickDuree);

}

function calc_duree(){
    distance_text = document.getElementById("distance_input").value;
    vitesse_text = document.getElementById("allure_input").value;
    if(distance_text != "" && vitesse_text != ""){
        duree_text = Math.round(distance_text*100/(vitesse_text/3.6))/100;
        document.getElementById("result_duree").textContent = "Durée = "+ pad( Math.floor(duree_text/60)+" : "+Math.floor(duree_text % 60) +" (min:sec)") ;
        // document.getElementById("result_duree").textContent ="Durée = "+ Math.floor(duree_text/60)+" : "+pad(Math.floor(duree_text % 60) +" (min:sec)") ;
    }
}

function calc_vitesse(){
    distance_text = document.getElementById("distance_input").value;
    duree_min_text = document.getElementById("duree_min_input").value;
    duree_sec_text= document.getElementById("duree_sec_input").value;
    duree_text = parseInt(duree_min_text)*60 + parseInt(duree_sec_text);
    if(distance_text != "" && duree_min_text != "" && duree_sec_text != ""){
        vitesse_text = Math.round(distance_text*3.6*100/duree_text)/100;
        document.getElementById("result_vitesse").textContent = "Vitesse = "+ vitesse_text + "km/h";
        let vma = get_vma_purcentage();
        display_vma_difficulty(vma);
    }
}

function calc_distance(){
    duree_min_text = document.getElementById("duree_min_input").value;
    duree_sec_text= document.getElementById("duree_sec_input").value;
    vitesse_text = document.getElementById("allure_input").value;
    if(!unity_kmh){
                vitesse_text = parseInt(document.getElementById("allure_input").value) + (document.getElementById("allure_input_sec").value) / 60;
    }
    duree_text = parseInt(duree_min_text)*60 + parseInt(duree_sec_text);
    if(vitesse_text != "" && duree_min_text != "" && duree_sec_text != ""){
        if(unity_kmh){
        distance_text = Math.round(parseInt(vitesse_text)*parseInt(duree_text)/3.6);
        }
        else{
            distance_text = Maths.round(duree_text / vitesse_text * (1000/60));
        }
        document.getElementById("result_distance").textContent = "Distance = "+distance_text+" m";
    }
}


function add_listener_allure_vma(){
    document.getElementById("allure_input").addEventListener("keyup", function(){
        vitesse_text = document.getElementById("allure_input").value;
        let vma = get_vma_purcentage();
        display_vma_difficulty(vma);
    });
}

add_listener_allure_vma();


function get_vma_purcentage(){
    let vma = document.getElementById("vma_input").value;
    if(vma != ""){
        let vma_purcentage = vitesse_text/vma*100;
        return vma_purcentage;
    }
    return -1;
}


function calc_sneed(){
    distance_text = document.getElementById("distance_input").value;
    vitesse_text = document.getElementById("allure_input").value;
    if(!unity_kmh){
        vitesse_text = parseInt(document.getElementById("allure_input").value) + (document.getElementById("allure_input_sec").value) / 60;
    }
    console.log(distance_text);
    console.log(vitesse_text);
    if(distance_text != "" && vitesse_text != ""){
        if(unity_kmh){
            duree_text = Math.round((distance_text*100/(vitesse_text/3.6)))/100;
        }
        else{
            duree_text = vitesse_text*distance_text*(6/100);
        }
        document.getElementById("result_duree").textContent = "Durée = "+  Math.floor(duree_text/60)+" : "+pad(Math.floor(duree_text % 60)) +" (min:sec)" ;
    }
    console.log(duree_text);
}

/*
Liste des bugs :
quand y a allure min:sec dans durée ça fait pas la vma
quand on switch distance et duree alors le switch allure du deuxième ne fonctionnera pas
*/
