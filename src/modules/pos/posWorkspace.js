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
import { renderProductCard } from "./ui/renderProductCard.js";
import { renderProductGrid } from "./ui/renderProductGrid.js";
import { renderSearchBar } from "./ui/renderSearchBar.js";

const products = productRepository.getAll();

posStore.setProducts(products);


export function renderPosWorkspace() {

    const { filteredProducts } = posStore.getState();

    return `
        ${renderSearchBar(categoryLevelOne)}

        ${renderProductGrid(filteredProducts)}

        
    `
}
