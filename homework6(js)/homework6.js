function getSum(arr) {
    let reversedArr = arr.reverse();
    let result = 0;
    for (let i = 0; i < reversedArr.length; i++) {
        if(reversedArr[i] != 0) {
            result += reversedArr[i];
        }
        else {
            break;
        }
    }
    return result;
}

const a = () => {return 3};
const b = () => {return 4};
function ggg (func, func) {
    return a() + b();
};

function divide(num1, num2) {
    if (num2 === 0) {
        return undefined;
    }
    else if (typeof(num1) === 'string' && typeof(num2) === 'string') {
        return undefined;
    }
    else {
        return num1 / num2;
    }
}

function reverseString(str) {
    let splited = str.split(' ');
    let result = [];
    for (let i = 0; i < splited.length; i++) {
        if (splited[i].length % 2 == 1) {
            result.push(splited[i].split('').reverse().join(''));
        }
        else {
            result.push(splited[i]);
        }
    }
    return result.join(' ');
}

class User {
    constructor(name, surname, year) {
        this.name = name;
        this.surname = surname;
        this.year = year;
    }
    getFullName() {
        console.log(this.name + ' ' + this.surname);
    }
};

class Student extends User {
    constructor(name, surname, year) {
        super(name, surname, year);
    }
    getCourse() {
        let currentTime = new Date();s
        let fullYear = currentTime.getFullYear();
        let course = fullYear - this.year;
        console.log(course);
    }
}
let student = new Student('Valera', 'Ivanov', 2010);

function numPlus() {
    let count = 0;
    return function() {
        return count++;
    };
}
let counter = numPlus();

function random() {
    let arr = [];
    while(arr.length < 100){
        let r = Math.floor(Math.random() * 100) + 1;
        if(arr.indexOf(r) === -1) {
            arr.push(r);
        };
    };
    return arr;
}

let div = document.querySelectorAll('.div');
function green() {
    for (let i = 0; i < div.length; i++) {
    div[i].addEventListener('click', () => {
        div[i].style.backgroundColor = 'green';
        div[i].removeEventListener('click', green());
        div[i].addEventListener('click', red());
    })
}
} 

function red() {
    for (let i = 0; i < div.length; i++) {
    div[i].addEventListener('click', () => {
        div[i].style.backgroundColor = 'red';
        div[i].removeEventListener('click', red());
        div[i].addEventListener('click', green());
    })
}
}
red();

let newPromise = new Promise(function(resolve, reject) { 
    return resolve(2); 
});
newPromise.then( 
    function(result) { 
        return new Promise((resolve, reject) =>{ 
            setTimeout(() => { 
                resolve(result * result); 
            }, 3000); 
        }); 
    }) 
    .then( 
    function(result) { 
        return new Promise((resolve, reject) =>{ 
            setTimeout(() => { 
                resolve(result * result); 
            }, 3000); 
        }); 
    }) 
    .then( 
    function(result) { 
        alert(result); 
    })
    .catch(
        function(e) {
            console.log(e);
        }
    )

let date = document.querySelector('#date-input');
date.addEventListener('blur', function() {
    let bd = new Date(Date.parse(this.value));
    let now = new Date;
    bd.setFullYear(+now.getFullYear())
    if (bd <= now) {
        bd.setFullYear(+bd.getFullYear() + 1);
    }
    let diff = Math.round((+bd - now) / 86400000);
    document.getElementById('output').innerHTML = diff;
})

function func(elem) {
    return elem > 0
};
let arrTemp = arr.filter(func);
let result = arrTemp.map(function(elem) {
	return Math.sqrt(elem);
});

let newPromise2 = new Promise(function(resolve, reject){ 
    let waitTime = getRandomInt(1, 11); 
    setTimeout(() =>{ 
        if(waitTime <= 5) { 
            resolve('result'); 
        } 
        else if(waitTime > 5 && waitTime <= 10)
        { 
            reject('error'); 
        }; 
    }, waitTime * 1000); 
});  
newPromise2.then( 
    result => {console.log('function is good');}
) 
.catch( 
    error => {console.log('error')} 
)

let buttonFib = function() {
    let a = 0;
    let b = 1;
    let temp;
    return function() {
        this.nextElementSibling.innerHTML = a;
        temp = a;
        a = b;
        b = temp + a;
    }
}
let buttons = document.getElementsByTagName('button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', buttonFib());
}

let input = document.getElementsByClassName('num'); 
let button = document.querySelector('button'); 
button.addEventListener('click', func); 
function getInputSum() { 
    for(let i = 0, sum = 0; i < input.length; i++) { 
        sum += +input[i].value; 
    };
    console.log(sum);
} 

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
};
let Ivan = new Human('Ivan', 28);
let Pasha = new Human('Pasha', 22);
let Masha = new Human('Masha', 74);
let Daria = new Human('Daria', 25);
let peoples = [Ivan, Pasha, Masha, Daria];
function sortByAge(mas) {
    if (mas instanceof Array) {
        let sortedData = mas.sort(func);
        return sortedData;
    } else console.log('Error'); 
        function func(a, b) {
        return a.age - b.age;
    };
};

class Ingredient {
    constructor(id, category, name, price, kkal) {
        this.id = id;
        this.category = category;
        this.name = name; 
        this.price = price; 
        this.kkal = kkal;
    }
}
class Burger {
    constructor(burgerSize = null, insideIngredient = null) {
        this.burgerSize = burgerSize;
        this.insideIngredient = insideIngredient;
        this.outerIngredients = new Set();
    }
    get isReady() {
        return this.burgerSize != null && this.insideIngredient != null;
    }
    get moneySum() {
        if (!this.isReady) {
            throw new Error("Isn't ready");
        }
        let sum = this.burgerSize.price;
        sum += this.insideIngredient.price;
        for (let item of this.outerIngredients) {
            sum += item.price;
        }
        return sum;
    }
    get kkalSum() {
        if (!this.isReady) {
            throw new Error("Isn't ready");
        }
        let sum = this.burgerSize.kkal;
        sum += this.insideIngredient.kkal;
        for (let item of this.outerIngredients) {
            sum += item.kkal;
        }
        return sum;
    }
    get name() {
        if (!this.isReady) {
            throw new Error("Isn't ready");
        }
        let name = this.burgerSize.name + " (";
        name += this.insideIngredient.name;
        for (let item of this.outerIngredients) {
            name += ", " + item.name;
        }
        return name + ")";
    }
}
class BurgerBuilder {
    get isReady() { 
        return this.burger.isReady; 
    };
    constructor() {
        this.burger = new Burger();
    }
    withInside(ingredient) {
        if (!ingredient || ingredient.category != 1) {
            throw new Error("WithInside");
        };
        this.burger.insideIngredient = ingredient;
        return this;
    }
    withSize(ingredient) {
        if (!ingredient || ingredient.category != 0)
            throw new Error("WithSize");
        this.burger.burgerSize = ingredient;
        return this;
    }
    build() {
        if (!this.isReady)
            throw new Error("Isn't ready");
        return this.burger;
    }
}
class BurgerDecorator {
    constructor(burger) {
        this.burger = burger;
    }
    get burgerSize() { 
        return this.burger.burgerSize; 
    }
    set burgerSize(value) { 
        burger.burgerSize = value; 
    }
    get insideIngredient() { 
        return this.burger.insideIngredient;
    }
    set insideIngredient(value) { 
        this.burger.insideIngredient = value; 
    }
    get outerIngredients() {
        return this.burger.outerIngredients; 
    }
    get moneySum() { 
        return this.burger.moneySum; 
    }
    get kkalSum() { 
        return this.burger.kkalSum; 
    }
    get name() { 
        return this.burger.name; 
    }
}
class SpeciesBurger extends BurgerDecorator {
    constructor(burger) {
        super(burger);
        this.burger.outerIngredients.add(ingredients[5]);
    }
}
class MaionezBurger extends BurgerDecorator {
    constructor(burger) {
        super(burger);
        this.burger.outerIngredients.add(ingredients[6]);
    }
}
let ingredients = [
    new Ingredient(1, 0, "маленький бургер", 50, 20),
    new Ingredient(2, 0, "большой бургер", 100, 40),
    new Ingredient(3, 1, "сыр", 10, 20),
    new Ingredient(4, 1, "салат", 20, 5),
    new Ingredient(5, 1, "картофель", 15, 10),
    new Ingredient(6, 2, "приправа", 15, 0),
    new Ingredient(7, 2, "майонез", 20, 5),
];

function MultiplicatorUnitFailure() {}
function primitiveMultiply(a, b) {
    if (Math.random() < 0.5) {
        return a * b;
    }
    else {
        throw new MultiplicatorUnitFailure();
    }
}
function reliableMultiply(a, b) {
    let result;
    while(!result) {
        try {
            result = primitiveMultiply(a, b);
        } catch(error) {
            if (!error instanceof MultiplicatorUnitFailure) {
                throw error;
            }
        }
    }
    return result;
}
console.log(reliableMultiply(8, 8));