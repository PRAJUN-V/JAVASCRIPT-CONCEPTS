person = [
    {
        name: "Abigail",
        age: 20,
        gender: "male",
    },
    {
        name: "Emily",
        age: 25,
        gender: "female",
    },
    {
        name: "John",
        age: 30,
        gender: "male",
    },
    {
        name: "Sarah",
        age: 28,
        gender: "female",
    },
    {
        name: "Michael",
        age: 35,
        gender: "male",
    },
    {
        name: "Jessica",
        age: 22,
        gender: "female",
    },
];


filter_person = person.filter(person => person.age >= 25)
console.log(filter_person)