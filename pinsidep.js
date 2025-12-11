function nestedPromise() {
  return new Promise((resolve) => {
    resolve("step1");
  }).then((resl) => {
    let resh = new Promise((resolv) => {
      resolv("step2");
    }).then((res) => {
      return res;
    });
    console.log(resl);
    return resh;
  });
}
nestedPromise().then((fin) => {
  console.log(fin);
});
