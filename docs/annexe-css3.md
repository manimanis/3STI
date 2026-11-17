# Annexe CSS3
*Aide Pédagogique – Informatique – 3ᵉ année SI (Matière : STI) – Septembre 2026*

---

## 1. Sélecteurs CSS

| Sélecteur | Description |
| :--- | :--- |
| `*` | Sélectionne tous les éléments (sélecteur universel). |
| `element` | Sélectionne tous les éléments de type `element`. |
| `#id` | Cible un élément en fonction de la valeur de son attribut `id`. |
| `.class` | Cible les éléments en fonction de la valeur de leur attribut `class`. |
| `element[attr]` | Cible les éléments qui possèdent l'attribut `attr`. |
| `element[attr=valeur]` | Cible les éléments en fonction de la valeur de l'attribut `attr`. |
| `element.class` | Cible tous les éléments de type `element` en fonction de la valeur de leur attribut `class`. |
| `a:link` | Cible tous les liens non visités. |
| `a:visited` | Cible tous les liens visités. |
| `selecteur:hover` | Cible l'élément au moment où l'utilisateur le survole avec le pointeur de la souris. |
| `selecteur:focus` | Cible l'élément lorsqu'il reçoit le focus. |
| `selecteur:active` | Cible l'élément lorsqu'il est activé. |

> **Remarque :** Pour grouper plusieurs sélecteurs dans une règle, il suffit de les lister en les séparant par des virgules « `,` ».

---

## 2. Propriétés de mise en forme du texte

| Propriété | Description |
| :--- | :--- |
| `font-family` | Spécifie les noms de polices possibles par ordre de préférence. |
| `font-weight` | Spécifie la manière dont les caractères d'un texte doivent être affichés (`bold` ; `bolder` ; `lighter`). |
| `font-style` | Spécifie le style d'un texte (`italic`). |
| `font-size` | Spécifie la taille d'une police. |
| `font` | Super-propriété de `font`. Combine `font-family`, `font-weight`, `font-style`, `font-size`. |
| `text-align` | Spécifie l'alignement horizontal d'un texte (`left` ; `center` ; `right` ; `justify`). |
| `text-shadow` | Définit une ombre au texte. |
| `text-transform` | Spécifie la façon de transformer les caractères d'un texte en majuscules ou en minuscules (`uppercase` ; `lowercase` ; `capitalize`). |
| `color` | Spécifie la couleur du texte. |

---

## 3. Propriétés des listes

| Propriété | Description |
| :--- | :--- |
| `list-style-type` | Définit le type de marqueur d'éléments de liste (`circle` ; `square` ; `upper-roman` ; `lower-alpha`). |
| `list-style-position` | Spécifie la position des marqueurs d'éléments d'une liste à puces (`outside` ; `inside`). |
| `list-style-image` | Spécifie une image comme marqueur d'éléments de liste. |
| `list-style` | Super-propriété de liste. Combine `list-style-type`, `list-style-position`, `list-style-image`. |

---

## 4. Propriétés d'arrière-plan

| Propriété | Description |
| :--- | :--- |
| `background-color` | Définit la couleur d'arrière-plan d'un élément. |
| `background-image` | Définit une image d'arrière-plan pour un élément. |
| `background-repeat` | Définit la façon dont une image d'arrière-plan est répétée (`repeat` ; `repeat-x` ; `repeat-y`). |
| `background-size` | Spécifie la taille d'une image d'arrière-plan. |
| `background-position` | Définit la position d'une image de fond (`center` ; `left` ; `right`). |
| `background` | Super-propriété d'arrière-plan. Combine `background-color`, `background-image`, `background-repeat`, `background-size`, `background-position`. |

---

## 5. Propriétés des boîtes (Modèle de boîte & positionnement)

| Propriété | Description |
| :--- | :--- |
| `width` | Définit la largeur d'un élément. |
| `height` | Définit la hauteur d'un élément. |
| `position` | Spécifie le type de la méthode de positionnement utilisée pour un élément (`absolute` ; `fixed` ; `relative` ; `static` ; `sticky`). |
| `float` | Place/Fait flotter un élément dans un conteneur (`left` ; `right` ; `none`). |
| `clear` | Définit si un élément doit être déplacé sous les éléments flottants (`left` ; `right` ; `both` ; `none`). |
| `padding` | Définit les espaces intérieurs entre le contenu d'un élément et sa bordure des 4 côtés. |
| `margin` | Définit les marges externes d'un élément des 4 côtés. |
| `box-shadow` | Ajoute des ombres à la boîte d'un élément. |
| `display` | Spécifie le comportement d'affichage d'un élément (`inline` ; `block` ; `inline-block` ; `flex`). |
| `top` | Spécifie la position verticale, par rapport au haut, d'un élément positionné. |
| `bottom` | Spécifie la position verticale, par rapport au bas, d'un élément positionné. |
| `left` | Spécifie la position horizontale, par rapport à la gauche, d'un élément positionné. |
| `right` | Spécifie la position horizontale, par rapport à la droite, d'un élément positionné. |
| `overflow` | Spécifie le comportement du contenu lorsqu'il déborde de la boîte d'un élément (`visible` ; `hidden` ; `clip` ; `scroll` ; `auto`). |
| `visibility` | Affiche ou masque un élément sans modifier la disposition d'un document (`visible` ; `hidden`). |
| `opacity` | Définit le niveau de transparence. |

---

## 6. Propriétés des bordures

| Propriété | Description |
| :--- | :--- |
| `border-color` | Définit la couleur des bordures d'un élément. |
| `border-style` | Définit le style des bordures d'un élément. |
| `border-radius` | Définit le rayon des coins arrondis d'un élément. |
| `border-width` | Définit la largeur des bordures d'un élément (`medium` ; `thin` ; `thick` ; valeur en px). |
| `border` | Super-propriété de bordure. Combine `border-color`, `border-style`, `border-width`. |

---

## 7. Propriétés des images

| Propriété | Description |
| :--- | :--- |
| `filter` | Définit des filtres sur un élément (`blur()` ; `grayscale()` ; `invert()`). |

---

## 8. Propriétés des tableaux

| Propriété | Description |
| :--- | :--- |
| `table-layout` | Définit la façon de disposer les cellules, lignes et colonnes d'un tableau. |
| `border-collapse` | Définit si les bordures des cellules sont fusionnées ou séparées (`separate` ; `collapse`). |

---

## 9. Transitions

| Propriété | Description |
| :--- | :--- |
| `transition-delay` | Spécifie le délai nécessaire avant que la transition commence. |
| `transition-duration` | Spécifie la durée de la transition. |
| `transition-property` | Spécifie les propriétés CSS sur lesquelles l'effet de transition sera appliqué. |
| `transition` | Super-propriété de transition. Combine `transition-property`, `transition-duration` et `transition-delay`. |

---

## 10. Transformations

| Propriété | Description |
| :--- | :--- |
| `transform` | Applique un effet de transformation 2D ou 3D à un élément (`rotate()`, `skew()`, `scale()`, `translate()`). |

---

## 11. Animations

| Propriété | Description |
| :--- | :--- |
| `@keyframes` | Spécifie les états clés de l'animation. |
| `animation-name` | Spécifie le nom de l'animation. |
| `animation-delay` | Spécifie le délai nécessaire avant que l'animation commence. |
| `animation-duration` | Spécifie la durée de l'animation. |
| `animation-iteration-count` | Spécifie le nombre de répétitions de l'animation. |
| `animation-direction` | Définit la direction de l'animation. |
| `animation` | Super-propriété de l'animation. Combine `animation-name`, `animation-duration`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-timing-function`. |

---

> **Important :** Pour exprimer les mesures des dimensions, se limiter aux unités (**pixel** et **%**).
