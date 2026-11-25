# EE02 Accessibility Improvements — Ama's Plant Corner

**Website:** https://halledotse22.github.io/amas_plant_corner/

## Fixes made in response to the partner audit

My partner's audit found no confirmed WCAG failures and two functional problems. His WAVE scan found 0 errors, 1 contrast alert and 1 other alert, and AIM scored the page 9.7 out of 10.

### Finding 1: The Ask Ama form gives no confirmation

**Status:** Fixed and tested, by a different fix from the one the audit recommended.

**Problem identified:** After a customer submitted the Ask Ama form, the page reloaded with no confirmation, so they could not tell whether Ama had received the question. My partner rated this Moderate and recommended providing a clear confirmation and making sure the form submits to a real destination.

**Changes made:**
- Removed the form and its styles.
- Replaced it with two routes that work today: "Chat with Ama on WhatsApp" (which also takes photos) and "Or call Ama on 0244 000 000".
- Added `aria-describedby` so the hint "You can send a photo of your plant too" is read out with the WhatsApp link.

**Why this matters:** A form can only send a question if there is JavaScript or a server behind it, and this project has neither. A "your question was sent" message would have told customers it had arrived when it had gone nowhere, which is worse than no confirmation. Removing the form removes the problem, and customers now have two ways to reach Ama that work.

**WCAG assessment:** My partner considered 3.3.1 — Error Identification (Level A) and did not confirm a failure. He recorded it as a usability problem.

**Testing:** With the keyboard, Tab goes from the care guides to "Chat with Ama on WhatsApp" and then "Or call Ama on 0244 000 000", each with a visible outline. Both buttons are 48px tall.

### Finding 2: The Facebook and Instagram links go nowhere

**Status:** Fixed and tested.

**Problem identified:** Both footer links used `href="#"`, so they had names but no destinations. My partner rated this Low and recommended replacing them with the correct URLs when available.

**Changes made:** Removed both links, because Ama has not given me her real pages. They can return as soon as she does.

**Why this matters:** Links that look real but go nowhere waste people's time, and a screen reader announces them as working links.

**WCAG assessment:** No confirmed WCAG failure. My partner recorded it as a functional problem.

**Testing:** The page now has no `href="#"` links. The only links go to sections of the page or to the phone number.

### WAVE alerts

**Status:** No change needed.

- **Contrast alert on the "Find us" heading:** This `h2` is hidden visually on purpose, so screen reader users still get a heading for the section. It shows no text, so there is nothing to read and nothing to fix.
- **Duplicate telephone links:** Calling Ama should be possible from the top of the page and from the Find us card, so two links are intended.


## Additional Improvement: Dark Mode and a "Dim this page" Switch for People Sensitive to Light

**User group:** People who are sensitive to light, and anyone who finds a bright phone screen uncomfortable:
- people with migraines, photophobia or other eye conditions, for whom a bright white screen can be painful, especially in the dark;
- anyone using their phone at night or in a dim room;
- people who would use dark mode if they knew their phone had it, such as older customers.

**Barrier identified:** The page had one look: a pale cream background with a large bright green block at the top. It ignored a phone's dark mode setting and gave a visitor no way to make it softer. My partner's audit checked contrast with WAVE, which shows that text is readable against its background but says nothing about how bright the page is, so this group was not considered. In the brief, Ama's worry is the visitors who open the site, cannot use it, and close it without saying anything. A visitor whose eyes hurt from a bright screen does exactly that. The brief does not mention light sensitivity, so this is my reading of a category of who the silent visitors might be.

**Improvement implemented:**
1. **Dark mode that follows the phone.** It switches on with `prefers-color-scheme: dark`, which iPhones and Android phones support, with no JavaScript.
   - Text is off-white (`#E6E0D4`) on a warm dark grey (`#1C1915`), not pure white on pure black, which can feel harsh to sensitive eyes.
   - The buttons and the Find us card are a deep green (`#204A37`), so there are no large bright blocks.
   - Photos are dimmed by 12%, and `color-scheme` and `theme-color` tags make the phone's browser bar match the page.
2. **A "Dim this page" switch.** A tick box in a thin row at the top, with the hint "Softer colours, easier on sensitive eyes." Ticking it gives the page the same dark colours straight away. It works with no JavaScript, using the CSS `:has()` selector.
   - It is a real checkbox: Space works, and a screen reader says "Dim this page, checkbox, not checked" and reads the hint.
   - The row is 48px tall, the box grows with the text size, and the row is a labelled landmark ("Display options").
   - It is hidden where it could not work: in browsers that do not understand `:has()`, and when the phone is already in dark mode.

**Why this improvement matters:** Dark mode only helps people who already have it switched on. The people who most need a gentler page are often the least likely to know how to change their phone's settings, so the switch puts the control where they are already looking. The normal page does not change at all, so nobody else is affected.

**Who benefits:** People who are sensitive to light, and anyone using the site at night or in a dim room.

**WCAG criterion supported:** No criterion requires a dark mode or a dimming control, so I record this as best practice. The dark colours keep text contrast above 1.4.3 — Contrast (Minimum) (Level AA), the checkbox has a proper label (1.3.1 and 4.1.2, Level A), and its 48px row meets 2.5.8 — Target Size (Minimum) (Level AA).

**Testing performed:**
- Rendered the original page and the new page, with only the switch row hidden, at 390px wide and compared them. They are identical.
- Measured every distinct text and background combination with the switch ticked and the care guides open.
- Tab goes to the skip link, then the switch, then the rest of the page. Space ticks it and the page turns dark.
- With the phone in dark mode, the switch is hidden and the page is dark.
- At 320, 375 and 390px wide with text at 100% and 200%, with the switch on and off, there is no sideways scroll.

**Result:** All of these tests passed.

## Additional testing

After the changes, I rechecked the ten things My partner found working, to make sure my fixes did not break them:
- **Skip link:** The first Tab stop is "Skip to main content". It is visible when focused and Enter goes to the main content.
- **Keyboard access and visible focus:** Every control can be reached with Tab and every stop shows an outline.
- **Product information:** All 5 photos have descriptive alt text and the headings run in order.
- **Care guides:** Enter opens a guide and Enter closes it.
- **Zoom:** No sideways scroll at 200% zoom.
- **Target sizes:** The smallest control is the Menu icon at 48 × 48px, twice the 24px minimum.
- **Focus not hidden by the sticky top bar:** I tabbed through every stop at 390px wide, and at 375 × 667 with text at 200%. No focused item sits under the bar.
- **Form labels and native validation:** No longer applies, because the form was removed (Finding 1).

## Limitations and future work

The Ask Ama form was removed rather than made to send, because the project has no way to process a form yet. If Ama gets a form service and an email address to receive questions, a form with a real confirmation message could come back. The social media links were removed because Ama does not have real pages yet.

The Dim switch forgets its setting after a reload, because remembering it would need JavaScript. I have not tested with people who are light sensitive, with a screen reader such as Narrator, or on a real phone; my checks used a browser at phone sizes and automated tools.
