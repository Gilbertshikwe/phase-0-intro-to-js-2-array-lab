// Write your solution here 
const cats = ["Milo", "Otis", "Garfield"]
cats.length = 0
cats.push('Milo', 'Otis', 'Garfield')
function destructivelyAppendCat(name){
    cats.push("Ralph")
}
function destructivelyPrependCat(name){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    let newArray = cats.slice()
    newArray.push(name)
    return newArray
}
function prependCat(name){
    let newArray = cats.slice()
    newArray.unshift(name)
    return newArray
}
function removeLastCat(){
    return cats.slice(0,cats.length -1)
}
function removeFirstCat(){
    return cats.slice(1)
}