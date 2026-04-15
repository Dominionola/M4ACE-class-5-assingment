//Understanding Callbacks - Simulate asynchronous operations with callbacks, demonstrate
// callback hell with nested callbacks, implement error-first callbacks pattern,
// and create a simple event emitter

const useTokens = (tokens, callback) => {
  const proAccoount = true;
  const accsess = proAccoount;
  const tokenBal = 2000;

  if (proAccoount) {
    callback(null, { tokenBal: tokenBal - tokens, status: "Pro account" });
  } else {
    callback("Action failed: Get a pro account or insufficent tokens", null);
  }
};

useTokens(700, (error, data) => {
  if (error) {
    console.log("Sorry" + error);
  } else {
    console.log(
      "thanks for using " + data.status + "Remaining balance:" + data.tokenBal,
    );
  }
});

// const { error } = require("console");
// const EventEmitter = require("events");

// class EventEmitter {
//   constructor() {
//     this.listeiner = {};
//     {
//     }
//   }
// }
// const PizzaTraker = new EventEmitter();

let isOvenWorking = true;
let bakePizza = (pizzaName, callback) => {
  setTimeout(() => {
    if (isOvenWorking === true) {
      callback(null, `Your ${pizzaName} is perfectly baked`);
    } else {
      callback("The oven is on fire", null);
    }
  }, 2000);
};

bakePizza("penapplePizza", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
// Promise Fundamentals - Create promises from scratch, convert callback-based
// functions to promise-based, and practice promise chaining with error handling
