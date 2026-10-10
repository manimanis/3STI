# STI — Systèmes & Technologies de l'Informatique
### Classe : 3<sup>ème</sup> Sciences de l'Informatique
### Série : Développement Web (HTML5 & CSS3)
**Formulation selon l'approche pédagogique de M. Hatem Romdhane**  
**Sujet d'application : Portail Automobile « Test Drive »**

---

## 🎯 Objectifs :
* Structuration sémantique avancée d'une application web en HTML5 (`<header>`, `<nav>`, `<section>`, `<footer>`, `<iframe>`, `<table>`).
* Conception de formulaires conformes au programme officiel avec contrôle et variété des champs de saisie (`<fieldset>`, `<legend>`, `<input>`, `<select>`, `<textarea>`).
* Mise en page et stylisation complète en CSS3 sans recourir à Flexbox ni Grid (utilisation de `float`, `inline-block`, `table` et du modèle de boîte).
* Intégration de polices typographiques locales via `@font-face` (`fonts.css`).
* Intégration de scripts JavaScript fournis pour la dynamisation de l'interface (gestion de l'état actif du menu et calcul interactif des notes).

---

## ⚠️ Important :
* **Dossier de travail :** Utilisez le dossier fourni nommé **`TODO`** contenant les ressources du projet. Vous devez y enregistrer tous vos fichiers solutions :
  * `index.html` (portail principal)
  * `acceuil.html` (page d'accueil intégrée)
  * `enregistrement.html` (formulaire d'enregistrement d'un testeur)
  * `evaluation.html` (formulaire d'évaluation d'un modèle de véhicule)
  * `manifestation.html` (formulaire d'évaluation d'une manifestation)
  * `style.css` (feuille de style principale)
* **Ressources fournies dans le dossier `TODO` :**
  * Le sous-dossier `images/` contenant les illustrations (`bugatti.jpg`, `cockpit.jpg`, `manifestation.jpg`).
  * Le sous-dossier `fonts/` et la feuille de style `fonts.css` (déclarant les polices *Outfit* et *Plus Jakarta Sans*).
  * Le sous-dossier `scripts/` contenant les codes JavaScript nécessaires (`menu.js` et `manifestation.js`).
* **Travail demandé à l'élève :**
  * L'élève doit **tout construire par lui-même** : l'ensemble des pages HTML ainsi que la feuille de style `style.css`.
  * **Seul le code JavaScript est fourni** dans le dossier `TODO/scripts/` ; l'élève se contentera de l'inclure dans les pages correspondantes via la balise `<script>`.
* **Liaison des styles :** Toutes les pages HTML créées doivent obligatoirement lier dans leur élément `<head>` les deux feuilles de style suivantes :
  ```html
  <link rel="stylesheet" href="fonts.css">
  <link rel="stylesheet" href="style.css">
  ```

---

## 📋 Présentation Générale du Projet

Une société de vente et d'essais de véhicules haut de gamme souhaite mettre en place un portail web intitulé **« Test Drive »**. Ce site permet aux passionnés d'automobile de :
1. Consulter la page d'accueil présentant les véhicules d'exception.
2. S'enregistrer en tant que conducteur testeur agréé.
3. Évaluer les performances des modèles testés sur circuit selon des critères précis (sécurité, conduite, confort).
4. Évaluer l'organisation des manifestations et journées d'essais organisées sur piste.

Le portail repose sur une navigation fluide à travers un cadre intégré (`<iframe>`) central.

---

## 📝 Exercice 1 : Portail Principal et Page d'Accueil (60 min — 10 pts)

### 1) Page du portail : `index.html`

En utilisant l'éditeur **Visual Studio Code**, créer dans votre dossier de travail la page web **`index.html`** en respectant scrupuleusement la structure ci-dessous :

```text
+-------------------------------------------------------------------------+
| .site-container                                                         |
|                                                                         |
| +---------------------------------------------------------------------+ |
| | Zone 1 : <header>                                                   | |
| |   <h1> "Test drive"                                                 | |
| |   <p>  "Centre d'essais et d'évaluation de véhicules de prestige"   | |
| +---------------------------------------------------------------------+ |
|                                                                         |
| +---------------------------------------------------------------------+ |
| | .main-wrapper                                                       | |
| |                                                                     | |
| | +-----------------------------+ +---------------------------------+ | |
| | | Zone 2 : <nav>              | | Zone 3 : <section>              | | |
| | |   <h3> "Menu Navigation"    | |   <iframe                       | | |
| | |   <a> Accueil               | |     src="acceuil.html"          | | |
| | |   <a> Enregistrement        | |     name="zone_affichage"       | | |
| | |   <a> Evaluation modèle     | |     id="zone_affichage">        | | |
| | |   <a> Évaluation manifest.  | |   </iframe>                     | | |
| | +-----------------------------+ +---------------------------------+ | |
| +---------------------------------------------------------------------+ |
|                                                                         |
| +---------------------------------------------------------------------+ |
| | Zone 4 : <footer>                                                   | |
| |   "Copyright © 2026 - 3e Sciences de l'Informatique"                | |
| +---------------------------------------------------------------------+ |
+-------------------------------------------------------------------------+
```

#### Sachant que :
* **Zone 1 (`<header>`) :** Représente l'en-tête du site. Elle contient :
  * Un titre de niveau 1 `<h1>` avec la classe `titre-test-drive` et le texte `"Test drive"`.
  * Un paragraphe `<p>` de classe `site-subtitle` contenant : `"Centre d'essais et d'évaluation de véhicules de prestige"`.
* **Zone 2 (`<nav>`) :** Représente le volet de navigation positionné à gauche. Il contient :
  * Un titre de niveau 3 `<h3>` de classe `nav-title` avec le texte `"Menu Navigation"`.
  * Quatre liens hypertextes ayant pour cible `target="zone_affichage"` :
    1. `"Accueil"` pointant vers `acceuil.html` (possède la classe `active` par défaut).
    2. `"Enregistrement d'un testeur"` pointant vers `enregistrement.html`.
    3. `"Evaluation d'un modèle"` pointant vers `evaluation.html`.
    4. `"Évaluation manifestation"` pointant vers `manifestation.html`.
* **Zone 3 (`<section>`) :** Représente la zone de visualisation positionnée à droite. Elle contient :
  * Un cadre intégré `<iframe>` nommé `zone_affichage` affichant par défaut la page `acceuil.html`.
  * Un texte alternatif dans l'iframe : `"Votre navigateur ne prend pas en charge les cadres intégrés."`.
* **Zone 4 (`<footer>`) :** Représente le pied de page du site. Elle contient la mention :  
  `Copyright &copy; 2026 - 3<sup>e</sup> Sciences de l'Informatique`.
* **Code JavaScript fourni :** À la fin de la page, juste avant `</body>`, insérer le fichier JavaScript fourni `scripts/menu.js` permettant de basculer la classe `active` sur le lien cliqué :
  ```html
  <script src="scripts/menu.js"></script>
  ```

---

### 2) Page d'accueil interne : `acceuil.html`

Créer la page web **`acceuil.html`** destinée à s'afficher à l'intérieur du cadre `<iframe>`.

```text
+-------------------------------------------------------------------------+
| .page-container                                                         |
|   <h2> "Bienvenue dans notre site"                                      |
|   <img src="images/bugatti.jpg" alt="...">                              |
|   <p>  "Pilotez des véhicules d'exception sur circuit fermé..."        |
|   <p>  "Attribuez vos notes sur la sécurité, la tenue de route..."     |
|   <p>  "Inscrivez-vous dès maintenant pour réserver votre session..."   |
+-------------------------------------------------------------------------+
```

#### Sachant que :
* L'ensemble des éléments est enveloppé dans un conteneur `<div class="page-container">`.
* Elle contient un titre de niveau 2 `<h2>` : `"Bienvenue dans notre site"`.
* Elle contient l'image `images/bugatti.jpg` avec un texte alternatif approprié.
* Elle comporte trois paragraphes synthétiques présentant le concept du centre d'essais.

---

### 3) Mise en forme CSS du portail : `style.css`

Créer la feuille de style **`style.css`** puis y saisir les règles CSS nécessaires afin d'appliquer à la structure générale les propriétés suivantes :

| Élément / Sélecteur | Propriétés et Règles CSS |
| :--- | :--- |
| **Sélecteur universel (`*`)** | • Modèle de boîte : `box-sizing: border-box`<br>• Marges externes et internes : `0` |
| **Corps de la page (`body`)** | • Couleur d'arrière-plan : `#f8fafc`<br>• Police de caractères : `'Plus Jakarta Sans', sans-serif`<br>• Couleur du texte : `#0f172a`<br>• Hauteur de ligne (`line-height`) : `1.5`<br>• Marges internes (`padding`) : `16px 12px` |
| **Conteneur global (`.site-container`)** | • Largeur : `96%`<br>• Largeur maximale (`max-width`) : `1040px`<br>• Marges externes : `0 auto` (centré horizontalement) |
| **En-tête (`header`)** | • Bordure : style tiret (`dashed`) de `2px`, couleur `#d4af37`<br>• Coins arrondis : `10px 100px`<br>• Couleur d'arrière-plan : `beige`<br>• Marges internes : `16px 24px`<br>• Marge externe du bas : `16px`<br>• Alignement du texte : centré |
| **Titre principal (`header h1`)** | • Police : `'Outfit', sans-serif`<br>• Taille de police : `2.2rem`<br>• Poids de police : `800` (très gras)<br>• Transformation du texte : majuscules (`uppercase`)<br>• Espacement des lettres (`letter-spacing`) : `4px`<br>• Ombre sur le texte (`text-shadow`) : `rgb(0, 255, 34) 1px 0 10px` |
| **Paragraphes généraux (`p`)** | • Taille de police : `0.86rem`<br>• Couleur : `#64748b`<br>• Marges externes : `4px 0 8px` |
| **Volet de navigation (`nav`) et Section (`section`)** | • Hauteur : `590px`<br>• Bordure : `1px solid #cbd5e1`<br>• Coins arrondis : `7px`<br>• Couleur d'arrière-plan : `#ffffff` |
| **Volet de navigation (`nav`)** | • Largeur : `30%`<br>• Positionnement : flottant à gauche (`float: left`)<br>• Marges internes : `20px 10px`<br>• Alignement du texte : centré |
| **Liens du menu (`nav a`)** | • Type d'affichage : `display: block`<br>• Décoration du texte : aucune (`text-decoration: none`)<br>• Largeur : `200px`<br>• Bordure : `2px dashed #7c3aed`<br>• Couleur d'arrière-plan : `beige`<br>• Coins arrondis : `20px`<br>• Marges internes : `10px`<br>• Marges externes : `15px auto`<br>• Couleur du texte : `#4338ca`<br>• Poids du texte : `600` (semi-gras) |
| **Survol des liens (`nav a:hover`)** | • Couleur d'arrière-plan : `#ede9fe` |
| **Lien actif (`nav a.active`)** | • Couleur d'arrière-plan : `#4f46e5`<br>• Bordure style : continue (`solid`)<br>• Couleur du texte : `#ffffff` |
| **Section réceptrice (`section`)** | • Largeur : `68%`<br>• Positionnement : flottant à droite (`float: right`)<br>• Marges internes : `4px` |
| **Cadre intégré (`iframe`)** | • Largeur : `99%`<br>• Hauteur : `580px`<br>• Bordure : aucune (`border: none`)<br>• Type d'affichage : `display: block`<br>• Marges externes : `0 auto` |
| **Pied de page (`footer`)** | • Annulation des flottements : `clear: both`<br>• Couleur du texte : `red`<br>• Style de police : `italic`<br>• Poids du texte : `600`<br>• Alignement du texte : centré<br>• Marges internes : `18px 0 10px` |
| **Conteneur des sous-pages (`.page-container`)** | • Marges internes : `12px 18px`<br>• Alignement du texte : centré |
| **Titre de bienvenue (`h2`)** | • Police : `'Outfit', sans-serif`<br>• Couleur du texte : `brown`<br>• Décoration : souligné (`text-decoration: underline`)<br>• Taille de police : `1.6rem`<br>• Marge inférieure : `10px` |
| **Image d'accueil (`img`)** | • Largeur : `300px`<br>• Hauteur : `230px`<br>• Ajustement de l'image : `object-fit: cover`<br>• Coins arrondis : `8px`<br>• Affichage : `display: block`<br>• Marges externes : `8px auto` (centrée) |

---

## 📝 Exercice 2 : Formulaire d'Enregistrement d'un Testeur (30 min — 5 pts)

Créer dans votre dossier de travail la page web **`enregistrement.html`** permettant à un nouveau conducteur de s'inscrire pour les sessions d'essais.

```text
+-------------------------------------------------------------------------+
| .page-container                                                         |
|                                                                         |
| <form action="#" method="post">                                         |
|   <fieldset>                                                            |
|     <legend> "Enregistrement d'un testeur :"                            |
|     <p> "Renseignez vos coordonnées pour valider votre inscription..."  |
|                                                                         |
|     <table> (Alignement label à gauche / champ à droite)                |
|       Ligne 1 : N° Permis        -> input text (placeholder, required)  |
|       Ligne 2 : Nom              -> input text (placeholder, required)  |
|       Ligne 3 : Prénom           -> input text (placeholder, required)  |
|       Ligne 4 : E-mail           -> input email (placeholder, required) |
|       Ligne 5 : Date permis      -> input date (required)               |
|       Ligne 6 : Teinte préférée  -> input color (value="#1e293b")       |
|       Ligne 7 : Genre            -> radio Féminin / radio Masculin      |
|       Ligne 8 : Expérience       -> textarea (rows="2")                 |
|     </table>                                                            |
|                                                                         |
|     <div class="row-box">                                               |
|       <input type="checkbox" id="charte"> J'accepte la charte...        |
|     </div>                                                              |
|                                                                         |
|     <div class="form-actions">                                          |
|       <input type="reset" value="Annuler">                              |
|       <input type="submit" value="Ajouter">                             |
|     </div>                                                              |
|   </fieldset>                                                           |
| </form>                                                                 |
+-------------------------------------------------------------------------+
```

### Sachant que :
1. Le formulaire est délimité par une balise `<fieldset>` avec la légende `<legend>` : `"Enregistrement d'un testeur :"`.
2. Pour garantir un alignement soigné sans Flexbox ni Grid, les champs sont organisés au sein d'un tableau `<table>` de 8 lignes :
   * **N° Permis :** Zone de saisie texte, obligatoire (`required`), texte indicatif (`placeholder="Ex: 58/987654"`).
   * **Nom :** Zone de saisie texte, obligatoire, `placeholder="Votre nom"`.
   * **Prénom :** Zone de saisie texte, obligatoire, `placeholder="Votre prénom"`.
   * **E-mail :** Zone de saisie de type `email`, obligatoire, `placeholder="pilote@exemple.tn"`.
   * **Date permis :** Champ de date de type `date`, obligatoire.
   * **Teinte préférée :** Sélecteur de couleur `input type="color"`, valeur par défaut `#1e293b`.
   * **Genre :** Deux boutons radio portant le même attribut `name="genre"`, avec valeurs `"Féminin"` et `"Masculin"`. Le choix Féminin est obligatoire (`required`).
   * **Expérience :** Zone de texte multi-lignes `<textarea>` de 2 lignes (`rows="2"`), `placeholder="Précisez votre expérience sur circuit..."`.
3. Une case à cocher obligatoire (`input type="checkbox" required`) pour l'acceptation de la charte de sécurité : `"J'accepte la charte de sécurité du circuit."`.
4. Deux boutons d'action alignés à droite dans `<div class="form-actions">` :
   * Bouton de réinitialisation `<input type="reset" value="Annuler">`.
   * Bouton de soumission `<input type="submit" value="Ajouter">`.

---

## 📝 Exercice 3 : Formulaire d'Évaluation d'un Modèle (30 min — 5 pts)

Créer la page web **`evaluation.html`** permettant à un testeur d'attribuer une note chiffrée aux véhicules essayés.

```text
+-------------------------------------------------------------------------+
| .page-container                                                         |
|   <img src="images/cockpit.jpg" class="banner-img" alt="...">           |
|                                                                         |
|   <form action="#" method="post">                                       |
|     <fieldset>                                                          |
|       <legend> "Evaluation d'un modele"                                 |
|       <p> "Attribuez une note de 0 à 20 pour chaque critère..."         |
|                                                                         |
|       <table>                                                           |
|         Ligne 1 : N° Permis     -> input text                           |
|         Ligne 2 : Modèle        -> select (6 options dont "Choisir...") |
|         Ligne 3 : Date essai    -> input date                           |
|         Ligne 4 : Teinte testée -> input color (value="#dc2626")        |
|       </table>                                                          |
|                                                                         |
|       <h3> "Notes attribuées"                                           |
|       <table>                                                           |
|         Ligne unique :                                                  |
|           Sécurité : [ /20 ] | Conduite : [ /20 ] | Confort : [ /20 ]   |
|       </table>                                                          |
|                                                                         |
|       <div class="row-box">                                             |
|         Observations : <textarea rows="2">                              |
|       </div>                                                            |
|                                                                         |
|       <div class="row-box">                                             |
|         [ ] Mode Sport activé     [x] Je ne suis pas un robot           |
|       </div>                                                            |
|                                                                         |
|       <div class="form-actions">                                        |
|         <input type="reset" value="Annuler">                            |
|         <input type="submit" value="Valider">                           |
|       </div>                                                            |
|     </fieldset>                                                         |
|   </form>                                                               |
+-------------------------------------------------------------------------+
```

### Sachant que :
1. En haut de la page, afficher la bannière `images/cockpit.jpg` avec la classe `banner-img`.
2. Le formulaire `<fieldset>` a pour légende `<legend>` : `"Evaluation d'un modele"`.
3. Le premier tableau contient :
   * **N° Permis :** Champ texte obligatoire.
   * **Modèle :** Liste déroulante `<select id="modele">` obligatoire proposant 6 options :
     * `"Choisir un modèle"` (valeur vide `""`)
     * `"Bugatti Chiron Super Sport"` (valeur `"bugatti-chiron"`)
     * `"Porsche 911 GT3 RS"` (valeur `"porsche-911"`)
     * `"Ferrari SF90 Stradale"` (valeur `"ferrari-sf90"`)
     * `"Mercedes-AMG GT Black"` (valeur `"mercedes-amg"`)
     * `"BMW M8 Competition"` (valeur `"bmw-m8"`)
   * **Date essai :** Champ de type `date`, obligatoire.
   * **Teinte testée :** Sélecteur de couleur `type="color"`, valeur par défaut `#dc2626`.
4. Un sous-titre de niveau 3 `<h3>` : `"Notes attribuées"`.
5. Un deuxième tableau disposant horizontalement les 3 critères de notation :
   * **Sécurité :** Champ numérique `input type="number"`, de `min="0"` à `max="20"`, `placeholder="/20"`.
   * **Conduite :** Champ numérique `input type="number"`, de `min="0"` à `max="20"`, `placeholder="/20"`.
   * **Confort :** Champ numérique `input type="number"`, de `min="0"` à `max="20"`, `placeholder="/20"`.
6. Une zone de texte `<textarea>` de 2 lignes pour `"Observations du pilote :"`.
7. Deux cases à cocher :
   * `"Mode Sport activé sur piste"` (`type="checkbox"`).
   * `"Je ne suis pas un robot"` (`type="checkbox"`, obligatoire `required`).
8. Deux boutons d'action : `<input type="reset" value="Annuler">` et `<input type="submit" value="Valider">`.

---

## 📝 Exercice 4 : Évaluation d'une Manifestation & JavaScript Fourni (45 min — 10 pts)

Créer la page web **`manifestation.html`** évaluant les manifestations de la société, intégrant le barème interactif par étoiles et la note globale dynamique.

```text
+-------------------------------------------------------------------------+
| .page-container                                                         |
|   <img src="images/manifestation.jpg" class="banner-img" alt="...">     |
|                                                                         |
|   <form action="#" method="post" id="form-manifestation">               |
|     <fieldset>                                                          |
|       <legend class="legend-manifestation">                             |
|         "Évaluation d’une manifestation"                                |
|       </legend>                                                         |
|                                                                         |
|       <table>                                                           |
|         Manifestation : select (VIP, Salon Supercars, Portes Ouvertes)  |
|         Date visite   : input date                                      |
|         E-mail        : input email                                     |
|       </table>                                                          |
|                                                                         |
|       <div>                                                             |
|         <h1 class="titre-colonne">Service</h1>                          |
|         <h1 class="titre-colonne">Note</h1>                             |
|       </div>                                                            |
|                                                                         |
|       <table>                                                           |
|         Accueil     : [range 0-5]  | ★★★★☆                             |
|         Confort     : [range 0-5]  | ★★★★★                             |
|         Signalétique: [range 0-5]  | ★★★☆☆                             |
|         Logistique  : [range 0-5]  | ★★★★☆                             |
|       </table>                                                          |
|                                                                         |
|       <div class="row-box">                                             |
|         Note totale : <span class="total-box">16 / 20</span>            |
|       </div>                                                            |
|                                                                         |
|       <div class="row-box">                                             |
|         Remarques : <textarea rows="2">                                 |
|       </div>                                                            |
|                                                                         |
|       <div class="row-box">                                             |
|         [x] Recevoir les invitations officielles aux prochains salons   |
|       </div>                                                            |
|                                                                         |
|       <div class="form-actions">                                        |
|         <input type="submit" value="Valider">                           |
|         <input type="reset"  value="Annuler">                           |
|       </div>                                                            |
|     </fieldset>                                                         |
|   </form>                                                               |
|   <script src="scripts/manifestation.js"></script>                      |
+-------------------------------------------------------------------------+
```

### Sachant que :
1. La bannière en haut affiche `images/manifestation.jpg` avec la classe `banner-img`.
2. La légende `<legend>` porte la classe `legend-manifestation` avec le texte `"Évaluation d’une manifestation"`.
3. Le premier tableau comprend :
   * **Manifestation :** Liste déroulante `<select>` obligatoire :
     * `"Choisir une manifestation"`
     * `"Journée VIP Test Drive - Circuit Belvédère"`
     * `"Salon Privé Supercars & Hypercars"`
     * `"Journées Portes Ouvertes Testeur Drive"`
   * **Date visite :** Champ de type `date`, obligatoire.
   * **E-mail :** Champ de type `email`, `placeholder="visiteur@test.tn"`.
4. Deux en-têtes de colonnes sont créés au moyen de deux éléments `<h1>` portant la classe `titre-colonne` :
   * Le premier contient le texte `"Service"`.
   * Le deuxième contient le texte `"Note"`.
5. Le deuxième tableau contient les 4 critères d'évaluation avec réglette `input type="range"` (valeurs de 0 à 5) et un conteneur `<td class="stars">` :
   * **Accueil :** curseur `id="note_accueil"`, valeur initiale `4`, étoiles initiales `★★★★☆`, événement `oninput="updateScore()"`.
   * **Confort :** curseur `id="note_confort"`, valeur initiale `5`, étoiles initiales `★★★★★`, événement `oninput="updateScore()"`.
   * **Signalétique :** curseur `id="note_signal"`, valeur initiale `3`, étoiles initiales `★★★☆☆`, événement `oninput="updateScore()"`.
   * **Logistique :** curseur `id="note_logistique"`, valeur initiale `4`, étoiles initiales `★★★★☆`, événement `oninput="updateScore()"`.
6. Un affichage de la note totale :  
   `<span class="total-box" id="note_totale">16 / 20</span>`.
7. Une zone `<textarea>` pour les remarques et suggestions.
8. Une case à cocher pour s'abonner aux invitations (`checked` par défaut).
9. Deux boutons d'action : `<input type="submit" value="Valider">` et `<input type="reset" value="Annuler" onclick="setTimeout(updateScore, 50)">`.
10. **Code JavaScript fourni :** À la fin de la page, juste avant `</body>`, insérer le script fourni `scripts/manifestation.js` qui assure la mise à jour dynamique automatique du total et des étoiles :
    ```html
    <script src="scripts/manifestation.js"></script>
    ```

---

## 🎨 Exercice 5 : Mise en Forme CSS des Formulaires et Éléments Spécifiques (30 min — 10 pts)

Compléter la feuille de style **`style.css`** pour styliser l'ensemble des formulaires et des composants interactifs selon les règles définies ci-dessous :

| Élément / Sélecteur | Propriétés et Règles CSS |
| :--- | :--- |
| **Bannières des pages (`.banner-img`)** | • Largeur : `100%`<br>• Largeur maximale (`max-width`) : `530px`<br>• Hauteur : `85px`<br>• Ajustement : `object-fit: cover`<br>• Coins arrondis : `8px`<br>• Centrage : `margin: 8px auto; display: block;` |
| **Cadre de formulaire (`fieldset`)** | • Bordure : `1px solid #cbd5e1`<br>• Coins arrondis : `10px`<br>• Marges internes (`padding`) : `12px 18px`<br>• Largeur maximale : `530px`<br>• Marges externes : `0 auto`<br>• Alignement du texte : gauche (`text-align: left`) |
| **Légende standard (`legend`)** | • Police : `'Outfit', sans-serif`<br>• Poids du texte : `700` (gras)<br>• Marges internes horizontales : `0 8px`<br>• Taille de police : `1.15rem` |
| **Légende de manifestation (`legend.legend-manifestation`)** | • Couleur du texte : `red`<br>• Taille de police : `20px`<br>• Poids du texte : `bolder` (très gras) |
| **Titres de colonnes (`h1.titre-colonne`)** | • Alignement du texte : centré<br>• Couleur d'arrière-plan : `yellow`<br>• Bordure : style tirets/hachuré (`dashed`) de `3px`, couleur `red`<br>• Largeur : `150px`<br>• Style de police : `italic`<br>• Taille de police : `1.05rem`<br>• Coins arrondis : `6px`<br>• Marges internes : `4px 0`<br>• Type d'affichage : `inline-block`<br>• Marges externes : `4px 10px 6px 0` |
| **Tableaux de formulaires (`table`)** | • Largeur : `100%`<br>• Séparation des bordures : `border-collapse: separate`<br>• Espacement entre lignes : `border-spacing: 0 5px` |
| **Cellules de tableau (`td`)** | • Alignement vertical : centré (`vertical-align: middle`) |
| **Première colonne (`td:first-child`)** | • Largeur fixe : `125px` |
| **Étiquettes (`label`)** | • Taille de police : `0.86rem`<br>• Poids du texte : `600`<br>• Alignement vertical : `middle` |
| **Champs de saisie (`input, select, textarea`)** | • Marges internes : `5px 8px`<br>• Taille de police : `0.86rem`<br>• Bordure : `1px solid #cbd5e1`<br>• Coins arrondis : `5px`<br>• Contour actif (`outline`) : aucun (`none`)<br>• Largeur par défaut : `200px`<br>• Couleur d'accentuation (`accent-color`) : `#4f46e5` |
| **Focus sur les champs (`input:focus, select:focus, textarea:focus`)** | • Couleur de bordure : `#4f46e5` |
| **Champ numérique (`input[type="number"]`)** | • Largeur : `60px` |
| **Curseur de note (`input[type="range"]`)** | • Largeur : `130px`<br>• Alignement vertical : `middle` |
| **Sélecteur de couleur (`input[type="color"]`)** | • Largeur : `36px`<br>• Hauteur : `26px`<br>• Marges internes : `1px`<br>• Curseur : pointeur (`cursor: pointer`)<br>• Alignement vertical : `middle` |
| **Boutons radio et cases à cocher (`input[type="checkbox"], input[type="radio"]`)** | • Largeur : automatique (`width: auto`)<br>• Marge externe droite : `4px` |
| **Zone multi-lignes (`textarea`)** | • Largeur : `100%`<br>• Redimensionnement : vertical uniquement (`resize: vertical`) |
| **Lignes d'options (`.row-box`)** | • Marges externes verticales : `6px 0` |
| **Zone des boutons (`.form-actions`)** | • Alignement du contenu : droite (`text-align: right`)<br>• Marge supérieure : `10px`<br>• Marge interne supérieure : `8px`<br>• Bordure supérieure : `1px solid #f1f5f9` |
| **Boutons (`input[type="submit"], input[type="reset"]`)** | • Marges internes : `6px 16px`<br>• Poids du texte : `600`<br>• Coins arrondis : `5px`<br>• Curseur : pointeur (`cursor: pointer`)<br>• Marge externe gauche : `8px`<br>• Largeur : automatique |
| **Bouton Annuler (`input[type="reset"]`)** | • Couleur d'arrière-plan : `#f1f5f9`<br>• Couleur du texte : `#475569`<br>• Bordure : `1px solid #cbd5e1` |
| **Bouton de validation / soumission (`input[type="submit"]`)** | • Couleur d'arrière-plan : `#4f46e5`<br>• Couleur du texte : `#ffffff`<br>• Bordure : `1px solid #4338ca` |
| **Étoiles d'évaluation (`.stars`)** | • Couleur : `#f59e0b` (ambre doré) |
| **Badge de la note totale (`.total-box`)** | • Marges internes : `3px 12px`<br>• Couleur d'arrière-plan : `#fef3c7`<br>• Coins arrondis : `15px`<br>• Poids du texte : `700`<br>• Couleur du texte : `#92400e`<br>• Affichage : `display: inline-block` |

---

## 💡 Annexe : Contenu des Scripts JavaScript Fournis (Dossier `TODO/scripts/`)

> *Rappel pédagogique : L'élève n'a pas à coder ces scripts. Ils sont déjà prêts dans le dossier `TODO/scripts/` et fournis ici à titre informatif et de révision.*

### 1) Script de navigation active : `scripts/menu.js`
```javascript
// scripts/menu.js : Gestion de l'état actif du menu de navigation
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});
```

### 2) Script de calcul interactif : `scripts/manifestation.js`
```javascript
// scripts/manifestation.js : Calcul interactif du score et affichage des étoiles
function updateScore() {
  const a = parseInt(document.getElementById('note_accueil').value) || 0;
  const c = parseInt(document.getElementById('note_confort').value) || 0;
  const s = parseInt(document.getElementById('note_signal').value) || 0;
  const l = parseInt(document.getElementById('note_logistique').value) || 0;

  // Calcul du score total sur 20
  document.getElementById('note_totale').textContent = (a + c + s + l) + " / 20";

  // Fonction interne de conversion de la note en étoiles pleines / vides
  function renderStars(val) {
    return "★".repeat(val) + "☆".repeat(5 - val);
  }

  // Actualisation de l'affichage visuel des étoiles
  document.getElementById('stars_accueil').textContent = renderStars(a);
  document.getElementById('stars_confort').textContent = renderStars(c);
  document.getElementById('stars_signal').textContent = renderStars(s);
  document.getElementById('stars_logistique').textContent = renderStars(l);
}
```

---

## 🏆 Barème Récapitulatif de Notation (40 Points)

| Critère d'Évaluation | Exercice / Composant | Barème |
| :--- | :--- | :---: |
| **Architecture du portail** | `index.html` : structuration sémantique (header, nav, section, iframe, footer) | **5 pts** |
| **Page d'accueil** | `acceuil.html` : titre h2 marron souligné, image Bugatti et paragraphes | **3 pts** |
| **Formulaire Testeur** | `enregistrement.html` : fieldset, inputs (text, email, date, color, radio, textarea) | **6 pts** |
| **Formulaire Évaluation** | `evaluation.html` : select modèles, date, color, inputs number /20, checkboxes | **6 pts** |
| **Évaluation Manifestation** | `manifestation.html` : range 0-5, titres Service/Note, étoiles, total, badge | **6 pts** |
| **Feuille de style CSS3** | `style.css` : respect strict de la mise en page (sans flexbox/grid), tables CSS | **10 pts** |
| **Intégration JavaScript** | Inclusion correcte et fonctionnement des deux scripts fournis | **4 pts** |
| **Total Général** | | **40 pts** |
