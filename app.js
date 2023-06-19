console.log("Bonjour monde")

var divs = document.getElementsByTagName("div");

function hide_all_divs () {
    for (let i=0 ; i<divs.length ; i++){
        divs[i].style.display = "none";
    }
}

function display_by_id (id){

    //affiche tt les premières div
    const monElement = document.getElementById(id)
    monElement.style.display = "block";
 
    //affiche tt les sous-div
    for (let i=0 ; i<monElement.children.length ; i++){
        display_by_id(monElement.children[i]);
    }
}

function hidden_by_id (id){
    document.getElementById(id).style.display = "none";
}

hide_all_divs();

display_by_id("affichage_vma");
display_by_id("menu"); //fonctione pas car sous-divs