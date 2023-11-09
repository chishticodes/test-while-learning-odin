// simple for...of loop

const friends = ['hasan','sarim','Minhaj','Sajjad','hassan','mateen']

for (friend of friends){
    console.log(`My friend is ${friend}`);
}

// simple for loop with a condtitional statement
let sentence = "My friends are "
for (let i = 0; i<=friends.length;i++){
    if(i == friends.length-1){
        sentence += `and ${friends[i]}`;
        console.log(sentence);
    }else if(i == friends.length-2){
        sentence+=`${friends[i]} `
    }else{
        sentence+=`${friends[i]}, `
    }
}