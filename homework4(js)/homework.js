function one (arr) {
    if (arr.length <= 1) {
        return 0;
    }
    else {
        let sortedArr = arr.sort((a, b) => a - b);
        return sortedArr.pop() - sortedArr.shift();
    }
};

function two (string, num) {
    let splited = string.split(' ');
    let newArr = [];
    for (let i = 0; i < splited.length; i++) {
        splited[i].length > num ? newArr.push(splited[i]) : console.log();
    }
    return newArr;
}

function three (arr) {
    idealArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    sortedArr = arr.sort((a, b) => a - b);
    for (let i = 0; i < idealArr.length; i++) {
        if (idealArr[i] !== sortedArr[i]) {
            return idealArr[i];
            break;
        }
    }
}

function four (firstString, secondString) {
    let splitedFirst = firstString.split('');
    let splitedSecond = secondString.split('');
    splitedFirst.pop() === splitedSecond.pop() ? true : false;
}

function five (arr) {
    newArr = [];
    for (i = 0; i < arr.length-1; i++) {
        newArr.push((arr[i] + arr[i+1]) / 2);
    }
    return newArr;
}

function six (num) {
    let sortedArr = num.toString().split('').sort((a, b) => b - a);
    let result = parseInt(sortedArr.join(''));
    return result;
}

const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,"H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,"N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,"T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23};
function seven (string) {
    let splited = string.toUpperCase().split('');
    let score = 0;
    for (let i = 0; i < splited.length; i++) {
        score += scores[splited[i]];
    } 
    if (score <= 60) {
        console.log('NOT TOO GOOD');
    }
    else if (score === 61 || score <= 300) {
        console.log('PRETTY GOOD');
    }
    else if (score === 301 || score <= 599) {
        console.log('VERY GOOD');
    }
    else if (score >= 600) {
        console.log('THE BEST');
    }
}

function eight (string) {
    return string.match(/[aeiou]/gi).length;
}

function nine (string) {
    let regex = /[abc]/gi;
    regex.test(string) ? string.replace(/[abc]/gi, '') : console.log(null);
}

function ten (arr1, arr2) {
    let fullArr = arr1.concat(arr2);
    let result = [];
    for (let str of fullArr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}

function eleven (obj) {
    let result = {};
    Object.entries(obj).forEach(([key, value]) => {
        result[value] = key
    });
    return result;
}

function twelve (obj, num) {
    let sum = 0;
    for (let key in obj) {
        sum += obj[key];
    }
    let result = sum - num;
    return result;
}

function thirteenLeft (string) {
    let result = [];
    let cacheOne = string.split('');;
    let cacheTwo = [];
    for (let i = 0; i < string.length; i++) {
        result[i] = cacheOne.toString().replace(/[,]/g, '');
        cacheTwo = cacheOne.shift();
        cacheOne.push(cacheTwo);       
    }
    return result;
}

function thirteenRight (string) {
    let result = [];
    let cacheOne = string.split('');;
    let cacheTwo = [];
    for (let i = 0; i < string.length; i++) {
        result[i] = cacheOne.toString().replace(/[,]/g, '');
        cacheTwo = cacheOne.pop();
        cacheOne.unshift(cacheTwo);       
    }
    return result;
}

function fourteen (a, b, c, w, h) {
    if (a === w && b === h || b === w && c === h || a === h && c === w) {
        return true;
    }
    return false;
}
