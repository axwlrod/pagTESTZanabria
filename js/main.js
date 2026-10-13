// ZAVAR Servicios Generales Garantizados — menú móvil (abrir/cerrar)
document.getElementById('burgerBtn').addEventListener('click',function(){
  var o=document.getElementById('navlinks').classList.toggle('open');this.setAttribute('aria-expanded',o);
});
document.querySelectorAll('.navlinks a').forEach(function(a){
  a.addEventListener('click',function(){document.getElementById('navlinks').classList.remove('open');});
});

/* Carrusel de galería */
(function(){
  var t=document.getElementById('track'),d=document.getElementById('dots');
  if(!t)return;
  var n=t.children.length;
  for(var i=0;i<n;i++)d.appendChild(document.createElement('i'));
  function cur(){return Math.round(t.scrollLeft/(t.clientWidth+16));}
  function mark(){var c=cur();var s=t.children[Math.max(0,Math.min(n-1,c))];if(s)t.style.height=s.offsetHeight+'px';[].forEach.call(d.children,function(e,i){e.className=i===c?'on':'';});}
  function go(k){t.scrollTo({left:Math.max(0,Math.min(n-1,k))*(t.clientWidth+16),behavior:'smooth'});}
  document.getElementById('prev').onclick=function(){go(cur()-1);};
  document.getElementById('next').onclick=function(){go(cur()+1);};
  t.addEventListener('scroll',mark);window.addEventListener('resize',mark);window.addEventListener('load',mark);mark();
})();
