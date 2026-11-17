# Annexe SQL
*Aide Pédagogique – Informatique – 3ᵉ année SI (Matière : STI) – Septembre 2026*

---

## 1. Types de données

| Type | Description |
| :--- | :--- |
| `INT` | Entier |
| `DECIMAL` | Réel (nombre décimal à virgule fixe) |
| `CHAR` | Chaîne de caractères de longueur fixe. |
| `VARCHAR` | Chaîne de caractères de longueur variable dont la longueur maximale est fixée. |
| `TEXT` | Chaîne de caractères de longueur variable (texte long). |
| `DATE` | Date (`AAAA-MM-JJ`). |
| `TIME` | Temps / Heure (`HH:MM:SS`). |
| `DATETIME` | Date et Heure combinées. |
| `ENUM(...)` | Définit une liste de valeurs prédéfinies autorisées. |

---

## 2. Opérateurs de comparaison

| Opérateur | Signification |
| :--- | :--- |
| `=` | Égal à |
| `<>` | Différent de |
| `>` | Supérieur à |
| `<` | Inférieur à |
| `>=` | Supérieur ou égal à |
| `<=` | Inférieur ou égal à |
| `IN` | Dans (appartient à une liste de valeurs). |
| `BETWEEN` | Entre deux valeurs d'un intervalle (bornes incluses). |
| `LIKE` | Recherche selon un motif / gabarit (ex. : avec `%` ou `_`). |
| `IS NULL` | Permet de vérifier si une colonne contient la valeur `NULL`. |
| `ANY` | Utilisé avec une sous-requête pour comparer une valeur à au moins une des valeurs retournées par cette sous-requête. |

---

## 3. Opérateurs logiques

| Opérateur | Signification |
| :--- | :--- |
| `AND` | ET logique |
| `OR` | OU logique |
| `NOT` | NON logique |

---

## 4. Fonctions définies sur le type date

| Fonction | Description |
| :--- | :--- |
| `DATE(expr)` | Retourne une date extraite à partir d'une chaîne contenant une valeur au format `DATE` ou `DATETIME`. |
| `DAY(date)` | Retourne le jour du mois. |
| `MONTH(date)` | Retourne le numéro du mois. |
| `YEAR(date)` | Retourne l'année sur 4 chiffres. |
| `NOW()` | Retourne la date et l'heure courantes du système. |
| `ADDDATE(date, interval)` | Ajoute une durée spécifiée à une date donnée. |
| `DATEDIFF(date1, date2)` | Retourne la différence en nombre de jours entre deux dates. |

---

## 5. Fonctions d'agrégation

| Fonction | Description |
| :--- | :--- |
| `AVG(colonne)` | Retourne la moyenne des valeurs de la colonne. |
| `COUNT(colonne ou *)` | Retourne le nombre d'enregistrements. |
| `MAX(colonne)` | Retourne la valeur maximale. |
| `MIN(colonne)` | Retourne la valeur minimale. |
| `SUM(colonne)` | Retourne la somme des valeurs de la colonne. |

---

## 6. Contraintes d'intégrité

| Contrainte | Description |
| :--- | :--- |
| `NOT NULL` | Interdit une valeur nulle dans la colonne. |
| `DEFAULT valeur` | Attribue une valeur par défaut en cas d'omission. |
| `CHECK (condition)` | Spécifie que les valeurs de la colonne doivent respecter une condition. |
| `PRIMARY KEY` | Définit une clé primaire (identifiant unique non nul). |
| `UNIQUE` | Spécifie l'unicité des valeurs d'une colonne. |
| `FOREIGN KEY` | Définit une clé étrangère. |
| `REFERENCES table(col)` | Fait référence à une clé primaire d'une autre table. |
| `ON UPDATE CASCADE` | Met à jour la clé étrangère en cas de mise à jour de la clé primaire parente. |
| `ON DELETE CASCADE` | Supprime automatiquement tous les enregistrements de la table fille suite à la suppression de l'enregistrement correspondant dans la table mère. |

---

## 7. Propriété de colonne

| Propriété | Description |
| :--- | :--- |
| `AUTO_INCREMENT` | Attribue automatiquement une valeur numérique incrémentée à chaque nouvel enregistrement. |

---

## 8. Définition des données (LDD - Langage de Définition de Données)

| Commande SQL | Description |
| :--- | :--- |
| `CREATE DATABASE nom;` | Crée une nouvelle base de données. |
| `DROP DATABASE nom;` | Supprime une base de données existante. |
| `CREATE TABLE table1 (`<br>&nbsp;&nbsp;`colonne1 type [contrainte],`<br>&nbsp;&nbsp;`colonne2 type [contrainte], …`<br>&nbsp;&nbsp;`[[CONSTRAINT [nom]] contrainte, …]`<br>`);` | Crée une nouvelle table. |
| `ALTER TABLE table1 ADD colonne type [contrainte];` | Ajoute une colonne à une table. |
| `ALTER TABLE table1 DROP COLUMN colonne;` | Supprime une colonne d'une table. |
| `ALTER TABLE table1 ALTER¹ COLUMN colonne type;` | Modifie le type d'une colonne.<br>*(¹ Il est possible d'utiliser `MODIFY` au lieu de `ALTER`).* |
| `ALTER TABLE table1 RENAME² COLUMN nom1 TO nom2;` | Modifie le nom d'une colonne.<br>*(² Il est possible d'utiliser `CHANGE`).* |
| `ALTER TABLE table1 ADD CONSTRAINT [nom] contrainte;` | Ajoute une contrainte sur une table ou colonne. |
| `ALTER TABLE table1 DROP CONSTRAINT nom;` | Supprime une contrainte. |
| `DROP TABLE table1;` | Supprime définitivement une table. |

---

## 9. Manipulation des données (LMD - Langage de Manipulation de Données)

### Requête de sélection (`SELECT`)

```sql
SELECT [DISTINCT] expression [, col, ... ou *] [[AS] alias]
FROM table1 [[AS] alias] [, table2, ...] 
[WHERE condition] 
[GROUP BY critère]
[HAVING condition]
[ORDER BY expression [ASC/DESC]] 
[LIMIT debut, nombre];
```

| Clause / Élément | Description |
| :--- | :--- |
| `SELECT [DISTINCT] expression` | Spécification des colonnes du résultat (`DISTINCT` élimine les doublons). |
| `FROM table1 [[AS] alias] [, table2, ...]` | Spécification des tables sources. |
| `[WHERE condition]` | Condition de filtrage des lignes. |
| `[GROUP BY critère]` | Organisation et regroupement du résultat par critère. |
| `[HAVING condition]` | Application d'un filtre sur les groupes formés. |
| `[ORDER BY expression [ASC/DESC]]` | Tri du résultat (ordre croissant `ASC` ou décroissant `DESC`). |
| `[LIMIT debut, nombre]` | Limitation du nombre de lignes retournées (avec décalage éventuel). |

### Requête d'insertion (`INSERT INTO`)

```sql
INSERT INTO table [(colonne1, colonne2, ...)] 
VALUES (valeur1, valeur2, ...);
```
*Insertion de nouvelles données dans une table.*

### Requête de mise à jour (`UPDATE`)

```sql
UPDATE table1 
SET colonne = expression 
[WHERE condition];
```
*Modification des valeurs d'une ou plusieurs colonnes respectant la condition.*

### Requête de suppression (`DELETE`)

```sql
DELETE FROM table1 
[WHERE condition];
```
*Suppression des enregistrements d'une table respectant la condition.*
