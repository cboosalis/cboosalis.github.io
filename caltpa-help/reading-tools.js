(() => {
  'use strict';
  const dialog=document.getElementById('imageDialog'),img=document.getElementById('largeImage'),viewport=document.getElementById('imageViewport');
  let scale=1,opener=null;
  function zoom(){img.style.width=`${scale*100}%`;img.style.maxWidth='none';img.classList.toggle('zoomed',scale>1);document.getElementById('imageZoomOut').disabled=scale<=1;document.getElementById('imageZoomIn').disabled=scale>=4;}
  document.addEventListener('click',event=>{
    const size=event.target.closest('[data-text-size]');
    if(size){const value=Number(size.dataset.textSize);document.documentElement.style.setProperty('--text-size',value+'px');try{localStorage.setItem('caltpa-text-size',String(value));}catch{}document.querySelectorAll('[data-text-size]').forEach(b=>b.setAttribute('aria-pressed',String(b===size)));document.getElementById('smaller').disabled=value<=16;document.getElementById('larger').disabled=value>=24;return;}
    const button=event.target.closest('[data-image]');if(!button)return;
    opener=button;scale=1;zoom();img.src=button.dataset.image;img.alt=button.querySelector('img')?.alt||button.dataset.caption||'Expanded teaching image';document.getElementById('imageTitle').textContent='Image viewer';document.getElementById('imageCaption').textContent=button.dataset.caption||img.alt;dialog.showModal();viewport.scrollTo(0,0);document.getElementById('imageClose').focus();
  });
  document.getElementById('imageZoomIn').onclick=()=>{scale=Math.min(4,scale+.5);zoom();};
  document.getElementById('imageZoomOut').onclick=()=>{scale=Math.max(1,scale-.5);zoom();};
  document.getElementById('imageFit').onclick=()=>{scale=1;zoom();viewport.scrollTo(0,0);};
  document.getElementById('imageClose').onclick=()=>dialog.close();
  document.getElementById('imageFullscreen').onclick=async()=>{
    try{if(document.fullscreenElement)await document.exitFullscreen();else if(dialog.requestFullscreen)await dialog.requestFullscreen();else dialog.classList.toggle('fullscreen-fallback');}catch{dialog.classList.toggle('fullscreen-fallback');}
  };
  dialog.addEventListener('close',()=>{if(document.fullscreenElement===dialog)document.exitFullscreen().catch(()=>{});opener?.focus();});
  dialog.addEventListener('click',ev=>{if(ev.target===dialog){const r=dialog.getBoundingClientRect();if(ev.clientX<r.left||ev.clientX>r.right||ev.clientY<r.top||ev.clientY>r.bottom)dialog.close();}});
  // Old instructional figures gain the same viewer as new graphics and templates.
  const main=document.querySelector('main');
  const addImageControls=()=>{
    for(const figure of main.querySelectorAll('figure')){
      const im=figure.querySelector('img');if(!im||im.closest('button,a'))continue;
      const b=document.createElement('button');b.type='button';b.className='image-expand';b.dataset.image=im.getAttribute('src');b.dataset.caption=figure.querySelector('figcaption')?.textContent||im.alt;b.setAttribute('aria-label','Enlarge '+im.alt);im.before(b);b.append(im);
      const hint=document.createElement('span');hint.className='expand-label';hint.textContent='Full screen';b.append(hint);
    }
  };
  new MutationObserver(addImageControls).observe(main,{childList:true,subtree:true});addImageControls();
})();
