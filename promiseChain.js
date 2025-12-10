function PromiseChain(n) {
  return new Promise((resolve, reject) => {
    resolve(n);
  })
    .then((value) => {
      return value + 2;
    })
    .then((val) => {
      return val * 3;
    })
    .then((v) => {
      return v - 1;
    });
}
PromiseChain(2).then((result) => {
  console.log(result);
});
