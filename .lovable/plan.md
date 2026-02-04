

## Plan: Skapa Cookie Policy-sida och uppdatera cookie-bannern

### Översikt
Skapa en dedikerad Cookie Policy-sida med den text du angav och uppdatera cookie consent-bannern så att "Läs mer"-länken pekar till denna nya sida istället för den allmänna privacy policyn.

### Ändringar

**1. Skapa ny sida: `src/pages/CookiePolicy.tsx`**

En ny React-komponent med samma styling som PrivacyPolicy.tsx, innehållande:

- What are cookies?
- What types of cookies do we use? (Strictly necessary, Analytics, Functional)
- Third-party cookies
- How can you manage cookies?
- Changes to this Cookie Policy
- Contact

**2. Lägg till route i `src/App.tsx`**

```tsx
import CookiePolicy from "./pages/CookiePolicy";

// Lägg till route
<Route path="/cookies" element={
  <Layout>
    <CookiePolicy />
  </Layout>
} />
```

**3. Uppdatera `src/components/CookieConsent.tsx`**

Ändra länken från `/privacy` till `/cookies`:

```tsx
// Rad 52-53: Ändra to="/privacy" till to="/cookies"
<Link
  to="/cookies"
  ...
>
```

### Tekniska detaljer

| Aspekt | Detalj |
|--------|--------|
| URL | `/cookies` |
| Synlig i nav/footer | Nej (dold sida) |
| Styling | Samma som PrivacyPolicy.tsx (`prose`, `container`, etc.) |
| Språk | Endast engelska (enligt texten du angav) |
| Cookie banner-länk | Uppdateras från `/privacy` till `/cookies` |

### Resultat

- Cookie consent-bannern kommer att länka till den korrekta cookie policyn
- Användare kan läsa den specifika cookie policyn för Lucy Analytics
- Sidan följer samma designmönster som övriga policy-sidor

