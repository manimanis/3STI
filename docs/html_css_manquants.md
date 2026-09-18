### 1. En HTML5

#### A. Balises totalement absentes du cours
* **`<iframe>` (attributs : `src`, `name`)** : cadre d'intégration de pages externes et mécanisme de ciblage (`name`).
* **`<output>`** : conteneur sémantique réservé à l'affichage du résultat d'un calcul ou d'une interaction utilisateur dans un formulaire.

#### B. Attributs de balises non abordés
* **Attributs d'en-tête** :
  * `media` sur `<style>` (ex. `media="print"`) et sur `<source>` (audio/vidéo).
  * `type` sur `<style>` (`type="text/css"`), `<link>` (`type="text/css"`) et `<script>` (`type="text/javascript"`).
* **Attributs globaux** :
  * **`hidden`** : attribut booléen universel pour masquer un élément du flux.
  * **`title`** : attribut d'infobulle / tooltip contextuel au survol (utilisé ponctuellement sur `<abbr>` dans [file02.html](file:///c:/xampp-school/htdocs/3STI/file02.html), mais non enseigné en tant qu'attribut global).

#### C. Événements HTML inline
* **`onfocus`** et **`onblur`** : prise et perte de focus sur les champs de formulaire (absents de [file04.html](file:///c:/xampp-school/htdocs/3STI/file04.html) et [file05.html](file:///c:/xampp-school/htdocs/3STI/file05.html)).
* **`onload`** : déclenchement à la fin du chargement du document ou d'une ressource.
* **`onchange`** et **`oninput`** : abordés uniquement via l'API moderne JavaScript `addEventListener("change", ...)` et `addEventListener("input", ...)` dans [file05.html](file:///c:/xampp-school/htdocs/3STI/file05.html), mais la syntaxe des attributs HTML inline `onchange="..."` et `oninput="..."` n'est pas formalisée.

---

### 2. En CSS3

#### A. Transitions et Animations
* **`transition`** : la propriété et ses déclinaisons (`transition-property`, `transition-duration`, `transition-timing-function`, `transition-delay`) ne sont **nulle part expliquées dans le cours** (la Séance 3 se focalisant exclusivement sur `animation` et `@keyframes`).

#### B. Modèle de boîte et Positionnement
* **`float`** (`left`, `right`, `none`, `clear`) : le positionnement flottant est totalement absent des explications.
* **`overflow`** (`visible`, `hidden`, `scroll`, `auto`) : gestion du débordement de contenu, non abordée.
* **`opacity`** : transparence globale d'un élément (de 0 à 1), absente du cours.
* **`box-shadow`** : ombrage porté des boîtes (utilisé dans le CSS interne de certaines démos, mais sans leçon ni explications de syntaxe).
* **`display`** (`block`, `inline`, `inline-block`, `none`, `flex`) : utilisé dans les exemples pratiques, mais la propriété `display` et les règles d'affichage ne font l'objet d'aucune fiche de cours théorique.

#### C. Tableaux
* **`border-collapse`** (`collapse`, `separate`) : propriété indispensable pour fusionner les bordures d'un tableau HTML, absente du cours sur les tableaux dans [file01.html](file:///c:/xampp-school/htdocs/3STI/file01.html).
* **`table-layout`** (`auto`, `fixed`) : algorithme de calcul de la largeur des colonnes d'un tableau, jamais mentionné.

#### D. Texte, Images & Sélecteurs
* **`text-transform`** (`uppercase`, `lowercase`, `capitalize`) : transformation de la casse du texte, absente de [file01.html](file:///c:/xampp-school/htdocs/3STI/file01.html).
* **`filter`** (`grayscale`, `blur`, `brightness`, etc.) : filtres graphiques sur les images, absents du cours.
* **Sélecteur `element.class`** : le sélecteur combiné ciblant une balise spécifique portant une classe donnée (ex. `p.important`) n'est pas formalisé dans la liste des sélecteurs de [file01.html](file:///c:/xampp-school/htdocs/3STI/file01.html).

---

### Tableau récapitulatif

| Catégorie | Notion au programme 3STI | Statut dans les fichiers `filexx.html` |
| :--- | :--- | :--- |
| **HTML - Conteneurs** | `<iframe>` (*src, name*) | ❌ Totalement absent |
| **HTML - Texte & Formulaires** | `<output>` | ❌ Totalement absent |
| **HTML - Attributs d'en-tête** | `type` (`<style>`, `<link>`, `<script>`), `media` (`<style>`, `<source>`) | ❌ Non détaillés |
| **HTML - Attributs globaux** | `hidden`, `title` (infobulle) | ❌ Non détaillés |
| **HTML - Événements** | `onfocus`, `onblur`, `onload`, `onchange`, `oninput` | ❌ Non abordés sous forme d'attributs HTML |
| **CSS - Mouvement** | `transition` | ❌ Totalement absente du cours |
| **CSS - Tableaux** | `border-collapse`, `table-layout` | ❌ Totalement absents |
| **CSS - Positionnement & Boîte** | `float`, `overflow`, `opacity`, `box-shadow` | ❌ Totalement absents |
| **CSS - Affichage** | `display` | ⚠️ Utilisé en pratique, mais non formalisé en cours |
| **CSS - Texte & Image** | `text-transform`, `filter` | ❌ Totalement absents |
| **CSS - Sélecteurs** | `element.class` | ⚠️ Non formalisé dans la leçon sélecteurs |


### Tableau récapitulatif

| Catégorie | Notion au programme 3STI | Statut dans les fichiers `filexx.html` |
| :--- | :--- | :--- |
| **HTML - Conteneurs** | `<iframe>` (*src, name*) |
| **HTML - Texte & Formulaires** | `<output>` |
| **HTML - Attributs d'en-tête** | `type` (`<style>`, `<link>`, `<script>`), `media` (`<style>`, `<source>`) |
| **HTML - Attributs globaux** | `hidden`, `title` (infobulle) |
| **CSS - Mouvement** | `transition` |
| **CSS - Tableaux** | `border-collapse`, `table-layout` |
| **CSS - Positionnement & Boîte** | `float`, `overflow`, `opacity`, `box-shadow` |
| **CSS - Affichage** | `display` |
| **CSS - Texte & Image** | `text-transform`, `filter` |
| **CSS - Sélecteurs** | `element.class` |

Viewed sti2024.md:55-95