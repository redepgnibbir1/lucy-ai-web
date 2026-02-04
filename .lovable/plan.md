
## Plan: Cookie Consent Popup

### Översikt
Skapa en cookie consent popup som visas för förstagångsbesökare och matchar Lucys designspråk med neon-gul accentfärg och mörka toner.

### Design

Popupen kommer att:
- Visas längst ner på skärmen som en "banner"
- Ha en mörk bakgrund (`lucy-dark-gray`) för att sticka ut men ändå matcha footer-stilen
- Använda `lucy-neon-yellow` för acceptera-knappen
- Ha en sekundär länk för att läsa mer om cookies/integritetspolicy
- Sparas i localStorage för att inte visas igen efter godkännande

### Ändringar

**1. Skapa ny komponent: `src/components/CookieConsent.tsx`**

```tsx
// Ny komponent med följande struktur:
- Fixed position längst ner på skärmen
- Mörk bakgrund (lucy-dark-gray) med vit text
- Kort förklarande text om cookies
- "Acceptera"-knapp i lucy-neon-yellow
- "Läs mer"-länk till /privacy
- Animation för smidig in/ut-effekt
- localStorage-hantering för att spara samtycke
```

**2. Lägg till översättningar: `src/translations/cookies.ts`** (ny fil)

Texter på svenska och engelska:
- Rubrik: "Vi använder cookies" / "We use cookies"
- Beskrivning om varför cookies används
- Knappar: "Acceptera" / "Accept", "Läs mer" / "Read more"

**3. Uppdatera `src/translations/index.ts`**

Importera och lägg till cookie-översättningarna.

**4. Uppdatera `src/pages/Index.tsx`**

Lägg till `<CookieConsent />` komponenten så den visas på startsidan (och därmed på hela sajten via App.tsx om önskat).

### Tekniska detaljer

| Aspekt | Implementering |
|--------|----------------|
| Placering | Fixed bottom, full bredd |
| Bakgrund | `bg-lucy-dark-gray` med `backdrop-blur-sm` |
| Textfärg | Vit text, `text-gray-300` för beskrivning |
| Acceptera-knapp | `bg-lucy-neon-yellow text-lucy-black rounded-md` |
| Animation | Framer Motion fade-in från botten |
| Lagring | `localStorage.setItem('cookie-consent', 'accepted')` |
| Responsivitet | Staplad layout på mobil, horisontell på desktop |

### Visuell layout (desktop)

```text
┌────────────────────────────────────────────────────────────────────────────┐
│  🍪  Vi använder cookies för att förbättra din upplevelse.   [Läs mer]  [Acceptera]  │
└────────────────────────────────────────────────────────────────────────────┘
```

### Resultat

En snygg, diskret cookie-banner som:
- Visas automatiskt för nya besökare
- Försvinner efter godkännande och kommer inte tillbaka
- Matchar Lucys visuella identitet
- Stödjer både svenska och engelska
