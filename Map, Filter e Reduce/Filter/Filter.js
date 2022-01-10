const meuArray = [7, 30, 2, 4, 55, 23, 6]

function filterPares(arr) {
    return arr.filter(callback)    
}

function callback(item) {
    return item % 2 ===0; 
    
}

console.log(filterPares(meuArray));