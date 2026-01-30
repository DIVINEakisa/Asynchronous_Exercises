function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function processItems() {
  const items = [1, 2, 3];
  for (let item of items) {
    await wait(1000);
    console.log(item);
  }
}
processItems();
