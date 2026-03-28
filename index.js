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

//Destructuring & Spread Practice - Practice object and array
// destructuring with renaming and default values, nested
// destructuring, function parameter destructuring, and
// spread operator for merging and cloning

const driver = {
  name: "Lewis",
  team: "Ferrari",
  qualify: true,
  position: 2,
  info: {
    track: "china",
    laps: 62,
  },
  point: (position) => {
    if (position === 3) {
      return 15;
    } else if (position === 2) {
      return 20;
    } else if (position === 1) {
      return 25;
    } else {
      return 0;
    }
  },
};

const { name, team, qualify, position, point: pole } = driver;
console.log(pole());
const {
  info: { track, laps },
} = driver;
console.log(track);

const announceResult = ({ name, position, info: { track } }) => {
  console.log(`${name} finished P${position} at ${track}!`);
};
announceResult(driver);

// spread
const obj1 = { name: "Dominion" };
const obj2 = { surname: "Samuel" };

const merge = { ...obj1, ...obj2 };
console.log(merge);

const clone = { ...merge };
console.log(clone);
