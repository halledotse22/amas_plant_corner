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
- **Colour contrast:** Every text pairing passes the 4.5:1 contrast requirement. The lowest measured contrast is 5.5:1, while body text against the page background measures 11.4:1.
- **Keyboard navigation:** A skip link is provided, and interactive controls have visible focus outlines. Visitors can navigate the page without relying on a mouse.
- **Tap targets:** Buttons, links and form fields are at least 48px tall, making them easier to use on touchscreens.
- **Forms:** Every field has a visible label. The phone field uses `type="tel"` so mobile devices can display an appropriate number pad, and required fields are identified in the HTML.
- **Text resizing:** Font sizes use `rem`, browser zoom is not restricted, and the page remains usable at 375px viewport width and 200% text size without horizontal scrolling.

## **4. Visual consistency**

### **What holds up**
**Colour palette**

The website uses nine named colours inspired by natural elements such as leaves, soil, clay and paper.

- Moss green is used for headings and primary actions.
- Terracotta is reserved for prices.
- The remaining colours support the natural, calm appearance of the shop.
This creates a more recognisable visual identity that reflects Ama's description of her physical shop.

**Typography**
The website uses two fonts and a six-step type scale based on a 1.25 ratio.
Body text is 16px, compared with the 11px text found in the original website. This improves readability, especially for mobile visitors.

**Spacing system**
An eight-step spacing scale is used consistently for gaps and padding throughout the page.
This helps create predictable spacing between sections and prevents the layout from feeling crowded.

**Visual emphasis**
The Find Us card is the only prominent dark block on the page, helping important location information stand out.

**Responsive layout**
The website uses a breakpoint at 768px to adapt its layout to smaller screens. The content follows the same logical order across screen sizes.

## **5. Remaining gaps - what was left out**
1. Ask Ama form does not send messages
The form currently does not send messages to Ama because a working submission process requires JavaScript or a server-side service.

2. Mobile navigation stays open after selecting a link
The mobile menu does not automatically close after a visitor selects a navigation link. Implementing that behaviour would require JavaScript.

