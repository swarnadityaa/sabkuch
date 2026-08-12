import createNavigation from './components/Navigation.js';
import createConsumerView from './views/ConsumerView.js';
import createProviderView from './views/ProviderView.js';

const app = document.getElementById('app');

function mount() {
  const container = document.createElement('div');
  container.className = 'container';

  const nav = createNavigation([{
    id: 'consumer',
    label: 'Consumer View'
  },{
    id: 'provider',
    label: 'Provider View'
  }]);

  container.appendChild(nav);

  const viewRoot = document.createElement('div');
  viewRoot.id = 'view-root';
  container.appendChild(viewRoot);

  app.appendChild(container);

  function showView(id){
    viewRoot.innerHTML = '';
    if(id === 'consumer') viewRoot.appendChild(createConsumerView());
    if(id === 'provider') viewRoot.appendChild(createProviderView());

    // update active button
    nav.querySelectorAll('button').forEach(b => b.classList.toggle('active', b.dataset.view === id));
  }

  // initial
  showView('consumer');

  // attach listeners
  nav.addEventListener('click', (e)=>{
    const b = e.target.closest('button');
    if(!b) return;
    showView(b.dataset.view);
  });
}

window.addEventListener('DOMContentLoaded', mount);
