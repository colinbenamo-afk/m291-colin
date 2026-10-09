# Critique des 3 maquettes — BoardMatch

Persona de référence : Léa, 25 ans, serveuse à Zinal, débutante en snowboard, consulte sur téléphone entre deux services, obstacle principal = la friction ("la flemme de créer un compte"). Tâche : trouver une planche adaptée à son niveau.

---

## Fiche 1 — Sobre

**Force 1**
- Critère : Lisibilité
- Preuve : nom/prix en `#1A1A1A` sur fond blanc = ratio de contraste 17.4:1 (seuil AAA = 7:1, largement dépassé). Quatre planches visibles sans scroll.

**Force 2**
- Critère : Navigation
- Preuve : les deux filtres ("Niveau ▾", "Style ▾") sont visibles en permanence en haut de l'écran, sans étape intermédiaire avant la liste.

**Faiblesse 1**
- Critère : Feedback
- Preuve : aucun état visuel distinct n'indique qu'un filtre est actif (pas de changement de couleur ou de soulignement visible une fois sélectionné) — Léa ne peut pas confirmer d'un coup d'œil que son filtre a bien été appliqué.

**Faiblesse 2**
- Critère : Accessibilité
- Preuve : dans la version initiale, le texte meta "niveau · style" en `#8A8A8A` ne passait que 3.45:1 (sous le seuil AA de 4.5:1) — corrigé depuis en `#595959` (7:1), mais c'était un vrai point faible de la première version.

**Verdict** : je garde ce design parce que, pour Léa qui consulte vite sur téléphone entre deux services, la lisibilité maximale et l'absence d'étape avant la liste servent directement sa tâche (trouver une planche "débutant" en quelques secondes).

---

## Fiche 2 — Chaleureuse

**Force 1**
- Critère : Cohérence
- Preuve : dégradé orange, coins arrondis et ombres douces créent une ambiance "shop accueillant" homogène sur tout l'écran.

**Force 2**
- Critère : Accessibilité
- Preuve : texte principal `#4A2F22` sur fond `#FBF3E7` = ratio 11.09:1, largement au-dessus du seuil AAA.

**Faiblesse 1**
- Critère : Navigation
- Preuve : les cartes prennent plus de hauteur à l'écran ; pour voir le même nombre de planches qu'en sobre (4 sans scroll), Léa doit scroller davantage — ça ralentit sa tâche.

**Faiblesse 2**
- Critère : Feedback
- Preuve : l'accent/prix en `#B5502C` sur `#FBF3E7` n'atteint que 4.60:1 (passe l'AA mais pas l'AAA) — l'élément le plus important pour la décision de Léa (le prix) est aussi le moins contrasté de la hiérarchie visuelle.

**Verdict** : j'élimine ce design parce que Léa veut aller vite (elle consulte en pause, parfois en extérieur) — le scroll supplémentaire et le prix moins contrasté ralentissent exactement ce qu'elle cherche à faire rapidement.

---

## Fiche 3 — Audacieuse

**Force 1**
- Critère : Cohérence
- Preuve : fond noir/violet et typographie épaisse donnent une identité "sport/freestyle" forte, cohérente avec l'univers snowboard.

**Force 2**
- Critère : Accessibilité
- Preuve : texte principal `#F5F5F7` sur fond `#0E0E12` = ratio 17.69:1 ; texte meta `#A1A1AA` sur `#0E0E12` = 7.52:1 — les deux dépassent le seuil AAA.

**Faiblesse 1**
- Critère : Navigation
- Preuve : le bandeau "hero" occupe près d'un tiers de l'écran avant d'arriver à la liste des planches — ça ajoute une étape avant la vraie tâche de Léa.

**Faiblesse 2**
- Critère : Feedback
- Preuve : l'accent violet `#A855F7` sur `#0E0E12` n'atteint que 4.87:1 (passe l'AA de 4.5:1 mais pas l'AAA de 7:1) — l'élément interactif le plus visible de la maquette est aussi le moins contrasté.

**Verdict** : j'élimine ce design parce que la tâche de Léa est d'aller vite — le bandeau hero retarde l'accès à l'info utile, ce qui va à l'encontre de son besoin principal.

---

## Tableau comparatif

| Critère | Sobre | Chaleureuse | Audacieuse |
|---|---|---|---|
| Lisibilité | 5 | 3 | 4 |
| Navigation | 5 | 3 | 3 |
| Feedback | 3 | 3 | 4 |
| Cohérence | 3 | 5 | 5 |
| Accessibilité | 5 | 4 | 4 |
| **Total** | **21** | **18** | **20** |

## Choix de la direction visuelle

Je retiens **sobre** : c'est la maquette qui obtient le meilleur total, et surtout celle qui sert le mieux la tâche de Léa (lisibilité maximale, zéro étape avant la liste). J'abandonne chaleureuse (scroll supplémentaire, prix moins contrasté) et audacieuse (étape hero avant la tâche, bouton principal moins contrasté) : les deux introduisent de la friction ou un délai, alors que Léa a justement besoin de vitesse et de clarté.
