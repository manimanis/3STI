# Annexe HTML5
*Aide Pédagogique – Informatique – 3ᵉ année SI (Matière : STI) – Septembre 2026*

---

## 1. Éléments de 1ᵉʳ niveau

| Élément | Description |
| :--- | :--- |
| `<html>` | Représente la racine d'un document HTML. |
| `<head>` | Conteneur de métadonnées placé entre la balise `<html>` et la balise `<body>`. |
| `<body>` | Définit le corps du document. |

---

## 2. Éléments d'en-tête

| Élément | Description | Attributs |
| :--- | :--- | :--- |
| `<link>` | Définit la relation entre le document actuel et une ressource externe. | `href`, `rel`, `type` |
| `<meta>` | Définit les métadonnées du document. | `charset`, `name`, `content` |
| `<script>` | Intègre un script côté client (JavaScript). | `src`, `type` |
| `<style>` | Définit les informations de style (CSS) pour un document. | `type`, `media` |
| `<title>` | Définit le titre du document. | — |

---

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

---

## 4. Éléments de structuration de texte et média

| Élément | Description | Attributs |
| :--- | :--- | :--- |
| `<p>` | Définit un paragraphe. | — |
| `<cite>` | Définit le titre d'une œuvre. | — |
| `<u>` | Marque un texte présentant une annotation non textuelle. | — |
| `<em>` | Marque un texte avec une emphase particulière. | — |
| `<strong>` | Marque un texte important. | — |
| `<source>` | Spécifie plusieurs ressources multimédias pour les éléments multimédias. | `src`, `type`, `media` |
| `<hn>` | Définit un titre de niveau n (de 1 à 6 : `<h1>` à `<h6>`). | — |
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

---

## 5. Conteneurs

| Élément | Description | Attributs |
| :--- | :--- | :--- |
| `<span>` | Regroupe des éléments dans un bloc de contenu en ligne (inline). | — |
| `<div>` | Grouper plusieurs éléments HTML de type bloc. | — |
| `<iframe>` | Définit un cadre en ligne (cadre imbriqué). | `src`, `name` |

---

## 6. Listes

| Élément | Description | Attributs |
| :--- | :--- | :--- |
| `<ul>` | Définit une liste à puces (non ordonnée). | — |
| `<ol>` | Définit une liste ordonnée (numérotée). | `reversed`, `type`, `start` |
| `<li>` | Définit un élément dans une liste. | — |

---

## 7. Tableaux

| Élément | Description | Attributs |
| :--- | :--- | :--- |
| `<table>` | Définit un tableau. | — |
| `<thead>` | Définit l'en-tête d'un tableau. | — |
| `<tbody>` | Définit le corps d'un tableau. | — |
| `<tfoot>` | Définit le pied d'un tableau. | — |
| `<caption>` | Définit une légende du tableau. | — |
| `<tr>` | Définit une ligne dans un tableau. | — |
| `<th>` | Définit une cellule d'en-tête dans un tableau. | `rowspan`, `colspan` |
| `<td>` | Définit une cellule de données dans un tableau. | `rowspan`, `colspan` |

---

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

---

## 9. Attributs globaux

| Attribut | Description |
| :--- | :--- |
| `class` | Spécifie un nom de classe pour un élément. |
| `hidden` | Renseigne la visibilité d'un élément. |
| `id` | Spécifie un identifiant unique pour un élément HTML. |
| `lang` | Spécifie la langue du contenu de l'élément. |
| `style` | Spécifie un style en ligne (CSS). |
| `title` | Spécifie des informations supplémentaires sur un élément (info-bulle). |

---

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

### Types et attributs de l'élément `<input>`

| Types d'élément | Attributs génériques | Attributs spécifiques |
| :--- | :--- | :--- |
| `button`, `reset`, `submit` | `name`, `value`, `disabled` | — |
| `text` | `name`, `value`, `placeholder`, `readonly`, `required`, `disabled`, `list` | — |
| `email`, `tel`, `password` | `name`, `value`, `placeholder`, `readonly`, `required`, `disabled` | — |
| `number` | `name`, `value`, `readonly`, `required`, `disabled`, `step` | `min`, `max` |
| `range` | `name`, `value`, `disabled`, `step` | `min`, `max` |
| `datetime-local`, `date`, `time` | `name`, `value`, `required`, `disabled` | `min`, `max` |
| `checkbox`, `radio` | `name`, `value`, `required`, `disabled` | `checked` |
