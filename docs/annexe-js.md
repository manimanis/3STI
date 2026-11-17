# Annexe JavaScript (JS)
*Aide Pédagogique – Informatique – 3ᵉ année SI (Matière : STI) – Septembre 2026*

---

## 1. Opérateurs logiques

| Opérateur | Signification |
| :--- | :--- |
| `&&` *(ou `&` dans le document)* | ET logique |
| `\|\|` | OU logique |
| `!` | NON logique |

---

## 2. Opérateurs de comparaison

| Opérateur | Signification |
| :--- | :--- |
| `==` | Égal |
| `!=` | Différent |
| `>` | Supérieur à |
| `>=` | Supérieur ou égal à |
| `<` | Inférieur à |
| `<=` | Inférieur ou égal à |

---

## 3. Opérateurs arithmétiques

| Opérateur | Signification |
| :--- | :--- |
| `+` | Addition |
| `-` | Soustraction |
| `*` | Multiplication |
| `/` | Division |
| `%` | Reste de la division euclidienne (modulo) |

---

## 4. Entrées et Sorties

### Méthodes pour afficher une sortie

| Méthode | Description |
| :--- | :--- |
| `alert(message)` | Affiche un message dans une boîte de dialogue. |

> **Note \*** : Pour afficher ou modifier un contenu dynamique dans la page, on peut utiliser la propriété `innerHTML` d'un élément HTML.

### Méthode pour saisir une entrée

| Méthode | Description |
| :--- | :--- |
| `prompt(message)` | Affiche une boîte de dialogue avec une zone de saisie. |

---

## 5. Fonctions / Méthodes JS de conversion et vérification

| Fonction / Méthode | Description |
| :--- | :--- |
| `isNaN(ch)` | Retourne `true` si l'argument `ch` n'est pas convertible en un nombre, sinon retourne `false`. |
| `Number(ch)` | Convertit une chaîne `ch` en un nombre\*. |
| `parseFloat(ch)` | Convertit une chaîne `ch` en un réel (flottant). |
| `parseInt(ch [, b])` | Convertit une chaîne `ch` en un entier exprimé dans la base `b`. |
| `String(a)` | Convertit la valeur `a` en une chaîne. |

> **Note \*** : Si la conversion n'est pas possible, la fonction retourne `NaN` (*Not a Number*).

---

## 6. Méthodes de l'objet Math (`Math`)

| Méthode | Description |
| :--- | :--- |
| `Math.abs(x)` | Retourne la valeur absolue. |
| `Math.sqrt(x)` | Retourne la racine carrée. |
| `Math.round(x)` | Retourne l'entier le plus proche (arrondi). |
| `Math.trunc(x)` | Retourne la troncature entière d'un nombre en retirant sa partie décimale. |
| `Math.random()` | Retourne un réel pseudo-aléatoire dans l'intervalle `[0, 1[`. |

---

## 7. Méthodes pour sélectionner des éléments HTML

| Méthode | Description |
| :--- | :--- |
| `document.getElementById(id)` | Permet de sélectionner un élément unique en fonction de son identifiant (`id`). |
| `document.getElementsByName(nom)` | Permet de sélectionner tous les éléments ayant le même nom (`name`). |

---

## 8. L'objet Array

| Propriété / Syntaxe | Description |
| :--- | :--- |
| `tab.length` | Propriété qui représente le nombre d'éléments dans un tableau. |
| `[ ]` | Littéral de tableau utilisé pour créer un tableau (ex. : `let t = [];`). |

---

## 9. Les chaînes de caractères (`ch` étant une chaîne)

| Opérateur / Méthode / Propriété | Description |
| :--- | :--- |
| `+` | Opérateur de concaténation de chaînes. |
| `ch.length` | Propriété qui retourne la longueur de `ch`. |
| `ch.indexOf(ch1 [, p])` | Retourne la position de la 1ʳᵉ occurrence de `ch1` dans `ch`, en effectuant la recherche à partir de la position `p` (sinon `-1`). |
| `ch[p]` | Accède au caractère d'indice `p` dans la chaîne de caractères `ch`. |
| `ch.lastIndexOf(ch1 [, p])` | Retourne la position de la dernière occurrence de `ch1` dans `ch` à partir de la position `p`. |
| `ch.substring(d [, f])` | Retourne une sous-chaîne de `ch` de la position `d` à la position `f` (non incluse). |
| `ch.replace(ch1, ch2)` | Retourne une chaîne dans laquelle la 1ʳᵉ occurrence de `ch1` dans `ch` est remplacée par `ch2`. |
| `ch.toLowerCase()` | Retourne une nouvelle chaîne de caractères dans laquelle toutes les lettres de `ch` sont converties en minuscules. |
| `ch.toUpperCase()` | Retourne une nouvelle chaîne de caractères dans laquelle toutes les lettres de `ch` sont converties en majuscules. |
| `ch.trim()` | Retourne une nouvelle chaîne de caractères obtenue après suppression des espaces situés au début et à la fin de `ch`. |
| `String.fromCharCode(num, …, numN)` | Retourne une chaîne formée par la concaténation des résultats de conversion des codes ASCII passés en paramètres. |
| `ch.charCodeAt(p)` | Retourne le code ASCII du caractère existant à la position `p`. |

---

## 10. L'objet Date (`d` étant une date)

| Constructeur / Méthode | Description |
| :--- | :--- |
| `new Date()` | Retourne la date courante. |
| `new Date(ch)` | Retourne un objet `Date` à partir d'une chaîne de caractères `ch` représentant une date. |
| `d.getDate()` | Retourne le jour du mois (entre 1 et 31). |
| `d.getMonth()` | Retourne le numéro du mois (entre 0 et 11). |
| `d.getFullYear()` | Retourne la valeur de l'année sur 4 chiffres. |
| `d.toString()` | Retourne une chaîne de caractères représentant la date `d`. |

---

## 11. Modification du contenu, des attributs ou des styles des éléments HTML

### Modification des attributs
```javascript
element.attribut = valeur;
```
*Change la valeur de l'attribut d'un élément HTML.*
> **Limitation au programme :** Se limiter à la manipulation des attributs :
> `value`, `checked`, `disabled`, `readonly`, `src`, `muted`, `hidden`.

### Modification des styles
```javascript
element.style.propriété = valeur;
```
*Change le style d'un élément HTML.*
> **Limitation au programme :** Se limiter à la manipulation des propriétés :
> `color`, `background`, `border`, `font`, `width`, `height`, `visibility`.

### Méthodes d'action
```javascript
element.méthode();
```
*Effectue une action sur un élément HTML.*
> **Limitation au programme :** Se limiter à la manipulation des méthodes :
> `play()`, `pause()`.

### Cas des listes déroulantes (`<select>`)
> Pour une liste déroulante (`<select>`), utiliser la propriété `selectedIndex` pour récupérer l'indice de l'option sélectionnée.
