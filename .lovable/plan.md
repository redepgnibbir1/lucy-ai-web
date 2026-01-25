

## Plan: Byta text och ikon i "Färre fel"-segmentet

**Mål:** Ersätta texten i "Färre fel"-kortet (Fewer errors) med ny text om deadlines och påminnelser, samt byta till en mer passande ikon.

### Ny text

| Fält | Nuvarande | Ny |
|------|-----------|-----|
| Titel | "Färre fel" / "Fewer errors" | "Automatiska påminnelser" / "Automatic reminders" |
| Beskrivning | "Automatisering minimerar risken för mänskliga misstag." | "Alla deadlines. Alla påminnelser. Utan att du behöver lyfta ett finger." |

### Ny ikon

**Nuvarande ikon:** `TrendingDown` (pil nedåt)

**Ny ikon:** `Bell` (klocka) - passar bättre för påminnelser och notifikationer

### Tekniska detaljer

**Filer som ändras:**

1. **src/translations/conference-planner.ts** (rad 123-129)
   - Uppdatera `cp.results.errors.title` till ny titel
   - Uppdatera `cp.results.errors.description` till ny beskrivning

2. **src/pages/ConferencePlanner.tsx** (rad 86-88)
   - Byta ikon från `TrendingDown` till `Bell`
   - Lägga till `Bell` i importraden

### Kodändringar

**Translations (conference-planner.ts):**
```text
'cp.results.errors.title': {
  sv: 'Automatiska påminnelser',
  en: 'Automatic reminders'
},
'cp.results.errors.description': {
  sv: 'Alla deadlines. Alla påminnelser. Utan att du behöver lyfta ett finger.',
  en: 'All deadlines. All reminders. Without lifting a finger.'
},
```

**Component (ConferencePlanner.tsx):**
```text
{
  icon: Bell,
  titleKey: 'cp.results.errors.title',
  descKey: 'cp.results.errors.description'
},
```

