const header = document.querySelector('.header');
const checkbox = header.querySelector('.burger__hidden-checkbox');
const headerNavigation = header.querySelector('.header__navigation');
const headerLink = header.querySelectorAll('.header__link');

checkbox.addEventListener('change', ()=> {
  if(checkbox.checked) {
  header.classList.add('header_size_fullscreen')
  headerNavigation.classList.remove('hidden');

  headerLink.forEach((item)=>{
    item.classList.remove('link');
    item.classList.add('button');
  });
} else {
  header.classList.remove('header_size_fullscreen');
  headerNavigation.classList.add('hidden');
  headerLink.forEach((item)=>{
    item.classList.remove('button');
    item.classList.add('link');
  });
}
})

const toggleNavigation = () => {
  if (window.innerWidth < 600) {
    headerNavigation.classList.add('hidden');
  } else {
    headerNavigation.classList.remove('hidden');
  }
}

toggleNavigation();

window.addEventListener('resize', ()=> {
  toggleNavigation();
})

