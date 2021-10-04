function arrToString(arr) {
    return arr.map (elem => elem.toString())
}
let arr1 = arrToString([1, 2, 3])
console.log(arr1)

let arr2 = arrToString([10,200,3333])
console.log(arr2)


// — Напишіть функцію arrToString(arr), яка приймає масив arr з чисел і повертає вже масив з стрічками:
// - const arr1 = arrToString([1,2,3]) – запише в змінну масив [‘1’,‘2’,‘3’]. 
// - const arr2 = arrToString([10,200,3333]) – запише в змінну масив [‘10’,‘200’,‘3333’].
