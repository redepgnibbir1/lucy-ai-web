

## Plan: Byta bild i "Schema & cockpit"-kortet

**Mål:** Ersätta den nuvarande bilden i "Schema & cockpit"-kortet med den nya bifogade bilden som visar Day 1/Day 2-schemat.

### Vad som ändras

Kortet "Schema & cockpit" i features-sektionen visar för närvarande `conference-planner-schedule.png`. Denna bild kommer att ersättas med den nya skärmdumpen som visar "Day 1" och "Day 2" med aktiviteter som "Attendees arrive", "Fika" och "Attendees depart".

### Tekniska detaljer

**Steg 1:** Kopiera den uppladdade bilden till projektets assets-mapp

Filen `user-uploads://Skärmavbild_2026-01-25_kl._13.24.37.png` kopieras till `src/assets/conference-planner-schedule.png` och ersätter den befintliga filen.

**Fil som påverkas:**
- `src/assets/conference-planner-schedule.png` – ersätts med ny bild

**Ingen kodändring krävs** eftersom komponenten redan refererar till `conferenceScheduleImage` (rad 9 i ConferencePlanner.tsx), och den nya bilden kommer att använda samma filnamn.

