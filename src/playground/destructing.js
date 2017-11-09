//Object destructuring
const person = {
    name:'Andrew',
    age:26,
    location:{
        city:'Philadelphia',
        temp:92
    }
};
//const {name, age} = person;
//const name = person.name;
//const age = person.age;
const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher:{
        name:'Penguin'
    }
};
const {title, author} = book;
const {name = 'Self-published'} = book.publisher;

console.log(`Book's title: ${title}, author: ${author}, Publisher Name: ${name}`);

//Array Destructuring
const address = ['1299 S Junior Street', 'Philadelphia', 'Penysilvania', '19147'];
const [street,city,state,zip='00000'] = address;
console.log(`You are in ${street},${city},${state},${zip}`);