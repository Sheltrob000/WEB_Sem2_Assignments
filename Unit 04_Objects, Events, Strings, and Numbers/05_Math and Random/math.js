function takeSquareRoot() {
    let number = +document.getElementById("input1").value;
    

    let squareRoot = Math.sqrt(number);
    document.getElementById("result").innerHTML = squareRoot;
    
}

// Make another function for takeAbsoluteValue
function takeAbsoluteValue() {
    let number = +document.getElementById("input1").value;

    let abs = Math.abs(number);
    document.getElementById("result").innerHTML = abs;
}

function takelog() {
    let number = +document.getElementById("input1").value;

    let lognum = Math.log10(number);
    document.getElementById("result").innerHTML = lognum;
}

function takemax() {
    let numbe1 = +document.getElementById("input1").value;
    let numbe2 = +document.getElementById("input2").value;


    let max = Math.max(numbe1, numbe2);
    document.getElementById("result").innerHTML = max
}