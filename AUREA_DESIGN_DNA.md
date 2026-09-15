# AUREA — Design DNA & Visual Architecture
**Private Dental & Aesthetic Institute · Da Nang, Vietnam**

---

## 1. Executive Philosophy: "Quiet Luxury + Editorial Healthcare"

AUREA is envisioned not as a standard medical clinic, but as an international private health sanctuary where surgical precision harmonizes with serene coastal architecture and discrete hospitality.

### Emotional North Star
> *"A visitor must immediately feel that this is a private medical institution of international distinction. Restraint over decoration. Precision over promises. Space over density."*

### Reference Benchmarks & DNA Cross-Pollination
- **Apa Aesthetic (New York / Dubai)**: Uncompromising editorial art direction, emphasis on natural facial harmony, bespoke ceramic artistry.
- **Tend (San Francisco / New York)**: Frictionless patient experience, calm modern hospitality, warmth without clinical chill.
- **Dr David Jack (Harley Street, London)**: Scholarly medical authority, intellectual tone, scientific foundation behind aesthetic enhancements.
- **Clinique La Prairie (Montreux, Switzerland)**: Quiet luxury, multi-generational longevity, holistic wellbeing, discreet high-net-worth care.
- **Chi Longevity (Singapore)**: Cellular health, technological diagnostic depth, biological precision.

---

## 2. Color System & Materiality

The palette is derived from natural coastal limestone, warm linen, polished titanium, and soft architectural shadows. Neon, harsh blues, medical greens, and aggressive gold foils are strictly prohibited.

| Token | Hex | Role | Application |
|---|---|---|---|
| **Warm Ivory** | `#FBF9F5` | Primary Canvas | Body background, editorial cards |
| **Alabaster Stone** | `#F3EFEA` | Secondary Surface | Secondary panels, subtle card fills |
| **Warm Taupe / Border**| `#D8D2C7` | Structural Framing | Hairline borders, structural grids |
| **Deep Charcoal** | `#232220` | Primary Typography | Headers, primary titles, crisp contrast |
| **Warm Slate Umber**| `#5C5852` | Secondary Typography| Body text, procedure specifications |
| **Muted Pebble** | `#8E8880` | Micro UI / Metadata | Coordinates, timestamps, category tags |
| **Muted Champagne** | `#C5A880` | Architectural Accent | Key metric accents, active tabs, subtle gold trim |
| **Noir Charcoal** | `#11100F` | Inverted Contrast | High-tech diagnostics & surgical dark zones |

---

## 3. Typography Hierarchy & Pairings

The typographic strategy juxtaposes high-fashion editorial serifs with rigorous, geometric sans-serifs to reflect the dual nature of AUREA: **aesthetic artistry and clinical engineering**.

### Font Families
1. **Editorial Serif**: `Cormorant Garamond` (Google Fonts)
   - *Role*: Statement headlines, philosophy pull-quotes, section counters, doctor names.
   - *Characteristics*: High contrast, elegant italics, Roman authority, delicate serifs.
2. **Modern Clinical Sans**: `Plus Jakarta Sans` (Google Fonts)
   - *Role*: Navigation, sub-headlines, body paragraphs, technical specifications, data tables, forms.
   - *Characteristics*: Wide aperture, clean geometric proportions, high x-height, flawless legibility.

### Scale & Tracking
- **Hero Title**: `text-5xl md:text-7xl lg:text-8xl` (Font: Serif, Leading: `1.05`, Tracking: `-0.02em`)
- **Section Heading**: `text-3xl md:text-5xl` (Font: Serif, Leading: `1.15`, Tracking: `-0.01em`)
- **Editorial Subhead**: `text-lg md:text-xl` (Font: Sans, Weight: `300` or `400`, Leading: `1.6`, Color: `text-secondary`)
- **Body Copy**: `text-base md:text-lg` (Font: Sans, Weight: `350`, Leading: `1.75`)
- **Micro UI / Eyebrow**: `text-xs uppercase tracking-[0.2em]` (Font: Sans, Weight: `500`, Color: `text-secondary`)

---

## 4. Photography Art Direction & Visual Brief

All photography must feel as if commissioned for a single monograph book published on the clinic.

### Key Visual Parameters
- **Lighting**: Soft, diffused natural daylight streaming through floor-to-ceiling glass; warm directional interior lighting (2700K–3200K) bouncing off stone and natural plaster.
- **Contrast**: Low-to-medium tonal contrast with deep, velvety shadows. Never crushed blacks or blown-out clinical white glare.
- **Color Temperature**: Warm-neutral (balanced between 3800K and 4500K). No cold hospital fluorescents.
- **Composition & Focal Length**: 50mm–85mm prime lens aesthetic. Generous negative space, architectural alignment, rule of thirds, subtle cinematic depth-of-field (`f/1.8 – f/2.8`).
- **Human Subjects**: Doctors and patients display natural, composed, intellectual expressions. **Strictly no frozen, wide-toothed camera smiles or artificial thumbs-up gestures.**
- **Wardrobe**: Minimalist, architectural medical coats and uniforms in pure ivory, warm charcoal, or raw linen. Zero commercial blue scrubs or branded plastic badges.

---

## 5. UI Components & Spacing Philosophy

### The "Negative Space" Rule
Every component must breathe. Density signals cheapness; generous, calculated whitespace signals luxury, privacy, and deliberate attention to detail.

- **Section Padding**: `py-24 md:py-36 lg:py-48`
- **Container Max-Width**: `max-w-7xl` with `px-6 md:px-12 lg:px-16`
- **Hairline Dividers**: `h-[1px] bg-stone-200/60 w-full`
- **Buttons**:
  - *Primary*: Understated dark charcoal or champagne pill/rectangle with subtle border, micro-interaction hover state: `border border-charcoal/20 px-8 py-4 text-xs uppercase tracking-widest hover:bg-charcoal hover:text-white transition-all duration-300`.
  - *Text Link*: Refined underlined link with animated border transform.
- **Cards**: Frameless or single hairline borders; full-bleed photography with overlaid or offset typography.

---

## 6. Voice, Tone & Content Guidelines

### The Voice: "The Silent Authority"
- **Calm**: Never exclamation marks. Never urgent sales pressure ("Book now while slots last!").
- **Measured**: "We take three cases a week per surgeon to ensure complete biological integration and aesthetic harmony."
- **Scientific**: Clear clinical terminology explained with graceful clarity (e.g. *biocompatible zirconia*, *sub-gingival emergence profile*, *CBCT 3D volumetric reconstruction*).
- **Hospitality-Infused**: Emphasizing dedicated private recovery suites, Da Nang coastal climate, private chauffeur transfers, and tailored multidisciplinary planning.