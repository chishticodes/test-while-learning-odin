const btn = document.querySelector('.btn')
const state = document.getElementById('state')

btn.addEventListener("click", toggleState)

function toggleState(){
    if(btn.textContent=='Start Machine'){
        btn.textContent = "stop machine"
        state.textContent = 'machine has strated'
    }
    else {
        btn.textContent = "start machine"
        state.textContent = 'machine has stopped'
    }
}