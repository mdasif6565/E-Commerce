var sideMenu1 = document.getElementById('side-menu-1');
function openMenu1() {
    sideMenu1.classList.remove('right-[-250px]');
    sideMenu1.classList.add('right-0');
}

function closeMenu1() {
    sideMenu1.classList.remove('right-0');
    sideMenu1.classList.add('right-[-250px]');
}

var sideMenu2 = document.getElementById('side-menu-2');
function openMenu2() {
    sideMenu2.classList.remove('left-[-250px]');
    sideMenu2.classList.add('left-0');
}

function closeMenu2() {
    sideMenu2.classList.remove('left-0');
    sideMenu2.classList.add('left-[-250px]');
}