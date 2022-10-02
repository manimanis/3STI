<?php
$score = 0;
if ($_POST["q1_1"] == "Astérix") $score++;
if ($_POST["q1_2"] == "Falbala") $score++;
if ($_POST["q1_3"] == "Idéfix") $score++;
if ($_POST["q1_4"] == "Obélix") $score++;
if ($_POST["q2"] == "b") $score++;
if (trim(strtoupper($_POST["q3"])) == "SUPERMAN") $score++;
foreach ($_POST["q4"] as $ans) {
    if ($ans == "b" || $ans == "d") $score++;
}
if (intval($_POST["q5"]) == 13) $score++;
?>
<p>Votre score est : <?= $score ?> / 9</p>