
const jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

const daySpan = document.getElementById("day");
const yearSpan = document.getElementById("year");
const monthSpan = document.getElementById("month");
const dateSpan = document.getElementById("date");
const annivSpan = document.getElementById("anniv");
const annivJrSpan = document.getElementById("anniv-jour");

function numberDays(a, m) {
  switch (m) {
    case 0: case 2: case 4:
    case 6: case 7: case 9: case 11:
      return 31;
    case 3: case 5: case 8: case 10:
      return 30;
    case 1:
      return 28 + (a % 400 == 0 || (a % 100 != 0 && a % 4 == 0));
  }
  return -1;
}

function nextBirthDate(dt) {
  const today = new Date();
  let addYear = 0;
  if (dt.getMonth() < today.getMonth() ||
    (dt.getMonth() == today.getMonth() && dt.getDate() < today.getDate())) {
    addYear++;
  }
  return new Date(today.getFullYear() + addYear, dt.getMonth(), dt.getDate());
}

function substractDates(dt1, dt2) {
  let nm = (dt2.getFullYear() - dt1.getFullYear()) * 12 +
    (dt2.getMonth() - dt1.getMonth());
  let nj = dt2.getDate() - dt1.getDate();
  if (nj < 0) {
    nm--;
    nj += numberDays(dt1.getFullYear(), dt1.getMonth());
  }

  let na = Math.floor(nm / 12);
  nm = nm % 12;

  const ntj = Math.floor(dt2.getTime() / (24 * 1000 * 3600)) - Math.floor(dt1.getTime() / (24 * 1000 * 3600)) + 1;

  return [na, nm, nj, ntj];
}

function compute() {
  const dob = document.getElementById("db").value;
  const d1 = new Date(dob);
  const d2 = new Date();
  const d3 = nextBirthDate(d1);

  const [na, nm, nj, ntj] = substractDates(d1, d2);

  if (ntj < 0) {
    alert("Attention! Vous avez indiqué une date de naissance future!");
  }

  const [,,,njr] = substractDates(d2, d3);

  daySpan.textContent = jours[d1.getDay()];
  yearSpan.textContent = (ntj > 0) ? na : "-";
  monthSpan.textContent = (ntj > 0) ? nm : "-";
  dateSpan.textContent = (ntj > 0) ? nj : "-";
  annivSpan.textContent = d3.toLocaleDateString("fr-fr");
  annivJrSpan.textContent = njr;

  if (njr == 0) {
    alert("Joyeux anniversaire!");
  }
}