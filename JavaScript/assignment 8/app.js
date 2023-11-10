// this program takes an integer and shows all the whole square integers that come between 1 to that number

const getNumber = document.getElementById('get-number');
const sqrBtn = document.querySelector('.generate-square-btn');
let setIntSqr = document.querySelector('.set-integer-square');


sqrBtn.addEventListener('click',showSquares)

function showSquares(){
    let result = "Output: ";
    const getNumValue= getNumber.value; 
    for(i=1;i<=getNumValue;i++){
        const getSqrt = Math.sqrt(i);
        const getSqrtFloor = Math.floor(getSqrt);
        if(getSqrt===getSqrtFloor){
            // console.log(i);
            result+=`${i}, `
            
            
        }
        
    }
    // console.log(result);
    if(result!=="Output: "){
        result.slice(0,-2);
        setIntSqr.textContent = result;

    }else{
        setIntSqr.textContent = "Output: No Integer Squares were found"
    }

    }