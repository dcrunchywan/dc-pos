const categoryLevelOne = ['Semua', 'Ayam', 'Minuman', 'Mamah', 'Paket', 'Snack']
const categoryLevelTwo = ['Semua Sub', 'Geprek', 'Original', 'Es Teh', 'Kopi']

const dummyProducts = [
    { name: 'Ayam Geprek Original', category: 'Ayam', price: 'Rp 15.000', icon: 'AG' },
    { name: 'Ayam Geprek Keju', category: 'Ayam', price: 'Rp 18.000', icon: 'AK' },
    { name: 'Ayam Crispy', category: 'Ayam', price: 'Rp 13.000', icon: 'AC' },
    { name: 'Nasi Ayam Paket', category: 'Paket', price: 'Rp 20.000', icon: 'NP' },
    { name: 'Mie Geprek', category: 'Mamah', price: 'Rp 14.000', icon: 'MG' },
    { name: 'Nasi Goreng Mamah', category: 'Mamah', price: 'Rp 17.000', icon: 'NG' },
    { name: 'Es Teh Manis', category: 'Minuman', price: 'Rp 5.000', icon: 'ET' },
    { name: 'Es Jeruk', category: 'Minuman', price: 'Rp 7.000', icon: 'EJ' },
    { name: 'Kopi Susu', category: 'Minuman', price: 'Rp 8.000', icon: 'KS' },
    { name: 'Nutrisari Dingin', category: 'Minuman', price: 'Rp 6.000', icon: 'ND' },
    { name: 'Kentang Goreng', category: 'Snack', price: 'Rp 10.000', icon: 'KG' },
    { name: 'Sosis Crispy', category: 'Snack', price: 'Rp 9.000', icon: 'SC' },
]

export function renderPosWorkspace() {
    return `
        <header class="pos-toolbar" aria-label="POS controls">
            <div class="pos-toolbar-row">
                <label class="pos-search" for="menuSearchInput">
                    <span class="pos-search-icon" aria-hidden="true"></span>
                    <input id="menuSearchInput" type="search" placeholder="Cari nama menu..." />
                </label>

                <label class="bypass-toggle" for="bypassModeToggle">
                    <input id="bypassModeToggle" type="checkbox" />
                    <span class="bypass-toggle-track" aria-hidden="true"></span>
                    <span class="bypass-toggle-label">BYPASS TUNAI</span>
                </label>
            </div>

            <nav class="category-chip-row" aria-label="Kategori utama">
                ${categoryLevelOne.map((category, index) => `
                    <button class="category-chip ${index === 0 ? 'is-active' : ''}" type="button">${category}</button>
                `).join('')}
            </nav>
        </header>

        <section class="pos-products" aria-label="Daftar produk">
            <nav class="subcategory-chip-row" aria-label="Sub kategori">
                ${categoryLevelTwo.map((category, index) => `
                    <button class="subcategory-chip ${index === 0 ? 'is-active' : ''}" type="button">${category}</button>
                `).join('')}
            </nav>

            <div class="product-grid">
                ${dummyProducts.map((product) => `
                    <article class="product-card">
                        <span class="product-action" aria-hidden="true">*</span>
                        <div class="product-media" aria-hidden="true">
                            <span>${product.icon}</span>
                        </div>
                        <div class="product-body">
                            <span class="product-category">${product.category}</span>
                            <h3>${product.name}</h3>
                            <p>${product.price}</p>
                        </div>
                    </article>
                `).join('')}
            </div>
        </section>
    `
}
