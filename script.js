const toggleBar = document.getElementsByClassName('toggle-bar')[0]
const navbarLinks = document.getElementsByClassName('flexbar')[0]

toggleBar.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})