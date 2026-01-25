

## Plan: Byta bild i "Efter"-kortet

**Mål:** Ersätta den nuvarande bilden i "Efter"-kortet i jämförelsesektionen med den nya bifogade bilden som visar teambuildingbokning.

### Vad som ändras

Kortet "Efter" (After) i upsell-sektionen visar för närvarande `conference-planner-teambuilding.png`. Denna bild kommer att ersättas med den nya skärmdumpen som visar "Do you wish to book a teambuilding?"-formuläret.

### Tekniska detaljer

**Steg 1:** Kopiera den uppladdade bilden till projektets assets-mapp

Filen `user-uploads://Skärmavbild_2026-01-25_kl._10.26.23.png` kopieras till `src/assets/conference-planner-teambuilding.png` och ersätter den befintliga filen.

**Fil som påverkas:**
- `src/assets/conference-planner-teambuilding.png` – ersätts med ny bild

**Ingen kodändring krävs** eftersom komponenten redan refererar till `conferenceTeambuildingImage` (rad 413 i ConferencePlanner.tsx), och den nya bilden kommer att använda samma filnamn.

