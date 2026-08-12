export function renderBargainModal(proName, jobTitle, baseBudget, onClose) {
  const mount = document.getElementById('modal-mount');
  let currentPrice = baseBudget;

  mount.innerHTML = `
    <div class="modal-overlay" id="modal-backdrop">
      <div class="modal-card">
        <div class="drag-pill"></div>
        <div style="margin-bottom: 20px;">
          <h3 style="font-size: 18px; font-weight: 700;">${jobTitle}</h3>
          <p style="font-size: 13px; color: var(--text-gray);">Negotiating with ${proName}</p>
        </div>

        <div class="negotiation-arena">
          <div style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: var(--text-gray);">Your Counter Offer</div>
          <div class="price-input-wrapper">
            <span style="font-size: 32px; font-weight: 600;">$</span>
            <input type="text" class="price-input" id="modal-price" value="${currentPrice}">
          </div>
          <div class="adjustment-controls">
            <button class="adj-btn" id="adj-minus">- $10</button>
            <button class="adj-btn" id="adj-plus10">+ $10</button>
            <button class="adj-btn" id="adj-plus50">+ $50</button>
          </div>
        </div>

        <button class="btn-primary" id="btn-submit-counter">Send Counter Offer</button>
        <button class="btn-secondary" id="btn-close-modal">Cancel</button>
      </div>
    </div>
  `;

  const priceInput = document.getElementById('modal-price');
  
  const updatePrice = (delta) => {
    let val = parseInt(priceInput.value) || 0;
    val = Math.max(0, val + delta);
    priceInput.value = val;
  };

  document.getElementById('adj-minus').addEventListener('click', () => updatePrice(-10));
  document.getElementById('adj-plus10').addEventListener('click', () => updatePrice(10));
  document.getElementById('adj-plus50').addEventListener('click', () => updatePrice(50));

  document.getElementById('btn-submit-counter').addEventListener('click', () => {
    alert(`Counter offer of $${priceInput.value} sent to ${proName}!`);
    onClose();
  });

  document.getElementById('btn-close-modal').addEventListener('click', onClose);
}

export function clearModal() {
  document.getElementById('modal-mount').innerHTML = '';
}
