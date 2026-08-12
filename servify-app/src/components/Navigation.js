export function renderNavigation(currentView, onViewChange) {
  const mount = document.getElementById('navigation-mount');
  mount.innerHTML = `
    <div class="segmented-control">
      <button class="seg-btn ${currentView === 'client' ? 'active' : ''}" id="nav-client">Client View</button>
      <button class="seg-btn ${currentView === 'provider' ? 'active' : ''}" id="nav-provider">Provider View</button>
    </div>
  `;

  document.getElementById('nav-client').addEventListener('click', () => onViewChange('client'));
  document.getElementById('nav-provider').addEventListener('click', () => onViewChange('provider'));
}
