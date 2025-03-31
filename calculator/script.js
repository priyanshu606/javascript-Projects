let string = ""
let buttons = document.querySelectorAll('.button')
buttons.forEach(function(button){
    button.addEventListener('click',()=>{
        if(button.innerHTML === '='){
            string = eval(string)
            document.querySelector('.input').value = string;
        }else if(button.innerHTML === 'C'){
            string = "";
            document.querySelector('.input').value = string;
        }
        else{
            string = string+button.innerHTML
            document.querySelector('.input').value = string;
        }
      
    })
})
