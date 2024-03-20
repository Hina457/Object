//Array 
//let fruits: string[] =["mango","apple"]
var user = {
    firstname: 'hina',
    lastname: 'alvi',
    age: '30',
};
var student = {
    name: 'maria',
    classid: 'abc',
    Rollnum: '50',
    email: 'hinaalvi@gamil.com'
};
var mobile;
var array = [{}, {}, [], true, "abc"];
var object = {
    Animals: {
        Names: "cat,dog,lion,tiger",
        colors: "white,blue, gray",
        tail: 'true',
        Animaldetails: {
            vaccinated: 'true',
            age: '2years',
        },
    },
    fruits: {
        name: 'Apple, mango,banana',
        color: 'red,yellow,pink',
        sessionalfruite: 'true',
        fruitsdetails: {
            Taste: 'sweet',
            price: '200 Rupees 1kg',
        }
    },
};
console.log(object.fruits.sessionalfruite);
console.log(object.Animals.colors);
