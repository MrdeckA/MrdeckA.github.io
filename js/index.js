const hamburger = document.getElementById('hamburger')
const items = document.getElementById('items')
const navigationBar = document.getElementById('navigation-bar')
hamburger.addEventListener('click', () => {
    items.classList.toggle('displayed')
    hamburger.classList.toggle('hamburger-border')
    navigationBar.classList.toggle('border-bottom')
})

