# PanFire Design Notes: Editorial Pizzeria Zine

## Concept & Vibe
Wood-fired pizza first, Asian small plates second. One clear identity.
Tone: Confident, blunt, warm. Like a loud neighborhood pizzeria zine, not a Silicon Valley tech startup.
Taste: Bold, editorial, slightly brutalist, award-site quality.

---

## Reference Study & Inferences

### 1. Roberta's Pizza (Bushwick, Brooklyn)
* **What to borrow:**
  - Raw, unpolished confidence.
  - High-contrast, stark text hierarchy with tight tracking.
  - No corporate cheerleading or marketing jargon.
* **What NOT to copy:**
  - Deliberately chaotic layout or ASCII-art kitsch that hurts mobile ordering accessibility.

### 2. Dino's Tomato Pie (Seattle)
* **What to borrow:**
  - Neighborhood pizzeria character and swagger.
  - Warm cream paper background (#F3ECDD) paired with char black (#161412) and oven red (#C8371A).
  - Concrete pizza facts instead of marketing fluff.
* **What NOT to copy:**
  - 90s Geocities retro jokes or flashing elements.

### 3. Stretch Pizza & Pizza Pilgrims
* **What to borrow:**
  - Clear culinary metrics: 48-hour slow cold fermentation, 450°C stone oven, 90 seconds in the flame.
  - Clean dotted-leader menu listing (`Item Name ................. ₹Price`).
  - Clear distinction between round Neapolitan pies, small plates, and drinks.
* **What NOT to copy:**
  - Cartoon mascots, multi-colored pastel badges, or generic SaaS button gradients.

### 4. Minimal / Godly Editorial Restaurant Sites (e.g. Lyle's, St. John)
* **What to borrow:**
  - Asymmetric 12-column editorial grid with generous whitespace.
  - Restrained kinetic motion: smooth scroll (Lenis), masked line headline reveals (GSAP ScrollTrigger), image hover reveals.
  - Hard 1.5px solid black borders with 4px 4px hard offset shadows (no soft blurs).
* **What NOT to copy:**
  - Sluggish, overly theatrical art-gallery pacing that slows down ordering.

---

## Design System Tokens

### Palette (Strictly 4 Colours)
- **Cream (Base / Paper):** `#F3ECDD`
- **Char Black (Ink / Borders):** `#161412`
- **Oven Red (Accent / CTA):** `#C8371A`
- **Ash Grey (Secondary / Muted):** `#8A8378`
- **NO gradients, NO soft glows, NO glassmorphism, NO blur shadows.**

### Typography
- **Headlines:** `Fraunces` (serif with variable optical size, tight tracking `-0.03em`, occasional italic word for accent).
  - Hero headline: `clamp(4rem, 12vw, 12rem)`
- **Body & Editorial:** `Instrument Sans` (17-18px body, line-height 1.5).
- **Prices, Specs & Badges:** `JetBrains Mono` (uppercase, letter-spaced, tabular numbers).

### Shape & Geometry
- **Borders:** `1.5px solid #161412`
- **Border Radius:** `0px` to `4px` maximum (sharp, print-like corners).
- **Interactive Shadows:** `4px 4px 0 #161412` (hard stamp, zero blur).
- **Hover Motion:** `-2px -2px` offset with `6px 6px 0 #161412` hard shadow.

---

## Banned List
- Gradients, glow, pill badges, card-in-card containers.
- 3-icon stat rows, emoji, purple/neon/orange gradients.
- Centered-everything corporate landing page layouts.
- Empty buzzwords: "Artisanal", "Haute", "Happy Foodies", "100% Hygienic", "Elevate", "Crafted with passion".
- Fake ratings (4.9 stars, 1400+ reviews), fake testimonials, fake toggle switches.
