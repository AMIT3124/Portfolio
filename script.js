
AOS.init();
function responsiveNavbar() {
    const navbarlink = document.getElementsByClassName('navlink');
    for (let i = 0; i < navbarlink.length; i++) {
        if (navbarlink[i].style.display === 'none') {
            navbarlink[i].style.display = 'block'
        } else {
            navbarlink[i].style.display = 'none'
        }
    }

}