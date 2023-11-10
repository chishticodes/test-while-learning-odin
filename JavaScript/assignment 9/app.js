const countContainer = document.querySelector(`.count-container`);
const countBtn = document.querySelector('.countdown-btn')

countBtn.addEventListener('click',countdown)

function countdown(){
    for(i=10;i>=0;i--){
        const para = document.createElement('p');
        para.textContent=`Countdown ${i}`;
        countContainer.append(para);
    }
    const para = document.createElement('p');
        para.textContent=`Blast Off`;
        countContainer.append(para);
}