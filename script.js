
// =============================================
// VALDY STORE - FINAL JAVASCRIPT
// =============================================

// GANTI NOMOR WHATSAPP ADMIN
const WHATSAPP_ADMIN = "6285198404231";

// =============================================
// DATABASE PRODUK
// =============================================

const products = [

  // PREMIUM APPS

  {name:"Netflix Premium",category:"premium",description:"1P1U • 1 Bulan",price:"Rp28.000",image:"netflix.png"},
  {name:"Netflix Premium",category:"premium",description:"Semi Private • 1 Bulan",price:"Rp35.000",image:"netflix.png"},
  {name:"Canva Pro",category:"premium",description:"1 Bulan",price:"Rp3.000",image:"canva.jpg"},
  {name:"YouTube Premium",category:"premium",description:"1 Bulan",price:"Rp5.000",image:"youtube.png"},
  {name:"Spotify Premium",category:"premium",description:"FULLGAR • 1 Bulan",price:"Rp20.000",image:"spotify.jpg"},
  {name:"VIU Premium",category:"premium",description:"Lifetime",price:"Rp10.000",image:"viu.png"},
  {name:"Alight Motion Premium",category:"premium",description:"1 Tahun",price:"Rp5.000",image:"alightmotion.png"},
  {name:"Gemini Plus",category:"premium",description:"Google Drive 400GB • 1 Tahun • NOGAR",price:"Rp30.000",image:"gemini.png"},
  {name:"CapCut Pro 7 Hari",category:"premium",description:"Premium • 7 Hari",price:"Rp7.000",image:"capcut.png"},
  {name:"CapCut Pro 1 Bulan",category:"premium",description:"Premium • 1 Bulan",price:"Rp27.000",image:"capcut.png"},
  {name:"ChatGPT Plus",category:"premium",description:"NOGAR • 1 Bulan",price:"Rp160.000",image:"chatgpt.png"},

  // MOBILE LEGENDS

  {name:"MLBB Weekly Diamond Pass",category:"game",description:"Weekly Diamond Pass",price:"Rp31.500",image:"ml.jpg"},
  {name:"MLBB 50+50 Diamond",category:"game",description:"Diamond untuk akun yang masih ada First TOPUP",price:"Rp17.000",image:"ml.jpg"},
  {name:"MLBB 150+150 Diamond",category:"game",description:"Diamond untuk akun yang masih ada First TOPUP",price:"Rp50.000",image:"ml.jpg"},
  {name:"MLBB 250+250 Diamond",category:"game",description:"Diamond untuk akun yang masih ada First TOPUP",price:"Rp82.000",image:"ml.jpg"},
  {name:"MLBB 500+500 Diamond",category:"game",description:"Diamond untuk akun yang masih ada First TOPUP",price:"Rp163.000",image:"ml.jpg"},
  {name:"MLBB 5 Diamond",category:"game",description:"5 Diamond",price:"Rp1.600",image:"ml.jpg"},
  {name:"MLBB 17+2 Diamond",category:"game",description:"17 + 2 Diamond",price:"Rp6.000",image:"ml.jpg"},
  {name:"MLBB 25+3 Diamond",category:"game",description:"25 + 3 Diamond",price:"Rp8.700",image:"ml.jpg"},
  {name:"MLBB 40+4 Diamond",category:"game",description:"40 + 4 Diamond",price:"Rp13.000",image:"ml.jpg"},
  {name:"MLBB 53+6 Diamond",category:"game",description:"53 + 6 Diamond",price:"Rp17.400",image:"ml.jpg"},
  {name:"MLBB 77+8 Diamond",category:"game",description:"77 + 8 Diamond",price:"Rp25.100",image:"ml.jpg"},
  {name:"MLBB 154+16 Diamond",category:"game",description:"154 + 16 Diamond",price:"Rp50.000",image:"ml.jpg"},
  {name:"MLBB 217+23 Diamond",category:"game",description:"217 + 23 Diamond",price:"Rp70.500",image:"ml.jpg"},
  {name:"MLBB 256+40 Diamond",category:"game",description:"256 + 40 Diamond",price:"Rp87.000",image:"ml.jpg"},
  {name:"MLBB 367+41 Diamond",category:"game",description:"367 + 41 Diamond",price:"Rp120.000",image:"ml.jpg"},
  {name:"MLBB 503+65 Diamond",category:"game",description:"503 + 65 Diamond",price:"Rp163.000",image:"ml.jpg"},
  {name:"MLBB 774+101 Diamond",category:"game",description:"774 + 101 Diamond",price:"Rp251.000",image:"ml.jpg"},
  {name:"MLBB 1708+302 Diamond",category:"game",description:"1708 + 302 Diamond",price:"Rp545.000",image:"ml.jpg"},
  {name:"MLBB 4003+827 Diamond",category:"game",description:"4003 + 827 Diamond",price:"Rp1.308.000",image:"ml.jpg"},

  // FREE FIRE

  {name:"Free Fire 5 Diamond",category:"game",description:"5 Diamond",price:"Rp800",image:"ff.png"},
  {name:"Free Fire 50 Diamond",category:"game",description:"50 Diamond",price:"Rp7.000",image:"ff.png"},
  {name:"Free Fire 70 Diamond",category:"game",description:"70 Diamond",price:"Rp9.000",image:"ff.png"},
  {name:"Free Fire 140 Diamond",category:"game",description:"140 Diamond",price:"Rp17.000",image:"ff.png"},
  {name:"Free Fire 355 Diamond",category:"game",description:"355 Diamond",price:"Rp40.000",image:"ff.png"},
  {name:"Free Fire 720 Diamond",category:"game",description:"720 Diamond",price:"Rp80.000",image:"ff.png"},

  // GAME LAINNYA

  {name:"PUBG Mobile",category:"game",description:"Top Up UC PUBG Mobile",price:"Hubungi Admin",image:"pubg.jpg"},
  {name:"PUBG Mobile2",category:"game",description:"Top Up UC PUBG Mobile",price:"Hubungi Admin",image:"pubg.jpg"},
  {name:"Valorant",category:"game",description:"Top Up Valorant Points",price:"Hubungi Admin",image:"valorant.png"},
  {name:"Roblox",category:"game",description:"Top Up Robux",price:"Hubungi Admin",image:"roblox.png"},

  // TELKOMSEL FLASH

  {name:"Telkomsel Flash 7GB",category:"internet",description:"Internet Flash • 28 Hari • 7GB",price:"Rp40.000",image:"telkomsel.png"},
  {name:"Telkomsel Flash 10GB",category:"internet",description:"Internet Flash • 28 Hari • 10GB",price:"Rp47.500",image:"telkomsel.png"},
  {name:"Telkomsel Flash 15GB",category:"internet",description:"Internet Flash • 28 Hari • 15GB",price:"Rp55.000",image:"telkomsel.png"},
  {name:"Telkomsel Flash 20GB",category:"internet",description:"Internet Flash • 28 Hari • 20GB",price:"Rp69.000",image:"telkomsel.png"},
  {name:"Telkomsel Flash 30GB",category:"internet",description:"Internet Flash • 28 Hari • 30GB",price:"Rp89.000",image:"telkomsel.png"},
  {name:"Telkomsel Flash 45GB",category:"internet",description:"Internet Flash • 28 Hari • 45GB",price:"Rp108.000",image:"telkomsel.png"},
  {name:"Telkomsel Flash 50GB",category:"internet",description:"Internet Flash • 28 Hari • 50GB",price:"Rp115.000",image:"telkomsel.png"},
  {name:"Telkomsel Flash 75GB",category:"internet",description:"Internet Flash • 28 Hari • 75GB",price:"Rp140.000",image:"telkomsel.png"},
  {name:"Telkomsel Flash 100GB",category:"internet",description:"Internet Flash • 28 Hari • 100GB",price:"Rp200.000",image:"telkomsel.png"},

  // INDOSAT

  {name:"Indosat Freedom 3GB",category:"internet",description:"Freedom Internet • 28 Hari • 3GB",price:"Rp28.000",image:"indosat.png"},
  {name:"Indosat Freedom 7GB",category:"internet",description:"Freedom Internet • 28 Hari • 7GB",price:"Rp32.000",image:"indosat.png"},
  {name:"Indosat Freedom 9GB",category:"internet",description:"Freedom Internet • 28 Hari • 9GB",price:"Rp35.000",image:"indosat.png"},
  {name:"Indosat Freedom 11GB",category:"internet",description:"Freedom Internet • 28 Hari • 11GB",price:"Rp40.000",image:"indosat.png"},
  {name:"Indosat Freedom 16GB",category:"internet",description:"Freedom Internet • 28 Hari • 16GB",price:"Rp48.000",image:"indosat.png"},
  {name:"Indosat Freedom 18GB",category:"internet",description:"Freedom Internet • 28 Hari • 18GB",price:"Rp55.000",image:"indosat.png"},
  {name:"Indosat Freedom 20GB",category:"internet",description:"Freedom Internet • 28 Hari • 20GB",price:"Rp58.000",image:"indosat.png"},
  {name:"Indosat Freedom 25GB",category:"internet",description:"Freedom Internet • 28 Hari • 25GB",price:"Rp65.000",image:"indosat.png"},
  {name:"Indosat Freedom 42GB",category:"internet",description:"Freedom Internet • 28 Hari • 42GB",price:"Rp86.000",image:"indosat.png"},
  {name:"Indosat Sensasi 50GB",category:"internet",description:"Freedom Internet Sensasi • 50GB",price:"Rp90.000",image:"indosat.png"},
  {name:"Indosat Sensasi 100GB",category:"internet",description:"Freedom Internet Sensasi • 100GB",price:"Rp112.000",image:"indosat.png"},

  // XL FLEXMAX

  {name:"XL Flexmax 7GB",category:"internet",description:"Internet Flexmax • 28 Hari • 7GB",price:"Rp36.000",image:"xl.jpg"},
  {name:"XL Flexmax 10GB",category:"internet",description:"Internet Flexmax • 28 Hari • 10GB",price:"Rp45.000",image:"xl.jpg"},
  {name:"XL Flexmax 22GB",category:"internet",description:"Internet Flexmax • 28 Hari • 22GB",price:"Rp58.000",image:"xl.jpg"},
  {name:"XL Flexmax 28GB",category:"internet",description:"Internet Flexmax • 28 Hari • 28GB",price:"Rp70.000",image:"xl.jpg"},
  {name:"XL Flexmax 36GB",category:"internet",description:"Internet Flexmax • 28 Hari • 36GB",price:"Rp76.000",image:"xl.jpg"},
  {name:"XL Flexmax 46GB",category:"internet",description:"Internet Flexmax • 28 Hari • 46GB",price:"Rp86.000",image:"xl.jpg"},
  {name:"XL Flexmax 65GB",category:"internet",description:"Internet Flexmax • 28 Hari • 65GB",price:"Rp100.000",image:"xl.jpg"},
  {name:"XL Flexmax 100GB",category:"internet",description:"Internet Flexmax • 28 Hari • 100GB",price:"Rp120.000",image:"xl.jpg"},

  // AXIS BRONET

  {name:"Axis Bronet 3GB",category:"internet",description:"Internet Bronet • 3GB",price:"Rp22.000",image:"axis.jpg"},
  {name:"Axis Bronet 7GB",category:"internet",description:"Internet Bronet • 7GB",price:"Rp33.000",image:"axis.jpg"},
  {name:"Axis Bronet 10GB",category:"internet",description:"Internet Bronet • 10GB",price:"Rp40.000",image:"axis.jpg"},
  {name:"Axis Bronet 15GB",category:"internet",description:"Internet Bronet • 15GB",price:"Rp50.000",image:"axis.jpg"},
  {name:"Axis Bronet 26GB",category:"internet",description:"Internet Bronet • 26GB",price:"Rp63.000",image:"axis.jpg"},
  {name:"Axis Bronet 30GB",category:"internet",description:"Internet Bronet • 30GB",price:"Rp70.000",image:"axis.jpg"},
  {name:"Axis Bronet 40GB",category:"internet",description:"Internet Bronet • 40GB",price:"Rp78.000",image:"axis.jpg"},
  {name:"Axis Bronet 65GB",category:"internet",description:"Internet Bronet • 65GB",price:"Rp98.000",image:"axis.jpg"},
  {name:"Axis Bronet 100GB",category:"internet",description:"Internet Bronet • 100GB",price:"Rp120.000",image:"axis.jpg"},
  {name:"Axis Bronet 150GB",category:"internet",description:"Internet Bronet • 150GB",price:"Rp145.000",image:"axis.jpg"},
  {name:"Axis Bronet 250GB",category:"internet",description:"Internet Bronet • 250GB",price:"Rp215.000",image:"axis.jpg"},

  // TRI HAPPY

  {name:"Tri Happy 3GB",category:"internet",description:"Internet Happy • 3GB",price:"Rp20.000",image:"tri.jpg"},
  {name:"Tri Happy 7GB",category:"internet",description:"Internet Happy • 7GB",price:"Rp32.000",image:"tri.jpg"},
  {name:"Tri Happy 11GB",category:"internet",description:"Internet Happy • 11GB",price:"Rp37.000",image:"tri.jpg"},
  {name:"Tri Happy 14GB",category:"internet",description:"Internet Happy • 14GB",price:"Rp43.000",image:"tri.jpg"},
  {name:"Tri Happy 18GB",category:"internet",description:"Internet Happy • 18GB",price:"Rp52.000",image:"tri.jpg"},
  {name:"Tri Happy 30GB",category:"internet",description:"Internet Happy • 30GB",price:"Rp65.000",image:"tri.jpg"},
  {name:"Tri Happy 32GB",category:"internet",description:"Internet Happy • 32GB",price:"Rp68.000",image:"tri.jpg"},
  {name:"Tri Happy 42GB",category:"internet",description:"Internet Happy • 42GB",price:"Rp80.000",image:"tri.jpg"},
  {name:"Tri Happy 45GB",category:"internet",description:"Internet Happy • 45GB",price:"Rp87.000",image:"tri.jpg"},
  {name:"Tri Happy 55GB",category:"internet",description:"Internet Happy • 55GB",price:"Rp93.000",image:"tri.jpg"},
  {name:"Tri Happy 100GB",category:"internet",description:"Internet Happy • 100GB",price:"Rp115.000",image:"tri.jpg"},
  {name:"Tri Happy 130GB",category:"internet",description:"Internet Happy • 130GB",price:"Rp130.000",image:"tri.jpg"},

  // TRI AON

  {name:"Tri AON 4GB",category:"internet",description:"Kuota AlwaysOn • 4GB",price:"Rp27.000",image:"tri.jpg"},
  {name:"Tri AON 6GB",category:"internet",description:"Kuota AlwaysOn • 6GB",price:"Rp34.000",image:"tri.jpg"},
  {name:"Tri AON 10GB",category:"internet",description:"Kuota AlwaysOn • 10GB",price:"Rp57.000",image:"tri.jpg"},
  {name:"Tri AON 14GB",category:"internet",description:"Kuota AlwaysOn • 14GB",price:"Rp69.000",image:"tri.jpg"},
  {name:"Tri AON 26GB",category:"internet",description:"Kuota AlwaysOn • 26GB",price:"Rp83.000",image:"tri.jpg"}

];

// =============================================
// ELEMEN HTML
// =============================================

const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const emptyMessage = document.getElementById("emptyMessage");

const filterButtons = document.querySelectorAll(".filter-btn");
const categoryCards = document.querySelectorAll(".category-card");

const subcategoryWrapper = document.getElementById("subcategoryWrapper");
const subcategoryTitle = document.getElementById("subcategoryTitle");
const subcategoryButtons = document.getElementById("subcategoryButtons");

const historyList = document.getElementById("historyList");
const clearHistoryButton = document.getElementById("clearHistory");

const contactButton = document.getElementById("contactButton");

let activeCategory = "all";
let activeSubcategory = "all";

// =============================================
// SUBKATEGORI
// =============================================

const subcategories = {
  game: [
    {id:"all",name:"Semua Games"},
    {id:"mlbb",name:"Mobile Legends"},
    {id:"freefire",name:"Free Fire"},
    {id:"pubg",name:"PUBG Mobile"},
    {id:"valorant",name:"Valorant"},
    {id:"roblox",name:"Roblox"}
  ],

  internet: [
    {id:"all",name:"Semua Provider"},
    {id:"telkomsel",name:"Telkomsel"},
    {id:"indosat",name:"Indosat"},
    {id:"xl",name:"XL"},
    {id:"axis",name:"Axis"},
    {id:"tri",name:"Tri"}
  ]
};

// =============================================
// MENGENALI SUBKATEGORI PRODUK
// =============================================

function getProductSubcategory(product) {
  const name = product.name.toLowerCase();

  if (product.category === "game") {
    if (name.includes("mlbb") || name.includes("mobile legends")) return "mlbb";
    if (name.includes("free fire")) return "freefire";
    if (name.includes("pubg")) return "pubg";
    if (name.includes("valorant")) return "valorant";
    if (name.includes("roblox")) return "roblox";
  }

  if (product.category === "internet") {
    if (name.includes("telkomsel")) return "telkomsel";
    if (name.includes("indosat")) return "indosat";
    if (name.startsWith("xl")) return "xl";
    if (name.includes("axis")) return "axis";
    if (name.startsWith("tri")) return "tri";
  }

  return "other";
}

// =============================================
// NAMA KATEGORI
// =============================================

function getCategoryName(category) {
  const names = {
    premium: "Premium Apps",
    game: "Top Up Games",
    internet: "Paket Internet"
  };

  return names[category] || category;
}

// =============================================
// TAMPILKAN SUBKATEGORI
// =============================================

function renderSubcategories() {
  subcategoryButtons.replaceChildren();

  const items = subcategories[activeCategory];

  if (!items) {
    subcategoryWrapper.hidden = true;
    return;
  }

  subcategoryWrapper.hidden = false;

  subcategoryTitle.textContent =
    activeCategory === "game"
      ? "Pilih Game"
      : "Pilih Provider Internet";

  items.forEach(item => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "subcategory-btn";
    button.textContent = item.name;

    button.classList.toggle(
      "active",
      activeSubcategory === item.id
    );

    button.addEventListener("click", () => {
      activeSubcategory = item.id;
      renderSubcategories();
      renderProducts();
    });

    subcategoryButtons.appendChild(button);
  });
}

// =============================================
// FILTER KATEGORI
// =============================================

function setCategory(category) {
  activeCategory = category;
  activeSubcategory = "all";

  filterButtons.forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.category === category
    );
  });

  renderSubcategories();
  renderProducts();
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    setCategory(button.dataset.category);
  });
});

categoryCards.forEach(card => {
  card.addEventListener("click", () => {
    setCategory(card.dataset.category);

    document.getElementById("produk").scrollIntoView({
      behavior: "smooth"
    });
  });
});

// =============================================
// WHATSAPP ORDER
// =============================================

function createOrderLink(product) {
  const message =
    `Halo Admin VALDY STORE, saya ingin memesan:\n\n` +
    `Produk: ${product.name}\n` +
    `Harga: ${product.price}\n\n` +
    `Mohon informasi pemesanannya.`;

  return `https://wa.me/${WHATSAPP_ADMIN}?text=${encodeURIComponent(message)}`;
}

// =============================================
// RENDER PRODUK
// =============================================

function renderProducts() {
  const keyword = searchInput.value.trim().toLowerCase();

  const filteredProducts = products.filter(product => {

    const matchCategory =
      activeCategory === "all" ||
      product.category === activeCategory;

    const matchSubcategory =
      activeSubcategory === "all" ||
      getProductSubcategory(product) === activeSubcategory;

    const searchableText =
      `${product.name} ${product.description} ${product.category}`.toLowerCase();

    const matchSearch = searchableText.includes(keyword);

    return matchCategory && matchSubcategory && matchSearch;
  });

  productList.replaceChildren();

  filteredProducts.forEach(product => {

    const card = document.createElement("article");
    card.className = "product-card reveal";

    const imageBox = document.createElement("div");
    imageBox.className = "product-image";

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;
    image.loading = "lazy";

    image.addEventListener("error", () => {
      imageBox.replaceChildren();

      const fallback = document.createElement("span");
      fallback.textContent = "🛍️";
      fallback.style.fontSize = "55px";

      imageBox.appendChild(fallback);
    }, {once:true});

    imageBox.appendChild(image);

    const info = document.createElement("div");
    info.className = "product-info";

    const category = document.createElement("span");
    category.className = "product-category";
    category.textContent = getCategoryName(product.category);

    const title = document.createElement("h3");
    title.textContent = product.name;

    const description = document.createElement("p");
    description.className = "product-description";
    description.textContent = product.description;

    const bottom = document.createElement("div");
    bottom.className = "product-bottom";

    const price = document.createElement("span");
    price.className = "product-price";
    price.textContent = product.price;

    const order = document.createElement("a");
    order.className = "order-button";
    order.href = createOrderLink(product);
    order.target = "_blank";
    order.rel = "noopener noreferrer";
    order.textContent = "Pesan Sekarang";

    bottom.append(price, order);
    info.append(category, title, description, bottom);
    card.append(imageBox, info);

    productList.appendChild(card);
  });

  emptyMessage.hidden = filteredProducts.length !== 0;

  observeReveal();
}

// =============================================
// PENCARIAN
// =============================================

searchInput.addEventListener("input", () => {
  renderProducts();
});

// =============================================
// RIWAYAT PENCARIAN
// =============================================

const HISTORY_KEY = "valdyStoreSearchHistory";
const MAX_HISTORY = 10;

let searchHistory = [];

function loadSearchHistory() {
  try {
    const saved = JSON.parse(
      localStorage.getItem(HISTORY_KEY) || "[]"
    );

    searchHistory = Array.isArray(saved)
      ? saved.filter(item => typeof item === "string").slice(0, MAX_HISTORY)
      : [];

  } catch {
    searchHistory = [];
  }
}

function saveSearchHistory(keyword) {
  const search = keyword.trim();

  if (!search) return;

  searchHistory = searchHistory.filter(
    item => item.toLowerCase() !== search.toLowerCase()
  );

  searchHistory.unshift(search);
  searchHistory = searchHistory.slice(0, MAX_HISTORY);

  try {
    localStorage.setItem(
      HISTORY_KEY,
      JSON.stringify(searchHistory)
    );
  } catch (error) {
    console.warn("Riwayat tidak dapat disimpan.", error);
  }

  renderSearchHistory();
}

function renderSearchHistory() {
  historyList.replaceChildren();

  if (searchHistory.length === 0) {
    const empty = document.createElement("p");
    empty.className = "history-empty";
    empty.textContent = "Belum ada riwayat pencarian.";
    historyList.appendChild(empty);
    return;
  }

  searchHistory.forEach((keyword, index) => {
    const item = document.createElement("div");
    item.className = "history-item";

    const searchButton = document.createElement("button");
    searchButton.type = "button";
    searchButton.className = "history-search";
    searchButton.textContent = "◷ " + keyword;

    searchButton.addEventListener("click", () => {
      searchInput.value = keyword;
      setCategory("all");

      document.getElementById("produk").scrollIntoView({
        behavior: "smooth"
      });
    });

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "history-delete";
    deleteButton.textContent = "×";
    deleteButton.setAttribute(
      "aria-label",
      "Hapus riwayat " + keyword
    );

    deleteButton.addEventListener("click", () => {
      searchHistory.splice(index, 1);

      localStorage.setItem(
        HISTORY_KEY,
        JSON.stringify(searchHistory)
      );

      renderSearchHistory();
    });

    item.append(searchButton, deleteButton);
    historyList.appendChild(item);
  });
}

// SIMPAN KETIKA ENTER
searchInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    saveSearchHistory(searchInput.value);
  }
});

// SIMPAN KETIKA SELESAI MENGETIK
searchInput.addEventListener("change", () => {
  saveSearchHistory(searchInput.value);
});

// HAPUS SEMUA RIWAYAT
clearHistoryButton.addEventListener("click", () => {
  searchHistory = [];
  localStorage.removeItem(HISTORY_KEY);
  renderSearchHistory();
});

// =============================================
// KONTAK ADMIN
// =============================================

const contactMessage =
  "Halo Admin VALDY STORE, saya ingin bertanya tentang produk.";

contactButton.href =
  `https://wa.me/${WHATSAPP_ADMIN}?text=${encodeURIComponent(contactMessage)}`;

// =============================================
// TAHUN OTOMATIS
// =============================================

document.getElementById("year").textContent =
  new Date().getFullYear();

// =============================================
// ANIMASI SCROLL
// =============================================

let revealObserver = null;

function observeReveal() {
  const elements = document.querySelectorAll(
    ".reveal:not(.show)"
  );

  if (!("IntersectionObserver" in window)) {
    elements.forEach(element => element.classList.add("show"));
    return;
  }

  if (revealObserver) {
    revealObserver.disconnect();
  }

  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  elements.forEach(element => {
    revealObserver.observe(element);
  });
}

// =============================================
// JALANKAN WEBSITE
// =============================================

loadSearchHistory();
renderSearchHistory();
renderSubcategories();
renderProducts();
observeReveal();