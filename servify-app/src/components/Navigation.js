export default function createNavigation(items = []){
  const nav = document.createElement('nav');
  nav.className = 'nav';

  items.forEach(i=>{
    const btn = document.createElement('button');
    btn.textContent = i.label;
    btn.dataset.view = i.id;
    if(i.id === 'consumer') btn.classList.add('active');
    nav.appendChild(btn);
  });

  return nav;
}
