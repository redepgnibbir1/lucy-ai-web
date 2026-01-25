
## Plan: Scrolla till toppen vid navigering till Conference Planner

### Problem
När man klickar på "Lucy Conference Planner"-kortet på förstasidan hamnar man mitt på Conference Planner-sidan istället för högst upp.

### Orsak
`react-router-dom`s `navigate()`-funktion behåller scroll-positionen som standard.

### Lösning
Lägg till `window.scrollTo(0, 0)` direkt efter `navigate(href)` i `ProductCard`-komponenten.

---

## Teknisk implementation

**Fil:** `src/components/Products.tsx`

**Nuvarande kod (rad 73-77):**
```javascript
} else if (href && href.startsWith('/')) {
  navigate(href);
}
```

**Ny kod:**
```javascript
} else if (href && href.startsWith('/')) {
  navigate(href);
  window.scrollTo(0, 0);
}
```

---

## Resultat
När besökaren klickar på Conference Planner-kortet kommer de till toppen av sidan och får en bättre överblick över hela innehållet.
