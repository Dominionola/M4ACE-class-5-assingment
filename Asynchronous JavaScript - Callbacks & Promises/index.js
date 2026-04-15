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

const EventEmitter = require("events");
// const PizzaTraker = new EventEmitter()

class PizzaTraker extends EventEmitter {
  execute(order) {
    if (!order) {
      return this.emit("error", new Error("APP Alert: place a real order"));
    }
    this.emit("success", "APP Alert: Thank you for ordering");
  }
}

// Promise Fundamentals - Create promises from scratch, convert callback-based
// functions to promise-based, and practice promise chaining with error handling
