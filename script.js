let newColor = document.getElementById("newColor");
let myDiv = document.getElementById("myDiv")
let addColor = document.getElementById("addColor");
const myColors = [];

addColor.addEventListener("click",function(){
    myColors.push(newColor.value)
    newBtn = document.createElement("button");
    newText = document.createTextNode(newColor.value);
    newBtn.appendChild(newText)
    myDiv.appendChild(newBtn)
    console.log(myColors)
})

