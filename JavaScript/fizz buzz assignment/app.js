let count = 0
for(count=1; count<=100;count++){
    if(count%5==0 && count%3==0 ){
        console.log("fizz buzz")
    }
    else if(count%3==0){
        console.log("fizz")
    } else if(count%5==0){
        console.log("buzz")
    }else{
        console.log(count);
    }
}


