let a = document.querySelector('.ul-wrapper')
let b = document.querySelector('.img-wrapper')
let portwrap = document.querySelector('.ul-port-wrapper')
let c = document.querySelector('.port-link')


b.addEventListener('click',function(fn1){
    a.style.display = 'flex'
    b.style.display = 'none'
})

c.addEventListener('click', function(){
    a.style.display = 'none'
    portwrap.style.display = 'block'
})
