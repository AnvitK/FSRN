const student = {
    name: 'Anvit Kamble',
    rollNo: '18It1069',
    college: 'RAIT',
    branch: 'IT',
    degree: 'BE',
    address: {
        city: 'Nerul',
        state: 'Maharashtra',
        pincode: 400706
    }
}

console.log(student);
console.log(student.branch);
console.log(student['degree']);

let clg = student.college;
let rn = student['rollNo'];
console.log(clg, rn);

student.pointer = 8.80;
student['Year'] = 2022;
console.log(student);

const music = {
    rock: 'guitar',
    classical: 'violin',
}

console.log(music['classical']);
const classical = 'rock';
console.log(music[classical]);

const fruits = ['Mango', 'Apple', 1, 4 , 89.342, true, music];
console.log(fruits);

// for(let fruit of fruits) {
//     console.log(fruit);
// }

// for(let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

fruits.pop();
console.log(fruits);
fruits.push(music);
console.log(fruits);
fruits.unshift('strawberry', 'watermelon');
console.log(fruits);
fruits.shift();
console.log(fruits);

const vegetables = ['potato', 'onion', 'tomato'];
const fruVeg = fruits.concat(vegetables);
console.log(fruVeg);

console.log('Splice: ', fruVeg.splice(1, 1, 'beetroot'));
console.log(fruVeg);

console.log(fruVeg.slice(5));

const arr = [1, 2, 3, 4, 5];
const sum = 0;
const sumArr = arr.reduce((sum, arrEle) => sum + arrEle);
console.log(sumArr);

const calculateArrSum1 = (arr) => {
    let sum = 0;
    for(let ele of arr) {
        sum += ele;
    }
    console.log(sum);
}

const calculateArrSum2 = (arr) => {
    let sum = 0;
    for(let ele of arr) {
        sum += ele;
    }
    return sum;
}

const arr1 = [1,2,3,4,5];
calculateArrSum1(arr1);

const arr2 = ['anvit', 'kamble'];
calculateArrSum1(arr2);

const marks = [75, 67, 85, 94, 49];
const avg = calculateArrSum2(marks) / marks.length;
console.log(avg);

const arr3 = arr1.map(ele => ele * 2);
console.log(arr3);

(function() {
    console.log('Called');
    console.log(3 + 4);
})();

function print1N(no) {
    if(no == 0) return;

    print1N(no - 1);
    console.log(no);
}

print1N(10);

