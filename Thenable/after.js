function afterTwoSecond() {
  return {
    then(resolve, reject) {
      setTimeout(() => {
        resolve("Done");
      }, 2000);
    },
  };
}
afterTwoSecond().then((message) => console.log("Executed"));
