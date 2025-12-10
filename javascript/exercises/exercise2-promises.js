/**
 * Exercise 2: Promises
 * 
 * Learn how to work with Promises and chain asynchronous operations.
 * 
 * Tasks:
 * 1. Convert the callback-based functions to Promise-based functions
 * 2. Chain multiple promises together
 * 3. Handle errors using .catch()
 */

// Simulates fetching user data - returns a Promise
function fetchUserData(userId) {
  // TODO: Implement this function to return a Promise
  // Resolve with user data after 500ms
  // Reject with an error if userId is invalid (less than 1)
}

// Simulates fetching user posts - returns a Promise
function fetchUserPosts(userId) {
  // TODO: Implement this function to return a Promise
  // Resolve with an array of post titles after 400ms
  // Return 3 posts for the user
}

// Combines user data with their posts
function combineUserDataWithPosts(userData, posts) {
  // TODO: Implement this function to return a Promise
  // Resolve after 200ms with combined data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ...userData,
        posts: posts
      });
    }, 200);
  });
}

// Main execution
console.log('Exercise 2: Promises');
console.log('Starting to fetch data...');

// TODO: Use promises to:
// 1. Fetch user data for user ID 42
// 2. Fetch user posts for the same user
// 3. Combine the data
// 4. Log the final result
// 5. Handle any errors that might occur

// Expected output:
// Starting to fetch data...
// Fetching user 42...
// Fetching posts for user 42...
// Combining data...
// Final result: { id: 42, name: 'Jane Smith', email: 'jane@example.com', posts: [...] }
