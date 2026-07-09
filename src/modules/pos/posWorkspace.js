const categoryLevelOne = [
    'Semua',
    'Ayam',
    'Minuman',
    'Mamah',
    'Paket',
    'Snack'
];

import { productRepository } from "../../services/productRepository.js";
import { posStore } from "../../stores/posStore.js";
import { formatCurrency } from "../../utils/currency.js";

const products = productRepository.getAll();

posStore.setProducts(products);


export function renderPosWorkspace() {

    const { filteredProducts } = posStore.getState();

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
            <div class="product-grid">
                ${posStore.getState().filteredProducts.map((product) => `
                    <article class="product-card">
                        <span class="product-action" aria-hidden="true">*</span>
                        <div class="product-media" aria-hidden="true">
                            <span>${product.icon}</span>
                        </div>
                        <div class="product-body">
                            <h3>${product.name}</h3>
                            <p>${formatCurrency(product.price)}</p>
                        </div>
                    </article>
                `).join('')}
            </div>
        </section>
    `
}
