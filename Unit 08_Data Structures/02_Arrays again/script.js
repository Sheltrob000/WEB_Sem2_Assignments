// const numbers = []

// for (let i = 0; i < 10; i++) {
//     let num = Math.floor(Math.random() * 10) + 1;
//     if(num % 2 !== 0){
//         numbers.push(num);
//     }

// }

// document.getElementById("unsorted").innerHTML = numbers;

// //YOUDO:  finish the sort and print to the sorted id

const numbers = []


for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * 10) + 1;
    numbers.push(num);
}

function filterOutEvens(number) {
    return number % 2 === 1
}

let filteredNumbers = numbers.filter(filterOutEvens);


document.getElementById("unsorted").innerHTML = filteredNumbers;
