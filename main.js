// Display value 
let value = document.querySelector('.display');

count = 0

// buttons

let btn = document.querySelectorAll('.btn')
// console.log(btn)

// each loop on button 

btn.forEach(function(items) {
    console.log(items)
    items.addEventListener('click', function(e){

        let style = e.target.classList
        if(style.contains('decrease')){
            count--
            
        }
        else if (style.contains('increase')) {
            count++ 
        }else{
            count = 0;
        }
         value.textContent = count;
    } )
})