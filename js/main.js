$(function() {
    $('.open-menu').click(function (e) {
        $('.nav-menu').toggleClass('show-menu')
    })
    $('ul.nav li a').click(function (e) {
        e.preventDefault();
        $('.nav-menu').removeClass('show-menu')
    })
});

const openMenu = document.querySelector('.open-menu');

openMenu.addEventListener('click', () => {
    openMenu.classList.toggle('active');
})