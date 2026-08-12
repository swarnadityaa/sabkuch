export function renderConsumerView(onOpenBargain) {
  const mount = document.getElementById('view-mount');
  mount.innerHTML = `
    <section class="hero">
      <h1>Book Verified Pros or Set Your Own Price</h1>
      <p>Connect with background-checked local experts. Compare offers, bargain directly, and pay securely via Escrow.</p>
    </section>

    <div class="search-bar">
      <span style="font-size: 18px; margin-right: 8px; color: var(--text-gray);">🔍</span>
      <input type="text" placeholder="Try 'Carpenter'...">
      <button class="btn-red">Search</button>
    </div>

    <h2 class="section-title">Browse Popular Categories</h2>

    <div class="categories-spatial">
      <div class="icon-cluster">
        <div class="floating-icon" style="top:10px; left:10px; font-size:45px;">👨‍🍳</div>
        <div class="floating-icon" style="top:70px; right:0px; font-size:40px;">🖌️</div>
        <div class="floating-icon" style="bottom:0; left:30px; font-size:38px;">💈</div>
      </div>

      <div class="category-list">
        <div class="category-item"><div class="dot"></div> PRIVATE CHEF</div>
        <div class="category-item">CARPENTER</div>
        <div class="category-item">PAINTER</div>
        <div class="category-item">HOME CLEANER</div>
      </div>
    </div>

    <h2 class="section-title">Top Background-Verified Service Providers</h2>

    <div class="providers-stack">
      <div class="provider-card">
        <div class="pro-info">
          <div class="avatar">👩🏻</div>
          <div>
            <div style="font-size: 14px; font-weight: 700; text-transform: uppercase;">Elena Rostova</div>
            <div style="font-size: 11px; color: var(--accent-red); font-weight: 600;">✓ Verified Chef</div>
          </div>
        </div>
        <button class="btn-red-outline" id="pro-elena">Book & Bargain</button>
      </div>

      <div class="provider-card">
        <div class="pro-info">
          <div class="avatar">👨🏽‍🔧</div>
          <div>
            <div style="font-size: 14px; font-weight: 700; text-transform: uppercase;">Marcus Vance</div>
            <div style="font-size: 11px; color: var(--accent-red); font-weight: 600;">✓ Master Carpenter</div>
          </div>
        </div>
        <button class="btn-red-outline" id="pro-marcus">Book & Bargain</button>
      </div>
    </div>
  `;

  document.getElementById('pro-elena').addEventListener('click', () => {
    onOpenBargain('Elena Rostova', 'Private Dinner Event', 120);
  });

  document.getElementById('pro-marcus').addEventListener('click', () => {
    onOpenBargain('Marcus Vance', 'Custom Oak Cabinet Fitting', 450);
  });
}
