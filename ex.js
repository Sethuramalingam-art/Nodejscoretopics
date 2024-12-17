function x() {
  setTimeout(() => {
    console.log("checking");
  }, 0);
  console.log("log");
}

console.log(x());
