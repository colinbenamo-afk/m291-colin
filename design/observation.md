# Fiche d'observation — test utilisateur

## Contexte
- Testeur : Charlotte
- Date : 02.10.2026
- Support utilisé : maquette "sobre" (capture/maquette sur téléphone)
- Profil proche de Léa ? non, mais je lui ai expliqué le profil de Léa avant

## Tâche donnée
« Trouve une planche adaptée à un niveau débutant. »
(aucune aide donnée, aucune précision supplémentaire)

## Déroulé observé
- Temps pour trouver une planche correspondante : 5 secondes
- Ce que le testeur a fait en premier : il a scanné la page de haut en bas et est très vite tombé sur les filtres pour les planches, et donc aussi sur une planche débutant.
- Hésitations / blocages observés : aucune hésitation.
- Verbatim (si le testeur a commenté à voix haute) : « Trouvé ! »

## Problème identifié
Le test ne montre pas de blocage de la part de Charlotte (5 secondes, zéro hésitation), mais deux points restent perfectibles pour la fiabilité de la maquette, l'un déjà mesuré au point 8 et l'autre repéré dans la fiche critique (`choix.md`) :
1. Le texte meta "niveau · style" en `#8A8A8A` ne passait que 3.45:1 (sous le seuil AA de 4.5:1) — un texte plus petit ou lu dans de moins bonnes conditions (extérieur, luminosité) aurait pu être plus difficile à lire que ne le suggère ce test unique.
2. Aucun état visuel ne confirme qu'un filtre est actif une fois sélectionné — ce n'est pas ce que Charlotte a testé ici (elle a trouvé la planche sans utiliser les filtres), mais ça reste un manque de feedback pour quelqu'un qui filtrerait activement.

## Itération — avant / après (correctif 1 : contraste du texte meta)

**Avant** : texte meta en `#8A8A8A` sur fond blanc (ratio 3.45:1, échoue AA)
**Après** : texte meta en `#595959` sur fond blanc (ratio 7:1, valide AAA)

Le changement est surtout une correction de couleur du texte lui-même (pas des bordures) : le gris plus foncé rend "niveau · style" plus net à lire, sans changer la mise en page.

## Correctif 2 (priorité) : feedback visuel sur les filtres

**Problème** : les filtres "Niveau ▾" et "Style ▾" n'ont pas d'état visuel distinct lorsqu'ils sont sélectionnés (même couleur, même bordure qu'au repos).

**Correction proposée** : ajouter un changement de couleur (ex. bordure ou texte en `#1A1A1A` plus marqué, ou léger fond gris clair) sur le filtre actif, pour que l'utilisateur confirme d'un coup d'œil que son choix a bien été pris en compte.

**Pourquoi c'est prioritaire** : contrairement au contraste (déjà mesuré et corrigé), ce manque n'a pas encore été testé en conditions réelles — c'est le prochain point à vérifier avec un utilisateur qui utilise activement les filtres plutôt que de scanner la liste directement.

## Conclusion
Ce test confirme que la maquette "sobre" permet de trouver rapidement une planche sans aide (5 secondes, zéro hésitation), ce qui valide la direction retenue pour la tâche de Léa. Les deux correctifs ci-dessus (contraste du texte meta, déjà appliqué ; feedback visuel des filtres, à tester ensuite) visent à fiabiliser ce résultat pour des conditions d'usage moins favorables que ce test (luminosité extérieure, utilisation active des filtres).
