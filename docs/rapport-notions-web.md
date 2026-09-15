# Rapport d'audit : Notions Web non abordées dans le site

- **Date du rapport** : 15 septembre 2026
- **Référentiel de comparaison** : [sti2024.md](file:///c:/xampp-school/htdocs/3STI/docs/sti2024.md) (Programme officiel de 3ᵉ Sciences de l'Informatique - 3ᵉ SI)
- **Auteur du site** : Mohamed Anis MANI
- **Périmètre audité** :
  - Cours théoriques : `file01.html` à `file05.html`
  - Activités & TP : `act01.html` à `act10.html`, `prog*.html`
  - Projets d'application : 19 dossiers dans `miniprojets/`
- **Exclusion demandée** : Langage SQL (DML, DDL, contraintes d'intégrité, etc.)

---

## 1. Synthèse globale

L'analyse automatisée et manuelle de l'intégralité du site met en évidence deux niveaux de manquement par rapport aux attentes du programme de 3ᵉ SI :

1. **Notions totalement absentes** : éléments du programme qui n'apparaissent nulle part dans le code (ni dans les cours, ni dans les activités, ni dans les mini-projets).
2. **Notions absentes du cours théorique** : éléments qui sont utilisés ponctuellement dans certains mini-projets pratiques, mais qui ne sont pas formalisés ni expliqués dans les fiches de cours (`file01.html` à `file05.html`).

---

## 2. Analyse détaillée par rapport au référentiel (3ᵉ SI)

### A. HTML5

#### 1. Notions totalement absentes (0 occurrence)
* **Éléments d'en-tête (`<head>`)** :
  * Attribut `media` de `<style>` (ex. `<style media="print">`).
  * Attribut `type` sur `<style>`, `<link>` et `<script>` (ex. `type="text/css"`, `type="text/javascript"`). En HTML5, ils sont devenus optionnels mais figurent expressément dans le document officiel.
* **Structuration de texte et médias** :
  * `<mark>` (surlignage sémantique).
  * `<audio>` ainsi que ses attributs `controls` et `src`.
  * `<address>` (informations de contact de l'auteur/propriétaire).
  * `<cite>` (référence à une œuvre/citation).
  * `<details>` et son attribut `open`.
  * `<summary>` (en-tête du bloc pliable `<details>`).
  * `<output>` (conteneur du résultat d'un calcul ou d'une action utilisateur).
  * Attribut `media` de la balise `<source>`.
* **Listes ordonnées (`<ol>`)** :
  * Attributs spécifiques : `reversed` (numérotation inversée), `type` (1, a, A, i, I), et `start` (valeur de départ).
* **Tableaux (`<table>`)** :
  * `<tfoot>` (pied de tableau récapitulatif).
  * `<caption>` (titre / légende du tableau).
* **Conteneurs & Structure** :
  * Attribut `name` de la balise `<iframe>` (la balise `<iframe>` avec `src` est présente dans `file01.html`, mais l'attribut `name` n'est pas abordé).
* **Formulaires (`<form>`)** :
  * Attribut `target` de la balise `<form>`.
  * Attributs `required` et `disabled` sur `<textarea>`.
  * Attribut `disabled` sur `<select>`.
  * Attribut `size` sur `<select>` et `<option>`.
* **Événements HTML** :
  * Attribut inline `onchange` : dans `file05.html`, l'événement est écouté via `addEventListener("change", ...)`, mais la syntaxe de l'attribut HTML inline `onchange="..."` n'apparaît nulle part.

#### 2. Notions absentes du cours (présentes uniquement dans les mini-projets)
* **`<header>`** : curieusement absent de `file02.html` (qui présente pourtant `nav`, `section`, `article`, `aside` et `footer`), mais utilisé dans le projet `MiniProjet-02/computers-complete`.
* **`<fieldset>` et `<legend>`** : absents de la séance formulaires (`file04.html`), mais présents dans `MiniProjet-07/contact.html` et `MiniProjet-10/sky-complete`.
* **`<sup>`** (exposant) : absent du cours, utilisé dans `MiniProjet-11/nbre_narcissique`.
* **`<hr>`** : absent du cours, présent dans `MiniProjet-09/seance02`.
* **`<textarea readonly>`** et **`<option disabled>`** : présents uniquement dans les TP de validation / exercices pratiques.
* **Événements inline `onfocus`, `onblur`, `onload`** : présents dans `MiniProjet-18/focus_blur.html` et `MiniProjet-19/shapes-area`, mais non formalisés dans le cours `file05.html`.

---

### B. CSS3

#### 1. Notions totalement absentes (0 occurrence)
* **`table-layout`** : gestion de l'algorithme d'agencement du tableau (`fixed` ou `auto`). Mentionné dans `sti2024.md` sous la catégorie *Tableaux*, mais jamais implémenté.

#### 2. Notions absentes du cours (présentes uniquement dans les mini-projets)
* **Sélecteur universel `*`** : très utilisé pour le reset de marges, présent dans `MiniProjet-01` et `MiniProjet-03`, mais non défini dans `file01.html`.
* **`border-collapse`** : indispensable pour les bordures simples d'un tableau (`border-collapse: collapse;`), utilisé dans `MiniProjet-03` et `MiniProjet-11`, mais absent du cours sur les tableaux.
* **`filter`** : propriété d'effet visuel sur les images (`grayscale`, `blur`, etc.), utilisée dans `MiniProjet-06/Rotating-Circle` mais absente du cours.
* **`box-shadow`** : gestion des ombres portées des blocs, présente dans `MiniProjet-01` et `MiniProjet-11`, non formalisée dans le cours sur le modèle de boîte.
* **`opacity`** : transparence d'un élément, utilisée dans `MiniProjet-10`.
* **`float`** : flottement des blocs, présent dans `MiniProjet-01` et `MiniProjet-10`, non expliqué dans le modèle de positionnement du cours.

---

### C. JavaScript

#### 1. Notions totalement absentes (0 occurrence)
* **Manipulation des chaînes de caractères** :
  * `ch.lastIndexOf(ch1, p)` : recherche de la dernière position d'une sous-chaîne.
  * `ch.replace(ch1, ch2)` : remplacement d'une sous-chaîne (seules les librairies tierces comme `highlight.pack.js` l'utilisent en interne).
  * `ch.charAt(p)` : méthode standard d'accès au caractère (le cours et les exercices utilisent exclusivement la notation indicée `ch[p]`).
* **Objet Math** :
  * `Math.round(N)` : arrondi arithmétique à l'entier le plus proche.
  * `Math.trunc(N)` : troncature de la partie décimale.
  *(Seuls `Math.abs` et `Math.random` sont traités dans le site).*

#### 2. Notions absentes du cours (présentes uniquement dans les mini-projets)
* **`String.fromCharCode(...)`** : conversion d'un code ASCII en caractère. Absent du cours `file05.html`, mais très présent dans les exercices de chiffrement (`MiniProjet-11/pwd.js`, `MiniProjet-16/cesar`).
* **`document.getElementsByName("nom")`** : récupération d'éléments par leur attribut `name` (cas typique des groupes de cases `radio`). Présent uniquement dans `MiniProjet-14/form-rappel`, absent de `file05.html` qui ne montre que `getElementById`.
* **`element.checked = true / false`** : modification programmatique de l'état d'une case à cocher ou d'un bouton radio. Utilisé dans `MiniProjet-14/lampes_complete`.
* **`ch.toUpperCase()` et `ch.trim()`** : utilisés dans certains mini-projets (`MiniProjet-09/tirage`), mais non intégrés dans la synthèse sur l'objet String du cours.

---

## 3. Notions Web fondamentales non abordées (hors programme 3ᵉ SI)

Au-delà des exigences spécifiques du programme de 3ᵉ SI, voici les notions fondamentales du développement Web moderne qui ne sont pas abordées sur le site :

### A. CSS moderne & ergonomie
1. **Mise en page native sans framework** :
   * **CSS Flexbox** : le site utilise Bootstrap 5 pour la grille (`row`, `col-md-6`), mais les propriétés natives (`display: flex`, `justify-content`, `align-items`, `gap`, `flex-direction`) ne sont pas enseignées aux élèves.
   * **CSS Grid** (`display: grid`, `grid-template-columns`, `grid-gap`) : totalement absent.
   * **Responsive design natif (Media Queries)** : l'utilisation directe de `@media screen and (max-width: ...)` pour concevoir des sites adaptatifs sans dépendre d'une bibliothèque externe.
2. **Variables CSS (Custom Properties)** :
   * Déclaration (`--primary-color: #007bff;`) et consommation (`var(--primary-color)`), essentielle pour les thèmes clair/sombre.
3. **Pseudo-classes et pseudo-éléments** :
   * Interaction : `:hover`, `:active`, `:focus`, `:focus-within`.
   * Structure : `:first-child`, `:last-child`, `:nth-child(2n+1)`.
   * Pseudo-éléments : `::before`, `::after` (génération de contenu décoratif).

### B. JavaScript moderne & DOM moderne (ES6+)
1. **Sélecteurs DOM modernes** :
   * `document.querySelector()` et `document.querySelectorAll()` qui permettent de cibler n'importe quel élément via un sélecteur CSS.
2. **Manipulation des classes CSS** :
   * L'API `element.classList` (`.add()`, `.remove()`, `.toggle()`, `.contains()`), plus maintenable que la manipulation brute de `element.style`.
3. **Création et manipulation dynamique de nœuds** :
   * `document.createElement()`, `parent.appendChild()`, `element.remove()`.
4. **Stockage côté client (Web Storage API)** :
   * `localStorage` et `sessionStorage` pour persister des états ou des données utilisateur entre les rechargements de page.
5. **Programmation asynchrone & AJAX** :
   * L'API `fetch()` et les Promises pour consommer des API REST ou charger des fichiers JSON distants sans rechargement.
   * La sérialisation / désérialisation avec `JSON.stringify()` et `JSON.parse()`.
6. **Syntaxe moderne (ES6+)** :
   * Les littéraux de gabarits (template literals : `` `Bonjour ${nom}` ``).
   * La déstructuration d'objets et de tableaux (`const { a, b } = obj;`).

### C. Accessibilité (a11y) & SEO
* Les rôles et attributs **WAI-ARIA** (`role="button"`, `aria-label`, `aria-hidden="true"`).
* Les balises sémantiques HTML5 supplémentaires : `<time>`, `<dialog>`, `<picture>`.

---

## 4. Recommandations prioritaires pour enrichir le site (Suivi & Réalisation)

- [x] **1. Compléter [file02.html](file:///c:/xampp-school/htdocs/3STI/file02.html) (Sémantique & Médias)** — **Terminé**
  * **`<header>`** : Précision du rôle structurel en binôme avec `<footer>` pour les entêtes de page ou de section.
  * **`<mark>`** : Présentation et widget interactif de démonstration du surlignage.
  * **`<details>` & `<summary>`** : Présentation et widget interactif avec l'attribut booléen `open`.
  * **`<audio>`** : Intégration du lecteur multimédia avec attributs `controls`, `src` et balise `<source>`.

- [x] **2. Compléter [file04.html](file:///c:/xampp-school/htdocs/3STI/file04.html) (Formulaires & Tableaux)** — **Terminé**
  * **`<fieldset>` & `<legend>`** : Ajout d'une ligne dédiée dans le tableau des composants standards pour le regroupement logique des champs.
  * **Attributs `disabled` & `readonly`** : Présentation des états de champs dans le tableau des composants.
  * **`<caption>` & `<tfoot>`** : Ajout d'une sous-section et d'un exemple complet de tableau HTML structuré (`<caption>`, `<thead>`, `<tbody>`, `<tfoot>`).

- [x] **3. Compléter [file05.html](file:///c:/xampp-school/htdocs/3STI/file05.html) (JavaScript)** — **Terminé**
  * **`document.getElementsByName("nom")`** : Ajout dans la liste des méthodes d'accès au DOM pour manipuler les collections de boutons radio.
  * **Méthodes de chaînes de caractères** : Ajout d'un tableau récapitulatif intégrant `ch.charAt(p)`, `ch.replace(ch1, ch2)`, `ch.lastIndexOf(ch1, p)`, `String.fromCharCode(code)`, `ch.toUpperCase()`, `ch.toLowerCase()` et `ch.trim()`.
  * **Objet `Math` & arrondis** : Ajout d'une section dédiée explicitant `Math.round(N)`, `Math.trunc(N)`, `Math.floor(N)`, `Math.abs(N)` et `Math.random()`.

- [x] **4. Mettre à jour les styles CSS dans [file01.html](file:///c:/xampp-school/htdocs/3STI/file01.html)** — **Terminé**
  * **Sélecteur universel `*`** : Explicitation de la syntaxe et de son utilité principale (CSS Reset des marges et remplissages).
  * **`border-collapse: collapse;`** : Ajout de la propriété spécifique aux tableaux après la propriété `border`.

