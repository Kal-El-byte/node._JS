console.log('Client side javascript is loading')

 

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get the vlue to be searched from the user
    const location = search.value

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';
    fetch('http://localhost:8080/weather?address=' + location ).then((response) => {
    response.json().then((data) => {
        if(data.error){
            messageTwo.textContent = data.error; //render error if error found
        }else{
            messageOne.textContent = data.location; //Show location
            messageTwo.textContent = data.forecast; //show forecast
        };
    });
});
});