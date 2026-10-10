import os

SVG_DIR = r"c:\xampp-school\htdocs\3STI\miniprojets\MiniProjet-22\TestDrive\images_svg"
os.makedirs(SVG_DIR, exist_ok=True)

# SVG 1: Portail index.html & acceuil.html
svg1 = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 440" width="850" height="440">
  <defs>
    <linearGradient id="win-bar" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <filter id="shadow1" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="2" dy="4" stdDeviation="4" flood-color="#000000" flood-opacity="0.15"/>
    </filter>
  </defs>

  <!-- Window Chrome -->
  <rect x="10" y="10" width="830" height="420" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" filter="url(#shadow1)"/>
  <rect x="10" y="10" width="830" height="34" rx="10" fill="url(#win-bar)"/>
  <rect x="10" y="30" width="830" height="14" fill="url(#win-bar)"/>
  <circle cx="28" cy="27" r="5.5" fill="#ef4444"/>
  <circle cx="46" cy="27" r="5.5" fill="#f59e0b"/>
  <circle cx="64" cy="27" r="5.5" fill="#10b981"/>
  <rect x="90" y="18" width="520" height="18" rx="4" fill="#0f172a"/>
  <text x="100" y="31" fill="#94a3b8" font-family="'Consolas', monospace" font-size="11">http://localhost/3STI/TestDrive/index.html — [Portail Principal]</text>

  <!-- Zone 1 : Header -->
  <rect x="25" y="55" width="800" height="65" rx="10" fill="#f5f5dc" stroke="#d4af37" stroke-width="2" stroke-dasharray="6,4"/>
  <text x="425" y="85" fill="#0f172a" font-family="'Outfit', 'Segoe UI', sans-serif" font-weight="800" font-size="22" text-anchor="middle" letter-spacing="4">TEST DRIVE</text>
  <text x="425" y="105" fill="#64748b" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" text-anchor="middle">Centre d'essais et d'évaluation de véhicules de prestige (Zone 1 : &lt;header&gt;)</text>

  <!-- Zone 2 : Nav (30%) -->
  <rect x="25" y="130" width="240" height="260" rx="7" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
  <rect x="35" y="140" width="220" height="26" rx="4" fill="#f1f5f9"/>
  <text x="145" y="157" fill="#1e293b" font-family="'Outfit', sans-serif" font-weight="700" font-size="12" text-anchor="middle">Zone 2 : &lt;nav&gt; (30% float: left)</text>

  <!-- Nav links -->
  <rect x="45" y="176" width="200" height="34" rx="16" fill="#4f46e5" stroke="#4338ca" stroke-width="1.5"/>
  <text x="145" y="198" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="12" text-anchor="middle">Accueil (active)</text>

  <rect x="45" y="218" width="200" height="34" rx="16" fill="#f5f5dc" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="145" y="240" fill="#4338ca" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11.5" text-anchor="middle">Enregistrement d'un testeur</text>

  <rect x="45" y="260" width="200" height="34" rx="16" fill="#f5f5dc" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="145" y="282" fill="#4338ca" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11.5" text-anchor="middle">Evaluation d'un modèle</text>

  <rect x="45" y="302" width="200" height="34" rx="16" fill="#f5f5dc" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="145" y="324" fill="#4338ca" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11.5" text-anchor="middle">Évaluation manifestation</text>

  <text x="145" y="365" fill="#6366f1" font-family="'Consolas', monospace" font-size="10" text-anchor="middle">target="zone_affichage"</text>

  <!-- Zone 3 : Section & Iframe (68%) -->
  <rect x="275" y="130" width="550" height="260" rx="7" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
  <rect x="283" y="138" width="534" height="24" rx="4" fill="#e0e7ff"/>
  <text x="550" y="154" fill="#3730a3" font-family="'Consolas', monospace" font-size="11" text-anchor="middle">Zone 3 : &lt;section&gt; (68% float: right) &gt; &lt;iframe name="zone_affichage" src="acceuil.html"&gt;</text>

  <!-- Inside iframe (acceuil.html) -->
  <rect x="285" y="168" width="530" height="214" rx="5" fill="#f8fafc" stroke="#e2e8f0"/>
  <text x="550" y="195" fill="#8b4513" font-family="'Outfit', sans-serif" font-size="16" font-weight="700" text-anchor="middle" text-decoration="underline">Bienvenue dans notre site</text>
  
  <!-- Stylized Bugatti card inside iframe -->
  <rect x="360" y="206" width="380" height="110" rx="8" fill="#1e293b"/>
  <rect x="370" y="214" width="360" height="70" rx="6" fill="#0f172a"/>
  <!-- Sports car silhouette in SVG -->
  <path d="M 400 262 Q 430 240 480 238 Q 550 236 600 248 Q 660 252 690 262 Q 700 266 700 274 L 390 274 Q 390 266 400 262 Z" fill="#38bdf8"/>
  <circle cx="440" cy="274" r="12" fill="#475569" stroke="#94a3b8" stroke-width="3"/>
  <circle cx="650" cy="274" r="12" fill="#475569" stroke="#94a3b8" stroke-width="3"/>
  <text x="550" y="296" fill="#38bdf8" font-family="'Outfit', sans-serif" font-size="11" font-weight="700" text-anchor="middle">Bugatti Chiron Super Sport — Modèle d'essai exclusif</text>
  
  <text x="550" y="335" fill="#64748b" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5" text-anchor="middle">Pilotez des véhicules d'exception sur circuit fermé et route ouverte.</text>
  <text x="550" y="352" fill="#64748b" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5" text-anchor="middle">Attribuez vos notes sur la sécurité, la tenue de route et le confort.</text>

  <!-- Zone 4 : Footer -->
  <rect x="25" y="398" width="800" height="24" rx="4" fill="#fee2e2"/>
  <text x="425" y="414" fill="#dc2626" font-family="'Plus Jakarta Sans', sans-serif" font-style="italic" font-weight="600" font-size="11" text-anchor="middle">Zone 4 : &lt;footer&gt; — Copyright © 2026 - 3e Sciences de l'Informatique (clear: both)</text>
</svg>
"""

# SVG 2: Formulaire enregistrement.html
svg2 = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 450" width="850" height="450">
  <defs>
    <filter id="shadow2" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="2" dy="3" stdDeviation="4" flood-color="#000000" flood-opacity="0.12"/>
    </filter>
  </defs>

  <!-- Browser Container -->
  <rect x="15" y="10" width="820" height="430" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" filter="url(#shadow2)"/>
  <rect x="15" y="10" width="820" height="30" rx="8" fill="#0f172a"/>
  <circle cx="32" cy="25" r="5" fill="#ef4444"/>
  <circle cx="48" cy="25" r="5" fill="#f59e0b"/>
  <circle cx="64" cy="25" r="5" fill="#10b981"/>
  <text x="90" y="29" fill="#94a3b8" font-family="'Consolas', monospace" font-size="11">enregistrement.html — Formulaire d'enregistrement d'un testeur</text>

  <!-- Form Box (fieldset) -->
  <rect x="120" y="55" width="610" height="370" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
  
  <!-- Legend -->
  <rect x="145" y="45" width="250" height="22" rx="4" fill="#ffffff" stroke="#cbd5e1" stroke-width="0.8"/>
  <text x="155" y="60" fill="#0f172a" font-family="'Outfit', sans-serif" font-weight="700" font-size="13">Enregistrement d'un testeur :</text>
  
  <text x="145" y="83" fill="#64748b" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5">Renseignez vos coordonnées pour valider votre inscription au centre d'essais.</text>

  <!-- Table alignment simulation -->
  <!-- Row 1: N° Permis -->
  <text x="150" y="112" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11.5">N° Permis :</text>
  <rect x="290" y="98" width="240" height="22" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
  <text x="300" y="113" fill="#94a3b8" font-family="'Consolas', monospace" font-size="10.5">Ex: 58/987654</text>
  <text x="540" y="113" fill="#ef4444" font-family="'Consolas', monospace" font-size="10.5">* required</text>

  <!-- Row 2: Nom -->
  <text x="150" y="142" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11.5">Nom :</text>
  <rect x="290" y="128" width="240" height="22" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
  <text x="300" y="143" fill="#94a3b8" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5">Votre nom</text>

  <!-- Row 3: Prénom -->
  <text x="150" y="172" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11.5">Prénom :</text>
  <rect x="290" y="158" width="240" height="22" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
  <text x="300" y="173" fill="#94a3b8" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5">Votre prénom</text>

  <!-- Row 4: E-mail -->
  <text x="150" y="202" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11.5">E-mail :</text>
  <rect x="290" y="188" width="240" height="22" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
  <text x="300" y="203" fill="#94a3b8" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5">pilote@exemple.tn (type="email")</text>

  <!-- Row 5: Date permis -->
  <text x="150" y="232" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11.5">Date permis :</text>
  <rect x="290" y="218" width="240" height="22" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
  <text x="300" y="233" fill="#334155" font-family="'Consolas', monospace" font-size="10.5">jj/mm/aaaa 📅 (type="date")</text>

  <!-- Row 6: Teinte préférée -->
  <text x="150" y="262" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11.5">Teinte préférée :</text>
  <rect x="290" y="248" width="45" height="22" rx="4" fill="#1e293b" stroke="#cbd5e1"/>
  <text x="345" y="263" fill="#64748b" font-family="'Consolas', monospace" font-size="10.5">type="color" (#1e293b)</text>

  <!-- Row 7: Genre -->
  <text x="150" y="292" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11.5">Genre :</text>
  <circle cx="298" cy="288" r="6" fill="#ffffff" stroke="#4f46e5" stroke-width="2"/>
  <circle cx="298" cy="288" r="3" fill="#4f46e5"/>
  <text x="312" y="292" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-size="11">Féminin</text>
  <circle cx="390" cy="288" r="6" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="404" y="292" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-size="11">Masculin</text>

  <!-- Row 8: Expérience -->
  <text x="150" y="322" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11.5">Expérience :</text>
  <rect x="290" y="310" width="360" height="32" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
  <text x="300" y="328" fill="#94a3b8" font-family="'Plus Jakarta Sans', sans-serif" font-size="10">&lt;textarea rows="2" placeholder="Précisez votre expérience..."&gt;</text>

  <!-- Charte checkbox -->
  <rect x="150" y="356" width="14" height="14" rx="3" fill="#4f46e5"/>
  <path d="M 153 363 L 156 367 L 161 360" stroke="#ffffff" stroke-width="1.8" fill="none"/>
  <text x="174" y="367" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-size="11">J'accepte la charte de sécurité du circuit.</text>

  <!-- Buttons -->
  <line x1="145" y1="382" x2="705" y2="382" stroke="#e2e8f0" stroke-width="1"/>
  <rect x="525" y="390" width="85" height="26" rx="5" fill="#f1f5f9" stroke="#cbd5e1"/>
  <text x="567" y="407" fill="#475569" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11" text-anchor="middle">Annuler</text>

  <rect x="620" y="390" width="85" height="26" rx="5" fill="#4f46e5" stroke="#4338ca"/>
  <text x="662" y="407" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11" text-anchor="middle">Ajouter</text>
</svg>
"""

# SVG 3: Formulaire evaluation.html
svg3 = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 460" width="850" height="460">
  <defs>
    <filter id="shadow3" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="2" dy="3" stdDeviation="4" flood-color="#000000" flood-opacity="0.12"/>
    </filter>
  </defs>

  <!-- Browser Frame -->
  <rect x="15" y="10" width="820" height="440" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" filter="url(#shadow3)"/>
  <rect x="15" y="10" width="820" height="30" rx="8" fill="#0f172a"/>
  <circle cx="32" cy="25" r="5" fill="#ef4444"/>
  <circle cx="48" cy="25" r="5" fill="#f59e0b"/>
  <circle cx="64" cy="25" r="5" fill="#10b981"/>
  <text x="90" y="29" fill="#94a3b8" font-family="'Consolas', monospace" font-size="11">evaluation.html — Évaluation d'un modèle de voiture</text>

  <!-- Bannière Cockpit -->
  <rect x="120" y="50" width="610" height="45" rx="6" fill="#1e293b"/>
  <text x="425" y="77" fill="#38bdf8" font-family="'Outfit', sans-serif" font-weight="700" font-size="13" text-anchor="middle">🏎️ Cockpit d'essais — Télémétrie et Évaluation Technique (cockpit.jpg)</text>

  <!-- Fieldset -->
  <rect x="120" y="105" width="610" height="335" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
  <rect x="145" y="95" width="200" height="22" rx="4" fill="#ffffff" stroke="#cbd5e1" stroke-width="0.8"/>
  <text x="155" y="110" fill="#0f172a" font-family="'Outfit', sans-serif" font-weight="700" font-size="13">Evaluation d'un modele</text>

  <!-- Section 1 : Véhicule -->
  <text x="150" y="140" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11.5">N° Permis :</text>
  <rect x="250" y="126" width="160" height="22" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
  <text x="260" y="141" fill="#94a3b8" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5">N° permis</text>

  <text x="435" y="140" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11.5">Modèle :</text>
  <rect x="500" y="126" width="200" height="22" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
  <text x="510" y="141" fill="#0f172a" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5">Bugatti Chiron Super... ▼</text>

  <text x="150" y="172" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11.5">Date essai :</text>
  <rect x="250" y="158" width="160" height="22" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
  <text x="260" y="173" fill="#334155" font-family="'Consolas', monospace" font-size="10.5">20/10/2026 📅</text>

  <text x="435" y="172" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11.5">Teinte testée :</text>
  <rect x="535" y="158" width="45" height="22" rx="4" fill="#dc2626" stroke="#cbd5e1"/>
  <text x="590" y="173" fill="#64748b" font-family="'Consolas', monospace" font-size="10.5">type="color"</text>

  <!-- Section 2 : Notes attribuées -->
  <line x1="145" y1="192" x2="705" y2="192" stroke="#e2e8f0" stroke-width="1"/>
  <text x="150" y="210" fill="#1e3a8a" font-family="'Outfit', sans-serif" font-weight="700" font-size="12.5">Notes attribuées (input type="number" min="0" max="20")</text>

  <!-- 3 boxes for notes -->
  <rect x="150" y="222" width="170" height="38" rx="6" fill="#e0e7ff" stroke="#c7d2fe"/>
  <text x="160" y="246" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11.5">Sécurité :</text>
  <rect x="235" y="230" width="70" height="22" rx="4" fill="#ffffff" stroke="#4f46e5"/>
  <text x="270" y="245" fill="#4f46e5" font-family="'Consolas', monospace" font-weight="700" font-size="12" text-anchor="middle">19 / 20</text>

  <rect x="340" y="222" width="170" height="38" rx="6" fill="#e0e7ff" stroke="#c7d2fe"/>
  <text x="350" y="246" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11.5">Conduite :</text>
  <rect x="425" y="230" width="70" height="22" rx="4" fill="#ffffff" stroke="#4f46e5"/>
  <text x="460" y="245" fill="#4f46e5" font-family="'Consolas', monospace" font-weight="700" font-size="12" text-anchor="middle">18 / 20</text>

  <rect x="530" y="222" width="170" height="38" rx="6" fill="#e0e7ff" stroke="#c7d2fe"/>
  <text x="540" y="246" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11.5">Confort :</text>
  <rect x="615" y="230" width="70" height="22" rx="4" fill="#ffffff" stroke="#4f46e5"/>
  <text x="650" y="245" fill="#4f46e5" font-family="'Consolas', monospace" font-weight="700" font-size="12" text-anchor="middle">17 / 20</text>

  <!-- Observations -->
  <text x="150" y="280" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11.5">Observations du pilote :</text>
  <rect x="150" y="288" width="550" height="32" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
  <text x="160" y="308" fill="#94a3b8" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5">Sensations au volant et tenue de route...</text>

  <!-- Checkboxes -->
  <rect x="150" y="334" width="14" height="14" rx="3" fill="#ffffff" stroke="#94a3b8"/>
  <text x="172" y="345" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-size="11">Mode Sport activé sur piste</text>

  <rect x="420" y="334" width="14" height="14" rx="3" fill="#4f46e5"/>
  <path d="M 423 341 L 426 345 L 431 338" stroke="#ffffff" stroke-width="1.8" fill="none"/>
  <text x="442" y="345" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-size="11">Je ne suis pas un robot (requis)</text>

  <!-- Buttons -->
  <line x1="145" y1="365" x2="705" y2="365" stroke="#e2e8f0" stroke-width="1"/>
  <rect x="525" y="380" width="85" height="26" rx="5" fill="#f1f5f9" stroke="#cbd5e1"/>
  <text x="567" y="397" fill="#475569" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11" text-anchor="middle">Annuler</text>

  <rect x="620" y="380" width="85" height="26" rx="5" fill="#4f46e5" stroke="#4338ca"/>
  <text x="662" y="397" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11" text-anchor="middle">Valider</text>
</svg>
"""

# SVG 4: Formulaire manifestation.html & dynamique JS
svg4 = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 470" width="850" height="470">
  <defs>
    <filter id="shadow4" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="2" dy="3" stdDeviation="4" flood-color="#000000" flood-opacity="0.12"/>
    </filter>
  </defs>

  <!-- Browser Frame -->
  <rect x="15" y="10" width="820" height="450" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" filter="url(#shadow4)"/>
  <rect x="15" y="10" width="820" height="30" rx="8" fill="#0f172a"/>
  <circle cx="32" cy="25" r="5" fill="#ef4444"/>
  <circle cx="48" cy="25" r="5" fill="#f59e0b"/>
  <circle cx="64" cy="25" r="5" fill="#10b981"/>
  <text x="90" y="29" fill="#94a3b8" font-family="'Consolas', monospace" font-size="11">manifestation.html — Évaluation d'une manifestation &amp; Étoiles JS</text>

  <!-- Bannière -->
  <rect x="120" y="48" width="610" height="40" rx="6" fill="#334155"/>
  <text x="425" y="73" fill="#fde047" font-family="'Outfit', sans-serif" font-weight="700" font-size="13" text-anchor="middle">🏁 Paddock &amp; Rassemblement — Journée VIP Test Drive (manifestation.jpg)</text>

  <!-- Fieldset -->
  <rect x="120" y="96" width="610" height="354" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
  
  <!-- Legend rouge bold 20px -->
  <rect x="145" y="86" width="270" height="24" rx="4" fill="#ffffff" stroke="#cbd5e1" stroke-width="0.8"/>
  <text x="155" y="103" fill="#dc2626" font-family="'Outfit', sans-serif" font-weight="800" font-size="14">Évaluation d’une manifestation</text>

  <!-- Select manifest -->
  <text x="145" y="128" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11">Manifestation :</text>
  <rect x="250" y="116" width="240" height="20" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
  <text x="260" y="130" fill="#0f172a" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5">Journée VIP Test Drive... ▼</text>

  <text x="505" y="128" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11">Date :</text>
  <rect x="555" y="116" width="145" height="20" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
  <text x="565" y="130" fill="#334155" font-family="'Consolas', monospace" font-size="10.5">18/10/2026 📅</text>

  <!-- Titres Service et Note (Exercice 1 emblématique) -->
  <rect x="145" y="146" width="130" height="26" rx="5" fill="#fef08a" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4"/>
  <text x="210" y="163" fill="#dc2626" font-family="'Outfit', sans-serif" font-weight="700" font-style="italic" font-size="13" text-anchor="middle">Service</text>

  <rect x="290" y="146" width="130" height="26" rx="5" fill="#fef08a" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4"/>
  <text x="355" y="163" fill="#dc2626" font-family="'Outfit', sans-serif" font-weight="700" font-style="italic" font-size="13" text-anchor="middle">Note</text>

  <text x="440" y="163" fill="#64748b" font-family="'Consolas', monospace" font-size="10.5">← Styles CSS : fond jaune, bordure tiret rouge 3px</text>

  <!-- 4 lignes de réglettes avec étoiles -->
  <!-- 1. Accueil -->
  <text x="145" y="196" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11.5">Accueil :</text>
  <line x1="250" y1="192" x2="370" y2="192" stroke="#cbd5e1" stroke-width="4" stroke-linecap="round"/>
  <circle cx="346" cy="192" r="7" fill="#4f46e5"/>
  <text x="400" y="197" fill="#f59e0b" font-family="'Outfit', sans-serif" font-size="15" letter-spacing="2">★★★★☆</text>
  <text x="490" y="196" fill="#64748b" font-family="'Consolas', monospace" font-size="10.5">(4 / 5)</text>

  <!-- 2. Confort -->
  <text x="145" y="226" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11.5">Confort :</text>
  <line x1="250" y1="222" x2="370" y2="222" stroke="#cbd5e1" stroke-width="4" stroke-linecap="round"/>
  <circle cx="370" cy="222" r="7" fill="#4f46e5"/>
  <text x="400" y="227" fill="#f59e0b" font-family="'Outfit', sans-serif" font-size="15" letter-spacing="2">★★★★★</text>
  <text x="490" y="226" fill="#64748b" font-family="'Consolas', monospace" font-size="10.5">(5 / 5)</text>

  <!-- 3. Signalétique -->
  <text x="145" y="256" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11.5">Signalétique :</text>
  <line x1="250" y1="252" x2="370" y2="252" stroke="#cbd5e1" stroke-width="4" stroke-linecap="round"/>
  <circle cx="322" cy="252" r="7" fill="#4f46e5"/>
  <text x="400" y="257" fill="#f59e0b" font-family="'Outfit', sans-serif" font-size="15" letter-spacing="2">★★★☆☆</text>
  <text x="490" y="256" fill="#64748b" font-family="'Consolas', monospace" font-size="10.5">(3 / 5)</text>

  <!-- 4. Logistique -->
  <text x="145" y="286" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11.5">Logistique :</text>
  <line x1="250" y1="282" x2="370" y2="282" stroke="#cbd5e1" stroke-width="4" stroke-linecap="round"/>
  <circle cx="346" cy="282" r="7" fill="#4f46e5"/>
  <text x="400" y="287" fill="#f59e0b" font-family="'Outfit', sans-serif" font-size="15" letter-spacing="2">★★★★☆</text>
  <text x="490" y="286" fill="#64748b" font-family="'Consolas', monospace" font-size="10.5">(4 / 5)</text>

  <!-- Badge Note Totale -->
  <rect x="145" y="306" width="260" height="34" rx="8" fill="#fef3c7" stroke="#fde68a"/>
  <text x="160" y="328" fill="#92400e" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="12">Note totale calculée :</text>
  <rect x="315" y="311" width="80" height="24" rx="12" fill="#d97706"/>
  <text x="355" y="327" fill="#ffffff" font-family="'Consolas', monospace" font-weight="800" font-size="13" text-anchor="middle">16 / 20</text>
  <text x="420" y="328" fill="#16a34a" font-family="'Consolas', monospace" font-weight="600" font-size="11">⚡ Calculé en temps réel par updateScore()</text>

  <!-- Remarques & Checkbox -->
  <text x="145" y="360" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600">Remarques &amp; suggestions :</text>
  <rect x="310" y="348" width="390" height="24" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
  <text x="320" y="364" fill="#94a3b8" font-family="'Plus Jakarta Sans', sans-serif" font-size="10">&lt;textarea placeholder="Partagez vos impressions..."&gt;</text>

  <rect x="145" y="384" width="14" height="14" rx="3" fill="#4f46e5"/>
  <path d="M 148 391 L 151 395 L 156 388" stroke="#ffffff" stroke-width="1.8" fill="none"/>
  <text x="168" y="395" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5">Recevoir les invitations officielles aux prochains salons.</text>

  <!-- Actions -->
  <line x1="145" y1="406" x2="705" y2="406" stroke="#e2e8f0" stroke-width="1"/>
  <rect x="525" y="414" width="85" height="24" rx="5" fill="#f1f5f9" stroke="#cbd5e1"/>
  <text x="567" y="430" fill="#475569" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11" text-anchor="middle">Annuler</text>

  <rect x="620" y="414" width="85" height="24" rx="5" fill="#4f46e5" stroke="#4338ca"/>
  <text x="662" y="430" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11" text-anchor="middle">Valider</text>
</svg>
"""

# SVG 5: Architecture CSS & Box Model sans Flexbox/Grid
svg5 = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 430" width="850" height="430">
  <defs>
    <filter id="shadow5" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="2" dy="3" stdDeviation="4" flood-color="#000000" flood-opacity="0.12"/>
    </filter>
  </defs>

  <!-- Frame -->
  <rect x="10" y="10" width="830" height="410" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#shadow5)"/>
  <rect x="10" y="10" width="830" height="30" rx="10" fill="#1e293b"/>
  <text x="425" y="30" fill="#38bdf8" font-family="'Outfit', sans-serif" font-weight="700" font-size="13" text-anchor="middle">📐 Architecture CSS3 &amp; Modèle de Boîte — Conforme Programme 3e SI (Zéro Flexbox / Zéro Grid)</text>

  <!-- Global container indicator -->
  <rect x="25" y="50" width="800" height="355" rx="8" fill="#f8fafc" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="35" y="65" fill="#1d4ed8" font-family="'Consolas', monospace" font-size="10.5" font-weight="bold">.site-container (width: 96%; max-width: 1040px; margin: 0 auto;)</text>

  <!-- Header block -->
  <rect x="40" y="75" width="770" height="55" rx="8" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.8" stroke-dasharray="6,3"/>
  <text x="425" y="97" fill="#854d0e" font-family="'Outfit', sans-serif" font-weight="700" font-size="13" text-anchor="middle">&lt;header&gt; — border: 2px dashed #d4af37; border-radius: 10px 100px; background-color: beige;</text>
  <text x="425" y="117" fill="#475569" font-family="'Consolas', monospace" font-size="11" text-anchor="middle">h1 { font-family: 'Outfit'; font-size: 2.2rem; text-shadow: rgb(0, 255, 34) 1px 0 10px; }</text>

  <!-- Two columns simulation -->
  <!-- Left Column: nav -->
  <rect x="40" y="140" width="235" height="195" rx="7" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="157" y="160" fill="#5b21b6" font-family="'Outfit', sans-serif" font-weight="700" font-size="12" text-anchor="middle">&lt;nav&gt; (width: 30%; float: left;)</text>
  <text x="157" y="177" fill="#6d28d9" font-family="'Consolas', monospace" font-size="10" text-anchor="middle">height: 590px; border-radius: 7px;</text>

  <!-- nav link box model -->
  <rect x="55" y="190" width="205" height="42" rx="16" fill="#f5f5dc" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="157" y="207" fill="#4338ca" font-family="'Consolas', monospace" font-size="10.5" font-weight="bold" text-anchor="middle">display: block; width: 200px;</text>
  <text x="157" y="222" fill="#4338ca" font-family="'Consolas', monospace" font-size="10" text-anchor="middle">margin: 15px auto; padding: 10px;</text>

  <rect x="55" y="240" width="205" height="34" rx="16" fill="#4f46e5"/>
  <text x="157" y="261" fill="#ffffff" font-family="'Consolas', monospace" font-size="10.5" font-weight="bold" text-anchor="middle">nav a.active { bg: #4f46e5; }</text>

  <text x="157" y="305" fill="#7c3aed" font-family="'Consolas', monospace" font-size="10" text-anchor="middle">nav a:hover { bg: #ede9fe; }</text>

  <!-- Right Column: section & iframe -->
  <rect x="290" y="140" width="520" height="195" rx="7" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
  <text x="550" y="160" fill="#0369a1" font-family="'Outfit', sans-serif" font-weight="700" font-size="12" text-anchor="middle">&lt;section&gt; (width: 68%; float: right; height: 590px;)</text>
  
  <rect x="305" y="175" width="490" height="145" rx="6" fill="#ffffff" stroke="#38bdf8" stroke-width="1.2"/>
  <text x="550" y="200" fill="#0284c7" font-family="'Consolas', monospace" font-size="11" font-weight="bold" text-anchor="middle">&lt;iframe src="acceuil.html" name="zone_affichage" id="zone_affichage"&gt;</text>
  <text x="550" y="220" fill="#64748b" font-family="'Consolas', monospace" font-size="10.5" text-anchor="middle">width: 99%; height: 580px; border: none; display: block; margin: 0 auto;</text>
  
  <rect x="320" y="235" width="460" height="70" rx="5" fill="#f8fafc" stroke="#cbd5e1"/>
  <text x="550" y="258" fill="#334155" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" text-anchor="middle">Les pages cibles s'affichent dynamiquement dans l'iframe via target="zone_affichage"</text>
  <text x="550" y="280" fill="#059669" font-family="'Consolas', monospace" font-size="10.5" text-anchor="middle">acceuil.html · enregistrement.html · evaluation.html · manifestation.html</text>

  <!-- Footer block -->
  <rect x="40" y="345" width="770" height="45" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
  <text x="425" y="365" fill="#b91c1c" font-family="'Outfit', sans-serif" font-weight="700" font-size="12" text-anchor="middle">&lt;footer&gt; — clear: both; color: red; font-style: italic; font-weight: 600; text-align: center;</text>
  <text x="425" y="381" fill="#7f1d1d" font-family="'Consolas', monospace" font-size="10.5" text-anchor="middle">Annule les flottements (float: left et float: right) des deux colonnes précédentes</text>
</svg>
"""

with open(os.path.join(SVG_DIR, "svg_ex1_portail.svg"), "w", encoding="utf-8") as f:
    f.write(svg1)

with open(os.path.join(SVG_DIR, "svg_ex2_testeur.svg"), "w", encoding="utf-8") as f:
    f.write(svg2)

with open(os.path.join(SVG_DIR, "svg_ex3_evaluation.svg"), "w", encoding="utf-8") as f:
    f.write(svg3)

with open(os.path.join(SVG_DIR, "svg_ex4_manifestation.svg"), "w", encoding="utf-8") as f:
    f.write(svg4)

with open(os.path.join(SVG_DIR, "svg_ex5_css_layout.svg"), "w", encoding="utf-8") as f:
    f.write(svg5)

print("All 5 SVG files created in", SVG_DIR)
