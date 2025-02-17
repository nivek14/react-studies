// variáveis por escopo de bloco
let a = 10;
let b = 15;

if (b > 10) {
    let a = 5;
    console.log(a);
}

console.log(a);

function logName() {
    const name = "name";
    console.log(name);
}

const name = "name2";
logName();

console.log(name);


// arrow function
const sum = (a, b) => a + b;
console.log(sum);


// filter
const arr = [1, 2, 3, 4, 5, 6];
const highNumbers = arr.filter((n) => {
    return n >= 3 ? n : null;
})
console.log(highNumbers);


// map
const prod = [
    { name: 'camisa', price: 10.99, category: 'roupas' },
    { name: 'pc', price: 10.99, category: 'eletro' },
    { name: 'fogao', price: 10.99, category: 'eletro' },
    { name: 'meia', price: 10.99, category: 'roupas' }
];

prod.map((prods) => {
    if (prods.category === 'roupas') prods.onSale = true;
});
console.log(prod);


// literals
const userName = 'name';
const age = 30;
console.log(`o nome é ${userName} e a idade é ${age}`);


// destructuring
const fruits = ['maca', 'laranja', 'morango'];
const [f1, f2, f3] = fruits;
console.log(f1);
console.log(f2);

const productDetails = {
    name: 'mouse',
    price: 40.00,
    category: 'perifericos',
    color: 'cinza'
}

const {
    name: productName,
    price,
    category: productCategory,
    color
} = productDetails;

console.log(productDetails);


// spread operator
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = [...a1, ...a2];
console.log(a3);


// classes
class Prod {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    productWithDescount(discount) {
        return this.price * ((100 - discount) / 100);
    }
}

const shirt = new Prod('camisa', 20);
console.log(shirt.name);
console.log(shirt.productWithDescount(10));


// heranca
class ProdWithAtri extends Prod {
    constructor(name, price, colors) {
        this.name = name;
        this.price = price;
        this.colors = colors;
    }
    showColors() {
        this.colors.forEach((color) => { console.log(color) })
    }
}