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

let models = ["opus 4.6", "sonnet 4.6", "gemini 3.1", "gamma 4"];

let is_pro_account = true;
tokenBal = 30000;
costOpus = 10000;
costSonnet = 8000;
costGemini = 7500;
costGemma = 500;

let prompt = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_pro_account) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("signup for pro"));
    }
  });
};

prompt(1000, () => {
  tokenBal -= costOpus;
  console.log(`Used opus 4.6 to plan architecture. Balance: ${tokenBal}`);
  return tokenBal;
})
  .then((balance) => {
    console.log("pick model for execution");
    return balance;
  })
  .then((balance) => {
    tokenBal -= costSonnet;
    console.log(`sonnet was selected. Balance: ${tokenBal}`);
    return tokenBal;
  })
  .catch((err) => {
    console.log(err);
  });
