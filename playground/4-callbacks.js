//Async call back function
// setTimeout(() => {
//   console.log('Two seconds are up');
// }, 2000);


// //sync callback function
// const names = ['Andrew', 'Jen', 'Jess'];
// const shortNames = names.filter((name) => {
//   return name.length <= 4;
// });

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0
//     }
  
//     callback(data)
//   }, 2000);
// };

//  geocode('Philadelphia', (data) => {
//   console.log(data);
//  });



//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

 
// const add = (a, b, callback) => {
//   setTimeout(() => {
//     const sum = a + b;
//     callback (sum);
//   }, 2000);
// };

// add(1, 4, (sum) => {
//   console.log(sum) // Should print: 5
// });

let scores = [68, 95, 54, 84, 77, 75, 63, 74, 69, 80, 71, 63];

let count = scores.filter(score => {
  if (score >= 70) {
    count++;
  }
});

console.log(count);