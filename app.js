const menuBtn = document.querySelector('.nav--menu');
const navList = document.querySelector('.nav--list');
const dropDown = document.querySelector('.nav--list__item:first-child');
const dropMenu = document.querySelector('.nav--list__item__dropmenu');
const arrow = document.querySelector('.fa-chevron-down');
const circle = document.querySelector('.circle');

const reportWindowSize = () => {
    window.innerWidth > 900 ? navList.classList.remove('hide') : navList.classList.add('hide');
}

window.addEventListener('resize', reportWindowSize);


menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    navList.classList.toggle('hide');
    circle.classList.toggle('hide');
});

dropDown.addEventListener('mouseover', () => {
    showDropDown();
    
});
dropDown.addEventListener('mouseleave', () => {
    hideDropDown();
});
dropMenu.addEventListener('mouseover', () => {
    showDropDown();;
});
dropMenu.addEventListener('mouseleave', () => {
    hideDropDown();
});

const showDropDown = () => {
    dropMenu.style.display = 'block';
    dropMenu.style.transform = 'scaleY(1)';
    arrow.className = 'fas fa-chevron-up';
}
const hideDropDown = () => {
    dropMenu.style.display = 'none';
    dropMenu.style.transform = 'scaleY(0)';
    arrow.className = 'fas fa-chevron-down';
}