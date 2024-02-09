//object property shorthand

const name = 'Aseel';
const userAge = 22;

const user = {
    name,
    age: userAge,
    location: 'Erode'
}

console.log(user);

//onject destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}
// const label = product.label;
// const stock = product.stock;

// //destructuring
// const { label, stock, rating = 5 } = product;
// console.log(label);
// console.log(stock);
// console.log(rating);

// //renaming variable
// const { price: productPrice } = product;
// console.log(productPrice);

const transaction = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock);
}

transaction('order', product);