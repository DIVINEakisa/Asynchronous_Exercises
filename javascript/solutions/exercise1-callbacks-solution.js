/**
 * Exercise 1: Callbacks - SOLUTION
 */

// Simulates fetching user data from an API
function fetchUserData(userId, callback) {
  console.log(`Fetching user ${userId}...`);
  setTimeout(() => {
    const userData = {
      id: userId,
      name: 'John Doe',
      email: 'john@example.com'
    };
    callback(null, userData);
  }, 500);
}

// Processes user data
function processUserData(userData, callback) {
  console.log('Processing user data...');
  setTimeout(() => {
    const processedData = {
      ...userData,
      processed: true
    };
    callback(null, processedData);
  }, 300);
}

// Main execution
console.log('Exercise 1: Callbacks - SOLUTION');
console.log('Starting to fetch user data...');

fetchUserData(123, (error, userData) => {
  if (error) {
    console.error('Error fetching user:', error);
    return;
  }
  
  processUserData(userData, (error, processedData) => {
    if (error) {
      console.error('Error processing user:', error);
      return;
    }
    
    console.log('Final result:', processedData);
  });
});
