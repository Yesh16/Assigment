//using map function
Array.prototype.myMap = function(callback) { 
    const result = []; 
    for (let i = 0; i < this.length; i++) {
         result.push(callback(this[i], i, this)); 
        } 
        return result; 
};

//using Reduce function
Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};

//using Filter function
Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

//using Flat function 
Array.prototype.myFlatMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        const mappedValue = callback(this[i], i, this);
        result.push(...mappedValue);
    }
    return result;
};


const arr = [1, 2, 3, 4, 5];

const mapped = arr.myMap(x => x * 2);
const reduced = arr.myReduce((acc, x) => acc + x, 0);
const filtered = arr.myFilter(x => x > 2);
const flatMapped = arr.myFlatMap(x => [x, x * 2]);

console.log(mapped); // [2, 4, 6, 8, 10]
console.log(reduced); // 15
console.log(filtered); // [3, 4, 5]
console.log(flatMapped); // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]
