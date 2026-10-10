import os
import re
import shutil
import subprocess
import zipfile
import xml.etree.ElementTree as ET

WORKSPACE_DIR = r"c:\xampp-school\htdocs\3STI\miniprojets\MiniProjet-22\TestDrive"
SVG_DIR = os.path.join(WORKSPACE_DIR, "images_svg")
SOFFICE_PATH = r"C:\Program Files\LibreOffice\program\soffice.exe"
USER_INSTALL = "-env:UserInstallation=file:///C:/Users/LENOVO/AppData/Local/Temp/lo_odt_tmp"

target_odt = os.path.join(WORKSPACE_DIR, "enonce.odt")
temp_html_path = os.path.join(WORKSPACE_DIR, "enonce_base.html")
temp_odt_path = os.path.join(WORKSPACE_DIR, "enonce_base.odt")
extract_dir = os.path.join(WORKSPACE_DIR, "temp_gen_odt")

# HTML Document
html_content = """<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>STI 3e SI — Sujet de TP : Portail Automobile « Test Drive »</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 8mm 12mm 8mm 12mm;
    }
    body {
      font-family: 'Book Antiqua', serif;
      font-size: 12pt;
      line-height: 1.15;
      color: #0f172a;
      margin: 0;
      padding: 0;
    }
    p {
      font-family: 'Book Antiqua', serif;
      font-size: 12pt;
      line-height: 1.15;
      margin-top: 0.08cm;
      margin-bottom: 0.08cm;
    }
    .header-bar {
      border-bottom: 2pt solid #2563eb;
      padding-bottom: 2pt;
      margin-bottom: 5pt;
    }
    .top-meta {
      font-size: 9.5pt;
      color: #475569;
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 0.5px;
      margin-bottom: 2pt;
      font-family: 'Book Antiqua', serif;
    }
    h1 {
      font-family: 'Ink Free', cursive, sans-serif;
      font-size: 24pt;
      font-weight: bold;
      color: #0f172a;
      margin-top: 0.18cm;
      margin-bottom: 0.08cm;
      text-align: center;
    }
    .subtitle {
      font-size: 11pt;
      color: #334155;
      font-style: italic;
      text-align: center;
      margin-bottom: 3pt;
      font-family: 'Book Antiqua', serif;
    }
    .badges-line {
      text-align: center;
      margin-bottom: 6pt;
    }
    .badge {
      display: inline-block;
      padding: 2pt 5pt;
      font-size: 8.5pt;
      font-weight: bold;
      border-radius: 3pt;
      margin: 0 2pt;
      font-family: 'Book Antiqua', serif;
    }
    .b-blue { background-color: #dbeafe; color: #1e40af; border: 0.5pt solid #bfdbfe; }
    .b-cyan { background-color: #cffafe; color: #155e75; border: 0.5pt solid #a5f3fc; }
    .b-green { background-color: #dcfce7; color: #166534; border: 0.5pt solid #bbf7d0; }
    .b-amber { background-color: #fef3c7; color: #92400e; border: 0.5pt solid #fde68a; }

    h2 {
      font-family: 'Cambria', serif;
      font-size: 18pt;
      font-weight: bold;
      color: #1e3a8a;
      margin-top: 0.18cm;
      margin-bottom: 0.08cm;
      padding-bottom: 2pt;
      border-bottom: 0.8pt solid #cbd5e1;
      page-break-after: avoid;
    }
    h3 {
      font-family: 'Bernard MT Condensed', sans-serif;
      font-size: 16pt;
      font-weight: normal;
      color: #0f172a;
      margin-top: 0.18cm;
      margin-bottom: 0.08cm;
      page-break-after: avoid;
    }
    h4 {
      font-family: 'Arno Pro', serif;
      font-size: 14pt;
      font-weight: bold;
      color: #1e293b;
      margin-top: 0.16cm;
      margin-bottom: 0.06cm;
      page-break-after: avoid;
    }

    p.callout-rule {
      background-color: #fffbeb;
      border-left: 3.5pt solid #f59e0b;
      padding: 3.5pt 7pt;
      margin-top: 0.1cm;
      margin-bottom: 0.1cm;
      line-height: 1.15;
    }
    p.callout-synthesis {
      background-color: #f0f9ff;
      border-left: 3.5pt solid #0ea5e9;
      padding: 3.5pt 7pt;
      margin-top: 0.1cm;
      margin-bottom: 0.1cm;
      line-height: 1.15;
    }
    p.callout-important {
      background-color: #fef2f2;
      border-left: 3.5pt solid #ef4444;
      padding: 3.5pt 7pt;
      margin-top: 0.1cm;
      margin-bottom: 0.1cm;
      line-height: 1.15;
    }
    p.cahier-box {
      background-color: #f8fafc;
      border: 0.8pt dashed #94a3b8;
      padding: 3.5pt 7pt;
      font-size: 10.5pt;
      color: #475569;
      font-style: italic;
      margin-top: 0.1cm;
      margin-bottom: 0.1cm;
      line-height: 1.15;
    }

    pre {
      background-color: #f8fafc;
      border: 0.5pt solid #cbd5e1;
      padding: 3pt 6pt;
      font-family: 'Consolas', monospace;
      font-size: 10pt;
      line-height: 1.15;
      margin-top: 0cm;
      margin-bottom: 0cm;
    }
    code {
      font-family: 'Consolas', monospace;
      font-size: 10pt;
      background-color: #f1f5f9;
      padding: 0.5pt 2.5pt;
      color: #0f172a;
    }

    table {
      width: 100%;
      margin: 0.08cm auto;
      border-collapse: collapse;
      border: 0.5pt solid #000000;
      font-size: 10pt;
      font-family: 'Book Antiqua', serif;
    }
    th, td {
      border: 0.5pt solid #000000;
      padding: 2.2pt 5pt;
      text-align: left;
    }
    th {
      background-color: #f1f5f9;
      font-weight: bold;
      color: #0f172a;
    }
    .text-center { text-align: center; }

    ol, ul {
      margin-top: 0.05cm;
      margin-bottom: 0.05cm;
      padding-left: 16pt;
      font-family: 'Book Antiqua', serif;
      font-size: 11.5pt;
    }
    li {
      margin-bottom: 1.2pt;
      line-height: 1.15;
    }
    .img-box {
      text-align: center;
      margin: 2pt 0;
      page-break-inside: avoid;
    }
    .img-box img {
      width: 14.0cm;
      height: auto;
      border: 0.8pt solid #cbd5e1;
    }
    .img-caption {
      font-size: 9pt;
      color: #64748b;
      font-style: italic;
      text-align: center;
      margin-top: 1pt;
      margin-bottom: 2pt;
      font-family: 'Book Antiqua', serif;
    }
  </style>
</head>
<body>

  <!-- =========================================================================
       PAGE 1 : EN-TETE OFFICIEL & CADRE DU PROJET
       ========================================================================= -->
  <div class="header-bar">
    <div class="top-meta">République Tunisienne · Ministère de l'Éducation — 3<sup>e</sup> Sciences de l'Informatique (STI)</div>
    <h1>Série de Travaux Pratiques : Projet « Test Drive »</h1>
    <div class="subtitle">Développement Web (HTML5 &amp; CSS3) — Formulation pédagogique inspirée de M. Hatem Romdhane</div>
    <div class="badges-line">
      <span class="badge b-blue">Matière : STI</span>
      <span class="badge b-cyan">Classe : 3e Sciences de l'Informatique</span>
      <span class="badge b-green">⏱ Durée : 90 min</span>
      <span class="badge b-amber">Total : 40 Points</span>
    </div>
  </div>

  <h2>1. Cadre Général &amp; Objectifs Pédagogiques</h2>

  <p class="callout-synthesis">
    <strong>🎯 OBJECTIFS DE LA SÉANCE :</strong><br>
    • Structuration sémantique complète en HTML5 (<code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;iframe&gt;</code>, <code>&lt;table&gt;</code>).<br>
    • Élaboration de formulaires riches et conformes (<code>&lt;fieldset&gt;</code>, <code>&lt;legend&gt;</code>, contrôles <code>text</code>, <code>email</code>, <code>date</code>, <code>color</code>, <code>number</code>, <code>range</code>, <code>radio</code>, <code>checkbox</code>, <code>select</code>, <code>textarea</code>).<br>
    • Maîtrise exclusive de la mise en page CSS3 selon le programme scolaire tunisien (<strong>Zéro Flexbox / Zéro Grid</strong> : utilisation de <code>float</code>, <code>inline-block</code>, <code>table</code> et du modèle de boîte).<br>
    • Déclaration de polices locales via <code>@font-face</code> (fichier <code>fonts.css</code> fourni).<br>
    • Intégration de scripts JavaScript fournis pour la navigation active et le calcul dynamique des scores.
  </p>

  <p class="callout-important">
    <strong>⚠️ DIRECTIVES IMPORTANTES POUR L'ÉLÈVE :</strong><br>
    1. <strong>Dossier de travail :</strong> Vous devez travailler dans le dossier fourni nommé <strong><code>TODO</code></strong> contenant les ressources initiales.<br>
    2. <strong>Ressources fournies dans <code>TODO</code> :</strong> Le sous-dossier <code>images/</code> (Bugatti, Cockpit, Manifestation), le sous-dossier <code>fonts/</code> avec sa feuille <code>fonts.css</code>, et le sous-dossier <code>scripts/</code> contenant les scripts JavaScript <code>menu.js</code> et <code>manifestation.js</code>.<br>
    3. <strong>Travail attendu de l'élève :</strong> <strong>L'élève doit tout construire par lui-même</strong> (les 5 fichiers HTML ainsi que la feuille de style principale <code>style.css</code>). Seuls les scripts JavaScript et les médias sont fournis.<br>
    4. <strong>Liaison obligatoire :</strong> Chaque page HTML doit comporter dans son en-tête <code>&lt;head&gt;</code> les deux liaisons suivantes :<br>
    <code>&lt;link rel="stylesheet" href="fonts.css"&gt;</code><br>
    <code>&lt;link rel="stylesheet" href="style.css"&gt;</code>
  </p>

  <p class="callout-rule">
    <strong>🏎️ PRÉSENTATION DU SYSTÈME AUTOMOBILE « TEST DRIVE » :</strong><br>
    Une société spécialisée dans les véhicules de sport et de prestige propose aux conducteurs de tester des modèles de renommée mondiale sur circuit fermé. Le portail web permet : (1) d'accueillir les visiteurs, (2) d'enregistrer de nouveaux conducteurs testeurs agréés, (3) d'évaluer les modèles selon trois critères fondamentaux (sécurité, conduite, confort), et (4) d'évaluer l'organisation logistique des manifestations sur piste.
  </p>

  <!-- =========================================================================
       EXERCICE 1 : PORTAIL PRINCIPAL & ACCUEIL
       ========================================================================= -->
  <h2 style="page-break-before: always;">Exercice 1 : Portail Principal et Page d'Accueil (60 min — 10 pts)</h2>

  <h4>1) Création du portail principal « index.html »</h4>
  <p>
    En utilisant l'éditeur <strong>Visual Studio Code</strong>, créer la page web <code>index.html</code> structurée autour d'un conteneur global <code>&lt;div class="site-container"&gt;</code> et découpée en 4 zones distinctes :
  </p>

  <div class="img-box">
    <img src="images_svg/svg_ex1_portail.svg" alt="Architecture du Portail index.html et page acceuil.html">
    <div class="img-caption">Figure 1 : Architecture sémantique du portail principal (index.html) et cadre récepteur iframe (acceuil.html)</div>
  </div>

  <p><strong>Sachant que :</strong></p>
  <ul>
    <li><strong>Zone 1 (<code>&lt;header&gt;</code>) :</strong> Représente l'en-tête du site. Elle contient un titre <code>&lt;h1 class="titre-test-drive"&gt;Test drive&lt;/h1&gt;</code> et un paragraphe <code>&lt;p class="site-subtitle"&gt;Centre d'essais et d'évaluation de véhicules de prestige&lt;/p&gt;</code>.</li>
    <li><strong>Zone 2 (<code>&lt;nav&gt;</code>) :</strong> Volet de navigation situé à gauche (largeur 30%, <code>float: left</code>). Il comporte le titre <code>&lt;h3 class="nav-title"&gt;Menu Navigation&lt;/h3&gt;</code> et 4 liens avec <code>target="zone_affichage"</code> :
      <ul>
        <li><code>Accueil</code> (cible : <code>acceuil.html</code>, classe <code>active</code> par défaut)</li>
        <li><code>Enregistrement d'un testeur</code> (cible : <code>enregistrement.html</code>)</li>
        <li><code>Evaluation d'un modèle</code> (cible : <code>evaluation.html</code>)</li>
        <li><code>Évaluation manifestation</code> (cible : <code>manifestation.html</code>)</li>
      </ul>
    </li>
    <li><strong>Zone 3 (<code>&lt;section&gt;</code>) :</strong> Zone réceptrice située à droite (largeur 68%, <code>float: right</code>) contenant un cadre intégré <code>&lt;iframe src="acceuil.html" name="zone_affichage" id="zone_affichage" title="Zone d'affichage"&gt;</code>.</li>
    <li><strong>Zone 4 (<code>&lt;footer&gt;</code>) :</strong> Pied de page (<code>clear: both</code>) centré contenant : <code>Copyright &amp;copy; 2026 - 3&lt;sup&gt;e&lt;/sup&gt; Sciences de l'Informatique</code>.</li>
    <li><strong>Liaison du script JS fourni :</strong> Juste avant la fermeture de <code>&lt;/body&gt;</code>, insérer :<br>
    <code>&lt;script src="scripts/menu.js"&gt;&lt;/script&gt;</code>.</li>
  </ul>

  <h4>2) Création de la page d'accueil « acceuil.html »</h4>
  <p>
    Créer la page <code>acceuil.html</code> affichée par défaut dans l'iframe. Elle comprend un conteneur <code>&lt;div class="page-container"&gt;</code>, un titre <code>&lt;h2&gt;Bienvenue dans notre site&lt;/h2&gt;</code>, l'image <code>images/bugatti.jpg</code> ainsi que trois paragraphes synthétiques présentant l'expérience de pilotage.
  </p>

  <h4 style="page-break-before: always;">3) Règles CSS à appliquer au portail dans « style.css »</h4>
  <table>
    <thead>
      <tr>
        <th style="width: 28%;">Élément / Sélecteur</th>
        <th style="width: 72%;">Propriétés et Règles CSS à appliquer</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Sélecteur universel (<code>*</code>)</strong></td>
        <td>Modèle de boîte : <code>box-sizing: border-box</code> ; marges externes et internes : <code>0</code>.</td>
      </tr>
      <tr>
        <td><strong>Corps de page (<code>body</code>)</strong></td>
        <td>Arrière-plan : <code>#f8fafc</code> ; police : <code>'Plus Jakarta Sans', sans-serif</code> ; couleur : <code>#0f172a</code> ; interligne : <code>1.5</code> ; marges internes : <code>16px 12px</code>.</td>
      </tr>
      <tr>
        <td><strong>Conteneur (<code>.site-container</code>)</strong></td>
        <td>Largeur : <code>96%</code> ; largeur maximale : <code>1040px</code> ; marges externes : <code>0 auto</code> (centré).</td>
      </tr>
      <tr>
        <td><strong>En-tête (<code>header</code>)</strong></td>
        <td>Bordure tiret <code>2px dashed #d4af37</code> ; coins arrondis : <code>10px 100px</code> ; arrière-plan : <code>beige</code> ; marges internes : <code>16px 24px</code> ; marge inférieure : <code>16px</code> ; texte centré.</td>
      </tr>
      <tr>
        <td><strong>Titre (<code>header h1</code>)</strong></td>
        <td>Police : <code>'Outfit', sans-serif</code> ; taille : <code>2.2rem</code> ; gras : <code>800</code> ; majuscules ; espacement des lettres : <code>4px</code> ; ombre portée : <code>text-shadow: rgb(0, 255, 34) 1px 0 10px</code>.</td>
      </tr>
      <tr>
        <td><strong>Volet (<code>nav</code>) &amp; Section</strong></td>
        <td>Hauteur : <code>590px</code> ; bordure : <code>1px solid #cbd5e1</code> ; coins arrondis : <code>7px</code> ; fond blanc.</td>
      </tr>
      <tr>
        <td><strong>Volet (<code>nav</code>)</strong></td>
        <td>Largeur : <code>30%</code> ; position flottante gauche : <code>float: left</code> ; marges internes : <code>20px 10px</code> ; centré.</td>
      </tr>
      <tr>
        <td><strong>Liens (<code>nav a</code>)</strong></td>
        <td>Type d'affichage : <code>display: block</code> ; largeur : <code>200px</code> ; bordure : <code>2px dashed #7c3aed</code> ; fond : <code>beige</code> ; coins arrondis : <code>20px</code> ; marges externes : <code>15px auto</code> ; marges internes : <code>10px</code> ; couleur : <code>#4338ca</code> ; pas de soulignement.</td>
      </tr>
      <tr>
        <td><strong>Survol &amp; Actif (<code>nav a:hover</code>, <code>.active</code>)</strong></td>
        <td>Survol : fond <code>#ede9fe</code>. Actif : fond <code>#4f46e5</code>, bordure continue (<code>solid</code>), texte blanc.</td>
      </tr>
      <tr>
        <td><strong>Section (<code>section</code>)</strong></td>
        <td>Largeur : <code>68%</code> ; position flottante droite : <code>float: right</code> ; marges internes : <code>4px</code>.</td>
      </tr>
      <tr>
        <td><strong>Cadre (<code>iframe</code>)</strong></td>
        <td>Largeur : <code>99%</code> ; hauteur : <code>580px</code> ; bordure : aucune (<code>none</code>) ; affichage : <code>block</code> centré.</td>
      </tr>
      <tr>
        <td><strong>Pied de page (<code>footer</code>)</strong></td>
        <td>Annulation flottement : <code>clear: both</code> ; couleur : <code>red</code> ; style : <code>italic</code> ; centré ; marges internes : <code>18px 0 10px</code>.</td>
      </tr>
    </tbody>
  </table>

  <!-- =========================================================================
       EXERCICE 2 : ENREGISTREMENT D'UN TESTEUR
       ========================================================================= -->
  <h2 style="page-break-before: always;">Exercice 2 : Formulaire d'Enregistrement d'un Testeur (30 min — 5 pts)</h2>

  <p>
    Créer dans votre dossier de travail la page web <code>enregistrement.html</code> permettant à un candidat conducteur de s'inscrire au centre d'essais.
  </p>

  <div class="img-box">
    <img src="images_svg/svg_ex2_testeur.svg" alt="Formulaire d'enregistrement d'un testeur">
    <div class="img-caption">Figure 2 : Interface du formulaire d'enregistrement (enregistrement.html)</div>
  </div>

  <p><strong>Sachant que :</strong></p>
  <ul>
    <li>Le formulaire est encadré par <code>&lt;fieldset&gt;</code> avec la légende <code>&lt;legend&gt;Enregistrement d'un testeur :&lt;/legend&gt;</code>.</li>
    <li>Les champs de saisie sont disposés à l'aide d'un tableau <code>&lt;table&gt;</code> (libellés à gauche, champs à droite) :
      <ul>
        <li><strong>N° Permis :</strong> Champ texte obligatoire (<code>required</code>), texte d'indication (<code>placeholder="Ex: 58/987654"</code>).</li>
        <li><strong>Nom :</strong> Champ texte obligatoire, <code>placeholder="Votre nom"</code>.</li>
        <li><strong>Prénom :</strong> Champ texte obligatoire, <code>placeholder="Votre prénom"</code>.</li>
        <li><strong>E-mail :</strong> Champ de type <code>email</code> obligatoire, <code>placeholder="pilote@exemple.tn"</code>.</li>
        <li><strong>Date permis :</strong> Champ calendrier de type <code>date</code> obligatoire.</li>
        <li><strong>Teinte préférée :</strong> Sélecteur de couleur <code>type="color"</code>, valeur initiale <code>#1e293b</code>.</li>
        <li><strong>Genre :</strong> Deux boutons radio portant le même nom <code>name="genre"</code>, valeurs <code>Féminin</code> (avec <code>required</code>) et <code>Masculin</code>.</li>
        <li><strong>Expérience :</strong> Zone multi-lignes <code>&lt;textarea rows="2" placeholder="Précisez votre expérience..."&gt;</code>.</li>
      </ul>
    </li>
    <li>Une case à cocher obligatoire : <code>&lt;input type="checkbox" id="charte" required&gt;</code> pour l'acceptation de la charte de sécurité.</li>
    <li>Deux boutons d'action dans <code>&lt;div class="form-actions"&gt;</code> : un bouton <code>&lt;input type="reset" value="Annuler"&gt;</code> et un bouton <code>&lt;input type="submit" value="Ajouter"&gt;</code>.</li>
  </ul>

  <!-- =========================================================================
       EXERCICE 3 : EVALUATION D'UN MODELE
       ========================================================================= -->
  <h2 style="page-break-before: always;">Exercice 3 : Formulaire d'Évaluation d'un Modèle (30 min — 5 pts)</h2>

  <p>
    Créer la page web <code>evaluation.html</code> permettant à un pilote d'attribuer ses notes techniques après un test sur circuit.
  </p>

  <div class="img-box">
    <img src="images_svg/svg_ex3_evaluation.svg" alt="Formulaire d'évaluation d'un modèle">
    <div class="img-caption">Figure 3 : Interface d'évaluation technique d'un véhicule (evaluation.html)</div>
  </div>

  <p><strong>Sachant que :</strong></p>
  <ul>
    <li>En haut de la page figure la bannière <code>images/cockpit.jpg</code> de classe <code>banner-img</code>.</li>
    <li>Le formulaire <code>&lt;fieldset&gt;</code> a pour légende <code>&lt;legend&gt;Evaluation d'un modele&lt;/legend&gt;</code>.</li>
    <li>Un premier tableau organise les paramètres généraux :
      <ul>
        <li><strong>N° Permis :</strong> Champ texte obligatoire.</li>
        <li><strong>Modèle :</strong> Liste déroulante <code>&lt;select id="modele" required&gt;</code> proposant 6 options (<em>Choisir un modèle</em>, <em>Bugatti Chiron Super Sport</em>, <em>Porsche 911 GT3 RS</em>, <em>Ferrari SF90 Stradale</em>, <em>Mercedes-AMG GT Black</em>, <em>BMW M8 Competition</em>).</li>
        <li><strong>Date essai :</strong> Champ de type <code>date</code> obligatoire.</li>
        <li><strong>Teinte testée :</strong> Sélecteur de couleur <code>type="color"</code>, valeur <code>#dc2626</code>.</li>
      </ul>
    </li>
    <li>Un sous-titre <code>&lt;h3&gt;Notes attribuées&lt;/h3&gt;</code> suivi d'un deuxième tableau disposant côte à côte les 3 notes chiffrées :
      <ul>
        <li><strong>Sécurité :</strong> Champ numérique <code>type="number"</code>, <code>min="0" max="20" placeholder="/20"</code> obligatoire.</li>
        <li><strong>Conduite :</strong> Champ numérique <code>type="number"</code>, <code>min="0" max="20" placeholder="/20"</code> obligatoire.</li>
        <li><strong>Confort :</strong> Champ numérique <code>type="number"</code>, <code>min="0" max="20" placeholder="/20"</code> obligatoire.</li>
      </ul>
    </li>
    <li>Une zone <code>&lt;textarea&gt;</code> pour les observations du pilote.</li>
    <li>Deux cases à cocher : <code>Mode Sport activé sur piste</code> et <code>Je ne suis pas un robot</code> (obligatoire).</li>
    <li>Les deux boutons d'action : <code>Annuler</code> (reset) et <code>Valider</code> (submit).</li>
  </ul>

  <!-- =========================================================================
       EXERCICE 4 : EVALUATION D'UNE MANIFESTATION & JS FOURNI
       ========================================================================= -->
  <h2 style="page-break-before: always;">Exercice 4 : Évaluation d'une Manifestation &amp; JavaScript Fourni (45 min — 10 pts)</h2>

  <p>
    Créer la page web <code>manifestation.html</code> évaluant le déroulement d'une manifestation, dotée d'une mise en forme CSS spécifique et d'une interactivité JavaScript calculée en direct.
  </p>

  <div class="img-box">
    <img src="images_svg/svg_ex4_manifestation.svg" alt="Évaluation d'une manifestation et dynamique JS">
    <div class="img-caption">Figure 4 : Interface d'évaluation de manifestation avec étoiles et total dynamique (manifestation.html)</div>
  </div>

  <p><strong>Sachant que :</strong></p>
  <ul>
    <li>En haut de page s'affiche la bannière <code>images/manifestation.jpg</code> de classe <code>banner-img</code>.</li>
    <li>La légende <code>&lt;legend class="legend-manifestation"&gt;</code> affiche : <code>Évaluation d’une manifestation</code>.</li>
    <li>Un premier tableau recueille l'événement (liste déroulante <code>&lt;select&gt;</code> de 4 options), la date et l'e-mail du visiteur.</li>
    <li>Deux en-têtes de colonnes sont créés via deux balises <code>&lt;h1 class="titre-colonne"&gt;Service&lt;/h1&gt;</code> et <code>&lt;h1 class="titre-colonne"&gt;Note&lt;/h1&gt;</code>.</li>
    <li>Un deuxième tableau présente les 4 services avec réglettes <code>type="range" min="0" max="5"</code> déclenchant la fonction <code>oninput="updateScore()"</code>, accompagnées de cellules d'étoiles (classe <code>stars</code>) :
      <ul>
        <li><strong>Accueil :</strong> curseur <code>id="note_accueil" value="4"</code>, étoiles initiales <code>★★★★☆</code></li>
        <li><strong>Confort :</strong> curseur <code>id="note_confort" value="5"</code>, étoiles initiales <code>★★★★★</code></li>
        <li><strong>Signalétique :</strong> curseur <code>id="note_signal" value="3"</code>, étoiles initiales <code>★★★☆☆</code></li>
        <li><strong>Logistique :</strong> curseur <code>id="note_logistique" value="4"</code>, étoiles initiales <code>★★★★☆</code></li>
      </ul>
    </li>
    <li>La note totale sur 20 est affichée dynamiquement dans un badge : <code>&lt;span class="total-box" id="note_totale"&gt;16 / 20&lt;/span&gt;</code>.</li>
    <li>Une zone <code>&lt;textarea&gt;</code> pour les remarques et suggestions, et une case à cocher pour la newsletter.</li>
    <li>Les boutons : <code>&lt;input type="submit" value="Valider"&gt;</code> et <code>&lt;input type="reset" value="Annuler" onclick="setTimeout(updateScore, 50)"&gt;</code>.</li>
    <li><strong>Code JavaScript fourni :</strong> Juste avant <code>&lt;/body&gt;</code>, insérer le fichier JavaScript fourni :<br>
    <code>&lt;script src="scripts/manifestation.js"&gt;&lt;/script&gt;</code>.</li>
  </ul>

  <!-- =========================================================================
       EXERCICE 5 : ARCHITECTURE CSS & FORMULAIRES
       ========================================================================= -->
  <h2 style="page-break-before: always;">Exercice 5 : Architecture CSS3 &amp; Modèle de Boîte des Formulaires (30 min — 10 pts)</h2>

  <p>
    Compléter la feuille de style <code>style.css</code> pour mettre en forme l'ensemble des formulaires et des composants interactifs, tout en respectant scrupuleusement le principe de <strong>conception sans Flexbox ni Grid</strong>.
  </p>

  <div class="img-box">
    <img src="images_svg/svg_ex5_css_layout.svg" alt="Schéma d'architecture CSS et modèle de boîte">
    <div class="img-caption">Figure 5 : Agencement des blocs par flottements (float) et modèle de boîte traditionnel</div>
  </div>

  <h4>Règles CSS des formulaires, tableaux et contrôles interactifs :</h4>
  <table>
    <thead>
      <tr>
        <th style="width: 30%;">Élément / Sélecteur</th>
        <th style="width: 70%;">Propriétés CSS et Règles de mise en forme</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Bannières (<code>.banner-img</code>)</strong></td>
        <td>Largeur : <code>100%</code> ; largeur maximale : <code>530px</code> ; hauteur : <code>85px</code> ; ajustement : <code>object-fit: cover</code> ; coins arrondis : <code>8px</code>.</td>
      </tr>
      <tr>
        <td><strong>Cadre (<code>fieldset</code>)</strong></td>
        <td>Bordure : <code>1px solid #cbd5e1</code> ; coins arrondis : <code>10px</code> ; marges internes : <code>12px 18px</code> ; largeur maximale : <code>530px</code> ; centré : <code>0 auto</code>.</td>
      </tr>
      <tr>
        <td><strong>Légende manifestation (<code>legend.legend-manifestation</code>)</strong></td>
        <td>Couleur : <code>red</code> ; taille de police : <code>20px</code> ; graisse : <code>bolder</code>.</td>
      </tr>
      <tr>
        <td><strong>Titres colonnes (<code>h1.titre-colonne</code>)</strong></td>
        <td>Texte centré ; fond jaune (<code>yellow</code>) ; bordure hachée rouge <code>3px dashed red</code> ; largeur : <code>150px</code> ; style : <code>italic</code> ; affichage : <code>display: inline-block</code> ; marges : <code>4px 10px 6px 0</code>.</td>
      </tr>
      <tr>
        <td><strong>Tableaux (<code>table</code>, <code>td</code>)</strong></td>
        <td>Tableau : largeur <code>100%</code>, <code>border-collapse: separate</code>, espacement <code>border-spacing: 0 5px</code>. Cellules : alignement vertical centré. Première colonne : <code>width: 125px</code>.</td>
      </tr>
      <tr>
        <td><strong>Champs (<code>input, select, textarea</code>)</strong></td>
        <td>Marges internes : <code>5px 8px</code> ; bordure : <code>1px solid #cbd5e1</code> ; coins arrondis : <code>5px</code> ; largeur : <code>200px</code> ; couleur accentuée : <code>#4f46e5</code>. Focus : bordure <code>#4f46e5</code>.</td>
      </tr>
      <tr>
        <td><strong>Réglette note (<code>input[type="range"]</code>)</strong></td>
        <td>Largeur : <code>130px</code> ; alignement vertical centré.</td>
      </tr>
      <tr>
        <td><strong>Nombre &amp; Couleur</strong></td>
        <td>Nombre (<code>[type="number"]</code>) : largeur <code>60px</code>. Couleur (<code>[type="color"]</code>) : largeur <code>36px</code>, hauteur <code>26px</code>, curseur pointeur.</td>
      </tr>
      <tr>
        <td><strong>Boutons (<code>submit, reset</code>)</strong></td>
        <td>Marges internes : <code>6px 16px</code> ; coins arrondis : <code>5px</code> ; curseur pointeur. Annuler : fond <code>#f1f5f9</code>, texte <code>#475569</code>. Valider : fond <code>#4f46e5</code>, texte blanc.</td>
      </tr>
      <tr>
        <td><strong>Étoiles (<code>.stars</code>)</strong></td>
        <td>Couleur : <code>#f59e0b</code> (ambre doré).</td>
      </tr>
      <tr>
        <td><strong>Badge total (<code>.total-box</code>)</strong></td>
        <td>Marges internes : <code>3px 12px</code> ; fond jaune clair : <code>#fef3c7</code> ; coins arrondis : <code>15px</code> ; gras : <code>700</code> ; couleur : <code>#92400e</code> ; affichage : <code>display: inline-block</code>.</td>
      </tr>
    </tbody>
  </table>

  <!-- =========================================================================
       ANNEXE : SCRIPTS JS
       ========================================================================= -->
  <h2>Annexe : Scripts JavaScript Fournis (Dossier TODO/scripts/)</h2>

  <p class="callout-synthesis">
    💡 <strong>Code JavaScript fourni dans <code>TODO/scripts/menu.js</code> (Gestion du menu actif) :</strong>
  </p>
  <pre>const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});</pre>

  <p class="callout-synthesis">
    💡 <strong>Code JavaScript fourni dans <code>TODO/scripts/manifestation.js</code> (Calcul interactif) :</strong>
  </p>
  <pre>function updateScore() {
  const a = parseInt(document.getElementById('note_accueil').value) || 0;
  const c = parseInt(document.getElementById('note_confort').value) || 0;
  const s = parseInt(document.getElementById('note_signal').value) || 0;
  const l = parseInt(document.getElementById('note_logistique').value) || 0;
  document.getElementById('note_totale').textContent = (a + c + s + l) + " / 20";
  function renderStars(val) { return "★".repeat(val) + "☆".repeat(5 - val); }
  document.getElementById('stars_accueil').textContent = renderStars(a);
  document.getElementById('stars_confort').textContent = renderStars(c);
  document.getElementById('stars_signal').textContent = renderStars(s);
  document.getElementById('stars_logistique').textContent = renderStars(l);
}</pre>

  <!-- =========================================================================
       BAREME RECAPITULATIF (PAGE BREAK EXPLICITE)
       ========================================================================= -->
  <h2 style="page-break-before: always;">Grille d'Évaluation &amp; Barème Récapitulatif (40 Points)</h2>

  <table>
    <thead>
      <tr>
        <th style="width: 28%;">Composant / Page</th>
        <th style="width: 54%;">Critères d'évaluation détaillés</th>
        <th style="width: 18%; text-align: center;">Points</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Portail principal (<code>index.html</code>)</strong></td>
        <td>Structuration sémantique (header, nav, section, iframe, footer) et cibles target.</td>
        <td class="text-center"><strong>5 pts</strong></td>
      </tr>
      <tr>
        <td><strong>Page d'accueil (<code>acceuil.html</code>)</strong></td>
        <td>Titre h2 souligné, intégration image Bugatti, paragraphes et conteneur.</td>
        <td class="text-center"><strong>3 pts</strong></td>
      </tr>
      <tr>
        <td><strong>Enregistrement (<code>enregistrement.html</code>)</strong></td>
        <td>Fieldset, legend, tableau d'alignement, inputs text, email, date, color, radio, textarea.</td>
        <td class="text-center"><strong>6 pts</strong></td>
      </tr>
      <tr>
        <td><strong>Évaluation modèle (<code>evaluation.html</code>)</strong></td>
        <td>Bannière cockpit, select modèles, date, couleur, 3 inputs number /20, checkboxes.</td>
        <td class="text-center"><strong>6 pts</strong></td>
      </tr>
      <tr>
        <td><strong>Manifestation (<code>manifestation.html</code>)</strong></td>
        <td>Bannière, 4 réglettes range 0-5, titres h1 colonnes, étoiles, badge score total.</td>
        <td class="text-center"><strong>6 pts</strong></td>
      </tr>
      <tr>
        <td><strong>Feuille de style (<code>style.css</code>)</strong></td>
        <td>Respect strict du modèle de boîte, flottements sans flexbox ni grid, tables CSS.</td>
        <td class="text-center"><strong>10 pts</strong></td>
      </tr>
      <tr>
        <td><strong>Intégration JavaScript</strong></td>
        <td>Inclusion adéquate des 2 scripts fournis et bon fonctionnement dynamique.</td>
        <td class="text-center"><strong>4 pts</strong></td>
      </tr>
      <tr>
        <td colspan="2" style="text-align: right; font-weight: bold; font-size: 11pt;">TOTAL GÉNÉRAL DU MINI-PROJET</td>
        <td class="text-center" style="font-weight: bold; font-size: 11pt; color: #1e3a8a;">40 / 40</td>
      </tr>
    </tbody>
  </table>

  <p class="cahier-box">
    ✍ <strong>Validation des travaux :</strong> Enregistrer tous vos fichiers dans le dossier <code>TODO</code>, tester la navigation complète dans l'iframe, et présenter votre réalisation finale à l'enseignant.
  </p>

</body>
</html>
"""

# Write base HTML
with open(temp_html_path, "w", encoding="utf-8") as f:
    f.write(html_content)

if os.path.exists(temp_odt_path):
    os.remove(temp_odt_path)

res_conv = subprocess.run([
    SOFFICE_PATH,
    USER_INSTALL,
    "--headless",
    "--convert-to", "odt:writer8",
    temp_html_path,
    "--outdir", WORKSPACE_DIR
], capture_output=True, text=True)

print("Base convert returncode:", res_conv.returncode)

if os.path.exists(extract_dir):
    shutil.rmtree(extract_dir)
os.makedirs(extract_dir)

with zipfile.ZipFile(temp_odt_path, 'r') as z:
    z.extractall(extract_dir)

pictures_dir = os.path.join(extract_dir, "Pictures")
os.makedirs(pictures_dir, exist_ok=True)

svg_files = [
    "svg_ex1_portail.svg",
    "svg_ex2_testeur.svg",
    "svg_ex3_evaluation.svg",
    "svg_ex4_manifestation.svg",
    "svg_ex5_css_layout.svg"
]

manifest_entries = []
for s_name in svg_files:
    src_p = os.path.join(SVG_DIR, s_name)
    dst_p = os.path.join(pictures_dir, s_name)
    shutil.copyfile(src_p, dst_p)
    manifest_entries.append(f'  <manifest:file-entry manifest:full-path="Pictures/{s_name}" manifest:media-type="image/svg+xml"/>\n')

# manifest.xml
manifest_path = os.path.join(extract_dir, "META-INF", "manifest.xml")
with open(manifest_path, "r", encoding="utf-8") as f:
    m_xml = f.read()
for entry in manifest_entries:
    if entry.strip() not in m_xml:
        m_xml = m_xml.replace("</manifest:manifest>", f"{entry}</manifest:manifest>")
with open(manifest_path, "w", encoding="utf-8") as f:
    f.write(m_xml)

# styles.xml
styles_path = os.path.join(extract_dir, "styles.xml")
with open(styles_path, "r", encoding="utf-8") as f:
    s_xml = f.read()

FONTS_XML = """  <style:font-face style:name="Book Antiqua" svg:font-family="&apos;Book Antiqua&apos;" style:font-family-generic="roman" style:font-pitch="variable"/>
  <style:font-face style:name="Ink Free" svg:font-family="&apos;Ink Free&apos;" style:font-family-generic="script" style:font-pitch="variable"/>
  <style:font-face style:name="Cambria" svg:font-family="Cambria" style:font-family-generic="roman" style:font-pitch="variable"/>
  <style:font-face style:name="Bernard MT Condensed" svg:font-family="&apos;Bernard MT Condensed&apos;" style:font-family-generic="swiss" style:font-pitch="variable"/>
  <style:font-face style:name="Arno Pro" svg:font-family="&apos;Arno Pro&apos;" style:font-family-generic="roman" style:font-pitch="variable"/>
  <style:font-face style:name="Consolas" svg:font-family="Consolas" style:font-family-generic="modern" style:font-pitch="fixed"/>"""

for fn in ["Book Antiqua", "Ink Free", "Cambria", "Bernard MT Condensed", "Arno Pro", "Consolas"]:
    s_xml = re.sub(r'<style:font-face\s+style:name="' + fn + r'"[^>]*/>', '', s_xml)
s_xml = s_xml.replace("</office:font-face-decls>", f"{FONTS_XML}\n</office:font-face-decls>")

default_p_style = """<style:default-style style:family="paragraph">
  <style:paragraph-properties fo:margin-top="0.08cm" fo:margin-bottom="0.08cm" fo:line-height="115%" style:tab-stop-distance="1.25cm"/>
  <style:text-properties style:font-name="Book Antiqua" fo:font-family="&apos;Book Antiqua&apos;" fo:font-size="12pt" style:font-name-asian="Book Antiqua" style:font-family-asian="&apos;Book Antiqua&apos;" style:font-size-asian="12pt" style:font-name-complex="Book Antiqua" style:font-family-complex="&apos;Book Antiqua&apos;" style:font-size-complex="12pt"/>
</style:default-style>"""
s_xml = re.sub(r'<style:default-style style:family="paragraph">.*?</style:default-style>', default_p_style, s_xml, flags=re.DOTALL)

standard_style = """<style:style style:name="Standard" style:family="paragraph" style:class="text">
  <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" fo:line-height="115%"/>
  <style:text-properties style:font-name="Book Antiqua" fo:font-family="&apos;Book Antiqua&apos;" fo:font-size="12pt" style:font-name-asian="Book Antiqua" style:font-family-asian="&apos;Book Antiqua&apos;" style:font-size-asian="12pt" style:font-name-complex="Book Antiqua" style:font-family-complex="&apos;Book Antiqua&apos;" style:font-size-complex="12pt"/>
</style:style>"""
s_xml = re.sub(r'<style:style style:name="Standard"[^>]*>.*?</style:style>', standard_style, s_xml, flags=re.DOTALL)

text_body_style = """<style:style style:name="Text_20_body" style:display-name="Corps de texte" style:family="paragraph" style:parent-style-name="Standard" style:class="text">
  <style:paragraph-properties fo:margin-top="0.08cm" fo:margin-bottom="0.08cm" fo:line-height="115%"/>
  <style:text-properties style:font-name="Book Antiqua" fo:font-family="&apos;Book Antiqua&apos;" fo:font-size="12pt" style:font-name-asian="Book Antiqua" style:font-family-asian="&apos;Book Antiqua&apos;" style:font-size-asian="12pt" style:font-name-complex="Book Antiqua" style:font-family-complex="&apos;Book Antiqua&apos;" style:font-size-complex="12pt"/>
</style:style>"""
s_xml = re.sub(r'<style:style style:name="Text_20_body"[^>]*>.*?</style:style>', text_body_style, s_xml, flags=re.DOTALL)

heading1_style = """<style:style style:name="Heading_20_1" style:display-name="Titre 1" style:family="paragraph" style:parent-style-name="Heading" style:next-style-name="Text_20_body" style:default-outline-level="1" style:class="chapter">
  <style:paragraph-properties fo:margin-top="0.18cm" fo:margin-bottom="0.08cm" fo:text-align="center" fo:keep-with-next="always"/>
  <style:text-properties style:font-name="Ink Free" fo:font-family="&apos;Ink Free&apos;" fo:font-size="24pt" fo:font-weight="bold" style:font-name-asian="Ink Free" style:font-family-asian="&apos;Ink Free&apos;" style:font-size-asian="24pt" style:font-weight-asian="bold" style:font-name-complex="Ink Free" style:font-family-complex="&apos;Ink Free&apos;" style:font-size-complex="24pt" style:font-weight-complex="bold"/>
</style:style>"""
s_xml = re.sub(r'<style:style style:name="Heading_20_1"[^>]*>.*?</style:style>', heading1_style, s_xml, flags=re.DOTALL)

heading2_style = """<style:style style:name="Heading_20_2" style:display-name="Titre 2" style:family="paragraph" style:parent-style-name="Heading" style:next-style-name="Text_20_body" style:default-outline-level="2" style:class="chapter">
  <style:paragraph-properties fo:margin-top="0.18cm" fo:margin-bottom="0.08cm" fo:keep-with-next="always"/>
  <style:text-properties style:font-name="Cambria" fo:font-family="Cambria" fo:font-size="18pt" fo:font-weight="bold" style:font-name-asian="Cambria" style:font-family-asian="Cambria" style:font-size-asian="18pt" style:font-weight-asian="bold" style:font-name-complex="Cambria" style:font-family-complex="Cambria" style:font-size-complex="18pt" style:font-weight-complex="bold"/>
</style:style>"""
s_xml = re.sub(r'<style:style style:name="Heading_20_2"[^>]*>.*?</style:style>', heading2_style, s_xml, flags=re.DOTALL)

heading3_style = """<style:style style:name="Heading_20_3" style:display-name="Titre 3" style:family="paragraph" style:parent-style-name="Heading" style:next-style-name="Text_20_body" style:default-outline-level="3" style:class="chapter">
  <style:paragraph-properties fo:margin-top="0.18cm" fo:margin-bottom="0.08cm" fo:keep-with-next="always"/>
  <style:text-properties style:font-name="Bernard MT Condensed" fo:font-family="&apos;Bernard MT Condensed&apos;" fo:font-size="16pt" style:font-name-asian="Bernard MT Condensed" style:font-family-asian="&apos;Bernard MT Condensed&apos;" style:font-size-asian="16pt" style:font-name-complex="Bernard MT Condensed" style:font-family-complex="&apos;Bernard MT Condensed&apos;" style:font-size-complex="16pt"/>
</style:style>"""
s_xml = re.sub(r'<style:style style:name="Heading_20_3"[^>]*>.*?</style:style>', heading3_style, s_xml, flags=re.DOTALL)

heading4_style = """<style:style style:name="Heading_20_4" style:display-name="Titre 4" style:family="paragraph" style:parent-style-name="Heading" style:next-style-name="Text_20_body" style:default-outline-level="4" style:class="chapter">
  <style:paragraph-properties fo:margin-top="0.16cm" fo:margin-bottom="0.06cm" fo:keep-with-next="always"/>
  <style:text-properties style:font-name="Arno Pro" fo:font-family="&apos;Arno Pro&apos;" style:font-size="14pt" fo:font-size="14pt" fo:font-weight="bold" style:font-name-asian="Arno Pro" style:font-family-asian="&apos;Arno Pro&apos;" style:font-size-asian="14pt" style:font-weight-asian="bold" style:font-name-complex="Arno Pro" style:font-family-complex="&apos;Arno Pro&apos;" style:font-size-complex="14pt" style:font-weight-complex="bold"/>
</style:style>"""
if 'style:name="Heading_20_4"' in s_xml:
    s_xml = re.sub(r'<style:style style:name="Heading_20_4"[^>]*>.*?</style:style>', heading4_style, s_xml, flags=re.DOTALL)
else:
    s_xml = s_xml.replace("</office:styles>", f"  {heading4_style}\n</office:styles>")

preformatted_style = """<style:style style:name="Preformatted_20_Text" style:display-name="Préformaté" style:family="paragraph" style:parent-style-name="Standard" style:class="html">
  <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" fo:margin-left="0.15cm" fo:margin-right="0.15cm" fo:line-height="115%" fo:background-color="#f8fafc" fo:padding="0.12cm" fo:border="0.5pt solid #cbd5e1"/>
  <style:text-properties style:font-name="Consolas" fo:font-family="Consolas" fo:font-size="10pt" style:font-name-asian="Consolas" style:font-family-asian="Consolas" style:font-size-asian="10pt" style:font-name-complex="Consolas" style:font-family-complex="Consolas" style:font-size-complex="10pt"/>
</style:style>"""
s_xml = re.sub(r'<style:style[^>]*Preformatted_20_Text[^>]*>.*?</style:style>', preformatted_style, s_xml, flags=re.DOTALL)

header_footer_styles = """
<style:style style:name="Header" style:display-name="En-tête" style:family="paragraph" style:parent-style-name="Standard" style:class="extra">
  <style:paragraph-properties fo:text-align="right" fo:margin-top="0cm" fo:margin-bottom="0.08cm" fo:border-bottom="0.5pt solid #cbd5e1" fo:padding-bottom="0.08cm"/>
  <style:text-properties style:font-name="Book Antiqua" fo:font-family="&apos;Book Antiqua&apos;" fo:font-size="10pt" fo:font-style="italic" fo:color="#475569" style:font-name-asian="Book Antiqua" style:font-family-asian="&apos;Book Antiqua&apos;" style:font-size-asian="10pt" style:font-style-asian="italic" style:font-name-complex="Book Antiqua" style:font-family-complex="&apos;Book Antiqua&apos;" style:font-size-complex="10pt" style:font-style-complex="italic"/>
</style:style>
<style:style style:name="Footer" style:display-name="Pied de page" style:family="paragraph" style:parent-style-name="Standard" style:class="extra">
  <style:paragraph-properties fo:text-align="center" fo:margin-top="0.08cm" fo:margin-bottom="0cm" fo:border-top="0.5pt solid #cbd5e1" fo:padding-top="0.08cm"/>
  <style:text-properties style:font-name="Book Antiqua" fo:font-family="&apos;Book Antiqua&apos;" fo:font-size="10pt" fo:font-style="italic" fo:color="#475569" style:font-name-asian="Book Antiqua" style:font-family-asian="&apos;Book Antiqua&apos;" style:font-size-asian="10pt" style:font-style-asian="italic" style:font-name-complex="Book Antiqua" style:font-family-complex="&apos;Book Antiqua&apos;" style:font-size-complex="10pt" style:font-style-complex="italic"/>
</style:style>
"""
for st_name in ["Header", "Footer"]:
    s_xml = re.sub(r'<style:style[^>]*style:name="' + st_name + r'"[^>]*>.*?</style:style>', '', s_xml, flags=re.DOTALL)
s_xml = s_xml.replace("</office:styles>", f"{header_footer_styles}\n</office:styles>")

mpm_first = """<style:page-layout style:name="Mpm_First"><style:page-layout-properties fo:page-width="21.001cm" fo:page-height="29.7cm" style:num-format="1" style:print-orientation="portrait" fo:margin-top="0.8cm" fo:margin-bottom="0.8cm" fo:margin-left="1.2cm" fo:margin-right="1.2cm" fo:background-color="transparent" style:writing-mode="lr-tb"><style:footnote-sep style:width="0.018cm" style:distance-before-sep="0.101cm" style:distance-after-sep="0.101cm" style:line-style="solid" style:adjustment="left" style:rel-width="25%" style:color="#000000"/></style:page-layout-properties><style:header-style/><style:footer-style><style:header-footer-properties fo:min-height="0.6cm" fo:margin-top="0.25cm"/></style:footer-style></style:page-layout>"""

mpm3_updated = """<style:page-layout style:name="Mpm3"><style:page-layout-properties fo:page-width="21.001cm" fo:page-height="29.7cm" style:num-format="1" style:print-orientation="portrait" fo:margin-top="0.8cm" fo:margin-bottom="0.8cm" fo:margin-left="1.2cm" fo:margin-right="1.2cm" fo:background-color="transparent" style:writing-mode="lr-tb"><style:footnote-sep style:width="0.018cm" style:distance-before-sep="0.101cm" style:distance-after-sep="0.101cm" style:line-style="solid" style:adjustment="left" style:rel-width="25%" style:color="#000000"/></style:page-layout-properties><style:header-style><style:header-footer-properties fo:min-height="0.6cm" fo:margin-bottom="0.25cm"/></style:header-style><style:footer-style><style:header-footer-properties fo:min-height="0.6cm" fo:margin-top="0.25cm"/></style:footer-style></style:page-layout>"""

s_xml = re.sub(r'<style:page-layout style:name="Mpm_First">.*?</style:page-layout>', '', s_xml, flags=re.DOTALL)
s_xml = re.sub(r'<style:page-layout style:name="Mpm3">.*?</style:page-layout>', mpm_first + mpm3_updated, s_xml, flags=re.DOTALL)

master_styles_updated = """<office:master-styles>
  <style:master-page style:name="First_20_Page" style:display-name="Première page" style:page-layout-name="Mpm_First" style:next-style-name="HTML">
    <style:footer>
      <text:p text:style-name="Footer">Page <text:page-number text:select-page="current">1</text:page-number> / <text:page-count>9</text:page-count></text:p>
    </style:footer>
  </style:master-page>
  <style:master-page style:name="HTML" style:page-layout-name="Mpm3" draw:style-name="Mdp2">
    <style:header>
      <text:p text:style-name="Header">STI 3e SI — Sujet de TP : Portail Automobile « Test Drive » (M. Hatem Romdhane)</text:p>
    </style:header>
    <style:footer>
      <text:p text:style-name="Footer">Page <text:page-number text:select-page="current">2</text:page-number> / <text:page-count>9</text:page-count></text:p>
    </style:footer>
  </style:master-page>
</office:master-styles>"""

s_xml = re.sub(r'<office:master-styles>.*?</office:master-styles>', master_styles_updated, s_xml, flags=re.DOTALL)

with open(styles_path, "w", encoding="utf-8") as f:
    f.write(s_xml)

# content.xml
content_path = os.path.join(extract_dir, "content.xml")
with open(content_path, "r", encoding="utf-8") as f:
    c_xml = f.read()

for fn in ["Book Antiqua", "Ink Free", "Cambria", "Bernard MT Condensed", "Arno Pro", "Consolas"]:
    c_xml = re.sub(r'<style:font-face\s+style:name="' + fn + r'"[^>]*/>', '', c_xml)
c_xml = c_xml.replace("</office:font-face-decls>", f"{FONTS_XML}\n</office:font-face-decls>")

# Titre 1
c_xml = re.sub(
    r'<text:p [^>]*?>(Série de Travaux Pratiques\s*:.*?)</text:p>',
    r'<text:h text:style-name="Heading_20_1" text:outline-level="1">\1</text:h>',
    c_xml
)

c_xml = re.sub(r'style:master-page-name="[^"]+"', 'style:master-page-name="First_20_Page"', c_xml)

# Preformatted styles
def fix_pre_automatic(m):
    s_name = m.group(1)
    return f"""<style:style style:name="{s_name}" style:family="paragraph" style:parent-style-name="Preformatted_20_Text"><style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" fo:line-height="115%" style:contextual-spacing="false"/><style:text-properties style:font-name="Consolas" fo:font-family="Consolas" fo:font-size="10pt"/></style:style>"""
c_xml = re.sub(r'<style:style\s+style:name="(P\d+)"\s+style:family="paragraph"\s+style:parent-style-name="Preformatted_20_Text"[^>]*>.*?</style:style>', fix_pre_automatic, c_xml, flags=re.DOTALL)

# Table styles centered
c_xml = re.sub(
    r'(<style:style\s+style:name="Tableau\d+"\s+style:family="table">)<style:table-properties[^>]*/>',
    r'\1<style:table-properties style:width="17.0cm" table:align="center"/>',
    c_xml
)

# Table column widths for Tableau3 (Grille d'évaluation): 4.5cm, 9.8cm, 2.7cm
col_widths = {
    "Tableau3.A": "4.6cm",
    "Tableau3.B": "9.8cm",
    "Tableau3.C": "2.6cm"
}
for col_name, width in col_widths.items():
    col_style = f"""<style:style style:name="{col_name}" style:family="table-column"><style:table-column-properties style:column-width="{width}"/></style:style>"""
    c_xml = re.sub(r'<style:style\s+style:name="' + col_name + r'"\s+style:family="table-column">.*?</style:style>', col_style, c_xml, flags=re.DOTALL)

# Table cells: 0.5pt black border, padding
def fix_cell_props(m):
    c_name = m.group(1)
    return f"""<style:style style:name="{c_name}" style:family="table-cell"><style:table-cell-properties style:vertical-align="middle" fo:padding-left="0.18cm" fo:padding-right="0.18cm" fo:padding-top="0.08cm" fo:padding-bottom="0.08cm" fo:border="0.5pt solid #000000"/></style:style>"""
c_xml = re.sub(r'<style:style\s+style:name="(Tableau\d+\.[A-Z]\d+)"\s+style:family="table-cell">.*?</style:style>', fix_cell_props, c_xml, flags=re.DOTALL)

# Clean text properties bg (Rule 9)
def clean_text_properties_bg(m):
    chunk = m.group(0)
    chunk = re.sub(r'fo:background-color="[^"]*"', '', chunk)
    chunk = re.sub(r'loext:char-shading-value="[^"]*"', '', chunk)
    chunk = re.sub(r'loext:border[^=]*="[^"]*"', '', chunk)
    chunk = re.sub(r'loext:padding[^=]*="[^"]*"', '', chunk)
    return chunk
c_xml = re.sub(r'<style:style\s+style:name="T\d+"\s+style:family="text">.*?</style:style>', clean_text_properties_bg, c_xml, flags=re.DOTALL)

# Images
svg_dimensions = {
    "svg_ex1_portail.svg": ("14.0cm", "7.0cm"),
    "svg_ex2_testeur.svg": ("14.0cm", "7.2cm"),
    "svg_ex3_evaluation.svg": ("14.0cm", "7.3cm"),
    "svg_ex4_manifestation.svg": ("14.0cm", "7.4cm"),
    "svg_ex5_css_layout.svg": ("14.0cm", "6.9cm")
}

for s_name, (w_str, h_str) in svg_dimensions.items():
    c_xml = re.sub(r'xlink:href="[^"]*' + s_name + r'"', f'xlink:href="Pictures/{s_name}"', c_xml)
    pattern = r'(<draw:frame\b[^>]*?)(svg:width="[^"]*")([^>]*?)(svg:height="[^"]*")([^>]*?>\s*<draw:image\s+xlink:href="Pictures/' + s_name + r'")'
    replacement = r'\1svg:width="' + w_str + r'"\3svg:height="' + h_str + r'"\5'
    c_xml = re.sub(pattern, replacement, c_xml)

with open(content_path, "w", encoding="utf-8") as f:
    f.write(c_xml)

ET.fromstring(s_xml)
ET.fromstring(c_xml)

# Repack
if os.path.exists(target_odt):
    os.remove(target_odt)

with zipfile.ZipFile(target_odt, "w") as z_out:
    mime_p = os.path.join(extract_dir, "mimetype")
    if os.path.exists(mime_p):
        z_out.write(mime_p, "mimetype", compress_type=zipfile.ZIP_STORED)
    for r, dirs, files in os.walk(extract_dir):
        for fl in files:
            full = os.path.join(r, fl)
            rel = os.path.relpath(full, extract_dir).replace("\\", "/")
            if rel == "mimetype":
                continue
            z_out.write(full, rel, compress_type=zipfile.ZIP_DEFLATED)

shutil.rmtree(extract_dir)
if os.path.exists(temp_odt_path):
    os.remove(temp_odt_path)
if os.path.exists(temp_html_path):
    os.remove(temp_html_path)

print(f"Repacked successfully to {target_odt}")

# Copy to Complete/
complete_odt = os.path.join(WORKSPACE_DIR, "Complete", "enonce.odt")
shutil.copyfile(target_odt, complete_odt)

# PDF export
pdf_out = os.path.join(WORKSPACE_DIR, "enonce.pdf")
if os.path.exists(pdf_out):
    os.remove(pdf_out)

res_pdf = subprocess.run([
    SOFFICE_PATH,
    USER_INSTALL,
    "--headless",
    "--convert-to", "pdf",
    target_odt,
    "--outdir", WORKSPACE_DIR
], capture_output=True, text=True)

if os.path.exists(pdf_out):
    with open(pdf_out, "rb") as f:
        pdf_data = f.read()
    page_count = len(re.findall(rb'/Type\s*/Page\b', pdf_data))
    print(f"PDF exported successfully! Total pages: {page_count}")
