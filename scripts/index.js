const listBox = document.querySelector('#user_list')
const plusBtn = document.querySelector('#plus_btn')
const closeBtn = document.querySelector('#close_btn')
const listLi = document.querySelector('.list li')
console.log(listBox, plusBtn, closeBtn, listLi)

plusBtn.addEventListener('click',()=>{
    if(listBox.value == ''){
        alert('할 일을 입력하세요');
    }
})

closeBtn.addEventListener('click',()=>{
    listLi.style.display = 'none'
})