import { renderPosWorkspace } from '../modules/pos/posWorkspace.js'

export function mountApp(rootElement) {
    rootElement.innerHTML = `
        <header class="mobile-header-bar" aria-label="Mobile status">
            <strong>D'CRUNCHYWAN POS</strong>
            <div class="mobile-status">
                <span>Online</span>
                <b>v2.3.0</b>
            </div>
        </header>

        <div class="app-shell">
            <aside class="app-sidebar" aria-label="Sidebar">
                <div class="brand-area">
                    <span class="status-badge">Online</span>
                    <span class="version-label">v2.3.0-Prod</span>
                </div>

                <nav class="sidebar-nav" aria-label="POS navigation">
                    <button class="nav-link is-active" type="button">
                        <span class="nav-icon" aria-hidden="true">$</span>
                        <span>Kasir</span>
                    </button>
                    <button class="nav-link" type="button">
                        <span class="nav-icon" aria-hidden="true">D</span>
                        <span>Dapur</span>
                    </button>
                    <button class="nav-link" type="button">
                        <span class="nav-icon" aria-hidden="true">S</span>
                        <span>Stok</span>
                    </button>
                    <button class="nav-link" type="button">
                        <span class="nav-icon" aria-hidden="true">K</span>
                        <span>Kas</span>
                    </button>
                    <button class="nav-link" type="button">
                        <span class="nav-icon" aria-hidden="true">R</span>
                        <span>Riwayat</span>
                    </button>
                    <button class="nav-link" type="button">
                        <span class="nav-icon" aria-hidden="true">#</span>
                        <span>Rekap</span>
                    </button>
                    <button class="nav-link nav-link-owner" type="button">
                        <span class="nav-icon" aria-hidden="true">G</span>
                        <span>Dashboard</span>
                    </button>
                </nav>

                <div class="owner-area">
                    <button class="owner-button" type="button">
                        <span class="nav-icon" aria-hidden="true">L</span>
                        <span>Owner</span>
                    </button>
                </div>
            </aside>

            <main class="app-main">
                ${renderPosWorkspace()}
            </main>

            <aside class="app-cart" aria-label="Cart">
                ${renderCartPanel()}
            </aside>

            <footer class="bottom-payment-bar" aria-label="Mobile cart and payment">
                ${renderMobileCartPanel()}
            </footer>
        </div>
    `
}

function renderCartPanel() {
    return `
        <div class="cart-box">
            <header class="cart-title">
                <span class="cart-title-icon" aria-hidden="true">$</span>
                <h2>Struk Kasir</h2>
            </header>

            <section class="cart-items-list" aria-label="Cart items">
                ${renderCartItems()}
            </section>

            <section class="cart-summary" aria-label="Payment summary">
                <div class="total-row">
                    <span>Total:</span>
                    <strong>Rp 55.000</strong>
                </div>

                <div class="cart-control-grid">
                    <label class="field-control field-small">
                        <span class="sr-only">Wadah</span>
                        <select>
                            <option>Takeout</option>
                            <option>Dine In</option>
                        </select>
                    </label>

                    <div class="discount-control" aria-label="Discount">
                        <button type="button">Rp</button>
                        <input type="number" placeholder="Potongan" />
                    </div>
                </div>

                <div class="payment-grid">
                    <label class="field-control">
                        <span class="sr-only">Metode bayar</span>
                        <select>
                            <option>Cash (Tunai)</option>
                            <option>QRIS</option>
                            <option>GrabFood</option>
                            <option>GoFood</option>
                            <option>ShopeeFood</option>
                        </select>
                    </label>

                    <label class="field-control">
                        <span class="sr-only">Uang bayar</span>
                        <input type="text" value="" placeholder="Klik Isi Uang Laci" readonly />
                    </label>
                </div>

                <div class="change-box">Kembali: Rp 0</div>

                <div class="cart-actions">
                    <button class="pay-button" type="button">BAYAR</button>
                    <button class="void-button" type="button" aria-label="Void transaksi terakhir">X</button>
                </div>
            </section>
        </div>
    `
}

function renderMobileCartPanel() {
    return `
        <div class="mobile-cart-items">
            ${renderCartItems()}
        </div>

        <div class="mobile-payment-row">
            <div class="mobile-total">
                <span>Total:</span>
                <strong>Rp 55.000</strong>
            </div>
            <select aria-label="Metode bayar">
                <option>Cash (Tunai)</option>
                <option>QRIS</option>
            </select>
            <button class="pay-button" type="button">BAYAR</button>
            <button class="void-button" type="button" aria-label="Void transaksi terakhir">X</button>
        </div>
    `
}

function renderCartItems() {
    return `
        <article class="cart-item-row">
            <strong>AYAM GEPREK ORIGINAL</strong>
            <span>@15.000</span>
            <input type="number" value="2" aria-label="Jumlah Ayam Geprek Original" />
        </article>
        <article class="cart-item-row">
            <strong>ES TEH MANIS</strong>
            <span>@5.000</span>
            <input type="number" value="1" aria-label="Jumlah Es Teh Manis" />
        </article>
        <article class="cart-item-row">
            <strong>KENTANG GORENG</strong>
            <span>@10.000</span>
            <input type="number" value="2" aria-label="Jumlah Kentang Goreng" />
        </article>
    `
}
