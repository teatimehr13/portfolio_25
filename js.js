document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navOverlay = document.querySelector('.nav-overlay');

    hamburgerMenu.addEventListener('click', function () {
        this.classList.toggle('active');
        navOverlay.classList.toggle('open');
    });

    const menuItems = document.querySelectorAll('.menu-item a');
    menuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            hamburgerMenu.classList.remove('active');
            navOverlay.classList.remove('open');
        });
    });


    let navToSections = document.querySelectorAll('[data-nav]');
    navToSections.forEach(el => {
        let target_dom = document.querySelector(`#section-${el.dataset.nav}`);
        el.addEventListener('click', (e) => {
            e.preventDefault();
            target_dom.scrollIntoView({
                behavior: 'smooth',
            });
        })

    })

});