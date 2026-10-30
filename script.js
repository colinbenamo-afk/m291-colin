// BoardMatch — filtre la liste des planches par niveau et par style.
// Pas de framework : juste du JS simple, comme demandé dans le brief.

// On récupère les deux menus déroulants et toutes les lignes de la liste.
const selectNiveau = document.getElementById("filtre-niveau");
const selectStyle = document.getElementById("filtre-style");
const lignes = document.querySelectorAll(".row");
const messageVide = document.getElementById("empty-state");

// Fonction appelée à chaque changement d'un des deux filtres.
function filtrer() {
  const niveauChoisi = selectNiveau.value; // "" si "Niveau" (pas de filtre)
  const styleChoisi = selectStyle.value;   // "" si "Style" (pas de filtre)
  let nombreVisible = 0;

  lignes.forEach((ligne) => {
    // Une ligne correspond si le filtre est vide OU si elle a la bonne valeur.
    const correspondNiveau = niveauChoisi === "" || ligne.dataset.niveau === niveauChoisi;
    const correspondStyle = styleChoisi === "" || ligne.dataset.style === styleChoisi;

    if (correspondNiveau && correspondStyle) {
      ligne.classList.remove("hidden");
      nombreVisible++;
    } else {
      ligne.classList.add("hidden");
    }
  });

  // Si aucune planche ne correspond, on affiche le message "aucun résultat".
  messageVide.classList.toggle("visible", nombreVisible === 0);
}

// On écoute les changements sur les deux menus.
selectNiveau.addEventListener("change", filtrer);
selectStyle.addEventListener("change", filtrer);
