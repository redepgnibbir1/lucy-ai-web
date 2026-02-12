

## Plan: Lägg till NOFO Hotel & Wine Bar-logga i kundlogotyp-karusellen

### Översikt
Lägga till den uppladdade NOFO Hotel & Wine Bar-loggan till den befintliga kundlogotyp-animationen på startsidan.

### Ändringar

**1. Kopiera bilden till projektet**

Bilden kopieras till `public/lovable-uploads/nofo-hotel-logo.png`

**2. Uppdatera `src/config/customerLogos.ts`**

Lägg till en ny post i `customerLogos`-arrayen:

```typescript
{ 
  src: "/lovable-uploads/nofo-hotel-logo.png", 
  alt: "NOFO Hotel & Wine Bar",
  scale: 1.3 
}
```

### Tekniska detaljer

| Aspekt | Värde |
|--------|-------|
| Filnamn | `nofo-hotel-logo.png` |
| Alt-text | "NOFO Hotel & Wine Bar" |
| Skala | 1.3 (standard för de flesta loggor) |
| Placering | Sist i listan med övriga loggor |

### Resultat

NOFO Hotel & Wine Bar-loggan kommer att visas tillsammans med de andra kundloggorna i den animerade karusellen på startsidan, både på mobil och desktop.

