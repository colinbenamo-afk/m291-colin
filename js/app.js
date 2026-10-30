// BoardMatch — charge les planches depuis data.json, les affiche en cartes,
// puis gère les filtres niveau/style. Pas de framework, juste du JS simple.

const conteneurListe = document.getElementById("liste-planches");
const messageVide = document.getElementById("empty-state");
const selectNiveau = document.getElementById("filtre-niveau");
const selectStyle = document.getElementById("filtre-style");
const champRecherche = document.getElementById("recherche");

// On garde les planches en mémoire une fois chargées, pour pouvoir
// les refiltrer sans refaire une requête réseau à chaque changement de filtre.
let planches = [];

// Construit le HTML d'une carte planche (même structure que la maquette validée).
function carteHTML(planche) {
  return `
    <article class="row" data-niveau="${planche.niveau}" data-style="${planche.style}">
      <svg class="picto" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="1.2" aria-hidden="true">
        <ellipse cx="12" cy="12" rx="9" ry="3.2" transform="rotate(-20 12 12)"></ellipse>
      </svg>
      <div class="info">
        <h3 class="name">${planche.marque} ${planche.modele}</h3>
        <p class="meta">${planche.niveau} &middot; ${planche.style}</p>
      </div>
      <p class="price">${planche.prix}.-</p>
    </article>
  `;
}

// Affiche une liste de planches dans le conteneur (au chargement ou après filtrage).
// Gère aussi le message "aucun résultat" si la liste filtrée est vide.
function afficherPlanches(liste) {
  if (liste.length === 0) {
    conteneurListe.innerHTML = "";
    messageVide.classList.add("visible");
    return;
  }
  messageVide.classList.remove("visible");
  conteneurListe.innerHTML = liste.map(carteHTML).join("");
}

// Applique le filtre niveau, le filtre style ET la recherche texte, tous en même temps,
// sur les planches en mémoire (jamais sur le tableau "planches" lui-même).
function filtrer() {
  const niveauChoisi = selectNiveau.value; // "" si "Niveau" (pas de filtre)
  const styleChoisi = selectStyle.value;   // "" si "Style" (pas de filtre)
  const motCle = champRecherche.value.toLowerCase().trim(); // "" si champ vide

  const resultat = planches.filter(function (planche) {
    const correspondNiveau = niveauChoisi === "" || planche.niveau === niveauChoisi;
    const correspondStyle = styleChoisi === "" || planche.style === styleChoisi;
    // .includes("") retourne toujours true, donc un champ de recherche vide ne filtre rien.
    const correspondRecherche =
      planche.marque.toLowerCase().includes(motCle) ||
      planche.modele.toLowerCase().includes(motCle);
    return correspondNiveau && correspondStyle && correspondRecherche;
  });

  afficherPlanches(resultat);
}

// État 1 — Chargement : message d'attente pendant la requête réseau.
conteneurListe.innerHTML = "<p class='etat-chargement'>Chargement des planches en cours...</p>";

fetch("./data.json")
  .then(function (reponse) {
    if (!reponse.ok) {
      throw new Error("Erreur de chargement : " + reponse.status);
    }
    return reponse.json();
  })
  .then(function (donnees) {
    // data.json contient aussi les fixations : on ne garde que les planches pour cet écran.
    planches = donnees.filter(function (item) {
      return item.type === "planche";
    });

    // État 3 — Vide : la collection ne contient aucune planche.
    if (planches.length === 0) {
      conteneurListe.innerHTML = "<p class='etat-vide'>Aucune planche enregistrée pour le moment.</p>";
      return;
    }

    // État 2 — Succès : on affiche toutes les planches, puis on active les filtres.
    afficherPlanches(planches);
    selectNiveau.addEventListener("change", filtrer);
    selectStyle.addEventListener("change", filtrer);
    // "input" se déclenche à chaque frappe, contrairement à "change" (qui attend la perte de focus) :
    // c'est ce qui rend la recherche instantanée.
    champRecherche.addEventListener("input", filtrer);
  })
  .catch(function (erreur) {
    // État 4 — Erreur : réseau coupé, fichier manquant ou JSON invalide.
    console.error("Détail technique :", erreur);
    conteneurListe.innerHTML = "<p class='etat-erreur'>&#9888; Impossible de charger les planches. Veuillez r&eacute;essayer ult&eacute;rieurement.</p>";
  });
