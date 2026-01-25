

## Plan: Dölja video-placeholders tills videos finns

**Mål:** Tillfälligt dölja VideoPlayer-komponenterna på Conference Planner-sidan tills du har videorna redo att ladda upp.

### Alternativ

Det finns två sätt att lösa detta:

**Alternativ A: Kommentera bort VideoPlayer-komponenterna (Rekommenderat)**
- Snabbaste lösningen - enkelt att återställa när du har videos

**Alternativ B: Lägga till en prop för att dölja VideoPlayer helt**
- Mer strukturerad lösning om du vill behålla layouten men bara dölja videon

### Tekniska detaljer (Alternativ A)

**Fil som ändras:** `src/pages/ConferencePlanner.tsx`

**Ställen som påverkas:**

1. **Hero-sektionen** (rad 142-155)
   - Döljer hela video-wrappern under hero-texten

2. **Turning Point-sektionen** (rad 211-225)
   - Döljer video-delen i det svarta avsnittet

3. **Results-sektionen** (rad 301-314)
   - Döljer videon till höger om resultatlistan

### Kodändringar

Tre motion.div-block med VideoPlayer-komponenter kommenteras bort med `{/* ... */}`:

```text
{/* Video hidden until ready
<motion.div ... >
  <VideoPlayer ... />
</motion.div>
*/}
```

### Vad händer sen?

När du har videorna redo, berätta så tar jag bort kommentarerna och videorna visas igen.

