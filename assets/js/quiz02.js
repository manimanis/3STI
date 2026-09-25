/**
 * Quiz 02 : Balises sémantiques de contenu & accessibilité
 * Notions évaluées : <figure>, <figcaption>, <details>, <summary>, <mark>, <cite>, <address>
 * Logique Vue.js avec mélange des questions et propositions (Fisher-Yates)
 */

// Banque des 10 questions avec propositions significatives et illustrations SVG
var rawQuestions = [
    {
        question: "Quelle est la méthode sémantiquement correcte pour associer une légende descriptive à une illustration en HTML5 ?",
        image: "images/quiz02/q01-figure-figcaption.svg",
        options: [
            "Utiliser la balise <figcaption> imbriquée directement à l'intérieur de l'élément <figure>.",
            "Insérer une balise <caption> immédiatement sous l'image dans un paragraphe ordinaire.",
            "Associer la balise <legend> en tant que premier enfant du conteneur <figure>.",
            "Déclarer une balise <summary> pour définir l'intitulé textuel de l'illustration."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Où le standard HTML5 autorise-t-il le positionnement de la légende `<figcaption>` par rapport à son conteneur `<figure>` ?",
        image: "images/quiz02/q02-figcaption-position.svg",
        options: [
            "Uniquement en tant que tout premier ou tout dernier enfant direct de l'élément <figure>.",
            "Librement à n'importe quel niveau d'imbrication dans <figure>, y compris dans un paragraphe <p>.",
            "Strictement avant la balise <img>, car la légende doit obligatoirement précéder l'image.",
            "En dehors de la balise <figure>, obligatoirement juste après sa balise fermante </figure>."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Quel avantage fondamental offre l'association des balises `<details>` et `<summary>` en HTML5 ?",
        image: "images/quiz02/q03-details-summary.svg",
        options: [
            "Créer un bloc interactif dépliable et repliable nativement, sans écrire une seule ligne de JavaScript.",
            "Remplacer les tableaux <table> pour organiser les données en colonnes.",
            "Générer un résumé automatique du texte grâce à un algorithme d'analyse du navigateur.",
            "Afficher obligatoirement une infobulle flottante au survol du curseur de la souris."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Comment peut-on rendre le contenu d'un bloc `<details>` visible et déplié dès le chargement initial de la page ?",
        image: "images/quiz02/q04-details-open.svg",
        options: [
            "En ajoutant l'attribut booléen open sur la balise d'ouverture (<details open>).",
            "En déclarant l'attribut expanded=\"true\" directement sur la balise <details>.",
            "En appliquant l'attribut booléen visible sur la balise d'en-tête <summary>.",
            "En définissant l'attribut global show=\"opened\" sur le conteneur parent."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Quelle règle d'imbrication syntaxique régit l'emplacement de la balise `<summary>` au sein de `<details>` ?",
        image: "images/quiz02/q05-summary-first-child.svg",
        options: [
            "Elle doit obligatoirement être le tout premier élément enfant direct du bloc <details>.",
            "Elle peut être placée n'importe où dans le bloc <details>, le navigateur la repositionne automatiquement.",
            "Elle doit impérativement être placée en dernière position, après tout le contenu à afficher.",
            "Elle doit se situer à l'extérieur de <details>, en tant que titre de section <h3>."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Quel est le rôle sémantique de la balise `<mark>` et quel est son comportement d'affichage par défaut ?",
        image: "images/quiz02/q06-mark-highlight.svg",
        options: [
            "Surligner un passage pertinent dans un contexte précis, affiché avec un fond jaune par défaut.",
            "Indiquer un passage d'importance critique ou urgente, affiché en texte rouge et gras.",
            "Délimiter une citation textuelle officielle d'un auteur, affichée obligatoirement entre guillemets.",
            "Insérer une puce visuelle ou une icône de rappel graphique au début d'un paragraphe."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Dans la phrase : « Victor Hugo a publié <cite>Les Misérables</cite> en 1862 », pourquoi seule la référence au roman est balisée avec `<cite>` ?",
        image: "images/quiz02/q07-cite-book.svg",
        options: [
            "Parce que <cite> est strictement réservée au titre d'une œuvre (livre, film, œuvre d'art), et non au nom de son auteur.",
            "Parce que le nom de l'auteur d'un document doit obligatoirement être balisé avec <address>.",
            "Parce que les titres d'œuvres littéraires ne peuvent pas être mis en italique sans la balise <cite>.",
            "C'est une erreur de balisage : le nom de l'auteur « Victor Hugo » aurait dû être englobé dans le <cite>."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Selon les recommandations officielles du W3C, à quel usage la balise sémantique `<address>` est-elle destinée ?",
        image: "images/quiz02/q08-address-contact.svg",
        options: [
            "Fournir les informations de contact (e-mail, téléphone, adresse) de l'auteur ou du propriétaire de la page.",
            "Baliser n'importe quelle adresse postale physique citée dans un texte (ex. un magasin, un monument, une ville).",
            "Enregistrer et stocker automatiquement l'adresse IP et les cookies du visiteur qui consulte le site.",
            "Afficher les coordonnées géographiques GPS sous la forme d'une carte interactive intégrée."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Que se produit-il sur le plan fonctionnel et visuel lorsque l'utilisateur clique sur l'élément `<summary>` ?",
        image: "images/quiz02/q09-summary-toggle.svg",
        options: [
            "Le bloc <details> bascule entre l'état ouvert et fermé, et le triangle indicateur pivote automatiquement.",
            "La page web est rechargée en envoyant les données du formulaire au serveur distant.",
            "Une boîte de dialogue JavaScript alert() s'ouvre pour demander une confirmation à l'utilisateur.",
            "Le texte contenu dans <summary> est automatiquement copié dans le presse-papier du système."
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Laquelle de ces descriptions correspond à une mise en œuvre HTML5 rigoureusement conforme aux standards ?",
        image: "images/quiz02/q10-valid-structure.svg",
        options: [
            "Un conteneur <figure> associant une balise <img> à une unique balise <figcaption> pour sa légende.",
            "Un conteneur <figure> intégrant deux balises <figcaption> successives pour séparer titre et sous-titre.",
            "Un bloc <details> où un paragraphe d'explication <p> est inséré avant le libellé <summary>.",
            "Une balise <address> utilisée pour encapsuler le texte complet d'un roman et une citation littéraire."
        ],
        correctAnswerIndex: 0
    }
];

// Instance Vue
new Vue({
    el: '#app',
    data: {
        screen: 'start', // 'start' | 'quiz' | 'results'
        rawQuestions: rawQuestions,
        questions: [],
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
            if (pct >= 80) {
                return {
                    type: 'success',
                    title: 'Excellent travail !',
                    description: 'Vous maîtrisez parfaitement la sémantique de contenu (<figure>, <figcaption>, <details>, <summary>, <mark>, <cite>, <address>).',
                    iconClass: 'success',
                    badgeClass: 'bg-success text-white'
                };
            } else if (pct >= 50) {
                return {
                    type: 'warning',
                    title: 'Bon travail !',
                    description: 'Vous avez de solides repères, mais révisez certaines règles de placement (<figcaption>, <summary>) pour viser le score parfait.',
                    iconClass: 'warning',
                    badgeClass: 'bg-warning text-dark'
                };
            } else {
                return {
                    type: 'danger',
                    title: 'Quelques révisions nécessaires...',
                    description: 'Prenez le temps de revoir les fiches de cours et les exercices sur les balises de contenu pour progresser.',
                    iconClass: 'danger',
                    badgeClass: 'bg-danger text-white'
                };
            }
        }
    },
    methods: {
        /**
         * Algorithme de mélange aléatoire Fisher-Yates
         */
        shuffle: function(array) {
            var copy = array.slice();
            for (var i = copy.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = copy[i];
                copy[i] = copy[j];
                copy[j] = temp;
            }
            return copy;
        },

        /**
         * Démarrer le quiz en mélangeant questions et propositions
         */
        startQuiz: function() {
            var self = this;

            // 1. Mélanger l'ordre des questions
            var shuffledQuestions = self.shuffle(self.rawQuestions);

            // 2. Pour chaque question, mélanger l'ordre des propositions tout en conservant le lien avec la réponse correcte
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

        /**
         * Sélectionner une proposition
         */
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

        /**
         * Passer à la question suivante ou aux résultats
         */
        nextQuestion: function() {
            if (this.currentIndex < this.questions.length - 1) {
                this.currentIndex++;
                this.selectedOptionIndex = null;
                this.isAnswered = false;
            } else {
                this.screen = 'results';
            }
        },

        /**
         * Retourner à l'écran de départ
         */
        goHome: function() {
            this.screen = 'start';
        },

        /**
         * Calculer les classes CSS dynamiques des options
         */
        getOptionClass: function(index) {
            if (!this.isAnswered) {
                return '';
            }
            var opt = this.currentQuestion.options[index];
            if (opt.isCorrect) {
                return 'is-correct is-disabled';
            }
            if (index === this.selectedOptionIndex && !opt.isCorrect) {
                return 'is-wrong is-disabled';
            }
            return 'is-dimmed is-disabled';
        },

        /**
         * Convertir un index en lettre (0 -> A, 1 -> B, ...)
         */
        getLetter: function(index) {
            return String.fromCharCode(65 + index);
        },

        /**
         * Formater le texte de question (échappement HTML + highlight code)
         */
        formatQuestion: function(text) {
            if (!text) return '';
            var safe = text.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
            safe = safe.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            safe = safe.replace(/`([^`]+)`/g, '<code class="quiz-inline-code">$1</code>');
            safe = safe.replace(/&lt;([a-zA-Z0-9_\/-]+)&gt;/g, '<code class="quiz-inline-code">&lt;$1&gt;</code>');
            return safe;
        },

        /**
         * Formater le texte de proposition (phrases significatives avec mise en valeur du code)
         */
        formatOption: function(text) {
            if (!text) return '';
            var safe = text.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
            safe = safe.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            safe = safe.replace(/`([^`]+)`/g, '<code class="quiz-inline-code">$1</code>');
            safe = safe.replace(/&lt;([a-zA-Z0-9_\/-]+)&gt;/g, '<code class="quiz-inline-code">&lt;$1&gt;</code>');
            return safe;
        }
    }
});
