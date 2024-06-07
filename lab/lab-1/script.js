console.log("one");//blocking code
console.log("two");//blocking code

// the set timeout is the non-blocking code which does not display in sequence
setTimeout(() => {
    console.log("Delayed for 5 second.");
  }, "five");

console.log("three");//blocking code