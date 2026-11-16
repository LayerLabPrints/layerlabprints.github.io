// ============================================================
//  EDIT THIS PART — everything on the site comes from here
// ============================================================

const SHOP = {
  name: "Layer Lab",   // business name (placeholder)
  email: "rishik.sundar03@gmail.com",   // quote requests get emailed here
};

// icon options: fidget, desk, tech, key, plant, ball, tag, gem
const PRODUCTS = [
  { name: "Flexi Dragon",        cat: "Fidgets", icon: "gem",    desc: "A bendy dragon printed in one piece. Every joint moves." },
  { name: "Clicker",             cat: "Fidgets", icon: "fidget", desc: "Press it for a loud, satisfying click. Small enough for your pocket." },
  { name: "Fidget Slider",      cat: "Fidgets", icon: "fidget", desc: "A pocket-size clicky slider for busy hands." },
  { name: "Infinity Cube",       cat: "Fidgets", icon: "fidget", desc: "Fold it forever. Printed already assembled." },
  { name: "Phone Stand",         cat: "Tech",    icon: "tech",   desc: "Holds your phone upright or sideways for videos." },
  { name: "Controller Stand",    cat: "Tech",    icon: "tech",   desc: "A clean spot to park your game controller." },
  { name: "Headphone Hook",      cat: "Tech",    icon: "tech",   desc: "Clips under a desk so your headphones stay off it." },
  { name: "Pencil Cup",          cat: "Desk",    icon: "desk",   desc: "A desk cup with a cool printed pattern." },
  { name: "Cable Clips",         cat: "Desk",    icon: "desk",   desc: "A set of clips that keep chargers from sliding away." },
  { name: "Name Plate",          cat: "Desk",    icon: "tag",    desc: "Your name in raised letters for a desk or door." },
  { name: "Name Keychain",       cat: "Keychains", icon: "key",  desc: "Any name or word, in any two colors." },
  { name: "Backpack Tag",        cat: "Keychains", icon: "key",  desc: "A tough tag so your bag never gets mixed up." },
  { name: "Soccer Bag Tag",      cat: "Sports",  icon: "ball",   desc: "A ball-shaped tag with your name and number." },
  { name: "Medal Hanger",        cat: "Sports",  icon: "ball",   desc: "A wall hanger to show off medals. Add a team name." },
  { name: "Mini Planter",        cat: "Home",    icon: "plant",  desc: "A small pot for succulents, with a drip tray." },
  { name: "Wall Hook",           cat: "Home",    icon: "plant",  desc: "A strong hook for keys, hats, or bags." },
  { name: "Your Own Idea",       cat: "Custom",  icon: "tag",    desc: "Got something in mind? Describe it and I'll try to print it." },
];

// SIZES — the size choices on the quote form.
const SIZES = ["Small", "Medium", "Large"];

const FILAMENTS = [
  {
    name: "PLA",
    desc: "The most common and popular filament for 3D printing. It's hard and sturdy, prints smooth with sharp details, and works for almost anything you'd use every day.",
    best: "Comes in: White, Black, Blue, Red",
  },
  {
    name: "Silk PLA",
    desc: "Just as hard as regular PLA, but with a shiny, silky finish. These are multi colour, so two colours blend together in one print and every piece looks a little different. Great for anything you want to stand out.",
    best: "Comes in: Green/Blue, Green/Pink, Purple/Blue, Pink/Orange",
  },
  {
    name: "TPU",
    desc: "The soft, bendy one. It feels like rubber, so it flexes and squishes instead of snapping, and it's really hard to break. Great for grips, bumpers, and anything that needs to bend.",
    best: "Comes in: Black",
  },
];

// group = which filament the color belongs to. Two-color ones use "hex2" for the second color.
const COLORS = [
  { name: "White",         group: "PLA",      hex: "#f7f7f5" },
  { name: "Black",         group: "PLA",      hex: "#1c1c1e" },
  { name: "Blue",          group: "PLA",      hex: "#2f6fd6" },
  { name: "Red",           group: "PLA",      hex: "#d9362f" },
  { name: "Green / Blue",  group: "Silk PLA", hex: "#3fbf6b", hex2: "#2f7fe0" },
  { name: "Green / Pink",  group: "Silk PLA", hex: "#3fbf6b", hex2: "#f27fb5" },
  { name: "Purple / Blue", group: "Silk PLA", hex: "#8a55d9", hex2: "#2f7fe0" },
  { name: "Pink / Orange", group: "Silk PLA", hex: "#f27fb5", hex2: "#f59542" },
  { name: "Black (TPU)",   group: "TPU",      hex: "#1c1c1e" },
];

// ============================================================
//  Site code — you shouldn't need to touch anything below
// ============================================================

const ICONS = {
  fidget: '<circle cx="12" cy="12" r="2"/><circle cx="12" cy="5" r="3"/><circle cx="18" cy="16" r="3"/><circle cx="6" cy="16" r="3"/>',
  desk:   '<path d="M7 10h10l-1 10H8z"/><path d="M10 10V4M14 10V6"/>',
  tech:   '<rect x="8" y="3" width="8" height="14" rx="2"/><path d="M5 21h14M12 17v4"/>',
  key:    '<circle cx="8" cy="8" r="4"/><path d="M11 11l8 8M16 16l2-2"/>',
  plant:  '<path d="M7 14h10l-1.5 7h-7z"/><path d="M12 14V8"/><path d="M12 8c0-3 3-4 5-4 0 3-2 5-5 4z"/><path d="M12 10c0-2-2-3-4-3 0 2 1.5 3.5 4 3z"/>',
  ball:   '<circle cx="12" cy="12" r="9"/><path d="M12 8l3.5 2.5-1.3 4H9.8l-1.3-4z"/>',
  tag:    '<rect x="3" y="7" width="18" height="10" rx="2"/><path d="M8 14l2-4 2 4M8.7 12.7h2.6M15 10v4"/>',
  gem:    '<path d="M6 4h12l3 5-9 11L3 9z"/><path d="M3 9h18"/>',
};

const TINTS = ["var(--blue)", "var(--mint)", "var(--lilac)", "var(--peach)"];

const $ = (id) => document.getElementById(id);

function el(tag, props = {}, children = []) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(props)) {
    if (key === "class") node.className = value;
    else if (key === "text") node.textContent = value;
    else if (key === "html") node.innerHTML = value;
    else node.setAttribute(key, value);
  }
  children.forEach((child) => node.append(child));
  return node;
}

// ----- Quantity -----
function orderQty() {
  return Math.min(99, Math.max(1, parseInt($("f-qty").value, 10) || 1));
}

// ----- Shop name -----
document.querySelectorAll("[data-shop-name]").forEach((n) => (n.textContent = SHOP.name));
document.title = `${SHOP.name} — Custom 3D Prints`;

// ----- Products + filters -----
let activeCat = "All";

function renderFilters() {
  const cats = ["All", ...new Set(PRODUCTS.map((p) => p.cat))];
  $("filters").replaceChildren(
    ...cats.map((cat) => {
      const chip = el("button", { class: "chip", type: "button", text: cat, "aria-pressed": String(cat === activeCat) });
      chip.addEventListener("click", () => {
        activeCat = cat;
        renderFilters();
        renderProducts();
      });
      return chip;
    })
  );
}

function renderProducts() {
  const list = PRODUCTS.filter((p) => activeCat === "All" || p.cat === activeCat);
  $("products").replaceChildren(
    ...list.map((p) => {
      const tint = TINTS[PRODUCTS.indexOf(p) % TINTS.length];
      const orderBtn = el("button", { class: "card-btn", type: "button", text: "Get a quote" });
      orderBtn.addEventListener("click", () => {
        $("f-item").value = p.name;
        $("order").scrollIntoView();
        $("f-name").focus({ preventScroll: true });
      });
      return el("article", { class: "card", style: `--tint:${tint}` }, [
        el("div", { class: "card-icon", html: `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[p.icon] || ICONS.gem}</svg>` }),
        el("span", { class: "card-cat", text: p.cat }),
        el("h3", { text: p.name }),
        el("p", { text: p.desc }),
        orderBtn,
      ]);
    })
  );
}

// ----- Filaments -----
$("filaments").replaceChildren(
  ...FILAMENTS.map((f, i) =>
    el("article", { class: "filament", style: `--tint:${TINTS[i % TINTS.length]}` }, [
      el("h3", { text: f.name }),
      el("p", { text: f.desc }),
      el("p", { class: "best", text: f.best }),
      el("span", { class: "price-note", text: f.name === "PLA" ? "Standard price" : "Costs a bit more" }),
    ])
  )
);

// ----- Color swatches -----
function pickColor(name) {
  document.querySelectorAll(".swatch").forEach((s) => s.setAttribute("aria-pressed", String(s.dataset.name === name)));
  $("color-name").textContent = name;
  $("f-color").value = name;
}

const COLOR_GROUPS = [...new Set(COLORS.map((c) => c.group))];
const colorsIn = (group) => COLORS.filter((c) => c.group === group);

$("swatches").replaceChildren(
  ...COLOR_GROUPS.map((group) =>
    el("div", { class: "swatch-row" }, [
      el("span", { class: "swatch-label", text: group }),
      ...colorsIn(group).map((c) => {
        const fill = c.hex2 ? `linear-gradient(135deg, ${c.hex}, ${c.hex2})` : c.hex;
        const swatch = el("button", { class: "swatch", type: "button", style: `--c:${fill}`, "aria-label": c.name, title: c.name, "aria-pressed": "false", "data-name": c.name });
        swatch.addEventListener("click", () => pickColor(c.name));
        return swatch;
      }),
    ])
  )
);

// ----- Order form -----
$("f-item").replaceChildren(...PRODUCTS.map((p) => el("option", { value: p.name, text: p.name })));
$("f-color").replaceChildren(
  ...COLOR_GROUPS.map((group) =>
    el("optgroup", { label: group }, colorsIn(group).map((c) => el("option", { value: c.name, text: c.name })))
  )
);
$("f-color").addEventListener("change", (e) => pickColor(e.target.value));
$("f-size").replaceChildren(...SIZES.map((s) => el("option", { value: s, text: s })));

$("order-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const msg = $("form-msg");

  let ok = true;
  [form.name, form.contact].forEach((input) => {
    const valid = input.value.trim() !== "" && input.checkValidity();
    input.classList.toggle("invalid", !valid);
    if (!valid) ok = false;
  });
  if (!ok) {
    msg.textContent = "Please add your name and a real email.";
    return;
  }

  const request = [
    `Name: ${form.name.value.trim()}`,
    `Email: ${form.contact.value.trim()}`,
    `Item: ${form.item.value}`,
    `Color: ${form.color.value}`,
    `Size: ${form.size.value}`,
    `How many: ${orderQty()}`,
    `Details: ${form.notes.value.trim() || "none"}`,
  ].join("\n");

  if (SHOP.email) {
    const subject = `Quote request: ${orderQty()} x ${form.item.value}`;
    msg.textContent = "Sending...";

    // Send it straight to the shop inbox with FormSubmit (formsubmit.co).
    let sent = false;
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${SHOP.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: subject,
          _template: "table",
          name: form.name.value.trim(),
          email: form.contact.value.trim(),
          item: form.item.value,
          color: form.color.value,
          size: form.size.value,
          quantity: orderQty(),
          details: form.notes.value.trim() || "none",
        }),
      });
      const data = await res.json();
      sent = res.ok && String(data.success) === "true";
    } catch {
      sent = false;
    }

    if (sent) {
      msg.textContent = "Sent! You'll get an email back with your quote.";
      form.notes.value = "";
    } else {
      // Backup plan: open the customer's own email app with the request filled in.
      window.location.href = `mailto:${SHOP.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(request)}`;
      msg.textContent = "Couldn't send it automatically, so your email app is opening with the request filled in. Just hit send.";
    }
    return;
  }

  try {
    await navigator.clipboard.writeText(request);
    msg.textContent = "Request copied. Paste it in a message to send it.";
  } catch {
    msg.textContent = "Couldn't copy the request. Ordering isn't hooked up to an email yet.";
  }
});

// ----- Start -----
renderFilters();
renderProducts();
pickColor(COLORS[0].name);
