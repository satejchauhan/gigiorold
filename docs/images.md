# GIGIOR image requirements

Put every photograph in `frontend/public/images/`. The site loads them as `/images/{filename}.png`. Names are fixed in code — rename a file and the page goes blank.

**55 PNG photographs + 1 SVG icon.** Nothing else is required.

## Rules for every file

| Rule | Requirement |
| --- | --- |
| Format | PNG, 24-bit, sRGB. No WebP, JPEG, or AVIF — paths are hardcoded to `.png`. |
| Colour | Daylight, slightly warm. The CSS already desaturates and lifts contrast. Do not add filters, text, logos, or borders. |
| Pixel size | Export at the **master size** below. That is the largest on-screen slot at 2× (retina). Larger files only add weight. |
| Weight | Stay under the **max file size**. The home hero is preloaded, so it is the strictest. |
| Crop | `object-fit: cover`. Keep the subject inside the focal zone. Edges will be cut on some screens. |
| Consent | Before/after pairs need consent on file. Same person, same distance, same light. |

## 1. Home hero — 1 file

Full-viewport cover. Preloaded in `index.html`. Text sits on the lower left over a dark scrim, so keep faces out of the bottom third and the far left.

| File | Master size | Ratio | Max file size | Focal point | Where it shows |
| --- | --- | --- | --- | --- | --- |
| `hero-home.png` | **2400 × 1600 px** | 3:2 | **350 KB** | Subject near **54% across, 24% down** | Home hero, `100vw` × `100svh` |

## 2. Salon / aesthetics split — 2 files

Two full-height panels. Each is half the screen on desktop (`78vh` tall) and full width on mobile (`52svh` tall).

| File | Master size | Ratio | Max file size | Focal point | Where it shows |
| --- | --- | --- | --- | --- | --- |
| `split-salon.png` | **1600 × 2000 px** | 4:5 | **280 KB** | Upper centre (**center 18%**) | Home, left panel |
| `split-aesthetics.png` | **1600 × 2000 px** | 4:5 | **280 KB** | Upper centre (**center 18%**) | Home, right panel |

## 3. Pillar banners — 2 files

Edge-to-edge band under the Salon and Aesthetics titles. The frame is short: full width by about `58vh` (about `38vh` on a phone), so shoot wide.

| File | Master size | Ratio | Max file size | Focal point | Where it shows |
| --- | --- | --- | --- | --- | --- |
| `pillar-salon.png` | **2400 × 1350 px** | 16:9 | **320 KB** | **Centre, 38% down** | `/salon` |
| `pillar-aesthetics.png` | **2400 × 1350 px** | 16:9 | **320 KB** | **Centre, 38% down** | `/aesthetics` |

## 4. Editorial stills — 2 files

Half of a two-column block, cropped portrait.

| File | Master size | Ratio | Max file size | Focal point | Where it shows |
| --- | --- | --- | --- | --- | --- |
| `about-arches.png` | **1200 × 1500 px** | 4:5 | **200 KB** | **Centre, 20% down** | About, “The house” |
| `tech-still.png` | **1200 × 1500 px** | 4:5 | **200 KB** | **Centre, 20% down** | Home, “Technology & rooms” |

Photograph the real rooms. `tech-still.png` is devices in the house, not a stock clinic corridor.

## 5. Service portraits — 17 files

One portrait per treatment. The same file is used as a tall card, a treatment-page image, and a small square in the finder.

Largest slot is the treatment page (about **480 × 600 CSS px**). Master **1200 × 1500** stays sharp there and in the **360 × 450** home cards. The finder crops a **120 × 120** (phone **84 × 84**) square from the upper centre, so keep the subject high and centred.

| Master size | Ratio | Max file size | Focal point |
| --- | --- | --- | --- |
| **1200 × 1500 px** | 4:5 | **180 KB** each | Upper centre (**center 18%**) |

| File | Treatment | Pages |
| --- | --- | --- |
| `svc-cut.png` | Signature cut & finish | Home card, `/salon/hair`, treatment page |
| `svc-colour.png` | GIGIOR colour | Home card, `/salon/hair`, treatment page |
| `svc-treatments.png` | Hair treatments | `/salon/hair`, treatment page |
| `svc-styling.png` | Styling | `/salon/hair`, treatment page |
| `svc-makeup.png` | Makeup | Home card, `/salon/makeup`, treatment page |
| `svc-nails.png` | Nails | `/salon/nails`, treatment page |
| `svc-bridal.png` | Bridal & occasion | Home card, `/salon/bridal`, treatment page |
| `svc-grooming.png` | Grooming | `/salon/grooming`, treatment page |
| `svc-ritual.png` | Ritual facial | Home card, `/aesthetics/skin`, treatment page |
| `svc-acne.png` | Acne plan | `/aesthetics/skin`, treatment page |
| `svc-pigment.png` | Pigmentation | Home card, `/aesthetics/skin`, treatment page |
| `svc-rejuvenation.png` | Skin rejuvenation | `/aesthetics/skin`, treatment page |
| `svc-expression.png` | Expression lines | Home card, `/aesthetics/injectables`, treatment page |
| `svc-balancing.png` | Facial balancing | `/aesthetics/injectables`, treatment page |
| `svc-laser.png` | Laser | Home card, `/aesthetics/laser`, treatment page |
| `svc-restoration.png` | Hair restoration | `/aesthetics/hair-restoration`, treatment page |
| `svc-body.png` | Body | `/aesthetics/body`, treatment page |

## 6. Practitioners — 4 files

Portrait cards. On the home strip each frame is about **300 × 375 CSS px**. On About, a three-column grid is about **380 px** wide.

| Master size | Ratio | Max file size | Focal point |
| --- | --- | --- | --- |
| **1000 × 1250 px** | 4:5 | **160 KB** each | Head in the upper third (**center 12%**) |

| File | Person |
| --- | --- |
| `p-anya.png` | Anya Mehta, hair director |
| `p-rahul.png` | Rahul Sen, colourist |
| `p-leila.png` | Dr Leila Rahman, aesthetic practitioner |
| `p-mira.png` | Mira Kapoor, skin therapist |

## 7. Before and after — 12 files

Shown as a pair. On desktop each half is about **280 × 350 CSS px**. Export both frames at the same size and the same crop so the comparison does not jump.

| Master size | Ratio | Max file size | Focal point |
| --- | --- | --- | --- |
| **800 × 1000 px** | 4:5 | **120 KB** each | **Centre, 28% down** |

| Before | After | Case |
| --- | --- | --- |
| `ba-colour-before.png` | `ba-colour-after.png` | GIGIOR colour |
| `ba-cut-before.png` | `ba-cut-after.png` | Signature cut |
| `ba-facial-before.png` | `ba-facial-after.png` | Ritual facial |
| `ba-pigment-before.png` | `ba-pigment-after.png` | Pigmentation |
| `ba-lines-before.png` | `ba-lines-after.png` | Expression lines |
| `ba-bridal-before.png` | `ba-bridal-after.png` | Bridal |

## 8. Location — 1 file

Card on Locations and Home, and the large image on the house page (about **620 × 775 CSS px**).

| File | Master size | Ratio | Max file size | Focal point | Where it shows |
| --- | --- | --- | --- | --- | --- |
| `loc-house.png` | **1400 × 1750 px** | 4:5 | **220 KB** | Upper centre (**center 20%** on the card, **18%** on the detail page) | Home, `/locations`, `/locations/the-house` |

## 9. Journal — 4 files

Cards crop to 4:5 (about **380 × 475 CSS px**). The article page shows the **full frame** across the content column (up to **1180 px** wide), so a 4:5 file reads as a tall picture there. That is intentional — one file, no second crop.

| Master size | Ratio | Max file size | Focal point |
| --- | --- | --- | --- |
| **1600 × 2000 px** | 4:5 | **220 KB** each | **Centre, 20% down** |

| File | Article |
| --- | --- |
| `j-retinol.png` | Retinol vs professional peels |
| `j-colour.png` | Lived-in colour |
| `j-consult.png` | Why aesthetics begins with a conversation |
| `j-bridal.png` | A bridal timeline |

## 10. Mega menu — 10 files

Desktop only (nav wider than 1100px). The panel is at most **720 px** wide; the photo fills the left half, about **370 × 320 CSS px**. A dark gradient covers the bottom, where the label sits, so place the subject in the **lower-middle**, not the bottom edge.

| Master size | Ratio | Max file size | Focal point |
| --- | --- | --- | --- |
| **1100 × 960 px** | ~7:6 | **140 KB** each | **Centre, 65% down** |

| File | Menu item |
| --- | --- |
| `mega-hair.png` | Salon → Hair |
| `mega-makeup.png` | Salon → Makeup |
| `mega-nails.png` | Salon → Nails |
| `mega-bridal.png` | Salon → Bridal |
| `mega-grooming.png` | Salon → Grooming |
| `mega-skin.png` | Aesthetics → Skin |
| `mega-injectables.png` | Aesthetics → Injectables |
| `mega-laser.png` | Aesthetics → Laser |
| `mega-restoration.png` | Aesthetics → Hair restoration |
| `mega-body.png` | Aesthetics → Body |

## 11. Icon — 1 file

| File | Size | Notes |
| --- | --- | --- |
| `frontend/public/favicon.svg` | Vector | Already in the repo. Browser tab icon. Do not replace with a PNG. |

## Weight budget

If every file sits at its maximum, the set is about **9.5 MB**. Home loads the hero, both splits, eight service cards, four before/after pairs, four portraits, the tech still, the location, and four journal cards — keep those under their caps or the first view gets heavy.

## Checklist

- [ ] 1 hero
- [ ] 2 split panels
- [ ] 2 pillar banners
- [ ] 2 editorial stills
- [ ] 17 service portraits
- [ ] 4 practitioner portraits
- [ ] 12 before/after frames (6 matched pairs)
- [ ] 1 location
- [ ] 4 journal images
- [ ] 10 mega-menu images
- [ ] Favicon left as SVG
