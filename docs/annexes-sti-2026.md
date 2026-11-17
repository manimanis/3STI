# Annexes Officielles STI – 3ᵉ année Sciences de l'Informatique
*République Tunisienne – Ministère de l'Éducation*  
*Aide Pédagogique – Informatique – STI (Septembre 2026)*

---

## Sommaire

1. [Annexe HTML5](#annexe-html5)
   - [Éléments de 1ᵉʳ niveau](#1-éléments-de-1ᵉʳ-niveau)
   - [Éléments d'en-tête](#2-éléments-den-tête)
   - [Éléments de structuration d'une page web](#3-éléments-de-structuration-dune-page-web)
   - [Éléments de structuration de texte et média](#4-éléments-de-structuration-de-texte-et-média)
   - [Conteneurs](#5-conteneurs)
   - [Listes](#6-listes)
   - [Tableaux](#7-tableaux)
   - [Événements](#8-événements)
   - [Attributs globaux](#9-attributs-globaux)
   - [Éléments de formulaire](#10-éléments-de-formulaire)
2. [Annexe CSS3](#annexe-css3)
   - [Sélecteurs](#1-sélecteurs-css)
   - [Propriétés de mise en forme du texte](#2-propriétés-de-mise-en-forme-du-texte)
   - [Propriétés des listes](#3-propriétés-des-listes)
   - [Propriétés d'arrière-plan](#4-propriétés-darrière-plan)
   - [Propriétés des boîtes](#5-propriétés-des-boîtes-modèle-de-boîte--positionnement)
   - [Propriétés des bordures](#6-propriétés-des-bordures)
   - [Propriétés des images](#7-propriétés-des-images)
   - [Propriétés des tableaux](#8-propriétés-des-tableaux)
   - [Transitions](#9-transitions)
   - [Transformations](#10-transformations)
   - [Animations](#11-animations)
3. [Annexe JavaScript (JS)](#annexe-javascript-js)
   - [Opérateurs logiques](#1-opérateurs-logiques)
   - [Opérateurs de comparaison](#2-opérateurs-de-comparaison)
   - [Opérateurs arithmétiques](#3-opérateurs-arithmétiques)
   - [Entrées et Sorties](#4-entrées-et-sorties)
   - [Fonctions / Méthodes JS de conversion](#5-fonctions--méthodes-js-de-conversion-et-vérification)
   - [Méthodes de l'objet Math](#6-méthodes-de-lobjet-math-math)
   - [Sélection des éléments HTML](#7-méthodes-pour-sélectionner-des-éléments-html)
   - [L'objet Array](#8-lobjet-array)
   - [Les chaînes de caractères](#9-les-chaînes-de-caractères-ch-étant-une-chaîne)
   - [L'objet Date](#10-lobjet-date-d-étant-une-date)
   - [Modification du contenu, attributs et styles](#11-modification-du-contenu-des-attributs-ou-des-styles-des-éléments-html)
4. [Annexe PHP](#annexe-php)
   - [Types de données](#1-types-de-données--dobjets)
   - [Opérateurs de transtypage (Cast)](#2-opérateurs-de-transtypage-cast)
   - [Opérateurs logiques](#3-opérateurs-logiques-1)
   - [Opérateurs de comparaison](#4-opérateurs-de-comparaison-1)
   - [Opérateurs arithmétiques](#5-opérateurs-arithmétiques-1)
   - [Autres opérateurs](#6-autres-opérateurs)
   - [Fonctions mathématiques](#7-fonctions-mathématiques)
   - [Fonctions sur les chaînes de caractères](#8-fonctions-sur-les-chaînes-de-caractères)
   - [Fonctions de Date / Heure](#9-fonctions-de-date--heure)
   - [Fonctions sur les tableaux](#10-fonctions-sur-les-tableaux)
   - [Fonctions PHP pour MySQL (MySQLi)](#11-fonctions-php-pour-mysql-extension-mysqli---interface-procédurale)
   - [Structures de langage](#12-structures-de-langage)
   - [Variables superglobales](#13-variables-superglobales)
   - [Fonctions diverses](#14-fonctions-diverses)
5. [Annexe SQL](#annexe-sql)
   - [Types de données](#1-types-de-données)
   - [Opérateurs de comparaison](#2-opérateurs-de-comparaison-2)
   - [Opérateurs logiques](#3-opérateurs-logiques-2)
   - [Fonctions sur le type date](#4-fonctions-définies-sur-le-type-date)
   - [Fonctions d'agrégation](#5-fonctions-dagrégation)
   - [Contraintes d'intégrité](#6-contraintes-dintégrité)
   - [Propriété de colonne](#7-propriété-de-colonne)
   - [Langage de Définition de Données (LDD)](#8-définition-des-données-ldd---langage-de-définition-de-données)
   - [Langage de Manipulation de Données (LMD)](#9-manipulation-des-données-lmd---langage-de-manipulation-de-données)

---

# Annexe HTML5

## 1. Éléments de 1ᵉʳ niveau

| Élément | Description |
| :--- | :--- |
| `<html>` | Représente la racine d'un document HTML. |
| `<head>` | Conteneur de métadonnées placé entre la balise `<html>` et la balise `<body>`. |
| `<body>` | Définit le corps du document. |

## 2. Éléments d'en-tête

| Élément | Description | Attributs |
| :--- | :--- | :--- |
| `<link>` | Définit la relation entre le document actuel et une ressource externe. | `href`, `rel`, `type` |
| `<meta>` | Définit les métadonnées du document. | `charset`, `name`, `content` |
| `<script>` | Intègre un script côté client (JavaScript). | `src`, `type` |
| `<style>` | Définit les informations de style (CSS) pour un document. | `type`, `media` |
| `<title>` | Définit le titre du document. | — |

## 3. Éléments de structuration d'une page web

| Élément | Description |
| :--- | :--- |
| `<header>` | Conteneur pour le contenu d'introduction ou un ensemble de liens de navigation. |
| `<nav>` | Définit un ensemble de liens de navigation. |
| `<footer>` | Définit un pied de page pour un document ou une section. |
| `<section>` | Définit une section dans un document. |
| `<article>` | Spécifie un contenu indépendant et autonome. |
| `<aside>` | Définit un contenu en dehors du contenu principal. Souvent placé sous forme de barre latérale. |
| `<main>` | Définit le contenu principal d'un document. |

## 4. Éléments de structuration de texte et média

| Élément | Description | Attributs |
| :--- | :--- | :--- |
| `<p>` | Définit un paragraphe. | — |
| `<cite>` | Définit le titre d'une œuvre. | — |
| `<u>` | Marque un texte présentant une annotation non textuelle. | — |
| `<em>` | Marque un texte avec une emphase particulière. | — |
| `<strong>` | Marque un texte important. | — |
| `<source>` | Spécifie plusieurs ressources multimédias pour les éléments multimédias. | `src`, `type`, `media` |
| `<hn>` | Définit un titre de niveau n (de 1 à 6). | — |
| `<hr>` | Définit une rupture thématique sous forme de ligne horizontale. | — |
| `<img>` | Intègre une image. | `src`, `alt` |
| `<figure>` | Spécifie un conteneur autonome qui peut contenir divers éléments. | — |
| `<figcaption>` | Définit une légende pour un élément `<figure>`. | — |
| `<audio>` | Intégrer un contenu sonore dans un document. | `controls`, `src` |
| `<video>` | Intègre un contenu vidéo dans un document. | `controls`, `src` |
| `<a>` | Définit un lien hypertexte via l'attribut `href`. | `href`, `target` |
| `<br>` | Définit un retour à la ligne. | — |
| `<address>` | Définit les coordonnées de l'auteur/propriétaire d'un document ou d'un article. | — |
| `<mark>` | Définit le texte qui doit être marqué ou mis en surbrillance. | — |
| `<details>` | Spécifie des détails supplémentaires que l'utilisateur peut ouvrir et fermer à la demande. | `open` |
| `<summary>` | Définit un en-tête visible pour l'élément `<details>`. | — |

## 5. Conteneurs

| Élément | Description | Attributs |
| :--- | :--- | :--- |
| `<span>` | Regroupe des éléments dans un bloc de contenu. | — |
| `<div>` | Grouper plusieurs éléments HTML de type block. | — |
| `<iframe>` | Définit un cadre en ligne. | `src`, `name` |

## 6. Listes

| Élément | Description | Attributs |
| :--- | :--- | :--- |
| `<ul>` | Définit une liste à puces. | — |
| `<ol>` | Définit une liste ordonnée. | `reversed`, `type`, `start` |
| `<li>` | Définit un élément dans une liste. | — |

## 7. Tableaux

| Élément | Description | Attributs |
| :--- | :--- | :--- |
| `<table>` | Définit un tableau. | — |
| `<thead>` | Définit l'entête d'un tableau. | — |
| `<tbody>` | Définit le corps d'un tableau. | — |
| `<tfoot>` | Définit le pied d'un tableau. | — |
| `<caption>` | Définit une légende du tableau. | — |
| `<tr>` | Définit une ligne dans un tableau. | — |
| `<th>` | Définit une cellule d'en-tête dans un tableau. | `rowspan`, `colspan` |
| `<td>` | Définit une cellule dans un tableau. | `rowspan`, `colspan` |

## 8. Événements

| Événement | Description |
| :--- | :--- |
| `onfocus` | Se déclenche au moment où l'élément obtient le focus. |
| `onblur` | Se déclenche au moment où l'élément perd le focus. |
| `onclick` | Se déclenche lors d'un clic sur l'élément. |
| `oninput` | Se déclenche dès que la valeur d'un élément a changé. |
| `onchange` | Se déclenche lorsque la valeur d'un élément est modifiée. |
| `onload` | Se déclenche lorsque la page est complètement chargée. |
| `onsubmit` | Se déclenche lorsqu'un formulaire est soumis. |
| `onmouseover` | Se déclenche lorsque le pointeur de la souris survole l'élément. |
| `onmouseout` | Se déclenche lorsque le pointeur de la souris sort de l'élément. |
| `onplay` | Se déclenche lorsque la lecture d'un fichier audio/vidéo commence. |
| `onpause` | Se déclenche lorsqu'un élément audio/vidéo est mis en pause. |
| `onkeydown` | Se déclenche lorsqu'une touche du clavier est pressée. |
| `onkeyup` | Se déclenche lorsqu'une touche du clavier est relâchée. |

## 9. Attributs globaux

| Attribut | Description |
| :--- | :--- |
| `class` | Spécifie un nom de classe pour un élément. |
| `hidden` | Renseigne la visibilité d'un élément. |
| `id` | Spécifie un identifiant unique pour un élément HTML. |
| `lang` | Spécifie la langue du contenu de l'élément. |
| `style` | Spécifie un style en ligne. |
| `title` | Spécifie des informations supplémentaires sur un élément. |

## 10. Éléments de formulaire

### Balises de formulaire

| Élément | Description | Attributs & Valeurs possibles |
| :--- | :--- | :--- |
| `<form>` | Crée un formulaire HTML. | • `action`<br>• `method` : `"get"`, `"post"`<br>• `target` : `"_self"`, `"_blank"`, `"_parent"`, `"_top"`, `"iframeName"` |
| `<fieldset>` | Regroupe des éléments liés dans un formulaire. | — |
| `<legend>` | Définit une légende pour l'élément `<fieldset>`. | — |
| `<label>` | Définit un libellé pour un élément graphique. | — |
| `<textarea>` | Définit une zone de saisie de texte multilignes. | `name`, `cols`, `rows`, `readonly`, `required`, `disabled`, `placeholder`, `maxlength` |
| `<select>` | Définit une liste déroulante. | `name`, `size`, `disabled` |
| `<datalist>` | Spécifie une liste d'options prédéfinies connectée à un élément `<input>`. | — |
| `<option>` | Définit une option dans une liste de sélection. | `selected`, `value` |
| `<output>` | Affiche le résultat d'un calcul ou d'une action de l'utilisateur. | `name`, `value` |

### Types d'éléments `<input>`

| Types d'élément | Attributs génériques | Attributs spécifiques |
| :--- | :--- | :--- |
| `button`, `reset`, `submit` | `name`, `value`, `disabled` | — |
| `text` | `name`, `value`, `placeholder`, `readonly`, `required`, `disabled`, `list` | — |
| `email`, `tel`, `password` | `name`, `value`, `placeholder`, `readonly`, `required`, `disabled` | — |
| `number` | `name`, `value`, `readonly`, `required`, `disabled`, `step` | `min`, `max` |
| `range` | `name`, `value`, `disabled`, `step` | `min`, `max` |
| `datetime-local`, `date`, `time` | `name`, `value`, `required`, `disabled` | `min`, `max` |
| `checkbox`, `radio` | `name`, `value`, `required`, `disabled` | `checked` |

---

# Annexe CSS3

## 1. Sélecteurs CSS

| Sélecteur | Description |
| :--- | :--- |
| `*` | Sélectionne tous les éléments. |
| `element` | Sélectionne tous les éléments de type element. |
| `#id` | Cible un élément en fonction de la valeur de son attribut id. |
| `.class` | Cible les éléments en fonction de la valeur de leur attribut class. |
| `element[attr]` | Cible les éléments qui possèdent l'attribut attr. |
| `element[attr=valeur]` | Cible les éléments en fonction de la valeur de l'attribut attr. |
| `element.class` | Cible tous les éléments de type element en fonction de la valeur de leur attribut class. |
| `a:link` | Cible tous les liens non visités. |
| `a:visited` | Cible tous liens visités. |
| `selecteur:hover` | Cible l'élément au moment où l'utilisateur le survole avec le pointeur de la souris. |
| `selecteur:focus` | Cible l'élément lorsqu'il reçoit le focus. |
| `selecteur:active` | Cible l'élément lorsqu'il est activé. |

> **Remarque :** Pour grouper plusieurs sélecteurs dans une règle, il suffit de les lister en les séparant par des virgules « `,` ».

## 2. Propriétés de mise en forme du texte

| Propriété | Description |
| :--- | :--- |
| `font-family` | Spécifie les noms de polices possibles par ordre de préférence. |
| `font-weight` | Spécifie la manière dont les caractères d'un texte doivent être affichés (`bold` ; `bolder` ; `lighter`). |
| `font-style` | Spécifie le style d'un texte (`italic`). |
| `font-size` | Spécifie la taille d'une police. |
| `font` | Super-propriété de font. Combine `font-family`, `font-weight`, `font-style`, `font-size`. |
| `text-align` | Spécifie l'alignement horizontal d'un texte (`left` ; `center` ; `right` ; `justify`). |
| `text-shadow` | Définit une ombre au texte. |
| `text-transform` | Spécifie la façon de transformer les caractères d'un texte en majuscules ou en minuscules (`uppercase` ; `lowercase` ; `capitalize`). |
| `color` | Spécifie la couleur du texte. |

## 3. Propriétés des listes

| Propriété | Description |
| :--- | :--- |
| `list-style-type` | Définit le type de marqueur d'éléments de liste (`circle` ; `square` ; `upper-roman` ; `lower-alpha`). |
| `list-style-position` | Spécifie la position des marqueurs d'éléments d'une liste à puces (`outside` ; `inside`). |
| `list-style-image` | Spécifie une image comme marqueur d'éléments de liste. |
| `list-style` | Super-propriété de liste. Combine `list-style-type`, `list-style-position`, `list-style-image`. |

## 4. Propriétés d'arrière-plan

| Propriété | Description |
| :--- | :--- |
| `background-color` | Définit la couleur d'arrière-plan d'un élément. |
| `background-image` | Définit une image d'arrière-plan pour un élément. |
| `background-repeat` | Définit la façon dont une image d'arrière-plan est répétée (`repeat` ; `repeat-x` ; `repeat-y`). |
| `background-size` | Spécifie la taille d'une image d'arrière-plan. |
| `background-position` | Définit la position d'une image de fond (`center` ; `left` ; `right`). |
| `background` | Super-propriété d'arrière-plan. Combine `background-color`, `background-image`, `background-repeat`, `background-size`, `background-position`. |

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

## 6. Propriétés des bordures

| Propriété | Description |
| :--- | :--- |
| `border-color` | Définit la couleur des bordures d'un élément. |
| `border-style` | Définit le style des bordures d'un élément. |
| `border-radius` | Définit le rayon des coins arrondis d'un élément. |
| `border-width` | Définit la largeur des bordures d'un élément (`medium` ; `thin` ; `thick` ; valeur en px). |
| `border` | Super-propriété de bordure. Combine `border-color`, `border-style`, `border-width`. |

## 7. Propriétés des images

| Propriété | Description |
| :--- | :--- |
| `filter` | Définit des filtres sur un élément (`blur()` ; `grayscale()` ; `invert()`). |

## 8. Propriétés des tableaux

| Propriété | Description |
| :--- | :--- |
| `table-layout` | Définit la façon de disposer les cellules, lignes et colonnes d'un tableau. |
| `border-collapse` | Définit si les bordures des cellules sont fusionnées ou séparées (`separate` ; `collapse`). |

## 9. Transitions

| Propriété | Description |
| :--- | :--- |
| `transition-delay` | Spécifie le délai nécessaire avant que la transition commence. |
| `transition-duration` | Spécifie la durée de la transition. |
| `transition-property` | Spécifie les propriétés CSS sur lesquelles l'effet de transition sera appliqué. |
| `transition` | Super-propriété de transition. Combine `transition-property`, `transition-duration` et `transition-delay`. |

## 10. Transformations

| Propriété | Description |
| :--- | :--- |
| `transform` | Applique un effet de transformation 2D ou 3D à un élément (`rotate()`, `skew()`, `scale()`, `translate()`). |

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

> **Important :** Pour exprimer les mesures des dimensions, se limiter aux unités (**pixel** et **%**).

---

# Annexe JavaScript (JS)

## 1. Opérateurs logiques

| Opérateur | Signification |
| :--- | :--- |
| `&&` *(ou `&` dans le document)* | ET |
| `\|\|` | OU |
| `!` | NON |

## 2. Opérateurs de comparaison

| Opérateur | Signification |
| :--- | :--- |
| `==` | Égal |
| `!=` | Différent |
| `>` | Supérieur à |
| `>=` | Supérieur ou égal à |
| `<` | Inférieur à |
| `<=` | Inférieur ou égal à |

## 3. Opérateurs arithmétiques

| Opérateur | Signification |
| :--- | :--- |
| `+` | Addition |
| `-` | Soustraction |
| `*` | Multiplication |
| `/` | Division |
| `%` | Reste de la division euclidienne |

## 4. Entrées et Sorties

### Méthodes pour afficher une sortie

| Méthode | Description |
| :--- | :--- |
| `alert()` | Affiche un message dans une boîte de dialogue. |

> **Note \*** : Pour afficher/modifier un contenu dynamique, on peut utiliser la propriété `innerHTML` d'un élément HTML.

### Méthode pour saisir une entrée

| Méthode | Description |
| :--- | :--- |
| `prompt()` | Affiche une boîte de dialogue avec une zone de saisie. |

## 5. Fonctions / Méthodes JS de conversion et vérification

| Fonction / Méthode | Description |
| :--- | :--- |
| `isNaN(ch)` | Retourne `true` si l'argument `ch` n'est pas convertible en un nombre, sinon retourne `false`. |
| `Number(ch)` | Convertit une chaîne `ch` en un nombre\*. |
| `parseFloat(ch)` | Convertit une chaîne `ch` en un réel. |
| `parseInt(ch [,b])` | Convertit une chaîne `ch` en un entier exprimé dans la base `b`. |
| `String(a)` | Convertit la valeur `a` en une chaîne. |

> **Note \*** : Si la conversion n'est pas possible, la fonction retourne `NaN`.

## 6. Méthodes de l'objet Math (`Math`)

| Méthode | Description |
| :--- | :--- |
| `abs(x)` | Retourne la valeur absolue. |
| `sqrt(x)` | Retourne la racine carrée. |
| `round(x)` | Retourne l'entier le plus proche. |
| `trunc(x)` | Retourne la troncature entière d'un nombre en retirant sa partie décimale. |
| `random()` | Retourne un réel aléatoire dans `[0, 1[`. |

## 7. Méthodes pour sélectionner des éléments HTML

| Méthode | Description |
| :--- | :--- |
| `document.getElementById()` | Permet de sélectionner un élément unique en fonction de son identifiant. |
| `document.getElementsByName()` | Permet de sélectionner tous les éléments ayant le même nom. |

## 8. L'objet Array

| Propriété / Syntaxe | Description |
| :--- | :--- |
| `length` | Propriété qui représente le nombre d'éléments dans un tableau. |
| `[ ]` | Littéraux de tableau à utiliser pour créer un tableau. |

## 9. Les chaînes de caractères (`ch` étant une chaîne)

| Opérateur / Méthode / Propriété | Description |
| :--- | :--- |
| `+` | Opérateur de concaténation. |
| `ch.length` | Propriété qui retourne la longueur de `ch`. |
| `ch.indexOf(ch1 [,p])` | Retourne la position de la 1ʳᵉ occurrence de `ch1` dans `ch`, en effectuant la recherche à partir de la position `p` (sinon `-1`). |
| `ch[p]` | Accède au caractère d'indice `p` dans la chaîne de caractères `ch`. |
| `ch.lastIndexOf(ch1 [,p])` | Retourne la position de la dernière occurrence de `ch1` dans `ch` à partir de la position `p`. |
| `ch.substring(d [, f])` | Retourne une sous-chaîne de `ch` de la position `d` à la position `f` (non incluse). |
| `ch.replace(ch1, ch2)` | Retourne une chaîne dans laquelle la 1ʳᵉ occurrence de `ch1` dans `ch` est remplacée par `ch2`. |
| `ch.toLowerCase()` | Retourne une nouvelle chaîne de caractères dans laquelle toutes les lettres de `ch` sont converties en minuscules. |
| `ch.toUpperCase()` | Retourne une nouvelle chaîne de caractères dans laquelle toutes les lettres de `ch` sont converties en majuscules. |
| `ch.trim()` | Retourne une nouvelle chaîne de caractères obtenue après suppression des espaces situés au début et à la fin de `ch`. |
| `String.fromCharCode(num, …, numN)` | Retourne une chaîne formée par la concaténation des résultats de conversion des codes ASCII passés en paramètres. |
| `ch.charCodeAt(p)` | Retourne le code ASCII du caractère existant à la position `p`. |

## 10. L'objet Date (`d` étant une date)

| Constructeur / Méthode | Description |
| :--- | :--- |
| `new Date()` | Retourne la date courante. |
| `new Date(ch)` | Retourne un objet `Date` à partir d'une chaîne de caractères `ch` représentant une date. |
| `d.getDate()` | Retourne le jour du mois (entre 1 et 31). |
| `d.getMonth()` | Retourne le numéro du mois (entre 0 et 11). |
| `d.getFullYear()` | Retourne la valeur de l'année sur 4 chiffres. |
| `d.toString()` | Retourne une chaîne de caractères représentant la date `d`. |

## 11. Modification du contenu, des attributs ou des styles des éléments HTML

- `element.attribut = valeur` : Change la valeur de l'attribut d'un élément HTML.
  *Se limiter à la manipulation des attributs : `value`, `checked`, `disabled`, `readonly`, `src`, `muted`, `hidden`.*
- `element.style.propriété = valeur` : Change le style d'un élément HTML.
  *Se limiter à la manipulation des propriétés : `color`, `background`, `border`, `font`, `width`, `height`, `visibility`.*
- `element.méthode()` : Effectue une action sur un élément HTML.
  *Se limiter à la manipulation des méthodes : `play()`, `pause()`.*
- *Pour une liste déroulante (`<select>`), utiliser la propriété `selectedIndex` pour récupérer l'indice de l'option sélectionnée.*

---

# Annexe PHP

## 1. Types de données / d'objets

| Type | Description |
| :--- | :--- |
| `int` | Entier |
| `float` | Réel |
| `string` | Chaîne de caractères |
| `bool` | Booléen |
| `array` | Tableau |

## 2. Opérateurs de transtypage (Cast)

| Cast | Description |
| :--- | :--- |
| `(int)` | Convertit une variable en entier. |
| `(float)` | Convertit une variable en réel. |
| `(string)` | Convertit une variable en chaîne. |
| `(bool)` | Convertit une variable en booléen. |
| `(array)` | Convertit une variable en tableau. |

## 3. Opérateurs logiques

| Opérateur | Signification |
| :--- | :--- |
| `&&` | Et |
| `\|\|` | Ou |
| `!` | Non |

## 4. Opérateurs de comparaison

| Opérateur | Signification |
| :--- | :--- |
| `==` | Égal à |
| `!=` ou `<>` | Différent de |
| `<` | Inférieur à |
| `<=` | Inférieur ou égal à |
| `>` | Supérieur |
| `>=` | Supérieur ou égal à |

## 5. Opérateurs arithmétiques

| Opérateur | Signification |
| :--- | :--- |
| `+` | Addition |
| `-` | Soustraction |
| `*` | Multiplication |
| `/` | Division |
| `%` | Le reste de la division Euclidienne |

## 6. Autres opérateurs

| Opérateur | Signification |
| :--- | :--- |
| `=` | Affectation |
| `.` | Concaténation |

## 7. Fonctions mathématiques

| Fonction | Description |
| :--- | :--- |
| `abs()` | Retourne la valeur absolue d'un nombre. |
| `sqrt()` | Retourne la racine carrée d'un nombre. |
| `round()` | Retourne la valeur arrondie d'un nombre. |
| `rand()` | Retourne un nombre aléatoire. |

## 8. Fonctions sur les chaînes de caractères

| Fonction | Description |
| :--- | :--- |
| `ord()` | Retourne le code ASCII du 1ᵉʳ caractère de l'argument. |
| `chr()` | Retourne le caractère dont le code ASCII est passé comme argument. |
| `strlen()` | Retourne la longueur d'une chaîne. |
| `substr()` | Retourne une sous-chaîne. |
| `strpos()` | Retourne la position de la première occurrence du 2ᵉ argument dans le 1ᵉʳ. |
| `str_replace()` | Retourne une nouvelle chaîne de caractères après remplacement, dans un seul parcours, d'une ou plusieurs occurrences d'une sous-chaîne par une autre. |
| `strtolower()` | Retourne une nouvelle chaîne de caractères dans laquelle toutes les lettres de l'argument sont converties en minuscule. |
| `strtoupper()` | Retourne une nouvelle chaîne de caractères dans laquelle toutes les lettres de l'argument sont converties en majuscule. |
| `trim()` | Retourne une nouvelle chaîne de caractères obtenue après suppression des espaces situés au début et à la fin de l'argument. |

## 9. Fonctions de Date / Heure

| Fonction | Description |
| :--- | :--- |
| `date()` | Formate une date et la retourne sous forme de chaîne. |
| `time()` | Retourne l'heure actuelle en nombre de secondes. |
| `checkdate()` | Vérifie la validité d'une date. |
| `strtotime()` | Transforme une chaîne contenant une date en timestamp.<br>*(timestamp : nombre de secondes écoulées entre une date donnée et le 1ᵉʳ janvier 1970 à 00:00:00).* |

**Exemple :**
```php
echo strtotime("15 october 2026");
// Affiche : 1792022400
```

## 10. Fonctions sur les tableaux

| Fonction | Description |
| :--- | :--- |
| `count()` | Retourne le nombre d'éléments d'un tableau. |
| `array()` | Crée un tableau à partir d'une liste de valeurs. |

## 11. Fonctions PHP pour MySQL (Extension MySQLi - Interface procédurale)

> **Directive :** Utiliser les fonctions fournies par l'extension MySQLi dans son interface procédurale.

| Fonction | Description |
| :--- | :--- |
| `mysqli_connect()` | Ouvre une connexion à un serveur MySQL et sélectionne une base de données MySQL. |
| `mysqli_query()` | Exécute une requête SQL à la base de données. |
| `mysqli_num_rows()` | Renvoie le nombre d'enregistrements résultants d'une requête de type `SELECT`. |
| `mysqli_affected_rows()` | Retourne le nombre de lignes affectées par la dernière requête SQL. |
| `mysqli_fetch_row()` | Retourne une ligne de résultat sous la forme d'un tableau indexé (`0, 1, …`). |
| `mysqli_fetch_array()` | Retourne une ligne de résultat sous la forme d'un tableau (associatif ou numérique). |
| `mysqli_error()` | Retourne une chaîne décrivant la dernière erreur. |
| `mysqli_close()` | Ferme la connexion MySQLi. |

## 12. Structures de langage

| Mot-clé | Description |
| :--- | :--- |
| `echo` | Affiche une ou plusieurs expressions. |

## 13. Variables superglobales

| Variable | Description |
| :--- | :--- |
| `$_GET` | Tableau associatif des valeurs passées au script courant via les paramètres d'URL. |
| `$_POST` | Tableau associatif des valeurs passées au script courant via le protocole HTTP et la méthode `POST`. |

## 14. Fonctions diverses

| Fonction | Description |
| :--- | :--- |
| `die()` | Affiche un message et termine le script courant. |
| `isset()` | Vérifie si une variable est définie. |
| `require()` | Inclut et exécute le fichier spécifié en argument. |

---

# Annexe SQL

## 1. Types de données

| Type | Description |
| :--- | :--- |
| `INT` | Entier |
| `DECIMAL` | Réel |
| `CHAR` | Chaîne de caractères de longueur fixe. |
| `VARCHAR` | Chaîne de caractères de longueur variable dont la longueur maximale fixée. |
| `TEXT` | Chaîne de caractères de longueur variable. |
| `DATE` | Date. |
| `TIME` | Temps. |
| `DATETIME` | Date Heure. |
| `Enum` | Définit une liste de valeurs prédéfinies. |

## 2. Opérateurs de comparaison

| Opérateur | Signification |
| :--- | :--- |
| `=` | Égale à |
| `<>` | Différent de |
| `>` | Supérieur à |
| `<` | Inférieur à |
| `>=` | Supérieur ou égale à |
| `<=` | Inférieur ou égale à |
| `IN` | Dans |
| `BETWEEN` | Entre deux valeurs d'un intervalle. |
| `LIKE` | Recherche de motif/valeur. |
| `IS NULL` | Permet de vérifier si une colonne contient la valeur NULL. |
| `ANY` | Utilisé avec une sous-requête pour comparer une valeur à au moins une des valeurs retournées par cette sous-requête. |

## 3. Opérateurs logiques

| Opérateur | Signification |
| :--- | :--- |
| `AND` | ET |
| `OR` | OU |
| `NOT` | NON |

## 4. Fonctions définies sur le type date

| Fonction | Description |
| :--- | :--- |
| `DATE()` | Retourne une date extraite à partir d'une chaîne contenant une valeur au format DATE ou DATETIME. |
| `DAY()` | Retourne le jour. |
| `MONTH()` | Retourne le mois. |
| `YEAR()` | Retourne l'année. |
| `NOW()` | Retourne la date et l'heure courantes. |
| `ADDDATE` | Ajoute une durée spécifiée à une date donnée. |
| `DATEDIFF` | Retourne la différence en jours entre deux dates. |

## 5. Fonctions d'agrégation

| Fonction | Description |
| :--- | :--- |
| `AVG()` | Retourne la moyenne. |
| `COUNT()` | Retourne le nombre d'enregistrements. |
| `MAX()` | Retourne le maximum. |
| `MIN()` | Retourne le minimum. |
| `SUM()` | Retourne la somme. |

## 6. Contraintes d'intégrité

| Contrainte | Description |
| :--- | :--- |
| `NOT NULL` | Interdit une valeur nulle. |
| `DEFAULT` | Attribut une valeur par défaut. |
| `CHECK` | Spécifie que les valeurs de la colonne doivent respecter une condition. |
| `PRIMARY KEY` | Définit une clé primaire. |
| `UNIQUE` | Spécifie l'unicité des valeurs d'une colonne. |
| `FOREIGN KEY` | Définit une clé étrangère. |
| `REFERENCES` | Fait référence à une clé primaire d'une autre table. |
| `ON UPDATE CASCADE` | Met à jour la clé étrangère en cas de mise à jour de la clé primaire. |
| `ON DELETE CASCADE` | Supprime automatiquement tous les enregistrements de la table fille suite à la suppression de l'enregistrement correspondant de la table mère. |

## 7. Propriété de colonne

| Propriété | Description |
| :--- | :--- |
| `AUTO_INCREMENT` | Attribue automatiquement une valeur numérique croissante. |

## 8. Définition des données (LDD - Langage de Définition de Données)

| Commande SQL | Description |
| :--- | :--- |
| `CREATE DATABASE nom` | Crée une base de données. |
| `DROP DATABASE nom` | Supprime une base de données. |
| `CREATE TABLE table1 (`<br>`colonne1 type [contrainte],`<br>`colonne2 type [contrainte], …`<br>`[[CONSTRAINT] [nom] [contrainte], … ] )` | Crée une table. |
| `ALTER TABLE table1 ADD colonne type [contrainte]` | Ajoute une colonne à une table. |
| `ALTER TABLE table1 DROP COLUMN colonne` | Supprime une colonne. |
| `ALTER TABLE table1 ALTER¹ COLUMN colonne type` | Modifie le type d'une colonne.<br>*(¹ Il est possible d'utiliser `MODIFY` au lieu de `ALTER`).* |
| `ALTER TABLE table1 RENAME² COLUMN nom1 TO nom2` | Modifie le nom d'une colonne.<br>*(² Il est possible d'utiliser `CHANGE`).* |
| `ALTER TABLE table1 ADD CONSTRAINT [nom] contrainte` | Ajoute une contrainte sur une colonne d'une table. |
| `ALTER TABLE table1 DROP CONSTRAINT nom` | Supprime une contrainte. |
| `DROP TABLE table1` | Supprime une table. |

## 9. Manipulation des données (LMD - Langage de Manipulation de Données)

### SELECT

```sql
SELECT [DISTINCT] expression [, col, ... ou *] [[AS] alias]
FROM table1 [[AS] alias] [, table2, ...] 
[WHERE condition] 
[GROUP BY critère]
[HAVING condition]
[ORDER BY expression [ASC/DESC]] 
[LIMIT debut, nombre]
```

| Clause / Élément | Rôle |
| :--- | :--- |
| `SELECT [DISTINCT] expression` | Spécification des colonnes du résultat |
| `FROM table1 ...` | Spécification des tables |
| `[WHERE condition]` | Condition |
| `[GROUP BY critère]` | Organisation du résultat en groupes |
| `[HAVING condition]` | Application d'un filtre |
| `[ORDER BY expression [ASC/DESC]]` | Tri du résultat |
| `[LIMIT debut, nombre]` | Limitation de nombre de lignes retournées |

### INSERT INTO

```sql
INSERT INTO table [(liste colonnes)] 
VALUES (liste valeurs)
```
*Insertion des données dans une table.*

### UPDATE

```sql
UPDATE table1 
SET colonne = expression 
[WHERE condition]
```
*Modification des valeurs d'une colonne.*

### DELETE

```sql
DELETE FROM table1 
[WHERE condition]
```
*Suppression des enregistrements d'une table.*
