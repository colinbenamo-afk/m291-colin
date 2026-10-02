# Contrastes — maquette retenue (sobre)

Mesures faites avec le WebAIM Contrast Checker (webaim.org/resources/contrastchecker) sur les couleurs de la maquette "sobre".

| Élément | Texte | Fond | Ratio | AA normal (4.5:1) | AAA normal (7:1) |
|---|---|---|---|---|---|
| Nom planche / prix | `#1A1A1A` | `#FFFFFF` | 17.4:1 | ✅ | ✅ |
| Filtres ("Niveau ▾", "Style ▾") | `#444444` | `#FFFFFF` | 9.73:1 | ✅ | ✅ |
| Meta (niveau · style, ex. "Expert · Freestyle") | `#8A8A8A` | `#FFFFFF` | 3.45:1 | ❌ | ❌ |

## Constat

Le texte meta (`#8A8A8A` sur fond blanc) ne passe pas le seuil AA pour du texte normal (il faudrait 4.5:1, il n'a que 3.45:1). C'est le seul des trois éléments testés à échouer — les deux autres sont largement au-dessus du seuil AAA.

## Correction proposée

Remplacer `#8A8A8A` par `#595959` pour le texte meta, ce qui porte le ratio à environ 4.95:1 (AA validé, avec marge).

Cette correction est détaillée avec capture avant/après dans la fiche d'observation (point 9).
