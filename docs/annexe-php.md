# Annexe PHP
*Aide Pédagogique – Informatique – 3ᵉ année SI (Matière : STI) – Septembre 2026*

---

## 1. Types de données / d'objets

| Type | Description |
| :--- | :--- |
| `int` | Entier |
| `float` | Réel (nombre à virgule flottante) |
| `string` | Chaîne de caractères |
| `bool` | Booléen (`true` / `false`) |
| `array` | Tableau |

---

## 2. Opérateurs de transtypage (Cast)

| Cast | Description |
| :--- | :--- |
| `(int)` | Convertit une variable en entier. |
| `(float)` | Convertit une variable en réel. |
| `(string)` | Convertit une variable en chaîne. |
| `(bool)` | Convertit une variable en booléen. |
| `(array)` | Convertit une variable en tableau. |

---

## 3. Opérateurs logiques

| Opérateur | Signification |
| :--- | :--- |
| `&&` | ET |
| `\|\|` | OU |
| `!` | NON |

---

## 4. Opérateurs de comparaison

| Opérateur | Signification |
| :--- | :--- |
| `==` | Égal à |
| `!=` ou `<>` | Différent de |
| `<` | Inférieur à |
| `<=` | Inférieur ou égal à |
| `>` | Supérieur à |
| `>=` | Supérieur ou égal à |

---

## 5. Opérateurs arithmétiques

| Opérateur | Signification |
| :--- | :--- |
| `+` | Addition |
| `-` | Soustraction |
| `*` | Multiplication |
| `/` | Division |
| `%` | Reste de la division euclidienne (modulo) |

---

## 6. Autres opérateurs

| Opérateur | Signification |
| :--- | :--- |
| `=` | Affectation |
| `.` | Concaténation |

---

## 7. Fonctions mathématiques

| Fonction | Description |
| :--- | :--- |
| `abs($x)` | Retourne la valeur absolue d'un nombre. |
| `sqrt($x)` | Retourne la racine carrée d'un nombre. |
| `round($x)` | Retourne la valeur arrondie d'un nombre. |
| `rand()` ou `rand($min, $max)` | Retourne un nombre aléatoire. |

---

## 8. Fonctions sur les chaînes de caractères

| Fonction | Description |
| :--- | :--- |
| `ord($ch)` | Retourne le code ASCII du 1ᵉʳ caractère de l'argument. |
| `chr($code)` | Retourne le caractère dont le code ASCII est passé comme argument. |
| `strlen($ch)` | Retourne la longueur d'une chaîne. |
| `substr($ch, $start [, $length])` | Retourne une sous-chaîne. |
| `strpos($ch, $search)` | Retourne la position de la première occurrence du 2ᵉ argument dans le 1ᵉʳ. |
| `str_replace($search, $replace, $subject)` | Retourne une nouvelle chaîne de caractères après remplacement, dans un seul parcours, d'une ou plusieurs occurrences d'une sous-chaîne par une autre. |
| `strtolower($ch)` | Retourne une nouvelle chaîne de caractères dans laquelle toutes les lettres de l'argument sont converties en minuscule. |
| `strtoupper($ch)` | Retourne une nouvelle chaîne de caractères dans laquelle toutes les lettres de l'argument sont converties en majuscule. |
| `trim($ch)` | Retourne une nouvelle chaîne de caractères obtenue après suppression des espaces situés au début et à la fin de l'argument. |

---

## 9. Fonctions de Date / Heure

| Fonction | Description |
| :--- | :--- |
| `date($format [, $timestamp])` | Formate une date et la retourne sous forme de chaîne. |
| `time()` | Retourne l'heure actuelle en nombre de secondes (timestamp courant). |
| `checkdate($month, $day, $year)` | Vérifie la validité d'une date grégorienne. |
| `strtotime($time)` | Transforme une chaîne contenant une date en timestamp.<br>*(timestamp : nombre de secondes écoulées entre le 1ᵉʳ janvier 1970 à 00:00:00 et une date donnée).* |

**Exemple `strtotime` :**
```php
echo strtotime("15 october 2026");
// Affiche : 1792022400
```

---

## 10. Fonctions sur les tableaux

| Fonction | Description |
| :--- | :--- |
| `count($array)` | Retourne le nombre d'éléments d'un tableau. |
| `array(...)` | Crée un tableau à partir d'une liste de valeurs. |

---

## 11. Fonctions PHP pour MySQL (Extension MySQLi - Interface procédurale)

> **Directive :** Utiliser les fonctions fournies par l'extension MySQLi dans son **interface procédurale**.

| Fonction | Description |
| :--- | :--- |
| `mysqli_connect($host, $user, $pass, $db)` | Ouvre une connexion à un serveur MySQL et sélectionne une base de données MySQL. |
| `mysqli_query($link, $query)` | Exécute une requête SQL sur la base de données. |
| `mysqli_num_rows($result)` | Renvoie le nombre d'enregistrements résultant d'une requête de type `SELECT`. |
| `mysqli_affected_rows($link)` | Retourne le nombre de lignes affectées par la dernière requête SQL (`INSERT`, `UPDATE`, `DELETE`). |
| `mysqli_fetch_row($result)` | Retourne une ligne de résultat sous la forme d'un tableau indexé numériquement (`0, 1, …`). |
| `mysqli_fetch_array($result)` | Retourne une ligne de résultat sous la forme d'un tableau (associatif, numérique ou les deux). |
| `mysqli_error($link)` | Retourne une chaîne décrivant la dernière erreur survenue. |
| `mysqli_close($link)` | Ferme la connexion MySQLi ouverte. |

---

## 12. Structures de langage

| Mot-clé | Description |
| :--- | :--- |
| `echo` | Affiche une ou plusieurs expressions / chaînes de caractères. |

---

## 13. Variables superglobales

| Variable | Description |
| :--- | :--- |
| `$_GET` | Tableau associatif des valeurs transmises au script courant via les paramètres d'URL (méthode `GET`). |
| `$_POST` | Tableau associatif des valeurs transmises au script courant via le corps de la requête HTTP (méthode `POST`). |

---

## 14. Fonctions diverses

| Fonction | Description |
| :--- | :--- |
| `die([$message])` | Affiche un message éventuel et termine l'exécution du script courant immédiatement. |
| `isset($var)` | Vérifie si une variable est définie et n'est pas `NULL`. |
| `require($filename)` | Inclut et exécute le fichier spécifié en argument (provoque une erreur fatale si le fichier est manquant). |
