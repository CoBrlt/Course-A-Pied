
var divs = document.getElementsByTagName("div");
var vitesse_text;
var distance_text;
var duree_text;
var duree_min_text;
var duree_sec_text;
var allure_text;
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
    add_listener_duree();
});

document.getElementById("vitesse_button").addEventListener("click", function(){
    hide_all();
    display_by_id("calculator");
    display_by_id("back_button");
    hidden_by_id("allure_label_input");
    add_listener_vitesse();
});

document.getElementById("distance_button").addEventListener("click", function(){
    hide_all();
    display_by_id("calculator");
    display_by_id("back_button");
    hidden_by_id("distance_label_input");
    add_listener_distance();
});

document.getElementById("back_button").addEventListener("click", function(){
    hide_all();
    //display the menu
    display_by_id("affichage_vma");
    display_by_id("menu");
});
//display the menu
display_by_id("affichage_vma");
display_by_id("menu");

function add_listener_duree(){
    document.getElementById("distance_input").addEventListener("change", function(){
        distance_text = document.getElementById("distance_input").value;
        vitesse_text = document.getElementById("allure_input").value;
        console.log(distance_text);
        console.log(vitesse_text);
        if(distance_text != "" && vitesse_text != ""){
            duree_text = Math.round(distance_text*100/vitesse_text)/100;
            document.getElementById("result").textContent = duree_text;
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
            distance_text = parseInt(vitesse_text)*parseInt(duree_text);
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
            distance_text = parseInt(vitesse_text)*parseInt(duree_text)/3.6;
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
            distance_text = parseInt(vitesse_text)*parseInt(duree_text)/3.6;
            document.getElementById("result").textContent = distance_text;
            
        }
        console.log(vitesse_text);
    });
}
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