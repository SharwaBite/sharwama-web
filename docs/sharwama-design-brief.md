# Sharwama: UI design brief

Design-only brief for generating the full UI of Sharwama, a single-shop shawarma ordering web app for one Nigerian city. Customers browse the menu, order, pay online, and get delivery or pick up. Staff run the shop from an admin dashboard.

Working name: Sharwama. Currency: naira, written as ₦3,500 (no decimals).

Responsive: every screen is designed for desktop (1440px wide) and mobile (390px wide) as equals. Desktop is a true wide-screen composition, not a scaled-up phone layout.

## How to use this with Stitch

1. Paste the **Master prompt** first to set the look.
2. Then paste each screen section (section 5 and 6) as its own prompt. Each one is self-contained.
3. Generate every screen twice by naming the viewport in the prompt: Desktop (1440px wide) and Mobile (390px wide). If Stitch asks for a device type, choose the web or desktop option for the desktop screens, and never request mobile alone. Admin screens are desktop first, plus a mobile variant of the Order board.
4. Keep the design system (section 2) attached to every prompt so the screens stay consistent.
5. Stitch produces static screens, so it will show the images and placement. The motion notes (section 2, Motion) are for the build. Ask Stitch for key frames of the animated moments, for example three frames of the ingredient assembly. Replace its placeholder photos with the shots in the Imagery list.

---

## 1. Master prompt

Design a cinematic, image-first responsive website for Sharwama, a street-food shawarma shop in Nigeria. Design every screen for desktop (1440px wide) and for mobile (390px wide) as equals. Desktop is a true wide-screen composition with asymmetric splits, large imagery and side-by-side layouts, not a stretched phone layout. Photography, placement, typography and motion do the talking; text is minimal. Every screen is led by a large, hungry, close-up food image, edge to edge, cropped dramatically, with cut-outs overlapping each other and bleeding off the screen.

The visual language comes from a real shawarma stand: the rotating spit and steam, foil and paper wraps, hand-painted shop signs and price boards, paper receipts and kitchen tickets, riders on motorbikes.

Typography carries the personality. One family, Archivo, for display and body. Headlines use its heaviest, most condensed width, set huge like painted shop signage, tightly tracked, one to three words, sometimes partly behind and partly in front of the cut-out food. Body text uses the regular width. A hand-marker face (Permanent Marker) appears only on stickers and price flags. No paragraphs, no descriptions on cards.

Home: the hero opens with the most characteristic thing in this world: a full-screen photo of shawarma meat being sliced off the spit with steam rising, the headline HOT. set huge and overlapping the photo edge, a tilted cut-out wrapped shawarma breaking out of the frame, a tilted Open now sticker, and one orange button, Order. Not a big number with a gradient. Scrolling plays a sequence: the ingredients (toasted wrap, chicken, cabbage, carrots, cucumber, garlic sauce) float in as separate cut-out layers over an ember orange field and assemble into one shawarma, then the menu slides up. Show three key frames of this.

Menu: a staggered bento grid of mostly-image cards (four columns on desktop, two on mobile). The photo takes about 85 percent of each card, with the item name in bold overlaid on the image, a price tag, and a round orange plus button. The best seller spans double size. Alternate placement left and right, and let cut-out food overlap card and section edges. Option choices use pictures and icons instead of words: extras as small photo thumbnails, spice level as one to three flames, size as two wrap illustrations.

Order tracking tells the story with images: one large image per stage (meat sizzling, wrap being rolled, bagged order, rider on a motorbike) that crossfades as the order moves, with a moving progress line and a two-word status. On desktop the image fills the left half and the receipt-style details sit on the right.

Colors are large fields behind the food: ember orange #C2410C, saffron #FBBF24, charcoal #1C1917, off-white #FFFBF5. Primary buttons have a charcoal outline and a short hard offset shadow. Checkout stays calm and simple: white background, clear fields, small item thumbnails, almost no text. On desktop the cart opens as a right drawer from the header; on mobile it is a sticky bottom pill showing item thumbnails. Annotate the motion on each screen: slow hero zoom, drifting steam, parallax cut-outs, hover zoom on menu photos, staggered card entrances, an item flying into the cart, and the wrap rolling shut on payment.

---

## 2. Design system

### Design direction

- **Subject:** a single shawarma shop in one Nigerian city. **Audience:** hungry people ordering from a phone or a laptop. **Primary job:** get from craving to a paid order fast.
- **Aesthetic:** street-food maximalism. Painted shop-sign type, color-blocked fields, big food photography, paper receipts and kitchen tickets. It should look like this shop and no other.
- **Where the vernacular comes from:** the rotating spit and steam, foil and paper wraps, hand-painted menu boards and price flags, riders on motorbikes. Use these, not generic food-app icons or stock imagery.
- **The memorable thing:** giant condensed sign-style headlines interacting with cut-out food, plus the ingredients assembling into a shawarma on scroll.
- **Hero rule:** open with the most characteristic thing in this world (the meat on the spit), never a stat with a gradient accent.
- **Wide-screen rule:** desktop layouts use asymmetric splits, overlapping layers and large crops. Never a phone layout floating in a narrow centered column.

### Color

| Name | Hex | Use |
|---|---|---|
| Primary (ember) | #C2410C | Primary buttons, links, active tab, focus ring, selected states. White text on it |
| Primary pressed | #9A3412 | Hover and pressed |
| Primary soft | #FFEDD5 | Selected chips, soft highlights, new-order row flash |
| Saffron | #FBBF24 | Sticker badges, price tags, big color blocks, highlights. Never as text on light backgrounds |
| Char (ink) | #1C1917 | Headings, body text, the dark hero and footer |
| Muted | #57534E | Secondary text, descriptions |
| Page | #FFFBF5 | Page background |
| Surface | #FFFFFF | Cards, sheets, drawers, inputs |
| Border | #E7E5E4 | Dividers, input borders |
| Success | #15803D | Paid, delivered, confirmed |
| Warning | #B45309 | Attention |
| Danger | #B91C1C | Errors, cancelled |
| Info | #1D4ED8 | Informational notes |

Rules: browsing screens (home, menu, order confirmed) are loud and color-blocked, with full-bleed sections alternating between ember, saffron, char and page. Checkout, forms and admin tables stay calm, with white surfaces and little decoration, so paying and data entry are easy. On forms, orange means clickable or selected. No dark mode. No gradient washes.

### Typography

- **Family:** Archivo (variable, with a width axis) for both display and body. One family, many personalities.
- **Display:** weight 800 to 900 at the most condensed width, tracking about -0.02em, line height 0.9 to 1.0. Used for one-to-three-word headlines, set like painted shop signs. Headlines may be cropped by the viewport edge, overlap photos, and sit partly behind and partly in front of cut-out food for depth.
- **Body and UI:** Archivo at regular width, weights 400 to 600, line height 1.5. Body line length stays under 70 characters.
- **Accent:** Permanent Marker (hand marker), only on sticker badges, price flags and one-word handwritten asides. Never for body text or form labels.
- **Scale (ratio 1.25 from 16px):** 16, 20, 25, 31, 39, 49, 61, 76, 95. Hero headline only: 120 to 160px on desktop, 64 to 76px on mobile.
- **Case:** display headlines may be uppercase (sign style). Everything else is sentence case. No all-caps labels or eyebrows.
- **Prices:** bold, tabular figures where the font supports them, format ₦2,500.
- **Text budget:** headlines are one to three words. Menu cards show only the name and price. No paragraphs anywhere except help and legal text. Let images, icons and motion carry the message.

### Layout and alignment

- 4px grid. Spacing steps: 4, 8, 12, 16, 24, 32, 48, 64.
- Design desktop and mobile as equals. Desktop: 12-column grid, container max width 1440px, side padding 48px. Tablet: 8 columns, padding 32px. Mobile: 4 columns, padding 16px.
- Breakpoints: 640, 768, 1024, 1280, 1536.
- Desktop compositions use the width: asymmetric splits (for example 60/40), overlapping layers and large crops. Do not stretch a phone layout into a centered narrow column with empty margins.
- Text is left-aligned. Center only the home hero headline, empty states and the order confirmed screen.
- Prices and totals are right-aligned in order summaries and admin tables.
- Forms are single column with labels above fields and error text directly under the field.
- Buttons are auto width on desktop and full width in forms and sticky bars on mobile. The primary action sits bottom-right on desktop and at the bottom on mobile.
- Radius: 24px for menu photos and hero images, 16px for cards and sheets, 12px for buttons and inputs, full pill for chips, tags and status labels.
- Depth: primary buttons, price tags and sticker badges get a 2px char outline and a short hard offset shadow (3px, char, no blur). Drawers and sheets get a soft shadow.
- Interactive targets at least 44px on touch and 40px with a pointer. Primary buttons 52px tall. Desktop adds visible hover states (image zoom on cards, button lift).

### Components

- **Button**: primary (orange fill, white text), secondary (white fill, char border), ghost (text only), danger (red). Sizes 44 and 52px. Loading state with spinner replacing the label.
- **Menu card**: image fills about 85% of the card, name in bold display type overlaid on the photo, price in a saffron pill tag, round orange plus Add button overlapping the photo corner. No description on the card. Sold-out variant: photo desaturated, Sold out label, button disabled.
- **Category tabs**: horizontal scrolling, sticky under the header, active tab has an orange underline.
- **Option sheet**: on desktop a large centered dialog split in two (item image on the left, choices on the right); on mobile a bottom sheet. Radio groups for required choices, checkboxes with price deltas for extras, notes field, quantity stepper, and a full-width Add to cart button showing the live total.
- **Quantity stepper**: minus, count, plus, pill shaped.
- **Cart**: on desktop a cart button in the header with a count that opens a right-side drawer; on mobile a sticky bottom pill with item thumbnails, count, subtotal and a View cart button.
- **Status stepper**: horizontal on desktop, vertical on mobile, with a filled line up to the current step.
- **Status chip**: pill with icon and text, color by status (see section 6).
- **Banner**: full-width strip for Closed, Info, Error.
- **Toast**: top, slides down, short message.
- **Skeleton**: gray blocks for loading menu cards and order pages.
- **Empty state**: simple line illustration or icon, one sentence, one button.
- **Input, select, textarea, toggle, radio, checkbox**: white fill, 1px border, orange focus ring 2px with 2px offset.
- Icons: lucide style, 20 or 24px, 1.75 stroke.

### Imagery

Images carry most of the design. Use large, close-up, appetizing food photography with warm light and a dark or colored background, cropped dramatically, with transparent cut-outs overlapping photos, color fields and card edges. Use placeholders in the design, then swap in real photos.

Shot list to prepare:

1. Hero: shawarma meat being sliced off the rotating spit, steam rising, moody dark background, wide.
2. Hero cut-out: one wrapped shawarma at a three-quarter angle, transparent background.
3. Ingredient cut-outs, transparent background: toasted wrap, sliced chicken, sliced beef, cabbage, carrots, cucumber, sausage, cheese, garlic sauce drizzle.
4. One hero photo per menu item (chicken, beef, mixed, sausage, combo) with identical lighting, plus a cut-out version of each.
5. Drinks cut-outs: Chapman, zobo, Coke, bottled water.
6. Tracking stage images: sizzling grill, hands rolling the wrap, foil-wrapped order in a bag, rider on a motorbike on a city street, hand holding the wrap.
7. Texture: foil wrap, grill marks, wrap paper for backgrounds.

If there are no photos yet, generate them with an image model using one consistent lighting prompt (warm side light, dark background, shallow depth of field), then remove backgrounds for the cut-outs.

Optimization: WebP or AVIF, hero under 200 KB on mobile, blurred placeholders, lazy load below the fold. Short looping videos (steam, sizzle) as muted WebM under 1 MB.

### Signature details

- Wrap-paper stripe divider: diagonal ember and cream stripes, 12px tall, between major sections.
- Tilted sticker badges (about -6 degrees) for Open now, Hot now, Best seller and promos.
- Cut-out food photos that overlap section edges on the hero and category headers.
- Receipt style for the order summary, payment confirmed and tracking details: white paper, zigzag bottom edge, dashed dividers, bold total.
- Kitchen ticket cards in admin: perforated top edge, large order number, colored status tab on the left.
- Oversized display type: hero headline 120px or larger on desktop (64px or larger on mobile), category headings 49px on desktop.

### Motion (core to the experience, annotate on every screen)

Principles: motion tells the story by assembling, rolling, flying and steaming. Animate only transform and opacity. UI feedback stays under 300ms, storytelling moments under 1.2s. Reduced motion shows the final frame. Never animate payment fields.

| Moment | Motion |
|---|---|
| Hero | Slow zoom on the photo (1.0 to 1.08 over 12s), steam drifting upward on a loop, headline slides up once on load |
| Hero cut-out wrap | Gentle float (4s loop) and a small parallax tilt with pointer or device motion |
| Ingredient assembly | Scroll-driven. Ingredients start scattered at different depths and settle into one stacked shawarma, each moving at its own speed |
| Menu cards | Staggered entrance (60ms apart), alternating from left and right; overlapping cut-outs move slightly faster than their cards |
| Category image chips | Selected chip grows, others dim, background image crossfades |
| Add to cart | A small copy of the item image flies in an arc to the cart pill; the pill bounces and the count ticks |
| Option sheet | Item image floats and slowly rotates; a chosen extra's thumbnail pops with an orange ring and check |
| Cart pill (mobile) | Springs up from the bottom |
| Cart drawer (desktop) | Slides in from the right (250ms) with a backdrop fade |
| Desktop hover | Menu photo zooms to 1.05 inside its frame, price tag tilts slightly, hero cut-out follows the pointer with a small parallax |
| Order tracking | Stage images crossfade (600ms), progress marker slides, current stage image has a subtle loop (steam, sizzle, wheels turning) |
| Payment | Checking: the wrap rolls shut in a loop. Confirmed: the finished wrap bursts in with a spark |
| Admin new order | Ticket drops in from the top with a small bounce, flashes soft orange, short sound |

Build notes: Framer Motion for layout and gestures, GSAP ScrollTrigger or CSS scroll-driven animations for the assembly sequence, short WebM or Lottie loops for steam and rolling.

---

## 3. Navigation

**Customer header:** on desktop, logo left, links (Menu, My orders), Open now pill, cart button with count, and a Sign in button on the right. On mobile the links collapse into a menu icon and the cart becomes a sticky bottom pill.
**Customer footer:** char background, shop phone, address, opening hours, short privacy and terms links.
**Admin:** left sidebar on desktop (Orders, Menu, Delivery zones, Promo codes, Payments to review, Settings), top bar with a hamburger on mobile. Sidebar uses char background with cream text and an orange active marker.

---

## 4. Sample content to use everywhere

**Shop:** Sharwama. Open 10:00 AM to 10:00 PM daily. Phone 0803 000 0000. Delivery in 30 to 45 minutes.

**Categories:** Shawarma, Combos, Drinks.

| Item | Description | Price |
|---|---|---|
| Chicken shawarma | Grilled chicken, cabbage, carrots, cucumber and garlic sauce in a toasted wrap | ₦3,500 regular, ₦4,800 large |
| Beef shawarma | Spiced beef, cabbage, carrots, cucumber and garlic sauce in a toasted wrap | ₦4,000 regular, ₦5,500 large |
| Mixed shawarma | Chicken and beef together with sausage | ₦4,500 regular, ₦6,000 large |
| Sausage shawarma | Grilled sausage, cabbage, carrots and garlic sauce | ₦3,800 regular, ₦5,000 large |
| Chicken combo | Chicken shawarma and a drink | ₦4,800 |
| Chapman | Cold, fizzy and fruity | ₦1,500 |
| Zobo | Chilled hibiscus drink | ₦1,000 |
| Coke 50cl | | ₦700 |
| Bottled water | | ₦300 |

**Shawarma options:** Size (required): Regular, Large. Spice level (optional): Mild, Medium, Hot. Extras (optional, multiple): Extra sausage +₦500, Extra cheese +₦700, Extra chicken +₦1,000, Extra sauce +₦200. Note to the kitchen (optional, 200 characters).

**Delivery zones:** Zone A nearby ₦800, Zone B ₦1,200, Zone C ₦1,800.

**Promo code:** WELCOME10 gives 10% off.

**Sample order:** #1042 placed 12:41 PM. 2 Chicken shawarma (large, extra sausage), 1 Chapman. Subtotal ₦11,600, delivery ₦800, discount ₦1,160, total ₦11,240. Rider: Musa, 0803 000 0000.

---

## 5. Customer screens

### 5.1 Home and menu

**Purpose:** make people hungry in two seconds and get the first item in the cart. Images lead; text is minimal.
**Layout, top to bottom:**
1. Header (see section 3), transparent over the hero.
2. Full-screen hero (full viewport height on desktop and mobile): edge-to-edge photo of shawarma meat being sliced off the spit, steam rising. Headline HOT. in cream, sign-style, 120px or larger on desktop (64px or larger on mobile), overlapping the bottom edge of the photo, and sitting partly behind the cut-out wrap. A tilted cut-out wrapped shawarma breaks out of the frame in the foreground. One orange button, Order. A small Open now sticker with a green dot. No other text.
3. Assembly section: full-bleed ember orange field. As the user scrolls, the ingredients appear as separate cut-outs at different depths and settle into one stacked shawarma. One short line when finished: Made fresh. Show three key frames: floating, mid-assembly, assembled.
4. Category switcher: three large image chips (Shawarma, Combos, Drinks), each a photo with a one-word label, sticky under the header once scrolled.
5. Menu: staggered bento grid. Desktop: four columns with two featured tiles; tablet: three columns; mobile: two columns of cards with different heights. Image about 85% of each card. Each card has the photo, the name overlaid in bold at the bottom of the image, a price tag, and a round orange plus button. The best seller spans double size. Some cut-outs overlap card edges.
6. Cart: on desktop the header cart button shows the count and opens the right drawer; on mobile a sticky bottom pill appears when the cart has items, with tiny item thumbnails, count, total and a View cart button.
7. Footer: charcoal with a photo strip, phone and hours.

**States:** loading (blurred image placeholders in the same bento shapes); one sold-out item (desaturated image with a Sold out sticker); store closed (see 5.9).

### 5.2 Item option sheet

**Purpose:** customize with pictures, not words.
**Layout:** on desktop a large dialog split in two: the left half is the item image on a color field, slightly tilted and floating, with the name huge over it and a price tag; the right half holds the choices. On mobile the screen opens as a full-screen image with a bottom sheet sliding up. The choices are: Size as two wrap illustrations at relative size (Regular, Large); Spice as three flame icons to tap; Extras as small photo thumbnails with price tags (sausage, cheese, chicken, sauce); a Note field behind a small pencil icon; a quantity stepper. Sticky orange button with a plus icon and the live total, for example Add ₦4,800.
**States:** size required (button disabled), extras selected (thumbnail gets an orange ring and check), long note.

### 5.3 Cart

**Purpose:** review and adjust before checkout.
**Layout:** right-side drawer on desktop (about 480px wide), full-screen page on mobile. List of cart lines: small photo, name, chosen options in muted text, quantity stepper, line price right-aligned, Remove link. Below: promo code field with Apply button, then subtotal. Delivery fee is not shown here. Sticky bottom button: Go to checkout.
**States:** empty cart (icon, Your cart is empty, button Browse the menu); item became unavailable (warning banner Chicken combo is sold out. Remove it to continue, with a Remove button); price changed notice.

### 5.4 Checkout

**Purpose:** collect details and pay. One page, no steps.
**Layout, top to bottom:**
1. Page title Checkout and a small back link to the cart.
2. Delivery or Pickup segmented toggle.
3. Your details: Full name, Phone number, Email (optional).
4. If Delivery: Delivery area (select of zones, showing the fee), Street address, Nearest landmark. If Pickup: card showing the shop address, hours and phone.
5. Note for the kitchen (optional).
6. Promo code field with Apply, and an applied state: WELCOME10 applied, you save ₦1,160 with a Remove link.
7. Order summary card: items collapsed to a count with Show items, Subtotal, Delivery fee, Discount, Total in larger semibold text. All amounts right-aligned.
8. Pay ₦11,240 button, inside the summary card on desktop and sticky at the bottom on mobile. Under it a small line: You'll pay securely with Bachs.

**Desktop layout:** two columns. Form on the left, sticky receipt-style order summary on the right. **Mobile layout:** single column with the summary above the sticky Pay button.
**States:** validation errors under fields; area not covered (inline message We do not deliver to this area yet. You can choose pickup instead. with a Switch to pickup button); invalid promo (This code has expired.); store closed (banner, Pay button disabled); paying (button loading).

### 5.5 Payment return

**Purpose:** reassure while the payment is confirmed, with almost no text.
**Three variants:**
- **Checking:** a large wrap on an ember orange field rolling shut in a loop. One line: Checking payment.
- **Confirmed:** a big photo of the finished, foil-wrapped shawarma bursting in with a spark. Order number huge (#1042). Button Track order.
- **Not completed:** a darker color field, the wrap unrolling. One line: Payment not completed. Buttons Try again and Menu.

### 5.6 Order tracking

**Purpose:** show status through images; the page customers return to most.
**Layout:**
1. Giant order number #1042 and a status chip.
2. Stage image area (desktop: left column, about 55% of the width, with the receipt and rider card on the right; mobile: about 45% of the screen height). One large image per stage that crossfades as the status changes: Paid and Accepted (order ticket on the counter), Preparing (meat sizzling), Ready (foil-wrapped shawarma in a bag), On the way (rider on a motorbike on a city street), Delivered (a hand holding the wrap). Under it a progress line with five dots and a moving marker, and a two-word status such as Being made.
3. Rider card when dispatched: round rider avatar, name, and a Call button.
4. Torn-edge receipt card: item thumbnails, totals, address or pickup point.
5. Cancel text link, visible only before preparing.

**States:** every stage image; cancelled (red field, refund note in one line); expired (gray field, Start new order button).

### 5.7 Order history

List of past orders: order number, date, items summary, total, status chip, tap to open. Empty state: You have no orders yet, with a Browse the menu button. Requires login; show a sign-in prompt for guests.

### 5.8 Sign in and register

Simple centered card: tabs Sign in and Create account. Fields: Phone or email, Password (Create account adds Full name). Primary button. Text link Continue as guest. Show an error state for wrong password.

### 5.9 Store closed state

Variant of Home: gray banner under the header, We are closed right now. We open at 10:00 AM. Menu stays browsable, Add buttons are replaced by disabled state with the label Closed. Cart bar and checkout show the same banner and a disabled pay button.

---

## 6. Admin screens

Admin is dense, calm and fast. Same fonts and colors, smaller type (14px base), compact rows. Status chip colors always come with an icon and text.

| Status | Chip color |
|---|---|
| Waiting for payment | Stone gray |
| Paid | Blue |
| Accepted, Preparing | Amber |
| Ready | Orange |
| Out for delivery | Purple |
| Delivered, Picked up | Green |
| Cancelled, Expired, Refunded | Red or gray |

### 6.1 Admin sign in

Centered card on page background: logo, Admin sign in, email, password, Sign in button, error state.

### 6.2 Order board (home of admin)

**Purpose:** run service during a rush.
**Layout:**
1. Top bar: page title Orders, today's date, shop Open/Closed toggle (clearly labeled, green when open).
2. Summary strip of four small stat cards: Orders today, Revenue today, In progress, Cancelled.
3. Board with columns: New, Preparing, Ready, Out for delivery, Done today. Each column has a count. Order cards show: order number, time since paid (for example 3 min), type chip (Delivery or Pickup), item summary (2 items), total, and one primary action button for the next step (Accept, Start preparing, Mark ready, Book rider, Mark delivered).
4. New orders flash primary soft and show a small sound icon in the top bar to mute or unmute alerts.

**Mobile variant:** the columns become horizontally scrolling tabs with counts, one list at a time, cards full width with a large action button.
**States:** empty column (No orders here), new order arriving, connection lost banner (Reconnecting).

### 6.3 Order detail

Right-side panel on desktop, full page on mobile. Contents: order number and status chip, customer name and phone with Call button, delivery address and landmark or pickup, items with options and notes highlighted, totals, payment info (Paid, reference, time), status history timeline (who, when), rider info once booked. Footer actions: primary next-step button, secondary Cancel order (opens a dialog with a reason field).

**Book rider dialog:** fields Rider name and Rider phone, button Save and mark out for delivery.

### 6.4 Menu manager

Left: category list with drag handles and an Add category button. Main: table of items with photo, name, price, availability toggle (Available or Sold out), and an Edit button. Search field above the table. Edit item opens a right drawer: photo upload with preview, name, description, category, base price, size options, extra options (add, remove, set price change), availability toggle, Save changes button, Delete item text button.

### 6.5 Delivery zones

Table: Zone name, Areas covered, Fee, Active toggle, Edit. Add zone button opens a drawer with name, areas (tag input), fee, active toggle.

### 6.6 Promo codes

Table: Code, Discount (10% or ₦500), Uses (12 of 100), Expires, Active toggle. Add promo opens a drawer: code, type (percentage or fixed), value, minimum order, max uses, expiry date.

### 6.7 Payments to review

Table of orders with payment problems: order number, issue chip (Amount mismatch, Paid after expiry), amount paid versus order total, time. Row action opens a panel with details and two buttons: Accept order and Mark for refund. Empty state: Nothing to review.

### 6.8 Settings

Sections as cards: Opening hours (seven rows with open and close times and a closed toggle per day), Shop status override (Open, Closed toggle with note), Minimum order amount, Shop phone and address (shown in footer and pickup). Save changes button sticks to the bottom when something changed.

---

## 7. Copy rules

- Sentence case, except the one-to-three-word display headlines, which may be uppercase sign-style. Plain verbs. One job per sentence.
- Buttons say what happens: Add to cart, Go to checkout, Pay ₦11,240, Save changes. The same action keeps the same name through the whole flow.
- Errors say what went wrong and how to fix it. They don't apologize and they are never vague.
- Empty screens invite one action.
- Examples: Closed banner: We are closed right now. We open at 10:00 AM. Out of area: We do not deliver to this area yet. You can choose pickup instead. Expired order: This order expired because payment was not completed. Start a new order.

---

## 8. Avoid

- Generic template looks: identical rounded cards with the same soft shadow everywhere, gradient washes, purple or blue SaaS styling.
- All-caps labels above headings, one highlighted word in a headline, numbered 01 02 03 markers on content that is not a sequence, arrows appended to button text, labels joined by middle dots.
- Stock photos of people, cartoon food, emoji as icons.
- Paragraphs, long descriptions on cards, and text-heavy layouts. If an image or icon can say it, use the image or icon.
- Motion on payment fields. Everywhere else motion is welcome, but it must show something (assembling, rolling, flying to the cart), never just wobble.
- A plain white page with small cards and thin gray borders. If a browsing screen could belong to any app, it is too plain.
- Loud screens for paying. Checkout and forms stay calm and legible.
- A phone layout stretched across a desktop screen: a narrow centered column with empty margins.
- The default look of every template: Inter, Roboto or Poppins everywhere, and a hero made of a big number, a small label and a gradient accent.

## 9. Accessibility floor

Text contrast of at least 4.5 to 1, visible focus ring on every control, never color alone for status, labels on every input, errors shown as text next to the field, tap targets of 44px or more, and respect for reduced motion (swap sliding for fading).
