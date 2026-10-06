// Electricista Senatino — menú móvil (abrir/cerrar)
document.getElementById('burgerBtn').addEventListener('click',function(){
  document.getElementById('navlinks').classList.toggle('open');
});
document.querySelectorAll('.navlinks a').forEach(function(a){
  a.addEventListener('click',function(){document.getElementById('navlinks').classList.remove('open');});
});
