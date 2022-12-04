// let c = 6;
// console.log(c/d); // javasript compile time error

try {
    let a = 5;
    console.log(a / b);
} catch (error) {
    console.log(error);     // runtime error
}

const passwordCheck = (pwd) => {
    actualPwd = 'abc@123';
    try {
        if(actualPwd === pwd) {
            console.log('LOGGED IN!!!');
        } else {
            throw 'Wrong Password';     // runtime error
        }
    }
    catch (error) {
        console.log(error);
    }
}

passwordCheck('abc@123');
passwordCheck('afhsabf');