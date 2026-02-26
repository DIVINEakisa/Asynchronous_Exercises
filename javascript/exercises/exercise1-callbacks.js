/**
 * Exercise 1: Callbacks
 * 
 * Learn how to work with callbacks and handle asynchronous operations.
 * 
 * Tasks:
 * 1. Implement the fetchUserData function that simulates an API call
 * 2. Implement the processUserData function that processes the data
 * 3. Chain the operations using callbacks
 */

// Simulates fetching user data from an API
function fetchUserData(userId, callback) {
  // TODO: Implement this function
  // Simulate an async operation with setTimeout (500ms delay)
  // Call the callback with an error (null) and user data
  // User data should be an object with id, name, and email
}

// Processes user data
function processUserData(userData, callback) {
  // TODO: Implement this function
  // Simulate processing with setTimeout (300ms delay)
  // Transform the userData by adding a 'processed' flag
  // Call the callback with the processed data
}

// Main execution
console.log('Exercise 1: Callbacks');
console.log('Starting to fetch user data...');

// TODO: Call fetchUserData and processUserData using callbacks
// Fetch user with ID 123
// Then process the data
// Finally log the result

// Expected output:
// Starting to fetch user data...
// Fetching user 123...
// Processing user data...
// Final result: { id: 123, name: 'John Doe', email: 'john@example.com', processed: true }
