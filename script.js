// const popup = document.querySelector('.popup');
// const close = document.querySelector('.close');

// window.onload = function(){
//     setTimeout(function(){
//         popup.style.display = "block";
//         //Add some time delay to show popup
//     }, 2000)
// }

// close.addEventListener('click', () => {
//     popup.style.display = "none";
// })

// $(document).ready(function(){
//     setTimeout(function(){
//         $('#popUpMain').css('display','block');
//     }, 1000);
// });

const popup = document.querySelector('.popup');
const close = document.querySelector('.close');

window.onload = function(){
    setTimeout(function(){
        popup.style.display = "block";
        //Add some time delay to show popup
    }, 2000)
}
close.addEventListener('click', () => {
    popup.style.display = "none";
})