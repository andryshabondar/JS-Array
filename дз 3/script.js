function getLength(arr) {
    return arr.map (elem => elem.length)
}
let arr1 = getLength(['Ivan', 'Pavlo', 'Ira'])
console.log(arr1);

let arr2 = getLength(['Oleksiy','Andriana'])
console.log(arr2);


// — Напишіть функцію getLength(arr), яка приймає масив arr з стрічок і повертає новий масив з довжиною елементів тих стрічок:
// - const arr1 = getLength([‘Ivan’,‘Pavlo’,‘Ira’]) – запише в змінну масив [4,5,3]. 
// - const arr2 = getLength([‘Oleksiy’,‘Andriana’]) – запише в змінну масив [7,8].
