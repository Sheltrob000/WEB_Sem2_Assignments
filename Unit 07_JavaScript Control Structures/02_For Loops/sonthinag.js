const manynums = ["hello", "no you", "this works now", "yayyyyyyyy"];
let i = 5;
let length = manynums.length;

for (let i = 0; i < length; i++){
    let num = manynums[i];
    document.getElementById("thing").innerHTML += num;
    document.getElementById("thing").innerHTML += "<br>"
}

const random = {
    hello: "hello the internet",
    why: "why are we still here, just to suffer",
    doom: "doom is eternal we will all die",
    goodbye: "i am over"
};

for (let x in random){
    document.getElementById("object").innerHTML += random[x];
    document.getElementById("object").innerHTML += "<br>"
}


// document.getElementById("hello").innerHTML = "there";