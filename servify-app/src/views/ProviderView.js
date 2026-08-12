export function renderProviderView(onOpenBargain) {
  const mount = document.getElementById('view-mount');
  mount.innerHTML = `
    <div style="margin: 0 30px 24px; padding: 20px; background: var(--bg-surface); border-radius: 20px; box-shadow: var(--shadow-soft); display: flex; justify-content: space-between; align-items: center;">
      <div>
        <div style="font-size: 11px; font-weight: 700; color: var(--accent-red);">PRO DASHBOARD</div>
        <div style="font-size: 18px; font-weight: 700;">Live Job Feed</div>
      </div>
      <div style="text-align: right;">
        <div style="font-size: 11px; color: var(--text-gray);">Wallet</div>
        <div style="font-size: 20px; font-weight: 800; color: var(--text-black);">$840.00</div>
      </div>
    </div>

    <h2 class="section-title">Jobs Nearby Open for Quotes</h2>

    <div class="providers-stack">
      <div class="provider-card" style="flex-direction: column; align-items: flex-start; gap: 12px;">
        <div style="display: flex; justify-content: space-between; width: 100%;">
          <span style="font-size: 11px; font-weight: 700; color: var(--accent-red);">Escrow Guaranteed</span>
          <span style="font-size: 12px; color: var(--text-gray);">2 mins ago</span>
        </div>
        <div style="font-size: 16px; font-weight: 700;">Custom Oak Kitchen Cabinet</div>
        <div style="font-size: 13px; color: var(--text-gray);">Client Budget: $450.00</div>
        <button class="btn-primary" style="margin-bottom: 0;" id="job-bid-1">Counter / Accept Bid</button>
      </div>
    </div>
  `;

  document.getElementById('job-bid-1').addEventListener('click', () => {
    onOpenBargain('Client Request', 'Custom Oak Kitchen Cabinet', 450);
  });
}
