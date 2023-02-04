const hamburger = document.getElementById('hamburger')
const items = document.getElementById('items')
const navigationBar = document.getElementById('navigation-bar')
const main=document.getElementById('main')
/* 
let navActive='homeNav'
const homenav=document.getElementById('homeNav')
const aboutNav=document.getElementById('aboutNav')
const servicesNav=document.getElementById('servicesNav')
const workNav=document.getElementById('workNav')
const blogNav=document.getElementById('blogNav')
const contactNav=document.getElementById('contactNav')

homenav.addEventListener('click', ()=>{
    homenav.classList.toggle('active')  
    const m=homenav.getElementsByTagName('a').classList.toggle('atives')

})
aboutNav.addEventListener('click', ()=>{
    aboutNav.classList.toggle('active')  
    const m=aboutNav.getElementsByTagName('a').classList.toggle('atives')
    
})

servicesNav.addEventListener('click', ()=>{
    
})

workNav.addEventListener('click', ()=>{
    
})

blogNav.addEventListener('click', ()=>{
 
})
contactNav.addEventListener('click', ()=>{
    
})

 */



hamburger.addEventListener('click', () => {
    items.classList.toggle('displayed')
    hamburger.classList.toggle('hamburger-border')
    navigationBar.classList.toggle('border-bottom')
    main.classList.toggle('display-none')
})

