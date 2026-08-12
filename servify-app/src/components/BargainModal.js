export default function createBargainModal({onClose} = {}){
  const wrap = document.createElement('div');
  wrap.className = 'modal';

  const dialog = document.createElement('div');
  dialog.className = 'dialog card';
  dialog.innerHTML = `
    <h3>Bargain</h3>
    <p class="small">Propose a price or terms to the provider.</p>
    <div style="margin-top:12px;display:flex;gap:8px;justify-content:flex-end">
      <button data-action="cancel">Cancel</button>
      <button data-action="send">Send</button>
    </div>
  `;

  wrap.appendChild(dialog);

  wrap.addEventListener('click', (e)=>{
    if(e.target === wrap || e.target.dataset.action === 'cancel') onClose && onClose();
    if(e.target.dataset.action === 'send'){
      // placeholder: in real app you'd gather form values
      alert('Bargain sent (placeholder)');
      onClose && onClose();
    }
  });

  return wrap;
}
