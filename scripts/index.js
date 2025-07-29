const listBox = document.querySelector('#user_list')
const plusBtn = document.querySelector('#plus_btn')
const closeBtn = document.querySelector('#close_btn')
const list = document.querySelector('.list')
const listLi = document.querySelector('.list li')
const listSpan = document.querySelector('.list_check span')
console.log(listBox, plusBtn, closeBtn, list, listLi, listSpan)

list.style.display ='none'

plusBtn.addEventListener('click',()=>{
    if(listBox.value == ''){
        alert('할 일을 입력하세요');
    }else{
        list.textContent = listBox.value;
    }
})

closeBtn.addEventListener('click',()=>{
    listLi.style.display = 'none'
})

