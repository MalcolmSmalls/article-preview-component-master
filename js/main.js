const share = document.querySelector('.share')
const shares = document.querySelector('.shares')

share.addEventListener('click', ()=>{
    shares.classList.toggle('active')
})
