console.log('My own app.js');




// fetch('http://localhost:3000/weather?address=boston').then((response) => {
//     response.json().then((data) => {
//         if(data.error){
//             console.log(data.error)
//         }else{
//             console.log(data.location);
//             console.log(data.forecast);
//         };
//     });
// });

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.getElementById('message-1');
const messageTwo = document.getElementById('message-2');


// messageOne.textContent = 'From Javascript';

messageTwo.textContent 
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value;

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = '';
    fetch('http://localhost:3000/weather?address= '+ location +'').then((response) => {
    response.json().then((data) => {
        if(data.error){
            messageOne.textContent = data.error
        }else{
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast;
        };
    });
});
});