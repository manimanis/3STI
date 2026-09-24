/**
 * Quiz 01 : HTML Sémantique, Box Model & Float
 * Logique Vue.js avec mélange des questions et propositions
 */

// Banque des questions originelles avec illustrations SVG
var rawQuestions = [
    {
        question: "Quelle balise sémantique est spécifiquement conçue pour englober les liens de navigation principaux de votre site Web ?",
        image: "images/quiz01/q01-semantic-nav.svg",
        options: ["<nav>", "<header>", "<menu>", "<section>"],
        correctAnswerIndex: 0
    },
    {
        question: "Dans le modèle de boîte CSS (Box Model), quelle propriété permet de créer de l'espace à l'intérieur de l'élément, entre son contenu et sa bordure ?",
        image: "images/quiz01/q02-box-model-padding.svg",
        options: ["La margin", "Le padding", "L'espacement (spacing)", "Le border-radius"],
        correctAnswerIndex: 1
    },
    {
        question: "Laquelle de ces balises doit être utilisée pour représenter un contenu autonome qui a du sens par lui-même (comme un article de blog ou de journal) ?",
        image: "images/quiz01/q03-semantic-article.svg",
        options: ["<section>", "<div>", "<article>", "<main>"],
        correctAnswerIndex: 2
    },
    {
        question: "Quel est l'ordre correct des couches du modèle de boîte CSS, en partant du contenu central et en allant vers l'extérieur ?",
        image: "images/quiz01/q04-box-model-layers.svg",
        options: ["Contenu, padding, bordure, margin.", "Contenu, margin, bordure, padding.", "Margin, bordure, padding, contenu.", "Padding, contenu, margin, bordure."],
        correctAnswerIndex: 0
    },
    {
        question: "Que se passe-t-il visuellement lorsqu'on applique la propriété `float: right` à une image située au sein d'un paragraphe de texte ?",
        image: "images/quiz01/q05-float-right.svg",
        options: ["L'image se place à droite et le texte se place en dessous.", "L'image se place à droite et le texte l'habille sur sa gauche.", "L'image se place à gauche et le texte l'habille sur sa droite.", "L'image sort du flux et le texte passe au travers."],
        correctAnswerIndex: 1
    },
    {
        question: "Si vous souhaitez ajouter une barre latérale contenant des informations complémentaires, quelle balise sémantique est la plus appropriée ?",
        image: "images/quiz01/q06-semantic-aside.svg",
        options: ["<aside>", "<sidebar>", "<nav>", "<section>"],
        correctAnswerIndex: 0
    },
    {
        question: "Quelle propriété du modèle de boîte utiliseriez-vous pour écarter deux paragraphes distincts l'un de l'autre ?",
        image: "images/quiz01/q07-box-model-margin.svg",
        options: ["Le padding.", "La margin.", "Le border.", "Le spacing."],
        correctAnswerIndex: 1
    },
    {
        question: "Selon les bonnes pratiques, combien de balises `<main>` visibles devrait-il y avoir au maximum sur une seule page Web ?",
        image: "images/quiz01/q08-semantic-main.svg",
        options: ["Deux, si la page est longue.", "Autant que nécessaire.", "Aucune, c'est optionnel.", "Une seule."],
        correctAnswerIndex: 3
    },
    {
        question: "Si une image avec `float: left` est trop collée au texte qui s'enroule à sa droite, comment peut-on créer un espace entre l'image et le texte ?",
        image: "images/quiz01/q09-float-left-margin.svg",
        options: ["En ajoutant une marge à gauche de l'image.", "En ajoutant un padding à droite du texte.", "En ajoutant une marge à droite de l'image.", "En ajoutant un float: right au texte."],
        correctAnswerIndex: 2
    },
    {
        question: "Où place-t-on généralement les informations relatives aux droits d'auteur et les liens de bas de page ?",
        image: "images/quiz01/q10-semantic-footer.svg",
        options: ["<bottom>", "<footer>", "<aside>", "<end>"],
        correctAnswerIndex: 1
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
                    description: 'Vous maîtrisez parfaitement les concepts de HTML sémantique, de Box Model et de Float.',
                    iconClass: 'success',
                    badgeClass: 'bg-success text-white'
                };
            } else if (pct >= 50) {
                return {
                    type: 'warning',
                    title: 'Bon effort !',
                    description: 'Vous avez de bonnes bases, mais quelques révisions vous permettront de consolider vos acquis.',
                    iconClass: 'warning',
                    badgeClass: 'bg-warning text-dark'
                };
            } else {
                return {
                    type: 'danger',
                    title: 'Il va falloir réviser...',
                    description: 'Prenez le temps de revoir les fiches de cours et les activités pratiques pour progresser.',
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
            safe = safe.replace(/&lt;([a-zA-Z0-9_-]+)&gt;/g, '<code class="quiz-inline-code">&lt;$1&gt;</code>');
            return safe;
        },

        /**
         * Formater le texte de proposition (balise HTML ou texte)
         */
        formatOption: function(text) {
            if (!text) return '';
            var safe = text.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
            safe = safe.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            if (safe.startsWith('&lt;') && safe.endsWith('&gt;')) {
                return '<code class="quiz-tag-badge">' + safe + '</code>';
            }
            return safe;
        }
    }
});
