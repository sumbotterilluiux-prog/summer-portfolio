# Future Feature Ideas

## Cactus Builder Interaction (Homepage)

**Concept:** An interactive cactus builder on the homepage that lets visitors create their own cactus arrangement. Ties into the "Summer" name and terracotta theme.

**Components:**
- Multiple cactus body shapes and sizes
- Various pot styles (terracotta themed)
- Flowers and decorations to add
- Drag-and-drop or click-to-select interface

### Technical Approaches

**Option 1: Canvas-based (Most flexible)**
- Use HTML5 Canvas or a library like Konva.js / Fabric.js
- Drag-and-drop cactus parts onto a canvas
- Best for free-form positioning and layering

**Option 2: React component-based (Simpler)**
- Pre-defined slot positions (pot, main cactus, arms, flowers)
- Click to cycle through options for each slot
- Easier to implement, more predictable results

**Option 3: Framer Motion + SVG (Polished animations)**
- SVG cactus parts with smooth transitions
- Great for entrance/exit animations
- Works well with existing Framer Motion setup

### Implementation Steps

1. **Asset Preparation**
   - Design cactus parts as SVGs (5-6 pot styles, 4-5 cactus body shapes, 3-4 arm variants, 6-8 flower types)
   - Keep consistent anchor points for stacking
   - Export with transparent backgrounds

2. **Component Structure**
   ```
   CactusBuilder/
   ├── CactusBuilder.tsx (main container)
   ├── CactusCanvas.tsx (assembly area)
   ├── PartSelector.tsx (thumbnail palette)
   ├── parts/ (SVG components)
   └── types.ts
   ```

3. **State Management**
   - Track selected pot, body, arms, flowers
   - Optional: save to localStorage so returning visitors see their creation

4. **Nice-to-haves**
   - "Randomize" button for quick generation
   - Download as PNG option
   - Subtle parallax on hover

---

*Added: January 2026*
