let countpeople = document.getElementById("countpeople")
console.log(countpeople)

let count = 0
function increment(){
    count  = count +1
    countpeople.innerText=count
}