

## Plan: Dölja endast den tredje videon (Results-sektionen)

**Mål:** Tillfälligt dölja endast VideoPlayer-komponenten i Results-sektionen (den längst ner på sidan), medan de andra två videorna förblir synliga.

### Vad som ändras

Den video-placeholder som visas nedanför resultatlistan (med ikoner som "Ökad merförsäljning") kommer att döljas.

### Teknisk detalj

**Fil:** `src/pages/ConferencePlanner.tsx`

**Rad 301-313** kommenteras bort:

```jsx
{/* Video hidden until ready
<motion.div initial={{
  opacity: 0,
  x: 50
}} whileInView={{
  opacity: 1,
  x: 0
}} viewport={{
  once: true
}} transition={{
  duration: 0.8
}}>
  <VideoPlayer aspectRatio="16:9" videoPath="results-video.mp4" />
</motion.div>
*/}
```

### Resultat

- Hero-videon: **Synlig**
- Turning Point-videon (svarta sektionen): **Synlig**
- Results-videon (längst ner): **Dold**

