const featuredProducts = [
  { name: 'MacBook Air M3', category: 'Laptops', type: '13-inch · 16 GB RAM', price: 1199, tag: 'Best for work', specs: ['Apple M3 8-core chip', '16 GB unified memory', '512 GB SSD storage'], retailers: ['Gigantti', 'Verkkokauppa', 'Amazon'] },
  { name: 'Lenovo Legion 5', category: 'Laptops', type: 'Gaming laptop · RTX 4060', price: 1149, tag: 'Game ready', specs: ['AMD Ryzen 7 processor', 'NVIDIA RTX 4060 8 GB', '15.6-inch 144 Hz display'], retailers: ['Power', 'Gigantti', 'Lenovo'] },
  { name: 'AMD Ryzen 7 7800X3D', category: 'PC Components', type: 'Desktop processor', price: 369, tag: 'Frame rate king', specs: ['8 cores · 16 threads', 'Up to 5.0 GHz boost', 'AM5 socket · 120 W TDP'], retailers: ['Proshop', 'Jimms', 'Amazon'] },
  { name: 'NVIDIA GeForce RTX 4070', category: 'PC Components', type: '12 GB graphics card', price: 599, tag: 'Strong upgrade', specs: ['12 GB GDDR6X memory', '2,560 CUDA cores', 'DLSS 3 · ray tracing'], retailers: ['Jimms', 'Proshop', 'Verkkokauppa'] },
  { name: 'Samsung Galaxy S24', category: 'Phones & Tablets', type: '6.2-inch · 128 GB', price: 799, tag: 'Pocket power', specs: ['6.2-inch AMOLED display', '128 GB internal storage', '5G · 8 GB RAM'], retailers: ['Gigantti', 'Power', 'Samsung'] },
  { name: 'Sony WH-1000XM5', category: 'Audio', type: 'Noise-cancelling headphones', price: 329, tag: 'Best overall', specs: ['Active noise cancellation', 'Up to 30 hours battery', 'Bluetooth multipoint'], retailers: ['Power', 'Gigantti', 'Verkkokauppa'] },
];

const componentFamilies = [
  { type: 'Desktop processor', prefix: 'CPU', prices: [129, 159, 199, 229, 279, 319, 369, 429, 499, 579, 649, 749, 899, 999, 1199, 1399, 449, 529, 699, 799], names: ['Intel Core i3-14100F', 'Intel Core i5-14400F', 'Intel Core i5-14600K', 'Intel Core i7-14700K', 'Intel Core i9-14900K', 'AMD Ryzen 5 7600', 'AMD Ryzen 5 7600X', 'AMD Ryzen 7 7700', 'AMD Ryzen 7 7800X3D', 'AMD Ryzen 9 7900X', 'AMD Ryzen 9 7950X', 'Intel Core Ultra 5 245K', 'Intel Core Ultra 7 265K', 'Intel Core Ultra 9 285K', 'AMD Ryzen 7 9700X', 'AMD Ryzen 9 9900X', 'AMD Ryzen 9 9950X', 'AMD Ryzen 5 9600X', 'Intel Core i5-13600KF', 'Intel Core i7-13700KF'] },
  { type: 'Graphics card', prefix: 'GPU', prices: [289, 329, 379, 449, 499, 549, 599, 649, 699, 749, 799, 899, 999, 1099, 1199, 1299, 1399, 1599, 1799, 1999], names: ['GeForce RTX 4060 8GB', 'GeForce RTX 4060 Ti 8GB', 'GeForce RTX 4060 Ti 16GB', 'GeForce RTX 4070', 'GeForce RTX 4070 SUPER', 'GeForce RTX 4070 Ti SUPER', 'GeForce RTX 4080 SUPER', 'GeForce RTX 4090', 'Radeon RX 7600 8GB', 'Radeon RX 7600 XT 16GB', 'Radeon RX 7700 XT', 'Radeon RX 7800 XT', 'Radeon RX 7900 GRE', 'Radeon RX 7900 XT', 'Radeon RX 7900 XTX', 'Arc B580 12GB', 'Arc A770 16GB', 'GeForce RTX 3050', 'GeForce RTX 3060 12GB', 'Radeon RX 6750 XT'] },
  { type: 'Motherboard', prefix: 'BOARD', prices: [119, 139, 159, 179, 199, 219, 249, 279, 299, 329, 349, 379, 429, 479, 529, 599, 199, 239, 289, 399], names: ['B650M WiFi', 'B650 Gaming Plus', 'B650 Aorus Elite', 'B650E Steel Legend', 'X670E Pro RS', 'X670E Gaming Plus', 'X870 WiFi', 'X870 Aorus Elite', 'X870E Tomahawk', 'Z790 Gaming X', 'Z790 Aorus Elite', 'Z790 Steel Legend', 'B760M Mortar WiFi', 'B760 Gaming Plus', 'B760 Pro RS', 'Z890 Gaming Plus', 'Z890 Aorus Elite', 'H610M-K', 'H770 Pro', 'TRX50 Creator'] },
  { type: 'Memory kit', prefix: 'RAM', prices: [49, 59, 69, 79, 89, 99, 109, 119, 129, 149, 169, 189, 209, 229, 249, 279, 299, 119, 159, 199], names: ['DDR4 16GB 3200MHz', 'DDR4 32GB 3200MHz', 'DDR4 64GB 3600MHz', 'DDR5 16GB 5200MHz', 'DDR5 32GB 5600MHz', 'DDR5 32GB 6000MHz', 'DDR5 32GB 6400MHz', 'DDR5 64GB 5600MHz', 'DDR5 64GB 6000MHz', 'DDR5 64GB 6400MHz', 'DDR5 96GB 6000MHz', 'DDR5 128GB 5600MHz', 'SO-DIMM DDR5 16GB', 'SO-DIMM DDR5 32GB', 'SO-DIMM DDR4 16GB', 'ECC DDR5 32GB', 'ECC DDR5 64GB', 'RGB DDR5 32GB', 'Low Profile DDR5 32GB', 'Gaming DDR5 48GB'] },
  { type: 'NVMe SSD', prefix: 'SSD', prices: [49, 59, 69, 79, 89, 99, 119, 139, 159, 179, 199, 229, 249, 279, 299, 349, 399, 449, 499, 599], names: ['NVMe 500GB PCIe 3.0', 'NVMe 1TB PCIe 3.0', 'NVMe 2TB PCIe 3.0', 'NVMe 4TB PCIe 3.0', 'NVMe 1TB PCIe 4.0', 'NVMe 2TB PCIe 4.0', 'NVMe 4TB PCIe 4.0', 'NVMe 1TB PCIe 4.0 Pro', 'NVMe 2TB PCIe 4.0 Pro', 'NVMe 4TB PCIe 4.0 Pro', 'NVMe 1TB PCIe 5.0', 'NVMe 2TB PCIe 5.0', 'NVMe 4TB PCIe 5.0', 'M.2 2230 1TB', 'M.2 2230 2TB', 'SATA SSD 1TB', 'SATA SSD 2TB', 'SATA SSD 4TB', 'External SSD 1TB', 'External SSD 2TB'] }
];

const componentRetailers = ['Proshop', 'Jimms', 'Verkkokauppa'];
const componentProducts = componentFamilies.flatMap(family => family.names.map((name, index) => ({
  name,
  category: 'PC Components',
  type: family.type,
  price: family.prices[index],
  tag: index < 3 ? 'New price' : index % 3 === 0 ? 'Popular pick' : 'Price checked',
  specs: [family.type, `${family.prefix}-${String(index + 1).padStart(2, '0')} model`, 'Price checked across 3 retailers'],
  retailers: componentRetailers
})));
const products = [...featuredProducts, ...componentProducts];

const grid = document.querySelector('#productGrid');
const count = document.querySelector('#resultCount');
const searchInput = document.querySelector('#searchInput');
const sortSelect = document.querySelector('#sortSelect');
const dealsOnly = document.querySelector('#dealsOnly');
const lastUpdated = document.querySelector('#lastUpdated');
const productModal = document.querySelector('#productModal');
const savedButton = document.querySelector('#savedButton');
let selectedCategory = 'All';
let saved = new Set();
let showSavedOnly = false;
const updateInterval = 12 * 60 * 60 * 1000;
let nextUpdateAt = Date.now() + updateInterval;

function formatPrice(price) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(price);
}

function getOffers(product) {
  const retailerAdjustments = { Gigantti: 0.98, Verkkokauppa: 1, Power: 0.97, Amazon: 0.96, Lenovo: 1.01, Proshop: 0.99, Jimms: 1, Samsung: 0.98 };
  return product.retailers.map(retailer => ({ retailer, price: Math.round(product.price * (retailerAdjustments[retailer] || 1) * 100) / 100 }));
}

function getBestOffer(product) {
  return getOffers(product).sort((a, b) => a.price - b.price)[0];
}

function updatePriceStatus() {
  const checkedAt = new Date();
  nextUpdateAt = checkedAt.getTime() + updateInterval;
  lastUpdated.textContent = checkedAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  document.querySelector('#nextUpdated').textContent = new Date(nextUpdateAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function retailerUrl(retailer, productName) {
  const domains = { Gigantti: 'gigantti.fi', Verkkokauppa: 'verkkokauppa.com', Power: 'power.fi', Amazon: 'amazon.de', Lenovo: 'lenovo.com', Proshop: 'proshop.fi', Jimms: 'jimms.fi', Samsung: 'samsung.com' };
  return `https://www.google.com/search?q=${encodeURIComponent(`site:${domains[retailer] || retailer} ${productName}`)}`;
}

function getBudget(search) {
  const match = search.match(/(?:under|below|max(?:imum)?)\s*€?\s*(\d+)/i);
  return match ? Number(match[1]) : null;
}

function updateCategoryCounts() {
  document.querySelectorAll('[data-count-category]').forEach(element => {
    const category = element.dataset.countCategory;
    element.textContent = category === 'All' ? products.length : products.filter(product => product.category === category).length;
  });
}

function openProduct(product) {
  const best = getBestOffer(product);
  document.querySelector('#modalTitle').textContent = product.name;
  document.querySelector('#modalMeta').textContent = `${product.category} · ${product.type}`;
  document.querySelector('#modalCode').textContent = product.category === 'PC Components' ? 'PC' : product.category === 'Laptops' ? 'LT' : product.category === 'Audio' ? 'AU' : product.category === 'Smart Home' ? 'SH' : 'MB';
  document.querySelector('#modalSpecs').innerHTML = product.specs.map(spec => `<li>${spec}</li>`).join('');
  document.querySelector('#modalPrice').textContent = formatPrice(best.price);
  document.querySelector('#modalStore').textContent = `Best offer at ${best.retailer} · ${Math.round((1 - best.price / product.price) * 100)}% below list price`;
  const modalLink = document.querySelector('#modalLink');
  modalLink.href = retailerUrl(best.retailer, product.name);
  document.querySelector('#modalOffers').innerHTML = getOffers(product).map(offer => `<a class="offer-row ${offer.retailer === best.retailer ? 'best-offer' : ''}" href="${retailerUrl(offer.retailer, product.name)}" target="_blank" rel="noreferrer"><span>${offer.retailer}${offer.retailer === best.retailer ? ' · BEST PRICE' : ''}</span><b>${formatPrice(offer.price)} ↗</b></a>`).join('');
  productModal.hidden = false;
  document.body.classList.add('modal-open');
}

function closeProduct() {
  productModal.hidden = true;
  document.body.classList.remove('modal-open');
}

function renderProducts() {
  const search = searchInput.value.trim().toLowerCase();
  const budget = getBudget(search);
  const searchText = search.replace(/(?:under|below|max(?:imum)?)\s*€?\s*\d+/i, '').trim();
  let visible = products.filter(product => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
    const best = getBestOffer(product);
    const searchMatch = !searchText || `${product.name} ${product.category} ${product.type} ${product.price} ${best.price} ${best.retailer}`.toLowerCase().includes(searchText);
    const budgetMatch = budget === null || best.price <= budget;
    const dealMatch = !dealsOnly.checked || best.price < product.price * 0.95;
    const savedMatch = !showSavedOnly || saved.has(product.name);
    return categoryMatch && searchMatch && budgetMatch && dealMatch && savedMatch;
  });

  if (sortSelect.value === 'deal') visible.sort((a, b) => (b.price - getBestOffer(b).price) - (a.price - getBestOffer(a).price));
  if (sortSelect.value === 'price-low') visible.sort((a, b) => a.price - b.price);
  if (sortSelect.value === 'price-high') visible.sort((a, b) => b.price - a.price);
  count.textContent = visible.length;
  grid.innerHTML = visible.length ? visible.map((product, index) => `
    <article class="product-card" data-product="${product.name}" tabindex="0" role="button" aria-label="View specs for ${product.name}" style="animation-delay: ${index * 45}ms">
      <div class="product-photo">
        <span class="product-symbol">${product.category === 'PC Components' ? 'PC' : product.category === 'Laptops' ? 'LT' : product.category === 'Audio' ? 'AU' : product.category === 'Smart Home' ? 'SH' : 'MB'}</span>
        <span class="product-tag">${product.tag}</span>
        <button class="save ${saved.has(product.name) ? 'is-saved' : ''}" data-save="${product.name}" type="button" aria-label="${saved.has(product.name) ? 'Remove' : 'Save'} ${product.name}">${saved.has(product.name) ? '♥' : '♡'}</button>
      </div>
      <div class="product-info"><div><h3 class="product-name">${product.name}</h3><p class="product-meta">${product.category} · ${product.type}</p><p class="best-store">Best at <b>${getBestOffer(product).retailer}</b></p></div><div class="price-stack"><span class="product-price">${formatPrice(getBestOffer(product).price)}</span><del>${formatPrice(product.price)}</del><small>-${Math.round((1 - getBestOffer(product).price / product.price) * 100)}%</small></div></div>
    </article>
  `).join('') : '<p class="empty">No finds match that search. Try a different signal.</p>';

  grid.querySelectorAll('[data-save]').forEach(button => button.addEventListener('click', event => {
    event.stopPropagation();
    const name = button.dataset.save;
    saved.has(name) ? saved.delete(name) : saved.add(name);
    document.querySelector('#savedCount').textContent = saved.size;
    renderProducts();
  }));
  grid.querySelectorAll('[data-product]').forEach(card => {
    card.addEventListener('click', () => openProduct(products.find(product => product.name === card.dataset.product)));
    card.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openProduct(products.find(product => product.name === card.dataset.product)); } });
  });
}

document.querySelectorAll('.category').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.category.active').classList.remove('active');
  button.classList.add('active');
  selectedCategory = button.dataset.category;
  showSavedOnly = false;
  savedButton.classList.remove('is-active');
  savedButton.setAttribute('aria-pressed', 'false');
  renderProducts();
}));
document.querySelectorAll('[data-search-suggestion]').forEach(button => button.addEventListener('click', () => {
  searchInput.value = button.dataset.searchSuggestion;
  searchInput.focus();
  renderProducts();
}));
savedButton.addEventListener('click', () => {
  showSavedOnly = !showSavedOnly;
  savedButton.classList.toggle('is-active', showSavedOnly);
  savedButton.setAttribute('aria-pressed', String(showSavedOnly));
  renderProducts();
});
searchInput.addEventListener('input', renderProducts);
sortSelect.addEventListener('change', renderProducts);
dealsOnly.addEventListener('change', renderProducts);
document.querySelectorAll('[data-close-modal]').forEach(element => element.addEventListener('click', closeProduct));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !productModal.hidden) closeProduct(); });
const themeButton = document.querySelector('#themeButton');
const themeMenu = document.querySelector('#themeMenu');
themeButton.addEventListener('click', () => {
  themeMenu.hidden = !themeMenu.hidden;
  themeButton.setAttribute('aria-expanded', String(!themeMenu.hidden));
});
document.querySelectorAll('[data-theme-choice]').forEach(button => button.addEventListener('click', () => {
  const theme = button.dataset.themeChoice;
  document.documentElement.dataset.theme = theme;
  themeButton.dataset.theme = theme;
  document.querySelector('.theme-option.active')?.classList.remove('active');
  button.classList.add('active');
  localStorage.setItem('electro-finder-theme', theme);
  themeMenu.hidden = true;
  themeButton.setAttribute('aria-expanded', 'false');
}));
const savedTheme = localStorage.getItem('electro-finder-theme');
if (savedTheme) { document.documentElement.dataset.theme = savedTheme; themeButton.dataset.theme = savedTheme; document.querySelector('.theme-option.active')?.classList.remove('active'); document.querySelector(`[data-theme-choice="${savedTheme}"]`)?.classList.add('active'); }
document.addEventListener('click', event => { if (!event.target.closest('.theme-picker')) { themeMenu.hidden = true; themeButton.setAttribute('aria-expanded', 'false'); } });
updatePriceStatus();
setInterval(() => { updatePriceStatus(); renderProducts(); }, updateInterval);

document.querySelector('#newsletterForm').addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('#formMessage').textContent = 'You’re on the list. Watch your inbox.';
  event.target.reset();
});

document.addEventListener('keydown', event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    searchInput.focus();
  }
});

updateCategoryCounts();
renderProducts();
