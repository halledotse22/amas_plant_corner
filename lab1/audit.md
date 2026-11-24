# **Audit of Ama's Plant Corner — Finished Page**

## **1. What I prioritised and why**

I evaluated the finished website against the three criteria groups, prioritising issues according to their impact on Ama's customers.

The brief explains that most customers discover the shop on their phones while running errands nearby. It also says Ama is losing potential walk-in customers because the existing website does not communicate the shop's personality or expertise.

Based on this, I prioritised three things:

1. **Helping nearby customers make a decision quickly:** Opening hours, address, Call and Directions are easy to find without excessive scrolling.
2. **Improving mobile readability:** The website uses readable text, responsive layouts and accessible controls to address the complaints about the old website.
3. **Building confidence in Ama's expertise:** Plant-care guides, information about Ama and direct contact options help first-time plant owners feel comfortable approaching her.

## **2. Semantic HTML**
### **What holds up**

- **Page structure:** The website uses semantic HTML elements such as `header`, `nav`, `main`, `section` and `footer` to organise its content.
- **Heading hierarchy:** There is one `h1`, followed by `h2` elements for main sections and `h3` elements for product cards and care guides. No heading levels are skipped.
- **Address and navigation:** The shop's location uses an `address` element, while products and navigation links are organised into lists.
- **Interactive elements:** The care guides and mobile navigation use native `details` and `summary` elements, allowing them to open and close without JavaScript.
- **Language declaration:** The HTML document declares its language as `en-GH`, helping assistive technologies identify the page's language.

## **3. Baseline accessibility**
### **What holds up**
- **Page title:** The title is descriptive: "Ama's Plant Corner | Plants, pots and soil in Accra". It communicates the business and what visitors can expect.
- **Alternative text:** All five images have descriptive alternative text explaining what they show.
- **Keyboard navigation:** A skip link is provided, and interactive controls have visible focus outlines. Visitors can navigate the page without relying on a mouse.
- **Tap targets:** Buttons, links and form fields are at least 48px tall, making them easier to use on touchscreens.
- **Forms:** Every field has a visible label. The phone field uses `type="tel"` so mobile devices can display an appropriate number pad, and required fields are identified in the HTML.
- **Text resizing:** Font sizes use `rem`, browser zoom is not restricted, and the page remains usable at 375px viewport width and 200% text size without horizontal scrolling.

### Contrast, measured

I calculated each colour pair the page uses with the WCAG contrast formula, and you can check any of them in the WebAIM Contrast Checker. Text needs 4.5:1; borders and focus outlines need 3:1.

| What | Colours | Ratio | Needs |
| --- | --- | --- | --- |
| Body text on the page | soil `#3A2E25` on linen `#F4EEE2` | 11.37:1 | 4.5:1 |
| Body text in the About and Ask panel | soil `#3A2E25` on sage `#E0E8D6` | 10.44:1 | 4.5:1 |
| Headings and menu links on the page | moss `#2E5A44` on linen `#F4EEE2` | 6.82:1 | 4.5:1 |
| Product names, care guide titles, outline button text | moss `#2E5A44` on cream `#FBF8F1` | 7.44:1 | 4.5:1 |
| Headings in the About and Ask panel | moss `#2E5A44` on sage `#E0E8D6` | 6.26:1 | 4.5:1 |
| Text on moss buttons and the Find us card | cream `#FBF8F1` on moss `#2E5A44` | 7.43:1 | 4.5:1 |
| "Closed on Sundays" in the Find us card | sage `#E0E8D6` on moss `#2E5A44` | 6.26:1 | 4.5:1 |
| Intro line and footer | bark `#675747` on linen `#F4EEE2` | 5.99:1 | 4.5:1 |
| WhatsApp hint (lowest text pair) | bark `#675747` on sage `#E0E8D6` | 5.5:1 | 4.5:1 |
| Prices | terracotta `#9A4624` on cream `#FBF8F1` | 6.04:1 | 4.5:1 |
| Outline button border | field `#857464` on cream `#FBF8F1` | 4.23:1 | 3:1 |
| Focus outline on the page | moss `#2E5A44` on linen `#F4EEE2` | 6.82:1 | 3:1 |
| Focus outline in the Find us card | cream `#FBF8F1` on moss `#2E5A44` | 7.43:1 | 3:1 |

Every pair passes.

## 4. Visual consistency

All colours, font sizes and spacing come from the variables at the top of `styles.css`.

- **Colour:** nine named colours, taken from a plant shop: linen (page), cream (cards), sage (soft panels), moss (headings, links and main actions), soil (body text), bark (secondary text), terracotta (prices only), field (borders), line (dividers). Moss is the only strong colour, so the eye goes to the actions.
- **Type:** two fonts (Lora for headings, Nunito Sans for text) and six sizes, each 1.25 times the last: 0.875, 1, 1.25, 1.5625, 1.953 and 2.441rem. Body text is 16px, up from 11px on the old site.
- **Spacing:** eight steps, 4, 8, 12, 16, 24, 32, 48 and 64px, for every gap and padding.
- **Emphasis:** the Find us card is the only large dark block, so the hours and contact details are the first thing people see.
- **Responsive Layout:** one breakpoint at 768px. The base styles are for phones; wider screens rearrange the same sections side by side in the same order.

## **5. Remaining gaps - what was left out**
1. Ask Ama form does not send messages
The form currently does not send messages to Ama because a working submission process requires JavaScript or a server-side service.

2. The phone number is a placeholder. 0244 000 000 comes from the brief. Every Call button and the WhatsApp link depend on it, so it must be replaced with Ama's real number before launch. It is flagged in a comment in the HTML and in the README.

### Removed rather than left broken

- **The Ask Ama form.** A form needs JavaScript or a server to send anything, and both are outside this stage. The brief asks for a page that is "genuinely useful, not just decorative", and a form that looks usable but sends nothing is worse than no form. Customers can still ask Ama in writing through WhatsApp, which also takes photos, or by calling her.
- **The Facebook and Instagram links.** They pointed nowhere, because Ama's real pages are not known. They can return once she shares the addresses.

