console.log("Bonjour monde")

function display_by_id (id)
{
    document.getElementById(id).style.display = "block";
}

function hidden_by_id (id)
{
    document.getElementById(id).style.display = "none";
}


hidden_by_id("affichage_vma");
display_by_id("affichage_vma");