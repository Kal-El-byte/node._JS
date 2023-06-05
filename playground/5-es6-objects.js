//Object property shorthand

const name = "Andrew";
const userAge = 27;

const user = {
    name,
    age: userAge,
    location: 'Philadelphia'
};

console.log(user);

//Object destructuring

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
};

// const {label, price, stock, salePrice, rating = '3' } = product;
// console.log(product);
// console.log(rating);

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock);
};

transaction('order', product);