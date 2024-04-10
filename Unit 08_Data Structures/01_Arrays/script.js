const numbers = []

for(let i = 0; i < 10; i++){
    let num = Math.floor(Math.random() * 10) + 1;
    numbers.push(num);
}

document.getElementById("unsorted").innerHTML = numbers;

const sorted = numbers.sort();

document.getElementById("sorted").innerHTML = sorted;

//YOUDO:  finish the sort and print to the sorted id

