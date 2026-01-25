

## Plan: Fix Feature Image Display to Prevent Cropping

**Goal:** Update the image styling in the Features section so images are displayed in full without being cut off at the margins.

### The Problem

Currently, the feature images (including the schedule image) are displayed using:
- A fixed aspect ratio container: `aspect-[16/10]`
- `object-cover object-top` styling

This causes images that don't match the 16:10 aspect ratio to be zoomed in and cropped, cutting off content at the edges.

### The Solution

Remove the fixed aspect ratio and change the object-fit behavior to show the complete image:

**Before:**
```text
<div className="aspect-[16/10] w-full overflow-hidden rounded-lg border border-gray-200 shadow-sm">
  <img ... className="w-full h-full object-cover object-top" />
</div>
```

**After:**
```text
<div className="w-full overflow-hidden rounded-lg border border-gray-200 shadow-sm">
  <img ... className="w-full h-auto object-contain" />
</div>
```

### What Changes

| Property | Before | After | Effect |
|----------|--------|-------|--------|
| Container | Fixed `aspect-[16/10]` | No fixed aspect | Container adapts to image height |
| Object fit | `object-cover` | `object-contain` | Shows full image, no cropping |
| Height | `h-full` | `h-auto` | Image maintains natural proportions |

### Technical Details

**File to modify:** `src/pages/ConferencePlanner.tsx`

**Lines to change:** 266-268

This change affects all four feature images:
- Deltagarlistan (participants)
- Kostpreferenser (dietary)
- Schema & agenda (schedule)
- Dialog & kommentarer (dialogue)

All images will now display their full content without cropping, adapting the card height to fit each image naturally.

