/**
 * Exercise 4: Error Handling in Async Code
 * 
 * Learn proper error handling techniques in asynchronous code.
 * 
 * Tasks:
 * 1. Implement error handling with try/catch
 * 2. Handle errors in promise chains
 * 3. Implement retry logic for failed operations
 */

// Simulates an unreliable API call that might fail
function unreliableAPICall(endpoint, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error(`Failed to fetch ${endpoint}`));
      } else {
        resolve({ endpoint, data: 'Success!' });
      }
    }, 300);
  });
}

// TODO: Implement this function
// Retry an async operation up to maxRetries times
async function retryOperation(operation, maxRetries = 3) {
  // Try the operation
  // If it fails, retry up to maxRetries times
  // If all retries fail, throw the last error
  // Log each attempt
}

// TODO: Implement this function
// Fetch data from multiple endpoints, handling individual failures
async function fetchMultipleEndpoints(endpoints) {
  // Use Promise.allSettled to fetch from all endpoints
  // Return an object with successful and failed requests
  // Format: { successful: [...], failed: [...] }
}

// TODO: Implement this function
// Chain operations with proper error handling
async function chainOperations(initialValue) {
  // Simulate a chain of operations
  // Each operation depends on the previous one
  // Handle errors at each step
  // Return the final result or throw a descriptive error
}

// Main execution
async function main() {
  console.log('Exercise 4: Error Handling');
  
  // Test 1: Retry logic
  console.log('\n--- Test 1: Retry Logic ---');
  try {
    // TODO: Use retryOperation to call unreliableAPICall
    // First attempt should fail, but retry should succeed
  } catch (error) {
    console.error('All retries failed:', error.message);
  }
  
  // Test 2: Multiple endpoints with mixed results
  console.log('\n--- Test 2: Multiple Endpoints ---');
  try {
    const endpoints = ['/users', '/posts', '/comments'];
    // TODO: Call fetchMultipleEndpoints
    // Log successful and failed requests separately
  } catch (error) {
    console.error('Error:', error.message);
  }
  
  // Test 3: Operation chain
  console.log('\n--- Test 3: Operation Chain ---');
  try {
    // TODO: Call chainOperations with initial value 10
  } catch (error) {
    console.error('Chain failed:', error.message);
  }
}

main();
