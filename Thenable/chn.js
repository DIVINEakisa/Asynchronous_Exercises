function solveNumber(n) {
  let res = 0;
  let obj1 = {
    then(resolve, reject) {
      res = resolve(n * 2);
    },
  };
  let obj2 = {
    then(resolv, reject) {
      res = resolv(n + 5);
    },
  };
  let obj3 = {
    then(resolve) {
      resolve(res);
    },
  };
  return obj1.then().then().then();
}

solveNumber(12).then((mess) => console.log(mess));
