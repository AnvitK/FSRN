const no1 = 10;
const no2 = 20;
const no3 = no1 + no2;

var a;
console.log(a);

var b = null;
console.log(b);

var c = 5;
var d = 'anvit';
var e = c + d;
console.log(c, d, e);

c = true;
d = 'anvit';
e = c + d;
console.log(c, d, e);

c = 5;
d = true;
e = c + d;
console.log(c, d, e);

c = false;
d = 7;
e = c + d;
console.log(c, d, e);

c = false;
d = true;
e = c + d;
console.log(c, d, e);

const checkTruthyFalsy = (ele) => {
    if(ele) { console.log(ele, 'TRUTHY'); } else { console.log(ele, 'FALSY'); }
}

checkTruthyFalsy(0);
checkTruthyFalsy(1);
checkTruthyFalsy(true);
checkTruthyFalsy(false);
checkTruthyFalsy(undefined);
checkTruthyFalsy(null);
checkTruthyFalsy("");
checkTruthyFalsy("anvit");

const compareUnstrict = (ele1, ele2) => {
    (ele1 == ele2) ? console.log(ele1, ele2, 'Both equal') : console.log(ele1, ele2, 'Both unequal');
}

const compareStrict = (ele1, ele2) => {
    (ele1 === ele2) ? console.log(ele1, ele2, 'Both equal') : console.log(ele1, ele2, 'Both unequal');
}

compareUnstrict(30, 20);
compareUnstrict(30, 30);
compareUnstrict(30, '30');
compareUnstrict(0, false);
compareUnstrict(null, undefined);

compareStrict(30, 20);
compareUnstrict(30, 30);
compareStrict(30, '30');
compareStrict(0, false);
compareStrict(null, undefined);
 
const calculateGrade1 = (marks) => {
    if(marks >= 90) console.log(marks, 'A');
    else if(marks >= 75 && marks < 90) console.log(marks, 'B');
    else if(marks >= 60 && marks < 75) console.log(marks, 'C');
    else if(marks >= 50 && marks < 60) console.log(marks, 'D');
    else if(marks < 50) console.log(marks, 'E');
    else console.log(marks, 'Failed');
}

const dayNo = (no) => {
    switch(no) { 
        case 1:
            console.log(no, 'Monday');
            break;
        case 2:
            console.log(no, 'Tuesday');
            break;
        case 3:
            console.log(no, 'Wednesday');
            break;
        case 4:
            console.log(no, 'Thursday');
            break;
        case 5:
            console.log(no, 'Friday');
            break;
        case 6:
            console.log(no, 'Saturday');
            break;
        case 7:
            console.log(no, 'Sunday');
            break;
        default: console.log(no, 'Wrong No');
    }
}

calculateGrade1(35);
calculateGrade1(55);
calculateGrade1(85);
calculateGrade1(60);

dayNo(1);
dayNo(2);
dayNo(6);
dayNo(7);
dayNo(5);
dayNo(-1);
dayNo(10);

let i = 1;
while(i < 11) {
    console.log(i);
    i++;
}

i = 15;
do {
    console.log(i);
    i++;
} while(i < 10)

for(let j = 0; j < 5; j++) {
    console.log('JS is the best!!!');
}

const arr = [11,22,33,44,55];
arr.forEach((ele) => {
    console.log(ele);
})