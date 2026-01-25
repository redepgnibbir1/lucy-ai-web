

## Plan: Förbättra synligheten på produktkortens knappar

### Problemet
De nuvarande knapparna på produktkorten använder gul text (`text-lucy-neon-yellow`) mot en vit bakgrund, vilket gör dem svåra att se.

### Lösning
Ändra knapparna till att ha en synlig bakgrundsfärg (lime/neon-gul) med svart text, liknande referensbilden "Boka en demo".

### Ändringar

**Fil: `src/components/Products.tsx`**

Rad 90-96 - Ändra Button-komponenten från:
```tsx
<Button 
  variant="link" 
  className="text-lucy-neon-yellow p-0 justify-start font-medium"
  onClick={handleClick}
>
  {ctaText} →
</Button>
```

Till:
```tsx
<Button 
  className="bg-lucy-neon-yellow text-lucy-black hover:bg-lucy-neon-yellow/90 px-6 py-2 rounded-md font-medium justify-start w-fit"
  onClick={handleClick}
>
  {ctaText} →
</Button>
```

### Tekniska detaljer
- **`bg-lucy-neon-yellow`**: Använder den befintliga neon-gula färgen (#C9FD59) som bakgrund
- **`text-lucy-black`**: Svart text för god kontrast och läsbarhet
- **`hover:bg-lucy-neon-yellow/90`**: Subtil hover-effekt som gör knappen lite mörkare
- **`px-6 py-2`**: Ger knappen bra padding som i referensbilden
- **`rounded-md`**: Mjukt avrundade hörn
- **`w-fit`**: Knappen anpassar sig till textens bredd

### Resultat
Knapparna kommer att se ut som den gröna "Boka en demo"-knappen i referensbilden - med tydlig bakgrundsfärg och svart text som är lätt att se mot den vita kortbakgrunden.

