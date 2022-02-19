const signIns = document.querySelectorAll(`.js-btn`)
const modal = document.querySelector(`.js-modal`)
const modalContainer = document.querySelector(`.js-modal-container`)
const modalClose = document.querySelector(`.js-modal-close`)

function showSignIns(){
    modal.classList.add(`open`)
}
function hideSignIns(){
    modal.classList.remove(`open`)
}
for(const signIn of signIns){
    signIn.addEventListener(`click`, showSignIns)
}
modalClose.addEventListener(`click`, hideSignIns)

modal.addEventListener(`click`, hideSignIns)

modalContainer.addEventListener('click', function (event) { // hàm có biến event, không cần gọi hàm ra như trên
    event.stopPropagation()   //event làm ngăn chặn hành vi mặc định
})


