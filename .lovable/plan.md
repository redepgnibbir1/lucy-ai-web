

## Plan: Lägg till Lucy Conference Planner som tredje produktkort på förstasidan

### Sammanfattning
Uppdatera produktsektionen på förstasidan från två kort till tre kort för att lyfta fram Conference Planner-produkten.

### Visuell förändring

**Nuvarande layout (2 kort):**
```text
┌─────────────────────┐  ┌─────────────────────┐
│ Lucy Team Comms     │  │ Tillägg & Bransch-  │
│                     │  │ lösningar           │
└─────────────────────┘  └─────────────────────┘
```

**Ny layout (3 kort):**
```text
┌────────────────┐  ┌────────────────┐  ┌────────────────┐
│ Lucy Team      │  │ Lucy Conference│  │ Tillägg &      │
│ Comms          │  │ Planner        │  │ Branschlösn.   │
└────────────────┘  └────────────────┘  └────────────────┘
```

### Det nya kortets innehåll

| Fält | Svenska | Engelska |
|------|---------|----------|
| **Titel** | Lucy Conference Planner | Lucy Conference Planner |
| **Beskrivning** | Planera konferenser smartare. | Plan conferences smarter. |
| **Undertext** | Lucy Conference Planner samlar allt – registrering, kost, schema och kunddialog – i ett smart arbetsflöde. Du får tid över. Och du får koll. | Lucy Conference Planner brings everything together – registration, dietary needs, schedules, and customer dialogue – in one smart workflow. |
| **CTA** | Utforska Lucy Conference Planner → | Explore Lucy Conference Planner → |
| **Länk** | /conference-planner | /conference-planner |

---

## Teknisk implementation

### Steg 1: Lägg till översättningar
**Fil:** `src/translations/products.ts`

Lägg till nya nycklar för Conference Planner-kortet:
- `products.conference.title`
- `products.conference.description`
- `products.conference.subtext`
- `products.conference.cta`

### Steg 2: Uppdatera Products-komponenten
**Fil:** `src/components/Products.tsx`

**2a.** Ändra grid-layouten från 2 till 3 kolumner:
- Nuvarande: `grid md:grid-cols-2`
- Ny: `grid md:grid-cols-3`

**2b.** Lägg till det nya kortet mellan Team Communications och Tillägg-kortet:
```jsx
<ProductCard 
  title={t('products.conference.title')} 
  description={t('products.conference.description')}
  subtext={t('products.conference.subtext')}
  ctaText={t('products.conference.cta')}
  href="/conference-planner"
/>
```

**2c.** Uppdatera ProductCard-komponentens handleClick för att hantera både hash-länkar (`#team-communications`) och route-länkar (`/conference-planner`)

### Steg 3: Justera animationsfördröjningar
Uppdatera transition delays för jämnare animationssekvens:
- Kort 1: `delay: 0.2`
- Kort 2: `delay: 0.4`
- Kort 3: `delay: 0.6`

---

## Responsiv design
- **Desktop (md+):** 3 kolumner sida vid sida
- **Mobil:** Alla 3 kort staplade vertikalt

Ingen extra CSS behövs - Tailwinds grid hanterar detta automatiskt.

