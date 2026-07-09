import { renderProductCard } from "./renderProductCard.js";

export function renderProductGrid(products) {

    return `
        <section class="pos-products" aria-label="Daftar produk">
            <div class="product-grid">
                ${products
                    .map(renderProductCard)
                    .join("")}
            </div>
        </section>
    `;

}