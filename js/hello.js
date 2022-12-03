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
