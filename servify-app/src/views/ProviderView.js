export default function createProviderView(){
  const root = document.createElement('div');
  root.className = 'card';

  const header = document.createElement('div');
  header.className = 'header';
  header.innerHTML = '<h2>Provider</h2><div class="small">Manage your services and offers</div>';

  const content = document.createElement('div');
  content.style.marginTop = '12px';
  content.innerHTML = `
    <div>
      <p class="small">No active requests yet.</p>
    </div>
  `;

  root.appendChild(header);
  root.appendChild(content);

  return root;
}
