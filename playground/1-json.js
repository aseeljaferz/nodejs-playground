const fs = require("fs");
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

//JSON.stringify takes tkes the book object and convert it to json. in json we cannot access the title or author as it isnot an object.
// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
//JSON.parse Converts a JavaScript Object Notation (JSON) string into an object.
// const data = JSON.parse(dataJSON);
// console.log(data.title);

//challenge
const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = 'Aseel Jafer';
user.age = 22;

const userJSON = JSON.stringify(user);
fs.writeFileSync('1-json.json', userJSON);