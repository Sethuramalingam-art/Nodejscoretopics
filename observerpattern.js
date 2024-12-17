const EventEmitter = require("events");

class Producer extends EventEmitter {
  constructor() {
    super();
  }

  addObserver(observer) {
    this.on("event", observer);
  }

  removeObserver(observer) {
    this.off("event", observer);
  }

  notifyObserver(message) {
    this.emit("event", message);
  }
}

const producer = new Producer();

const observer1 = (message) => {
  console.log("observer1" + message);
};

const observer2 = (message) => {
  console.log("observer2" + message);
};

producer.addObserver(observer1);

producer.addObserver(observer2);

producer.notifyObserver("Hello, observers!");

producer.removeObserver(observer1);

producer.notifyObserver("Only Observer 2 should receive this.");
