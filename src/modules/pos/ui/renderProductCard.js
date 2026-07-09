import { formatCurrency } from "../../../utils/currency.js";

export function renderProductCard(product) {

    return `
        <article class="product-card">
            <div class="product-media">
                <span>${product.icon}</span>
            </div>

            <div class="product-body">

                <h3>${product.name}</h3>

                <p>${formatCurrency(product.price)}</p>

            </div>
        </article>
    `;

}