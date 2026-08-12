import { renderNavigation } from './components/Navigation.js';
import { renderConsumerView } from './views/ConsumerView.js';
import { renderProviderView } from './views/ProviderView.js';
import { renderBargainModal, clearModal } from './components/BargainModal.js';

let currentView = 'client';

function openBargainModal(name, title, budget) {
  renderBargainModal(name, title, budget, () => clearModal());
}

function updateRouter(view) {
  currentView = view;
  renderNavigation(currentView, updateRouter);

  if (currentView === 'client') {
    renderConsumerView(openBargainModal);
  } else {
    renderProviderView(openBargainModal);
  }
}

// Initial App Boot
updateRouter('client');
