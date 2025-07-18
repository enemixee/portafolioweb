function toggleMenu() {
  const menu2 = document.getElementById ('menu2');
  menu2.classList.toggle('show');
  document.body.style.overflow = 'hidden';
}

function toggleSubmenu(event){
  event.preventDefault();
  const parent = event.target.parentElement;
       parent.classList.toggle('active');

        
}
function closeMenu() {
  const menu2 = document.getElementById('menu2');
  menu2.classList.remove('show');              
  document.body.style.overflow = '';           
}
