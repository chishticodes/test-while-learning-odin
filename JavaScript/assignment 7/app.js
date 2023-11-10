// a program that search an array of string contacts to find the contact number using for...of loop
const contacts = [
    "Chris:2232322",
    "Sarah:3453456",
    "Bill:7654322",
    "Mary:9998769",
    "Dianne:9384975",
  ];


  const getName = document.getElementById('search-bar');
  const searchBtn = document.querySelector('.search-btn');
  const setNumber = document.querySelector('.show-number');

searchBtn.addEventListener('click',searchContact);

  function searchContact(){
    const inputName = getName.value.toLowerCase();
    getName.value='';
    getName.focus();
    
    for (contact of contacts){
    const splitContact = contact.split(":");
    if (splitContact[0].toLowerCase()==inputName){
        setNumber.textContent=`${splitContact[0]}'s number is ${splitContact[1]}`;
        break;
        
    }else{
          setNumber.textContent = `the number does not exist in the directory`;
    }
  }
}