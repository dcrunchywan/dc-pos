export function renderCategoryBar(categories) {


 return `
<nav class="category-chip-row" aria-label="Kategori utama">
                ${categories.map((category, index) => `
                    <button class="category-chip ${index === 0 ? "is-active" : ""}" type="button">
                        ${category}
                    </button>
                `).join("")}
            </nav>

         `;

}