// Seasonal promotions for the banner at the top of the page.
//
// To add a promotion, copy one of the entries below and change the words and dates.
// Write dates as year-month-day, for example "2026-12-01".
// A promotion shows from its start date to its end date, both days included.
// When no promotion is running, the banner stays hidden.
const promotions = [
  {
    title: "Harmattan care bundle",
    text: "A mister, a humidity tray and fresh soil for GH₵ 60, to help your plants through the dry season.",
    start: "2026-11-23",
    end: "2026-12-14",
  },
  {
    title: "Christmas special",
    text: "10% off all pots and planters.",
    start: "2026-12-15",
    end: "2026-12-31",
  },
];

const DATE_FORMAT = /^\d{4}-\d{2}-\d{2}$/;

// Accra is on GMT all year, so today's date in UTC is today's date in Accra.
function todayInAccra() {
  return new Date().toISOString().slice(0, 10);
}

// Returns the first promotion running today. Entries with missing words or
// badly written dates are skipped, so a typo never shows a broken banner.
function findCurrentPromotion(list, today) {
  return list.find(
    (promo) =>
      promo.title &&
      promo.text &&
      DATE_FORMAT.test(promo.start) &&
      DATE_FORMAT.test(promo.end) &&
      promo.start <= today &&
      today <= promo.end,
  );
}

function showPromotion() {
  const banner = document.getElementById("promo-banner");
  const promo = findCurrentPromotion(promotions, todayInAccra());

  if (!banner || !promo) {
    return;
  }

  banner.querySelector(".promo-title").textContent = `${promo.title}:`;
  banner.querySelector(".promo-text").textContent = promo.text;
  banner.hidden = false;
}

showPromotion();
