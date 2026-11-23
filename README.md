**Live site:** [https://halledotse22.github.io/amas_plant_corner/](https://halledotse22.github.io/amas_plant_corner/)

# Ama's Plant Corner

A rebuild of the website for Ama's Plant Corner, a small plant shop at 14 Okaishie Lane, Accra. Most of Ama's customers are first-time plant owners who find her on their phones while running errands nearby, so the page is built phone first and has one job: turn a phone search into a visit.

## How to view it

- **Online:** open the live site link above.
- **On your computer:** download or clone the repository and open `index.html` in a browser. There is no build step, no JavaScript and nothing to install.

The page uses only HTML and CSS. The care guides and the phone menu open and close using built-in HTML and CSS features. 

## Before launch

- **Replace the phone number.** 0244 000 000 is the placeholder number from the brief. It appears in the Call buttons and the WhatsApp link in `index.html`.
- **Add social links if wanted.** The Facebook and Instagram links were removed because Ama's real pages are not known.
- **Make form active** The form on the site have been taken down because the responses on the form do not go anywhere. When that is worked on, the form feature will be added again. 

## Documents

| Document | What it covers |
| --- | --- |
| [lab1/decisions.md](lab1/decisions.md) | Diagnosis of the original site: each defect, its root cause and who it affects |
| [lab1/audit.md](lab1/audit.md) | Audit of the finished page: semantic HTML, accessibility and visual consistency, with measured contrast and the gaps that were left out |
| [lab1/improvement.md](lab1/improvement.md) | The additional improvement for Lab 1 (Chat with Ama on WhatsApp): what it is and why I added it |
| [lab2/write-up.md](lab2/write-up.md) | **What changed after my partner's audit, and why**, including the additional improvement (dark mode and a "Dim this page" switch for people sensitive to light) |
| [lab2/partner_audit.md](lab2/partner_audit.md) and [lab2/testing_log.md](lab2/testing_log.md) | My accessibility audit of my partner's site, with screenshots in [evidence](evidence) |

## Sketches

[Ama's Plant Corner Sketch.png](lab1/Ama%27s%20Plant%20Corner%20Sketch.png)



## File map

```
index.html          the page
styles.css          all styles: design tokens at the top, phone styles, one 768px breakpoint, then the dark colours
images/             five photos, each 900 × 491 pixels
evidence/           screenshots and Lighthouse report for my audit of my partner's site
lab1/               Lab 1: building the page
  Ama's Plant Corner Sketch.png   the sketch
  decisions.md      diagnosis of the original site
  audit.md          audit of the finished page
  improvement.md    the WhatsApp improvement
lab2/               Lab 2: accessibility audit and fixes
  write-up.md       what changed after my partner's audit, and why
  partner_audit.md  my accessibility audit of my partner's site
  testing_log.md    the checks behind that audit
README.md           this file
```
