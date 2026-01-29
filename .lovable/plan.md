
## Plan: Skapa Privacy Policy för Conference Planner

### Översikt
Skapa en ny undersida på `/privacy-policy-conferenceplanner` som visar privacy policy specifik för Lucy Conference Planner-produkten. Sidan kommer inte att synas i navigationen eller footern, men är tillgänglig via direktlänk.

### Ändringar

**1. Skapa ny sida: `src/pages/PrivacyPolicyConferencePlanner.tsx`**

En ny React-komponent som visar den engelska privacy policyn för Conference Planner med samma styling som den befintliga PrivacyPolicy-sidan:

- Samma layout och typografi som befintlig privacy policy
- Innehåller alla 7 sektioner du angav:
  1. Data Controller
  2. What Data Is Collected?
  3. Purpose of Data Collection
  4. Legal Basis
  5. Data Retention
  6. Who Has Access to Your Data?
  7. Your Rights

**2. Lägg till route i `src/App.tsx`**

```tsx
// Importera den nya sidan
import PrivacyPolicyConferencePlanner from "./pages/PrivacyPolicyConferencePlanner";

// Lägg till route (före catch-all "*" routen)
<Route path="/privacy-policy-conferenceplanner" element={
  <Layout>
    <PrivacyPolicyConferencePlanner />
  </Layout>
} />
```

### Tekniska detaljer

| Aspekt | Detalj |
|--------|--------|
| URL | `/privacy-policy-conferenceplanner` |
| Synlig i nav/footer | Nej |
| Layout | Använder samma Layout-wrapper med Navbar och Footer |
| Styling | Samma som befintlig PrivacyPolicy.tsx (`prose`, `container`, etc.) |
| Språk | Endast engelska (enligt den text du angav) |

### Resultat
Sidan blir tillgänglig på `lucyanalytics.com/privacy-policy-conferenceplanner` men syns inte i någon meny. Perfekt för att dela med konferensdeltagare som behöver läsa privacy policyn.
