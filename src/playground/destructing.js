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
