

## Plan: Korrigera engelska översättningar på Conference Planner

### Sammanfattning
Tre översättningar behöver korrigeras för att bättre matcha det svenska originalet.

### Ändringar i `src/translations/conference-planner.ts`

#### 1. Korrigera citatet i Turning Point-sektionen (rad 65)

**Nuvarande:**
```
en: '"We realized that if we were going to grow, we needed a system that brought everything together in one place. A tool that gave us control – and time to focus on what truly creates value."'
```

**Ny version:**
```
en: '"We realized that if our customers were to become more efficient, we needed a system that brought everything together in one place. A tool that gave us control – and time to focus on what truly creates value."'
```

#### 2. Förbättra feature-beskrivningen (rad 83)

**Nuvarande:**
```
en: 'Allows the customer to answer all questions themselves and make available add-ons.'
```

**Ny version:**
```
en: 'Allows the customer to answer all questions themselves and select optional add-ons.'
```

#### 3. Förbättra problem-rubriken (rad 31)

**Nuvarande:**
```
en: 'This is how our customers\' everyday looked'
```

**Ny version:**
```
en: 'This was the daily reality for our customers'
```

### Teknisk implementation

Fil: `src/translations/conference-planner.ts`

- **Rad 31:** Uppdatera `cp.problem.title` engelska text
- **Rad 65:** Uppdatera `cp.turning.quote` engelska text  
- **Rad 83:** Uppdatera `cp.features.registration.description` engelska text

Inga andra filer behöver ändras eftersom översättningarna redan används korrekt i komponenten.

