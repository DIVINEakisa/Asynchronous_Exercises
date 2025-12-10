function showMess() {
  return new Promise((resolve) => {
    setTimeout((resolve("Hello Teacher"), 2000));
  });
}
showMess().then((message) => {
  console.log(message);
});
