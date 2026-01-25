

## Plan: Byt ut hero-bakgrundsbilden

### Nuvarande implementation

Bakgrundsbilden i hero-sektionen är:
- **Fil:** `src/assets/hero-background.png`
- **Används i:** `src/components/Hero.tsx`

### Steg för att genomföra bytet

1. **Kopiera den nya bilden** till `src/assets/hero-background.png` (ersätter den befintliga filen)

Det är allt! Eftersom filnamnet och importen förblir samma kommer den nya bilden automatiskt att visas på förstasidan.

---

## Teknisk implementation

**Åtgärd:** Kopiera den uppladdade bilden till `src/assets/hero-background.png`

```
lov-copy user-uploads://Skärmavbild_2026-01-25_kl._20.23.19.png src/assets/hero-background.png
```

Ingen kodändring krävs i `Hero.tsx` eftersom importen redan pekar på rätt fil.

---

## Resultat

Hero-sektionen på förstasidan kommer att visa den nya bakgrundsbilden med telefonen i hotellmiljö istället för den nuvarande bilden.

