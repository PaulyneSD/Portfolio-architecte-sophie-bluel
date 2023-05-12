//Récupérer les titres et id des différentes catégories

fetch("http://localhost:5678/api/categories")
  .then((response) => response.json())
  .then((items) => {
    displayCategories(items);
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération des données:", error);
  });

  // Afficher les différentes catégories sur la page 

  function displayCategories(items) {
    const containerDiv = document.createElement("div");
    
    const allButton = document.createElement('p')
    allButton.textContent = "Tous";
    containerDiv.appendChild(allButton)
  
    items.forEach((item) => {
      const { id, name } = item;
  
      const div = document.createElement("div");
      div.classList.add("categoriesContainer");
  
      const p = document.createElement("p");
      p.textContent = name;
  
      div.appendChild(p);
      containerDiv.appendChild(div);
    });

    //Placer les titres des catégories sous le H2
  
    const portfolioSection = document.getElementById("portfolio");
    portfolioSection.querySelector("h2").insertAdjacentElement("afterend", containerDiv);
  }


  
  
