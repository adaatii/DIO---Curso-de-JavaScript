const maca = {
    value: 2,
}
const laranja = {
    value: 3,
}

const nums = [1,2];

function mapComThis(arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

console.log ('Quando for maçã', mapComThis(nums, maca));
console.log ('Quando for laranja', mapComThis(nums, laranja));


    