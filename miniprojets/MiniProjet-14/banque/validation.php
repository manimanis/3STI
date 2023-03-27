<?php
function isAlphabetic(string $ch, $spaces = TRUE)
{
    for ($i = 0; $i < strlen($ch); $i++) {
        $car = $ch[$i];
        $valid = ($car >= "A" && $car <= "Z") || ($car >= "a" && $car <= "z");
        if (!$valid && $spaces) {
            $valid = $car == ' ';
        }
        if (!$valid) {
            return FALSE;
        }
    }
    return TRUE;
}

function isPhone(string $ch) {
    return preg_match("/^\+{0,1}[\d\s]+$/m", $ch);
}
