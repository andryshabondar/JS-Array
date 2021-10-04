function arrCopy(arr){
    let newArr = [];
    return newArr = arr.slice();
}
const arr1 = arrCopy([1,2,3])
console.log(arr1)

const arr2 = arrCopy([1, 2, 3, [10, 20]])
console.log(arr2)


// — Напишіть функцию arrCopy(arr), яка копією всі значення з переданого масиву і повертає новий масив не змінюючи оригінал arr.
// - const arr1 = arrCopy([1,2,3]) – запише в змінну масив [1,2,3].
// - const arr2 = arrCopy([1,2,3,[10,20]]) – запише в змінну масив [1,2,3,[10,20]].
