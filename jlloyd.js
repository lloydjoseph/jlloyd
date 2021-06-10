function openNavbar() {
    document.querySelector('#navbar-open').style.display = 'block';
}

function closeNavbar() {
    document.querySelector('#navbar-open').style.display = 'none';
}

navbarLinks = document.querySelectorAll('.navbar-link');
for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener('click', () => {
        document.querySelector('#navbar-open').style.display = 'none';
    })
}