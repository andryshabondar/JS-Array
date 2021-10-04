function removeDuplicates(arr) {
   let newArr = [];
   for (let i=0; i<arr.length; i++){
       if(!newArr.includes(arr[i])){
           newArr.push(arr[i]);
       }
   }
   return newArr;
}
let arr1 = removeDuplicates(['html', 'css', 'html', 'js']);
console.log(arr1)

let arr2 = removeDuplicates(['html', 'css', 'html', 'js', 'python', 'js', 'scss'])
console.log(arr2);




// — Напишіть функцію removeDuplicates(arr), яка приймає масив arr з стрічок і повертає новий масив де виключені елементи, що повторюються з масиву arr(ігнорувати чутливість до регістру):
// - const arr1 = removeDuplicates([‘html’,‘css’,‘html’,‘js’]) – запише в змінну масив [‘html’,‘css’,‘js’]. 
// - const arr2 = removeDuplicates([‘html’,‘css’,‘js’,‘html’,‘js’,‘python’,‘js’,‘scss’]) – запише в змінну масив [‘html’,‘css’,‘js’,‘python’,‘scss’]). 
