
var divs = document.getElementsByTagName("div");
function hide_all () {
    for (let i=0; i < divs.length; i++)
    {
        divs[i].style.display = "none";
    }
}

function display_by_id (id)
{
    const monElement = document.getElementById(id);
    monElement.style.display = "block";
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
});
document.getElementById("duree_button").addEventListener("click", function(){
    hide_all();
    display_by_id("calculator");
    hidden_by_id("duree_label_input");
});
document.getElementById("vitesse_button").addEventListener("click", function(){
    hide_all();
    display_by_id("calculator");
    hidden_by_id("distance_label_input");
});
document.getElementById("distance_button").addEventListener("click", function(){
    hide_all();
    display_by_id("calculator");
    hidden_by_id("distance_label_input");
});
//display the menu
display_by_id("affichage_vma");
display_by_id("menu");

