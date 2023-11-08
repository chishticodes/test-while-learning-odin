const btn = document.querySelector('.btn')
const greeting = document.querySelector('#greeting')

btn.addEventListener("click", greet);


function greet(){
    let name = prompt("whats your name");
    greeting.textContent = `Nice to meet you ${name}`
}