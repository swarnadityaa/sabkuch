import createBargainModal from '../components/BargainModal.js';

export default function createConsumerView(){
  const root = document.createElement('div');
  root.className = 'card';

  const header = document.createElement('div');
  header.className = 'header';
  header.innerHTML = '<h2>Consumer</h2><div class="small">Find providers and request services</div>';

  const list = document.createElement('div');
  list.style.marginTop = '12px';
  list.innerHTML = `
    <div style="display:flex;gap:12px;align-items:center">
      <div style="flex:1">Plumbing — Fix sink</div>
      <div><button data-action="bargain">Bargain</button></div>
    </div>
  `;

  root.appendChild(header);
  root.appendChild(list);

  list.addEventListener('click', (e)=>{
    const btn = e.target.closest('button');
    if(!btn) return;
    if(btn.dataset.action === 'bargain'){
      const modal = createBargainModal({onClose: ()=> modal.remove()});
      document.body.appendChild(modal);

      // small workaround so onClose can capture modal
      function modalRemover(){ modal.remove(); document.body.removeEventListener('click', modalRemover); }
    }
  });

  return root;
}
