var label = document.querySelector('#label')
var btnAdd = document.querySelector('#btnAdd')
var btnRemove = document.querySelector('#btnRemove')
var body = document.querySelector('body')
var error = document.querySelector('h4')


btnAdd.addEventListener('click', function(){
    if(label.value.trim()===''){
        error.textContent = 'Please enter a label'
        error.style.display = 'block'
    }
    else{
        error.style.display = 'none'
        
        var li = document.createElement('li')
        li.textContent = label.value
        body.appendChild(li)


    }
    label.value = ''
})

btnRemove.addEventListener('click', function(){
    if(body.children.length>0){
        body.removeChild(body.lastChild)
    }
})