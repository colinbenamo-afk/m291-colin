// BoardMatch — charge les fixations depuis data.json et les affiche en cartes.
// Même logique que js/app.js (4 états), mais sans filtre : la fiche e2-3 ne
// prévoit pour cet écran que "parcourir la liste", pas de filtrage.

const conteneurListe = document.getElementById("liste-fixations");

// Construit le HTML d'une carte fixation (mêmes classes CSS que les planches,
// mais la ligne meta affiche la taille compatible au lieu de niveau/style).
function carteHTML(fixation) {
  return `
    <article class="row">
      <svg class="picto" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="1.2" aria-hidden="true">
        <rect x="7" y="4" width="10" height="16" rx="2"></rect>
      </svg>
      <div class="info">
        <h3 class="name">${fixation.marque} ${fixation.modele}</h3>
        <p class="meta">Taille ${fixation.tailleCompatible} &middot; Flex ${fixation.flex}</p>
      </div>
      <p class="price">${fixation.prix}.-</p>
    </article>
  `;
}

// État 1 — Chargement.
conteneurListe.innerHTML = "<p class='etat-chargement'>Chargement des fixations en cours...</p>";

fetch("./data.json")
  .then(function (reponse) {
    if (!reponse.ok) {
      throw new Error("Erreur de chargement : " + reponse.status);
    }
    return reponse.json();
  })
  .then(function (donnees) {
    // data.json contient aussi les planches : on ne garde que les fixations ici.
    const fixations = donnees.filter(function (item) {
      return item.type === "fixation";
    });

    // État 3 — Vide.
    if (fixations.length === 0) {
      conteneurListe.innerHTML = "<p class='etat-vide'>Aucune fixation enregistrée pour le moment.</p>";
      return;
    }

    // État 2 — Succès.
    conteneurListe.innerHTML = fixations.map(carteHTML).join("");
  })
  .catch(function (erreur) {
    // État 4 — Erreur.
    console.error("Détail technique :", erreur);
    conteneurListe.innerHTML = "<p class='etat-erreur'>&#9888; Impossible de charger les fixations. Veuillez r&eacute;essayer ult&eacute;rieurement.</p>";
  });
