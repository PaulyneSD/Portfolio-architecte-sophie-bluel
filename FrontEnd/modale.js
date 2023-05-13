

// Récupère les éléments HTML nécessaires
const modifier = document.getElementById("modifier");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const ajouter = document.getElementById("ajouter");

// Affiche la modale lorsque l'utilisateur clique sur le bouton Modifier
modifier.addEventListener("click", () => {
  modal.style.display = "block";
});

// Ferme la modale lorsque l'utilisateur clique sur la croix ou en dehors de la modale
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});

// Ajoute le média à la galerie lorsque l'utilisateur clique sur le bouton Ajouter
ajouter.addEventListener("click", () => {
  const titre = document.getElementById("titre").value;
  const url = document.getElementById("url").value;

  // Ajoute le média à la galerie

  // Ferme la modale
  modal.style.display = "none";
});

