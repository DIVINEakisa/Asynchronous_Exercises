// async function h() {
//   return "Hello Async";
// }
// h().then((mess) => console.log(mess));
// Write an async function named h that returns the string "Hello Async".

function introduceYou(name, country) {
  return function (changed) {
    console.log(`Hi I am ${name} and I am representing ${country + changed}`);
  };
}
let updated = introduceYou("Jabo", "Rwanda");
console.log(updated("Jabo", "kigali")); // Hi I am Jabo and I am respresenting Rwanda
// console.log(updated("Arnold", "Rwanda")); // Hi I am Arnold and I am respresenting Rwanda
// console.log(introduceYou("Landry", "Rwanda")); // Hi I am Landry and I am respresenting Rwanda
// console.log(introduceYou("John", "Rwanda")); // Hi I am John and I am respresenting Rwanda
// console.log(introduceYou("Abdul", "UAE")); // Hi I am Abdul and I am respresenting UAE
// console.log(introduceYou("Jane", "USA")); // Hi I am Jane and I am respresenting USA
// console.log(introduceYou("Doe", "USA"));
