
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
    display_by_id("result_duree");
    hidden_by_id("result_vitesse");
    hidden_by_id("result_distance");
    display_by_id("difficulty");
});

document.getElementById("vitesse_button").addEventListener("click", function(){
    hide_all();
    display_by_id("titre_vitesse");
    display_by_id("calculator");
    display_by_id("back_button");
    hidden_by_id("allure_label_input");
    add_listener_vitesse();
    display_by_id("result_vitesse");
    hidden_by_id("result_duree");
    hidden_by_id("result_distance");
    display_by_id("difficulty");
});

document.getElementById("distance_button").addEventListener("click", function(){
    hide_all();
    display_by_id("titre_distance");
    display_by_id("calculator");
    display_by_id("back_button");
    hidden_by_id("distance_label_input");
    add_listener_distance();
    display_by_id("result_distance");
    hidden_by_id("result_duree");
    hidden_by_id("result_vitesse");    
    display_by_id("difficulty");
});

document.getElementById("infos_button").addEventListener("click", function(){
    hide_all();
    //display des infos
    display_by_id("titre_infos");
    display_by_id("affichage_vma");
    display_by_id("back_button");
    display_by_id("difficulty");
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
    display_by_id("informations");
    display_by_id("back_button");
    display_by_id("difficulty");
});

//display the menu
display_by_id("titre_menu");
display_by_id("affichage_vma");
display_by_id("menu");


function add_listener_duree(){
    document.getElementById("distance_input").addEventListener("keyup", calc_sneed);

    document.getElementById("allure_input").addEventListener("keyup", calc_sneed);

    document.getElementById("button_change_unity").addEventListener("click", function(){
        if(unity_kmh){
            document.getElementById("unity").innerHTML = "Allure (min/km): " + '<input type="number" min="0" id="allure_input" name="allure">:' + '<input type="number" min="0" id="allure_input_sec" name="allure">';
            unity_kmh = false;
            document.getElementById("allure_input_sec").addEventListener("keyup", calc_sneed);

        }
        else{
            document.getElementById("unity").innerHTML = "Allure (km/h): " + '<input type="number" min="0" id="allure_input" name="allure">';
            unity_kmh = true;
        }

        document.getElementById("allure_input").addEventListener("keyup", calc_sneed);
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
            document.getElementById("result_vitesse").textContent = "Vitesse = "+ vitesse_text + "km/h";
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
            document.getElementById("result_vitesse").textContent = "Vitesse = "+ vitesse_text + "km/h";
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
            document.getElementById("result_vitesse").textContent = "Vitesse = "+ vitesse_text + "km/h";
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
            document.getElementById("result_distance").textContent = "Distance = "+distance_text+" km";
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
            document.getElementById("result_distance").textContent = "Distance = "+distance_text+" m";
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
            document.getElementById("result_distance").textContent = "Distance = "+distance_text+" m";
        }
        console.log(vitesse_text);
    });
}

function get_vma_purcentage(){
    let vma = document.getElementById("vma_input").value;
    if(vma != ""){
        console.log("vma :", vma);
        console.log("vitesse_text :", vitesse_text);
        let vma_purcentage = vitesse_text/vma*100;
        return vma_purcentage;
    }
    //No VMA in input
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

