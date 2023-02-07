// -------------------    
//     first problem
// ------------------


//  Description : Here, multiply a number by 3, add 10 to the product, divide the sum by 2, subtract the quotient by 5, and get the final result.


function mindGame(number){
    if(typeof(number) !== 'number'){
        return 'input should be an number';
    }
    let multiplication = number * 3;
    let sum = multiplication + 10;
    let division = sum / 2;
    let minus = division - 5;
    return minus;
    
}

// -------------------    
// first problem end
// ------------------





// -------------------    
//     second problem
// ------------------

//  Description : Here it is determined whether all the characters in the string are even or odd.

function evenOdd(data){
    if(typeof(data) !== 'string'){
        return 'input should be and string';
    }
    let itemLength = data.length;
    let modulas = itemLength % 2;
    if(modulas == 0 ){
        return 'even';
    }
    else{
        return 'odd';
    }
}

// -------------------    
// second problem end
// ------------------



// -------------------    
//     third problem
// ------------------
//  Description : Here subtract 7 from a number to check whether the result is less than 7 or not.
function isLGSeven(value){
    if(typeof(value) !=='number'){
        return 'input should be an number'
    }
    let inputMinus = value - 7;
    if(inputMinus < 7){
        return inputMinus;
    }
    else{
        return inputMinus * 2;
    }
}

// -------------------    
// third problem end
// ------------------



// -------------------    
//     fourth problem
// ------------------
// Description : This function takes an array of number as a parameter and return that how much element of this array is negative or less than 0.


function findingBadData(age){
    if(Array.isArray(age) !== true){
        return 'input should be an array';
    }
    let newArray = [];
    for(let i = 0; i < age.length; i++){
        let index = i;
        let element = age[i];

        if(element < 0){
            newArray.push(element);
        }
    }
    let badData = newArray.length;
    return badData;
}

// -------------------    
// forth problem end
// ------------------


// -------------------    
//     fifth problem
// ------------------
// Description : This function takes 3 different number as parameter and make some calculation and return the last total value as an output.
function gemsToDiamond(firstFriend,secondFriend,thirdFriend){
    if(typeof(firstFriend, secondFriend, thirdFriend) !== 'number'){
        return 'input should be an number';
    }
    let firstFriendMulti = firstFriend * 21;
    let secondFriendMulti = secondFriend * 32;
    let thirdFriendMulti = thirdFriend * 43;
    let total = firstFriendMulti + secondFriendMulti + thirdFriendMulti;
    let double = 1000 * 2;
    if(total >= double){
        let finalNumber = total - 2000;
        return finalNumber;
    }
    else{
        return total;
    }
    
}


// -------------------    
// fifth problem end
// ------------------
