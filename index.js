//Object Fundamentals - Create a user object with nested properties
// and methods including getFullName, incrementAge, addHobby, and
// getAddress functions

const myUser = {
  firstName: "Dominion",
  lastName: "Samuel",
  age: 100,
  middleName: "Oladeji",
  hobbies: ["F1", "code", "eat"],
  address: { street: "Coconut street", city: "Yenagoa", state: "Bayelsa" },

  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },

  incrementAge: function () {
    return (this.age += 1);
  },

  addHobby: function (newHobby) {
    return this.hobbies.push(newHobby);
  },

  getAdress: function () {
    return `${this.address.street} ${this.address.city} ${this.address.state}`;
  },
};

console.log(myUser.getFullName());
console.log(myUser.incrementAge());
console.log(myUser.age);
console.log(myUser.addHobby("reading"));
console.log(myUser.hobbies);
console.log(myUser.getAdress());
