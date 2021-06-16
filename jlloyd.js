// Opens the navbar on mobile
function openNavbar() {
    document.querySelector('#navbar-open').style.display = 'block';
}

// Closes the navbar on mobile
function closeNavbar() {
    document.querySelector('#navbar-open').style.display = 'none';
}

// Closes the navbar when a link is clicked
navbarLinks = document.querySelectorAll('.navbar-link');
for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener('click', () => {
        document.querySelector('#navbar-open').style.display = 'none';
    })
}