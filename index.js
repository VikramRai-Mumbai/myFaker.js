var faker = require("faker");

console.log("\n\nBy Using Faker.js Library, showing random data generating (name and genre) from myMovies newly Added Category. \n");
console.log("---------------------------------");
console.log(" Movie Name  ---->   Genre");
console.log("---------------------------------");

for(var i = 0; i < 10; i++){

    console.log((i+1) +". "+ faker.myMovies.name() + " ---> " + faker.myMovies.genre());

}
console.log("\n\n");
