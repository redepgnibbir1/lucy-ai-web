

## Plan: Replace Dialog Image with Teambuilding Image

**Goal:** Change the image shown for the "Dialog & kommentarer" feature to use the teambuilding image instead.

### What Will Change

The fourth feature in the features section (Dialog & kommentarer) currently displays `conference-planner-dialogue.png`. After this change, it will display `conference-planner-teambuilding.png` instead.

### Technical Details

**File to modify:** `src/pages/ConferencePlanner.tsx`

**Change:** Update line 79 to reference the teambuilding image:

```typescript
// Before (line 79):
image: conferenceDialogueImage

// After:
image: conferenceTeambuildingImage
```

The `conferenceTeambuildingImage` is already imported at line 14, so no additional imports are needed.

### Files Affected
- `src/pages/ConferencePlanner.tsx` - 1 line change

