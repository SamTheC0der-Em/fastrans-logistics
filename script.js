// const user = {
//   name: "Alice",
//   age: 25,
//   city: "Lagos"
// };

// const search = "city";
// console.log(user.search); // Output: Lagos
const person = {
  name: "Samuel",
  score: 101,
  grade: "A",
  carCompany: {
    toyota: "Highlander",
    honda: "Infinity",
  },
  shoppingList: [
    {
      hasStarted: true,
      loggedIn: false,
    },
    { name: "tunde", schoolAttended: "epitome" }
  ],
};

console.log(person.shoppingList[1].schoolAttended);
