

import { renderCategoryBar } from "./renderCategoryBar.js";
export function renderSearchBar(categories) {
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

           ${renderCategoryBar(categories)}
        </header>

    `;

}