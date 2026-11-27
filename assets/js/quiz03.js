/**
 * Quiz 03 : HTML5 & CSS3 — 100 Questions (Programme complet 3e SI)
 * Questions approfondies, calculs Box Model, analyse de code, syntaxe et erreurs.
 * Logique Vue.js avec tirage aléatoire configurable (20 standard ou 100 complet).
 */

var rawQuestions = [
    {
        "question": "Dans la phrase : <em>« En 1862, Victor Hugo a publié Les Misérables. »</em>, quelle partie doit impérativement être balisée par `<cite>` selon la norme HTML5 ?",
        "options": [
            "Uniquement le titre de l'œuvre : `<cite>Les Misérables</cite>`.",
            "L'auteur et son œuvre : `<cite>Victor Hugo a publié Les Misérables</cite>`.",
            "L'auteur uniquement : `<cite>Victor Hugo</cite>`.",
            "L'année de parution : `<cite>1862</cite>`."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Un élève écrit `<address>Avenue Habib Bourguiba, Tunis</address>` pour indiquer l'adresse d'un magasin dans un article de blog. Pourquoi cette utilisation est-elle sémantiquement <strong>incorrecte</strong> ?",
        "options": [
            "Parce que `<address>` est strictement réservée aux coordonnées de l'auteur ou du propriétaire de la page/de l'article.",
            "Parce que `<address>` ne doit être utilisée qu'à l'intérieur de la balise `<head>`.",
            "Parce que `<address>` exige obligatoirement un lien `mailto:` pour être valide.",
            "Parce que les adresses physiques doivent obligatoirement être balisées avec `<cite>`."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quelle est la règle d'imbrication obligatoire concernant la balise `<summary>` au sein de l'élément `<details>` ?",
        "options": [
            "`<summary>` doit obligatoirement être le tout premier élément enfant direct de `<details>`.",
            "`<summary>` peut être placé n'importe où dans `<details>`, le navigateur le repositionne.",
            "`<summary>` doit toujours être placé à la fin, juste avant la balise fermante `</details>`.",
            "`<summary>` ne peut contenir que du texte brut sans aucune balise enfant."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quelle est la différence fondamentale entre les balises `<strong>` et `<mark>` ?",
        "options": [
            "`<strong>` donne une importance sémantique forte au texte, tandis que `<mark>` indique une pertinence contextuelle (surlignage).",
            "`<strong>` surligne le texte en jaune, alors que `<mark>` le met uniquement en gras.",
            "`<strong>` est une balise de bloc, alors que `<mark>` est une balise en ligne (inline).",
            "Il n'y a aucune différence, ce sont deux balises équivalentes en HTML5."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Où la balise `<figcaption>` a-t-elle le droit d'apparaître par rapport à son élément parent `<figure>` ?",
        "options": [
            "Uniquement en tant que tout premier ou tout dernier enfant direct de `<figure>`.",
            "Librement n'importe où au milieu des autres éléments enfants de `<figure>`.",
            "Strictement après la balise `<img>`, elle ne peut jamais être placée avant l'image.",
            "En dehors de `<figure>`, immédiatement après la balise fermante `</figure>`."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quelle balise sémantique convient le mieux pour afficher le résultat d'un calcul dynamique issu d'un script ou d'un formulaire ?",
        "options": [
            "<output>",
            "<result>",
            "<calc>",
            "<span>"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Selon l'annexe officielle, quel est le rôle sémantique exact de la balise `<u>` en HTML5 ?",
        "options": [
            "Marquer un texte présentant une annotation non textuelle (comme une faute d'orthographe ou un nom propre).",
            "Souligner du texte pour créer un lien hypertexte.",
            "Mettre en valeur un titre secondaire.",
            "Indiquer un texte supprimé d'un document."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Dans un document web structuré, quel est le rôle spécifique de la balise sémantique `<main>` ?",
        "image": "images/quiz03/q08-page-structure.svg",
        "options": [
            "Définir le contenu principal unique du document, en excluant les en-têtes, pieds de page et barres latérales.",
            "Regrouper tous les liens de navigation du site.",
            "Contenir la barre latérale avec les liens publicitaires.",
            "Définir le titre principal de l'onglet du navigateur."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quelle balise sémantique est la plus appropriée pour représenter un article de presse ou une publication de forum autonome et réutilisable ?",
        "options": [
            "<article>",
            "<section>",
            "<div>",
            "<aside>"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quelle est la nuance entre les balises `<section>` et `<article>` ?",
        "options": [
            "`<article>` représente un contenu autonome et indépendant, alors que `<section>` représente une partie thématique d'un document.",
            "`<section>` ne peut contenir que des images, alors que `<article>` ne contient que du texte.",
            "`<section>` est une balise en ligne (inline), alors que `<article>` est de type bloc.",
            "Il n'y a aucune différence, les deux termes sont synonymes en HTML5."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "À quoi sert la balise `<hr>` en HTML5 moderne selon l'annexe officielle ?",
        "options": [
            "Définir une rupture thématique sous forme de séparation visuelle ou ligne horizontale.",
            "Insérer un simple saut de ligne dans un paragraphe.",
            "Créer un trait de soulignement sous un mot.",
            "Définir la zone d'en-tête d'un tableau."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Comment rend-on le bloc interactif `<details>` ouvert et déployé dès le chargement initial de la page ?",
        "options": [
            "En ajoutant l'attribut booléen `open` sur la balise : `<details open>`.",
            "En lui ajoutant la classe CSS `.active`.",
            "En déclarant `expanded=\"true\"`.",
            "En plaçant l'attribut `visible` sur la balise `<summary>`."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quelle balise d'en-tête définit le titre qui s'affiche dans l'onglet du navigateur et les favoris ?",
        "image": "images/quiz03/q55-head-code.svg",
        "options": [
            "<title>",
            "<h1>",
            "<header>",
            "<meta>"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quelle balise permet de lier une feuille de style CSS externe au document HTML courant ?",
        "options": [
            "`<link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">`",
            "`<style src=\"style.css\"></style>`",
            "`<css link=\"style.css\"></css>`",
            "`<script type=\"text/css\" href=\"style.css\"></script>`"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quel attribut de la balise `<style>` permet de cibler des règles de style exclusivement destinées à l'impression ?",
        "options": [
            "`media=\"print\"`",
            "`type=\"print\"`",
            "`target=\"print\"`",
            "`rel=\"print\"`"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Dans la balise `<meta charset=\"UTF-8\">`, à quoi sert exactement la valeur `UTF-8` ?",
        "options": [
            "À encoder les caractères pour afficher correctement les accents et symboles de toutes les langues.",
            "À compresser les images de la page web.",
            "À définir la langue française pour les moteurs de recherche.",
            "À charger la police système par défaut."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quelle est la fonction essentielle de la balise `<source>` à l'intérieur d'un élément `<video>` ou `<audio>` ?",
        "options": [
            "Proposer plusieurs formats alternatifs de fichiers média pour que le navigateur choisisse le premier compatible.",
            "Activer la webcam et le micro de l'utilisateur.",
            "Créer un bouton de téléchargement sous le lecteur.",
            "Définir la source d'un sous-titre de vidéo."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quel attribut de la balise `<img>` est obligatoire pour assurer l'accessibilité et décrire l'image si elle ne charge pas ?",
        "image": "images/quiz03/q35-img-error.svg",
        "options": [
            "`alt`",
            "`title`",
            "`src`",
            "`desc`"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quel attribut doit-on ajouter sur `<audio>` ou `<video>` pour afficher les boutons Lecture, Pause et Volume natifs du navigateur ?",
        "options": [
            "`controls`",
            "`buttons`",
            "`player`",
            "`autoplay`"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Que fait le navigateur lors de la rencontre de cette balise : `<a href=\"rapport.pdf\" target=\"_blank\">Ouvrir</a>` ?",
        "options": [
            "Il ouvre le document `rapport.pdf` dans un nouvel onglet ou une nouvelle fenêtre.",
            "Il télécharge directement le fichier sans l'ouvrir.",
            "Il remplace la page courante par le document PDF.",
            "Il affiche le document dans un cadre invisible."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quelle est la différence fondamentale de comportement entre `<span>` et `<div>` ?",
        "options": [
            "`<div>` est un conteneur de type bloc (crée un retour à la ligne), tandis que `<span>` est en ligne (inline, reste dans le flux de texte).",
            "`<span>` est de type bloc et `<div>` est en ligne.",
            "`<div>` ne peut contenir que du texte, tandis que `<span>` accepte tous les éléments.",
            "Il n'y a aucune différence technique."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quelle balise HTML5 permet d'imbriquer une autre page web au sein de la page courante sous forme de cadre en ligne ?",
        "options": [
            "`<iframe>`",
            "`<frame>`",
            "`<embed>`",
            "`<window>`"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Comment fait-on pour qu'un clic sur un lien `<a href=\"page2.html\">` ouvre son contenu directement à l'intérieur d'un `<iframe name=\"cadre_vue\">` existant ?",
        "image": "images/quiz03/q68-iframe-target.svg",
        "options": [
            "En définissant l'attribut `target=\"cadre_vue\"` sur le lien `<a>`.",
            "En écrivant `href=\"cadre_vue:page2.html\"`.",
            "En plaçant la balise `<a>` à l'intérieur de l'élément `<iframe>`.",
            "C'est impossible sans écrire un script JavaScript complexe."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Pourquoi est-il généralement interdit ou fortement déconseillé d'imbriquer un élément de type bloc comme `<div>` ou `<p>` à l'intérieur d'un `<span>` ?",
        "options": [
            "Parce qu'un élément en ligne (`inline`) ne doit pas contenir d'élément de type bloc (`block`) selon la spécification HTML.",
            "Parce que cela provoque une erreur de compilation dans le navigateur.",
            "Parce que le texte devient automatiquement illisible.",
            "Parce que cela désactive automatiquement le fichier CSS."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Dans le code `<iframe src=\"demo.html\" name=\"cadre\"></iframe>`, à quoi sert l'attribut `name` ?",
        "image": "images/quiz03/q68-iframe-target.svg",
        "options": [
            "À nommer le cadre pour qu'il puisse être ciblé par des liens avec l'attribut `target` ou des formulaires.",
            "À afficher un titre visible au-dessus du cadre.",
            "À définir l'URL de la page à charger.",
            "À réserver l'identifiant CSS du cadre."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quel attribut de `<ol>` permet d'inverser l'ordre de numérotation d'une liste ordonnée ?",
        "image": "images/quiz03/q12-ordered-list.svg",
        "options": [
            "`reversed`",
            "`invert`",
            "`desc`",
            "`order=\"down\"`"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Observez ce code :<br><code>&lt;ol type=\"I\" start=\"4\" reversed&gt;</code><br><code>&nbsp;&nbsp;&lt;li&gt;Tunis&lt;/li&gt;</code><br><code>&nbsp;&nbsp;&lt;li&gt;Sousse&lt;/li&gt;</code><br><code>&nbsp;&nbsp;&lt;li&gt;Sfax&lt;/li&gt;</code><br><code>&lt;/ol&gt;</code><br>Quel sera le marqueur affiché devant la ville de « Tunis » ?",
        "image": "images/quiz03/q12-ordered-list.svg",
        "options": [
            "IV",
            "I",
            "VI",
            "4"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quelle valeur de `list-style-type` en CSS permet d'afficher des chiffres romains minuscules devant chaque élément d'une liste ?",
        "options": [
            "`lower-roman`",
            "`lower-alpha`",
            "`upper-roman`",
            "`decimal-leading-zero`"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quelle est la différence visuelle entre `list-style-position: outside;` (défaut) et `list-style-position: inside;` ?",
        "image": "images/quiz03/q90-list-position.svg",
        "options": [
            "Avec `inside`, les puces sont placées à l'intérieur du bloc de texte et la deuxième ligne d'un texte long s'aligne sous la puce.",
            "Avec `inside`, les puces disparaissent complètement.",
            "Avec `outside`, les puces sont placées à droite du texte.",
            "Il n'y a aucune différence visuelle."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quelle super-propriété CSS permet de combiner en une seule déclaration le type de marqueur, la position et l'image de puce d'une liste ?",
        "options": [
            "`list-style`",
            "`list-type`",
            "`marker`",
            "`bullet`"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Dans un tableau HTML, une cellule de la 1ʳᵉ ligne possède `rowspan=\"3\"`. Combien de cellules `<td>` faut-il déclarer dans la 2ᵉ ligne pour qu'elle contienne visuellement 4 colonnes au total ?",
        "image": "images/quiz03/q11-table.svg",
        "options": [
            "3 cellules `<td>` (car la cellule du dessus avec `rowspan=\"3\"` occupe déjà une colonne).",
            "4 cellules `<td>`.",
            "2 cellules `<td>`.",
            "5 cellules `<td>`."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Dans un tableau comportant 5 colonnes, une cellule possède `colspan=\"3\"`. Combien de cellules `<td>` ordinaires supplémentaires doit-on insérer sur cette même ligne pour la compléter ?",
        "image": "images/quiz03/q11-table.svg",
        "options": [
            "2 cellules `<td>` (3 + 2 = 5 colonnes).",
            "3 cellules `<td>`.",
            "4 cellules `<td>`.",
            "5 cellules `<td>`."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Où doit impérativement se situer la balise `<caption>` (légende du tableau) dans le code HTML d'un tableau ?",
        "options": [
            "Immédiatement après la balise d'ouverture `<table>`, avant `<thead>` ou `<tr>`.",
            "À la toute fin du tableau, juste avant `</table>`.",
            "À l'intérieur de la première balise `<th>` de l'en-tête.",
            "En dehors de `<table>`, juste au-dessus du tableau."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quel est le résultat visuel de la propriété CSS `border-collapse: collapse;` appliquée à un tableau `<table>` ?",
        "image": "images/quiz03/q48-border-collapse.svg",
        "options": [
            "Les bordures adjacentes des cellules voisines fusionnent en une seule bordure commune.",
            "Les bordures de toutes les cellules sont complètement effacées.",
            "Les bordures des cellules s'écartent avec un espace double entre chaque case.",
            "Seule la bordure extérieure du tableau reste visible, les bordures internes disparaissent."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quelle est la différence sémantique et typographique par défaut entre `<th>` et `<td>` ?",
        "options": [
            "`<th>` désigne une cellule d'en-tête (texte en gras et centré par défaut), `<td>` désigne une cellule de données ordinaires.",
            "`<th>` est uniquement utilisé pour la première colonne, `<td>` pour toutes les autres.",
            "`<th>` ne peut contenir que des chiffres, `<td>` du texte.",
            "Il n'y a aucune différence."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quelle balise regroupe les lignes constituant le pied d'un tableau (totaux, résumés) ?",
        "options": [
            "<tfoot>",
            "<bottom>",
            "<footer-table>",
            "<thead>"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quelle propriété CSS permet de fixer l'algorithme d'agencement des cellules d'un tableau pour accélérer son affichage ?",
        "options": [
            "`table-layout` (valeurs `auto` ou `fixed`)",
            "`table-display`",
            "`border-spacing`",
            "`cell-layout`"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Trouvez l'erreur dans la structure de ce tableau :<br><code>&lt;table&gt;</code><br><code>&nbsp;&nbsp;&lt;tr&gt;&lt;th&gt;Produit&lt;/th&gt;&lt;th&gt;Prix&lt;/th&gt;&lt;/tr&gt;</code><br><code>&nbsp;&nbsp;&lt;caption&gt;Liste des articles&lt;/caption&gt;</code><br><code>&lt;/table&gt;</code>",
        "options": [
            "La balise `<caption>` est placée après une ligne `<tr>` alors qu'elle doit être le tout premier élément enfant de `<table>`.",
            "La balise `<th>` ne peut pas être contenue dans un `<tr>`.",
            "Il est obligatoire de mettre une balise `<tbody>` si on utilise `<caption>`.",
            "Un tableau ne peut pas contenir à la fois `<th>` et `<caption>`."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Un formulaire contient deux boutons radio pour choisir le genre :<br><code>&lt;input type=\"radio\" name=\"g1\" value=\"H\"&gt; Homme</code><br><code>&lt;input type=\"radio\" name=\"g2\" value=\"F\"&gt; Femme</code><br>Quel problème majeur va rencontrer l'utilisateur ?",
        "image": "images/quiz03/q18-input-types.svg",
        "options": [
            "L'utilisateur pourra cocher les deux options simultanément car leurs attributs `name` sont différents.",
            "Aucune des deux options ne pourra être cochée car il manque l'attribut `checked`.",
            "Le formulaire refusera de s'envoyer car les valeurs de `name` doivent obligatoirement être `gender`.",
            "Seule la première option sera cliquable, la seconde sera désactivée par défaut."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quelle est la différence technique entre un champ avec l'attribut `disabled` et un champ avec l'attribut `readonly` lors de la soumission d'un formulaire ?",
        "options": [
            "La valeur d'un champ `readonly` est transmise au serveur, tandis que celle d'un champ `disabled` n'est pas transmise.",
            "La valeur d'un champ `disabled` est transmise au serveur, mais pas celle d'un champ `readonly`.",
            "Le champ `disabled` est modifiable par l'utilisateur, mais pas le champ `readonly`.",
            "Aucun des deux champs ne transmet sa valeur lors de la soumission."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Un élève souhaite définir le texte initial d'une zone de texte multiligne `<textarea>`. Quelle syntaxe est correcte ?",
        "options": [
            "`<textarea name=\"comm\">Texte initial ici</textarea>`",
            "`<textarea name=\"comm\" value=\"Texte initial ici\"></textarea>`",
            "`<textarea name=\"comm\" content=\"Texte initial ici\"></textarea>`",
            "`<textarea name=\"comm\" text=\"Texte initial ici\"></textarea>`"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Comment associe-t-on correctement une liste de suggestions prédéfinies `<datalist id=\"villes\">` à un champ de saisie texte `<input>` ?",
        "options": [
            "`<input type=\"text\" list=\"villes\">`",
            "`<input type=\"text\" datalist=\"villes\">`",
            "`<input type=\"text\" for=\"villes\">`",
            "`<input type=\"text\" options=\"#villes\">`"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quelles sont les valeurs autorisées pour l'attribut `target` d'un formulaire `<form>` selon le programme officiel ?",
        "options": [
            "`_self`, `_blank`, `_parent`, `_top` et le nom d'un iframe (`iframeName`).",
            "`_self`, `_new`, `_tab`, `_window` et `_popup`.",
            "`get`, `post`, `put` et `delete`.",
            "`auto`, `manual`, `hidden` et `visible`."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Un formulaire doit envoyer des données sensibles (comme un mot de passe) ou un gros volume d'informations. Quelle méthode HTTP et quel attribut faut-il employer ?",
        "image": "images/quiz03/q15-form.svg",
        "options": [
            "`method=\"post\"` car les données sont encapsulées dans le corps de la requête HTTP sans limitation visible d'URL.",
            "`method=\"get\"` car les données sont cryptées automatiquement dans l'URL par le navigateur.",
            "`type=\"post\"` pour forcer un affichage sécurisé dans les paramètres d'URL.",
            "`action=\"post\"` pour rediriger vers la base de données sécurisée."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Sur quels types d'éléments `<input>` les attributs `min` et `max` sont-ils officiellement applicables selon l'annexe ?",
        "options": [
            "`number`, `range`, `datetime-local`, `date` et `time`.",
            "`text`, `password`, `email` et `tel`.",
            "`button`, `reset`, `submit` et `range`.",
            "`checkbox`, `radio` et `select`."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quelle est la différence visuelle entre `<select>` ordinaire et `<select size=\"4\">` ?",
        "options": [
            "`size=\"4\"` transforme la liste déroulante fermée en une boîte de sélection affichant 4 options visibles simultanément.",
            "`size=\"4\"` limite le choix à 4 caractères maximum.",
            "`size=\"4\"` quadruple la taille de la police de la liste.",
            "`size=\"4\"` oblige l'utilisateur à choisir exactement 4 options."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quel attribut de `<textarea>` permet de restreindre le nombre maximal de caractères saisissables par l'utilisateur ?",
        "options": [
            "`maxlength`",
            "`maxsize`",
            "`charlimit`",
            "`limit`"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quelle est la différence entre `<input type=\"submit\">` et `<input type=\"reset\">` ?",
        "options": [
            "`submit` envoie les données du formulaire au serveur, tandis que `reset` remet tous les champs à leurs valeurs par défaut.",
            "`submit` recharge la page sans rien envoyer, `reset` supprime le compte.",
            "`submit` valide les champs, `reset` ferme le navigateur.",
            "Il n'y a aucune différence, les deux balises sont interchangeables."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quel type de champ d'entrée permet de saisir à la fois une date et une heure (sans fuseau horaire) selon l'annexe HTML5 ?",
        "image": "images/quiz03/q18-input-types.svg",
        "options": [
            "`datetime-local`",
            "`datetime`",
            "`timestamp`",
            "`date-time`"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quelle balise permet d'associer un libellé textuel à un champ pour que le fait de cliquer sur le texte place le curseur dans le champ ?",
        "options": [
            "`<label for=\"id_champ\">`",
            "`<caption>`",
            "`<legend>`",
            "`<text>`"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quel attribut de `<input type=\"number\">` définit le pas d'incrémentation ou de décrémentation des valeurs (par exemple de 0.5 en 0.5) ?",
        "options": [
            "`step`",
            "`interval`",
            "`pace`",
            "`rate`"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quelle balise regroupe visuellement plusieurs éléments d'un formulaire avec un cadre et possède un titre défini par `<legend>` ?",
        "options": [
            "<fieldset>",
            "<group>",
            "<formgroup>",
            "<section>"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quelle est la nuance entre l'événement `oninput` et l'événement `onchange` sur un champ de texte `<input>` ?",
        "options": [
            "`oninput` se déclenche immédiatement à chaque frappe de caractère, tandis que `onchange` attend la perte de focus pour se déclencher après modification.",
            "`onchange` se déclenche à chaque touche, alors que `oninput` ne se déclenche qu'à la validation du formulaire.",
            "Les deux événements se déclenchent strictement au même moment.",
            "`oninput` ne fonctionne que pour les boutons radio."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quel événement HTML/JS se déclenche au moment précis où un champ de formulaire perd le focus (l'utilisateur clique ailleurs) ?",
        "options": [
            "`onblur`",
            "`onfocus`",
            "`onleave`",
            "`onunfocus`"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quel événement se déclenche lorsqu'un utilisateur appuie sur une touche du clavier (au moment de la pression) ?",
        "options": [
            "`onkeydown`",
            "`onkeyup`",
            "`onkeypress`",
            "`oninput`"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quel événement se déclenche dès que la page web a terminé le chargement complet de toutes ses ressources (images, styles, scripts) ?",
        "options": [
            "`onload`",
            "`onready`",
            "`onstart`",
            "`oncomplete`"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quel événement se déclenche sur un formulaire au moment où l'utilisateur tente de le soumettre ?",
        "options": [
            "`onsubmit`",
            "`onsend`",
            "`onvalidate`",
            "`onclick`"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quel événement se déclenche au moment précis où le pointeur de la souris passe au-dessus d'un élément ?",
        "options": [
            "`onmouseover`",
            "`onmouseenter`",
            "`onhover`",
            "`onfocus`"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quel événement se déclenche au moment où le pointeur de la souris quitte la surface d'un élément ?",
        "options": [
            "`onmouseout`",
            "`onmouseleave`",
            "`onblur`",
            "`onexit`"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quel événement se déclenche lorsqu'un fichier audio ou vidéo démarre sa lecture ?",
        "options": [
            "`onplay`",
            "`onstart`",
            "`onmedia`",
            "`onplaying`"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quel attribut global permet de masquer un élément à l'écran sans le supprimer du code source HTML ?",
        "options": [
            "`hidden`",
            "`invisible`",
            "`none`",
            "`mask`"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quel attribut global permet d'afficher une infobulle d'aide textuelle lorsque le curseur de la souris survole un élément ?",
        "options": [
            "`title`",
            "`tooltip`",
            "`alt`",
            "`info`"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "À quoi sert l'attribut global `lang` (par exemple `<html lang=\"fr\">`) ?",
        "options": [
            "Spécifier la langue principale du contenu de l'élément pour les moteurs de recherche et synthèses vocales.",
            "Traduire automatiquement la page en français.",
            "Définir le clavier de l'utilisateur.",
            "Charger les polices françaises par défaut."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quelle est la règle absolue concernant la valeur de l'attribut global `id` dans un document HTML valide ?",
        "options": [
            "La valeur de l'attribut `id` doit être strictement unique au sein de tout le document.",
            "Un même identifiant `id` peut être réutilisé sur plusieurs boutons.",
            "L'attribut `id` doit obligatoirement commencer par un chiffre.",
            "L'attribut `id` ne sert que pour le CSS et jamais pour JavaScript."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quelle est la différence fondamentale entre les deux sélecteurs CSS suivants ?<br>1) <code>div.menu { color: red; }</code><br>2) <code>div .menu { color: red; }</code> (avec un espace)",
        "image": "images/quiz03/q20-selectors.svg",
        "options": [
            "Le premier cible une balise `<div>` qui porte elle-même la classe `menu`, le second cible n'importe quel élément descendant situé à l'intérieur d'un `<div>`.",
            "Le premier est invalide en CSS, seul le second fonctionne.",
            "Les deux sélecteurs sont rigoureusement identiques.",
            "Le premier cible les enfants directs, le second cible les frères adjacents."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Que sélectionne exactement la règle CSS suivante ?<br><code>input[type=\"password\"] { border: 2px solid orange; }</code>",
        "options": [
            "Tous les éléments `<input>` dont l'attribut `type` vaut exactement `password`.",
            "Tous les éléments de la page qui ont un mot de passe.",
            "Tous les formulaires contenant un mot de passe.",
            "Uniquement le premier champ de mot de passe trouvé dans la page."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Que cible le sélecteur CSS d'attribut simple `a[target]` (sans valeur spécifiée) ?",
        "options": [
            "Tous les liens `<a>` qui possèdent l'attribut `target`, quelle que soit sa valeur.",
            "Uniquement les liens qui ont `target=\"_blank\"`.",
            "Les liens dont l'attribut `target` est vide.",
            "Tous les éléments qui ne possèdent pas de cible."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Considérez cette règle CSS :<br><code>h1, p.important { color: blue; }</code><br>Quels éléments auront le texte bleu ?",
        "options": [
            "Tous les éléments `<h1>` ainsi que les paragraphes `<p>` ayant la classe `important`.",
            "Uniquement les `<h1>` et les `<p>` qui ont tous les deux la classe `important`.",
            "Tous les éléments `<h1>`, tous les paragraphes `<p>`, et tous les éléments de classe `important`.",
            "La règle est syntaxiquement erronée en raison de la virgule."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Dans quel ordre précis doit-on déclarer les pseudo-classes de liens pour éviter que `:visited` n'écrase l'effet de `:hover` ?",
        "image": "images/quiz03/q22-pseudo-classes.svg",
        "options": [
            "`:link`, puis `:visited`, puis `:hover`, puis `:active` (ordre LVHA).",
            "`:hover`, puis `:active`, puis `:link`, puis `:visited`.",
            "`:active`, puis `:hover`, puis `:visited`, puis `:link`.",
            "L'ordre de déclaration n'a aucun impact en CSS3."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "À quel moment précis la pseudo-classe `:focus` s'active-t-elle sur un champ de formulaire `<input>` ?",
        "options": [
            "Dès que le champ est sélectionné par l'utilisateur (par clic de souris ou touche Tabulation).",
            "Dès que le curseur de la souris survole le champ sans cliquer.",
            "Uniquement au moment où l'utilisateur clique sur le bouton Soumettre.",
            "Lorsque le champ contient déjà au moins un caractère valide."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quelle pseudo-classe CSS permet d'appliquer un style pendant le court instant où l'utilisateur maintient le bouton de la souris enfoncé sur un bouton ?",
        "options": [
            "`:active`",
            "`:hover`",
            "`:focus`",
            "`:visited`"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Que sélectionne le sélecteur universel seul `*` en CSS ?",
        "options": [
            "Absolument tous les éléments présents dans le document HTML.",
            "Uniquement la balise `<body>`.",
            "Tous les liens hypertexte.",
            "Tous les éléments de type bloc."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quelle est la différence de priorité entre le sélecteur `#menu` et le sélecteur `.menu` ?",
        "options": [
            "Le sélecteur d'identifiant `#menu` a une spécificité (priorité) beaucoup plus forte que le sélecteur de classe `.menu`.",
            "Le sélecteur de classe `.menu` est plus prioritaire car il peut cibler plusieurs éléments.",
            "Les deux sélecteurs ont exactement la même priorité de cascade.",
            "Le navigateur applique toujours la règle écrite en premier dans le fichier."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Pourquoi le style `.titre h2 { color: red; }` ne s'applique-t-il PAS sur `<h2 class=\"titre\">Mon Titre</h2>` ?",
        "options": [
            "Parce que l'espace indique un descendant : il cherche un `<h2>` situé à l'intérieur d'un élément de classe `titre`. Il fallait écrire `h2.titre`.",
            "Parce que `<h2>` ne peut pas avoir de classe CSS.",
            "Parce qu'il manque un point-virgule après `.titre`.",
            "Parce que la balise `<h2>` est prioritaire sur les classes."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Un élément `<div>` a le style CSS suivant :<br><code>width: 250px; padding: 15px; border: 5px solid red; margin: 20px;</code><br>Quelle est la <strong>largeur visible totale</strong> de la boîte (en excluant la marge externe) ?",
        "image": "images/quiz03/q05-box-model.svg",
        "options": [
            "290px (250 + 15×2 + 5×2).",
            "270px (250 + 15 + 5).",
            "330px (250 + 15×2 + 5×2 + 20×2).",
            "250px (la propriété width fixe toujours la taille finale)."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Soit le même bloc :<br><code>width: 250px; padding: 15px; border: 5px solid red; margin: 20px;</code><br>Quel <strong>espace horizontal total</strong> ce bloc occupe-t-il dans le flux de la page ?",
        "image": "images/quiz03/q05-box-model.svg",
        "options": [
            "330px (largeur + padding gauche/droite + bordure gauche/droite + marge gauche/droite).",
            "290px.",
            "250px.",
            "310px."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Deux paragraphes consécutifs dans le flux normal ont les styles suivants :<br>Le premier a <code>margin-bottom: 30px;</code>.<br>Le second a <code>margin-top: 20px;</code>.<br>Quelle sera la distance réelle entre ces deux paragraphes à l'écran (phénomène de fusion de marges) ?",
        "options": [
            "30px (les marges verticales adjacentes fusionnent et seule la plus grande est conservée).",
            "50px (les deux marges s'additionnent toujours).",
            "20px (la marge du second élément écrase toujours la précédente).",
            "10px (la différence entre les deux marges)."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quelle est la différence fondamentale entre <code>display: inline;</code> et <code>display: inline-block;</code> ?",
        "image": "images/quiz03/q28-display.svg",
        "options": [
            "Un élément `inline-block` reste aligné sur la même ligne mais accepte qu'on lui définisse une largeur (`width`) et une hauteur (`height`), contrairement à un `inline` pur.",
            "Un élément `inline-block` force toujours un saut de ligne automatique avant et après lui.",
            "Un élément `inline` accepte les marges verticales, alors qu'un `inline-block` les ignore.",
            "Il n'y a aucune différence technique entre les deux valeurs."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "En CSS, que produit la déclaration suivante sur un conteneur ?<br><code>display: flex;</code>",
        "options": [
            "Elle active le modèle de boîte flexible (Flexbox), organisant automatiquement les enfants directs en ligne ou colonne dynamique.",
            "Elle force tous les éléments enfants à flotter à droite.",
            "Elle fige les dimensions du conteneur en pixels fixes.",
            "Elle transforme le conteneur en tableau HTML."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Observez cette règle CSS :<br><code>box-shadow: 5px 10px 15px rgba(0,0,0,0.3);</code><br>À quoi correspondent respectivement les valeurs <strong>5px</strong>, <strong>10px</strong> et <strong>15px</strong> ?",
        "image": "images/quiz03/q72-box-shadow.svg",
        "options": [
            "Décalage horizontal X (5px), décalage vertical Y (10px), rayon de flou blur (15px).",
            "Largeur (5px), hauteur (10px), épaisseur de bordure (15px).",
            "Marge gauche (5px), marge haute (10px), padding (15px).",
            "Durée (5s), délai (10s), vitesse (15px)."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quelle est la différence entre `padding` et `margin` dans le modèle de boîte CSS ?",
        "image": "images/quiz03/q05-box-model.svg",
        "options": [
            "`padding` est l'espace intérieur entre le contenu et la bordure, `margin` est l'espace extérieur en dehors de la bordure.",
            "`padding` est à l'extérieur de la bordure, `margin` est à l'intérieur.",
            "`padding` est pour le texte, `margin` est pour les images.",
            "Il n'y a aucune différence, ce sont deux propriétés synonymes."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Complétez : selon la directive officielle du programme de 3e STI, pour exprimer les mesures des dimensions en CSS, il faut strictement se limiter aux unités :",
        "options": [
            "Pixel (`px`) et pourcentage (`%`).",
            "`rem` et `em`.",
            "`vh` et `vw`.",
            "`cm` et `mm`."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Que se passe-t-il pour l'espace d'origine d'un élément lorsque vous lui appliquez :<br><code>position: relative; top: 20px; left: 30px;</code> ?",
        "image": "images/quiz03/q30-position.svg",
        "options": [
            "L'élément est décalé visuellement, mais son emplacement d'origine reste réservé dans le flux comme s'il n'avait pas bougé.",
            "L'élément sort du flux et les éléments suivants viennent combler son espace d'origine.",
            "L'élément est fixé par rapport à la fenêtre du navigateur en haut à gauche.",
            "L'élément devient invisible jusqu'au prochain rechargement."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Par rapport à quel élément un bloc stylisé avec <code>position: absolute; top: 0; left: 0;</code> se positionne-t-il ?",
        "image": "images/quiz03/q30-position.svg",
        "options": [
            "Par rapport à son plus proche ancêtre dont la position est différente de `static` (ou par rapport à la page entière si aucun n'existe).",
            "Toujours obligatoirement par rapport à son parent direct, quel que soit le style de ce parent.",
            "Toujours obligatoirement par rapport au coin supérieur gauche de l'écran visible.",
            "Par rapport au dernier paragraphe de la page."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Une bannière d'en-tête a le style suivant :<br><code>position: fixed; top: 0; left: 0; width: 100%;</code><br>Quel est son comportement lors du défilement (scroll) de la page ?",
        "options": [
            "Elle reste constamment visible et ancrée au sommet de l'écran, sans bouger d'un pixel pendant le défilement.",
            "Elle défile normalement avec le reste du contenu vers le haut de la page.",
            "Elle disparaît dès que l'utilisateur commence à scroller.",
            "Elle glisse automatiquement vers le bas de la page."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quel est le comportement d'un élément ayant <code>position: static;</code> (valeur par défaut) par rapport aux propriétés `top`, `bottom`, `left` et `right` ?",
        "image": "images/quiz03/q30-position.svg",
        "options": [
            "Il reste strictement dans le flux normal et ignore totalement les propriétés de décalage (`top`, `left`, etc.).",
            "Il est décalé de 10px par défaut.",
            "Il se centre automatiquement dans la page.",
            "Il est masqué par le navigateur."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quel est le comportement particulier de la valeur <code>position: sticky;</code> ?",
        "image": "images/quiz03/q30-position.svg",
        "options": [
            "L'élément se comporte en position relative dans le flux normal jusqu'à ce qu'un seuil de défilement soit atteint, où il devient fixé à l'écran.",
            "L'élément se colle obligatoirement au bas de la page.",
            "L'élément sort du flux et se place derrière tous les autres éléments.",
            "L'élément devient impossible à sélectionner à la souris."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Deux blocs voisins ont la propriété <code>float: left;</code>. Un paragraphe placé juste après vient s'enrouler à leur droite de manière indésirable. Quelle règle CSS permet de forcer ce paragraphe à passer <strong>en dessous</strong> des blocs flottants ?",
        "image": "images/quiz03/q25-float.svg",
        "options": [
            "`clear: both;`",
            "`float: none;`",
            "`overflow: visible;`",
            "`display: block;`"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Que se passe-t-il visuellement lorsqu'on applique <code>float: right;</code> à une image placée au sein d'un long paragraphe de texte ?",
        "image": "images/quiz03/q25-float.svg",
        "options": [
            "L'image se déplace tout à droite de son conteneur et les lignes de texte viennent habiller son côté gauche.",
            "L'image se place à droite et le texte disparaît.",
            "L'image s'agrandit pour prendre toute la largeur.",
            "Le texte se superpose au-dessus de l'image."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quelle valeur de la propriété `overflow` permet d'afficher des barres de défilement <strong>uniquement si le texte dépasse</strong> de la boîte ?",
        "image": "images/quiz03/q51-overflow.svg",
        "options": [
            "`auto`",
            "`scroll` (qui affiche les barres même si le texte ne déborde pas)",
            "`visible`",
            "`clip`"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Un élément a le style <code>visibility: hidden;</code>. Comment se comporte-t-il par rapport à un autre élément ayant <code>display: none;</code> ?",
        "image": "images/quiz03/q58-visibility.svg",
        "options": [
            "`visibility: hidden` masque l'élément tout en conservant exactement son espace physique dans la page, tandis que `display: none` le retire complètement de l'affichage.",
            "`display: none` conserve l'espace physique, tandis que `visibility: hidden` efface l'espace.",
            "Les deux propriétés produisent un résultat strictement identique.",
            "`visibility: hidden` supprime l'élément du code HTML de la page."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Si vous appliquez <code>opacity: 0;</code> à un bouton, comment réagit-il aux actions de l'utilisateur ?",
        "options": [
            "Le bouton est invisible à l'œil nu, mais il reste présent dans le flux et l'utilisateur peut toujours cliquer dessus.",
            "Le bouton est invisible et totalement désactivé (les clics ne déclenchent rien).",
            "Le bouton disparaît et son espace est libéré pour les éléments voisins.",
            "Le texte du bouton devient noir et le fond devient transparent."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Quelles sous-propriétés composent la super-propriété `border` selon le programme officiel ?",
        "options": [
            "`border-color`, `border-style` et `border-width`.",
            "`border-color`, `border-radius` et `border-width`.",
            "`border-style`, `border-margin` et `border-padding`.",
            "`border-top`, `border-bottom` et `border-left`."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Comment transformer une boîte carrée de `100px` sur `100px` en un cercle parfait en CSS ?",
        "options": [
            "`border-radius: 50%;`",
            "`border-style: circle;`",
            "`shape: circle;`",
            "`border-width: 50px;`"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Dans la super-propriété `background`, dans quel ordre peut-on regrouper les informations officielles ?",
        "image": "images/quiz03/q40-background.svg",
        "options": [
            "`background-color`, `background-image`, `background-repeat`, `background-size`, `background-position`.",
            "`background-width`, `background-height`, `background-color`.",
            "`background-margin`, `background-padding`, `background-border`.",
            "`background-filter`, `background-transform`, `background-color`."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Dans la super-propriété `font`, quel ensemble de sous-propriétés est <strong>strictement obligatoire</strong> pour que la règle soit valide en CSS ?",
        "options": [
            "La taille (`font-size`) et la famille de police (`font-family`).",
            "Le style (`font-style`) et la graisse (`font-weight`).",
            "La couleur (`color`) et la taille (`font-size`).",
            "La famille de police (`font-family`) seule suffit."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Que produit la règle CSS <code>text-transform: capitalize;</code> sur le texte d'un paragraphe ?",
        "options": [
            "Elle met la première lettre de chaque mot en majuscule.",
            "Elle met la totalité de toutes les lettres du texte en majuscules.",
            "Elle met la première lettre de la première phrase en majuscule uniquement.",
            "Elle passe tout le texte en minuscules."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Soit la déclaration :<br><code>transition: background-color 2s 1s;</code><br>Quelle est la durée de la transition et quel est son temps de retard (délai) ?",
        "image": "images/quiz03/q39-transition.svg",
        "options": [
            "Durée de la transition = 2s, délai de retard avant déclenchement = 1s.",
            "Durée de la transition = 1s, délai de retard avant déclenchement = 2s.",
            "La transition dure 3s au total sans aucun délai.",
            "Cette règle est invalide car il ne faut qu'une seule valeur de temps."
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Un développeur veut faire tourner un élément de 90 degrés dans le sens des aiguilles d'une montre et doubler sa taille. Quelle règle est correcte ?",
        "image": "images/quiz03/q42-transform.svg",
        "options": [
            "`transform: rotate(90deg) scale(2);`",
            "`transform: rotate(90) scale(200%);`",
            "`transition: rotate(90deg) scale(2);`",
            "`transform-rotate: 90deg; transform-scale: 2;`"
        ],
        "correctAnswerIndex": 0
    },
    {
        "question": "Observez cette règle d'animation :<br><code>animation: rebond 2s infinite alternate;</code><br>Que produit la valeur <strong>alternate</strong> ?",
        "image": "images/quiz03/q85-animation-direction.svg",
        "options": [
            "L'animation alterne sa direction à chaque cycle : elle joue d'abord de 0% à 100%, puis en sens inverse de 100% à 0% (effet d'aller-retour).",
            "L'animation s'arrête une fois sur deux.",
            "L'animation change de couleur à chaque répétition.",
            "L'animation s'exécute deux fois plus vite."
        ],
        "correctAnswerIndex": 0
    }
];

// Instance Vue
new Vue({
    el: '#app',
    data: {
        screen: 'start',
        rawQuestions: rawQuestions,
        questions: [],
        selectedCount: 20,
        currentIndex: 0,
        selectedOptionIndex: null,
        isAnswered: false,
        score: 0,
        userMistakes: []
    },
    computed: {
        currentQuestion: function() {
            return this.questions[this.currentIndex] || null;
        },
        progressPercentage: function() {
            if (!this.questions.length) return 0;
            return Math.round(((this.currentIndex + 1) / this.questions.length) * 100);
        },
        finalPercentage: function() {
            if (!this.questions.length) return 0;
            return Math.round((this.score / this.questions.length) * 100);
        },
        resultEvaluation: function() {
            var pct = this.finalPercentage;
            if (pct >= 85) {
                return {
                    type: 'success',
                    title: 'Excellente maîtrise !',
                    description: 'Vous dominez parfaitement les subtilités, pièges et calculs du programme officiel HTML5 & CSS3 de 3e SI.',
                    iconClass: 'success',
                    badgeClass: 'bg-success text-white'
                };
            } else if (pct >= 60) {
                return {
                    type: 'warning',
                    title: 'Bon niveau d\'ensemble !',
                    description: 'Bonne compréhension générale, mais attention aux pièges sur le Box Model, les attributs et les priorités de sélecteurs.',
                    iconClass: 'warning',
                    badgeClass: 'bg-warning text-dark'
                };
            } else {
                return {
                    type: 'danger',
                    title: 'Révisions indispensables !',
                    description: 'Prenez le temps d\'analyser attentivement le récapitulatif des erreurs ci-dessous et de revoir les annexes officielles.',
                    iconClass: 'danger',
                    badgeClass: 'bg-danger text-white'
                };
            }
        }
    },
    methods: {
        shuffle: function(array) {
            var copy = array.slice();
            for (var i = copy.length - 1; i > 0; i--) {
                var j = Math.trunc(Math.random() * (i + 1));
                var temp = copy[i];
                copy[i] = copy[j];
                copy[j] = temp;
            }
            return copy;
        },
        startQuiz: function(count) {
            var self = this;
            var num = (typeof count === 'number' && count > 0) ? count : self.selectedCount;
            var shuffledQuestions = self.shuffle(self.rawQuestions);
            if (num && num < shuffledQuestions.length) {
                shuffledQuestions = shuffledQuestions.slice(0, num);
            }
            self.questions = shuffledQuestions.map(function(q) {
                var preparedOptions = q.options.map(function(optText, originalIndex) {
                    return {
                        text: optText,
                        isCorrect: originalIndex === q.correctAnswerIndex
                    };
                });
                return {
                    question: q.question,
                    image: q.image || null,
                    options: self.shuffle(preparedOptions)
                };
            });
            self.currentIndex = 0;
            self.score = 0;
            self.userMistakes = [];
            self.selectedOptionIndex = null;
            self.isAnswered = false;
            self.screen = 'quiz';
        },
        selectOption: function(index) {
            if (this.isAnswered) return;
            this.isAnswered = true;
            this.selectedOptionIndex = index;
            var currentQ = this.currentQuestion;
            var selected = currentQ.options[index];
            if (selected.isCorrect) {
                this.score++;
            } else {
                var correctOpt = currentQ.options.find(function(o) { return o.isCorrect; });
                this.userMistakes.push({
                    question: currentQ.question,
                    image: currentQ.image || null,
                    givenAnswer: selected.text,
                    correctAnswer: correctOpt ? correctOpt.text : ''
                });
            }
        },
        nextQuestion: function() {
            if (this.currentIndex < this.questions.length - 1) {
                this.currentIndex++;
                this.selectedOptionIndex = null;
                this.isAnswered = false;
            } else {
                this.screen = 'results';
            }
        },
        goHome: function() {
            window.location.href = 'index.html';
        },
        getOptionClass: function(index) {
            if (!this.isAnswered) return '';
            var opt = this.currentQuestion.options[index];
            if (opt.isCorrect) return 'is-correct is-disabled';
            if (index === this.selectedOptionIndex && !opt.isCorrect) return 'is-wrong is-disabled';
            return 'is-dimmed is-disabled';
        },
        getLetter: function(index) {
            return String.fromCharCode(65 + index);
        },
        formatQuestion: function(text) {
            if (!text) return '';
            var safe = text;
            safe = safe.replace(/`([^`]+)`/g, function(match, codeContent) {
                var escaped = codeContent.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                return '<code class="quiz-inline-code">' + escaped + '</code>';
            });
            return safe;
        },
        formatOption: function(text) {
            if (!text) return '';
            var safe = text.trim();
            if (/^<[a-zA-Z0-9_-]+>$/.test(safe)) {
                var tag = safe.slice(1, -1);
                return '<code class="quiz-tag-badge">&lt;' + tag + '&gt;</code>';
            }
            safe = safe.replace(/`([^`]+)`/g, function(match, codeContent) {
                var escaped = codeContent.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                return '<code class="quiz-inline-code">' + escaped + '</code>';
            });
            return safe;
        }
    }
});
