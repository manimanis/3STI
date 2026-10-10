# MiniProjet-22 : Site Test Drive

**Matière :** STI (Systèmes & Technologies de l'Informatique)  
**Classe :** 3<sup>ème</sup> Sciences de l'Informatique  
**Série :** Les Balises Sémantiques — Site Testeur Drive  
**Professeur :** Mme Raja Mkhinini  

---

## 🏎️ Présentation du Projet

Le portail web **Test Drive** regroupe tous les exercices de la série de Mme Raja Mkhinini au sein d'un même site cohérent et moderne.

### Caractéristiques techniques :
- **Intégration iframe :** Navigation fluide via une balise `<iframe>` centrale (`target="zone_affichage"`).
- **Zéro Flexbox / Zéro Grid :** Respect strict du programme scolaire (utilisation exclusive de `float`, `inline-block` et `table`).
- **Polices locales :** Polices *Outfit* et *Plus Jakarta Sans* déclarées dans `fonts.css` sans alourdir `style.css`.
- **Ressources visuelles optimisées :** 3 photographies automobiles compressées à moins de 130 Ko chacune (< 300 Ko).
- **Formulaires enrichis :** Intégration avancée des champs HTML5 (`textarea`, `checkbox`, `color`, `date`, `email`).
- **Rédaction synthétique :** Toutes les phrases du site sont courtes et percutantes (moins de 20 mots).

---

## 📁 Organisation des Fichiers

```text
miniprojets/MiniProjet-22/TestDrive/Complete/
│── index.html              # Portail principal (header, nav, section avec iframe, footer)
│── acceuil.html            # Page d'accueil (titre marron souligné + Bugatti Chiron)
│── enregistrement.html     # Formulaire d'enregistrement d'un testeur
│── evaluation.html         # Formulaire d'évaluation d'un modèle (+ bannière cockpit)
│── manifestation.html      # Exercice 1 : Évaluation de manifestation (+ bannière paddock)
│── fonts.css               # Déclarations @font-face isolées des polices locales
│── style.css               # Feuille de style principale (sans @font-face, sans flexbox ni grid)
│── fonts/                  # Fichiers de polices TTF téléchargés localement
│   ├── outfit-*.ttf
│   └── plusjakartasans-*.ttf
└── images/                 # Photographies du site
    ├── bugatti.jpg         # Véhicule d'essai Bugatti Chiron
    ├── cockpit.jpg         # Vue intérieure du cockpit de pilotage
    └── manifestation.jpg   # Paddock et piste de l'événement Test Drive
```

---

## 📝 Corrigé des Exercices du Sujet

### Exercice 1 (5 pts) — Tableau CSS
- **Titre "Évaluation d'une manifestation" :**
  ```css
  legend {
    color: red;
    font-size: 20px;
    font-weight: bolder;
  }
  ```
- **Titre "Service" :**
  ```css
  h1 {
    text-align: center;
    background-color: yellow;
    border: 3px dashed red;
    width: 150px;
    font-style: italic;
  }
  ```

### Exercice 2 (15 pts) — Site Test Drive
1. `index.html` : En-tête (Zone 1), volet de navigation (Zone 2), iframe récepteur (Zone 3), pied de page (Zone 4).
2. `enregistrement.html` : Formulaire avec fieldset, légende, n° permis, nom, prénom, genre et boutons.
3. `evaluation.html` : Formulaire avec modèle, notes de sécurité/conduite/confort, case robot et boutons.
4. `style.css` : Mise en forme complète sans flexbox ni grid.
