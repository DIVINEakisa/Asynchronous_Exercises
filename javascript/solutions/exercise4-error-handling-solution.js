/**
 * Exercise 4: Error Handling in Async Code - SOLUTION
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

// Retry an async operation up to maxRetries times
async function retryOperation(operation, maxRetries = 3) {
  let lastError;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`Attempt ${attempt}/${maxRetries}...`);
      const result = await operation();
      console.log('Success!');
      return result;
    } catch (error) {
      lastError = error;
      console.log(`Attempt ${attempt} failed: ${error.message}`);
      if (attempt < maxRetries) {
        console.log('Retrying...');
      }
    }
  }
  
  throw lastError;
}

// Fetch data from multiple endpoints, handling individual failures
async function fetchMultipleEndpoints(endpoints) {
  const results = await Promise.allSettled(
    endpoints.map((endpoint, index) => 
      unreliableAPICall(endpoint, index === 1) // Make the second endpoint fail
    )
  );
  
  const successful = [];
  const failed = [];
  
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      successful.push(result.value);
    } else {
      failed.push({
        endpoint: endpoints[index],
        error: result.reason.message
      });
    }
  });
  
  return { successful, failed };
}

// Chain operations with proper error handling
async function chainOperations(initialValue) {
  try {
    console.log(`Starting with value: ${initialValue}`);
    
    // Step 1: Double the value
    const step1 = await new Promise((resolve) => {
      setTimeout(() => {
        const result = initialValue * 2;
        console.log(`Step 1: ${initialValue} * 2 = ${result}`);
        resolve(result);
      }, 200);
    });
    
    // Step 2: Add 10
    const step2 = await new Promise((resolve) => {
      setTimeout(() => {
        const result = step1 + 10;
        console.log(`Step 2: ${step1} + 10 = ${result}`);
        resolve(result);
      }, 200);
    });
    
    // Step 3: Square the result
    const step3 = await new Promise((resolve) => {
      setTimeout(() => {
        const result = step2 * step2;
        console.log(`Step 3: ${step2} * ${step2} = ${result}`);
        resolve(result);
      }, 200);
    });
    
    return step3;
  } catch (error) {
    throw new Error(`Operation chain failed: ${error.message}`);
  }
}

// Main execution
async function main() {
  console.log('Exercise 4: Error Handling - SOLUTION');
  
  // Test 1: Retry logic
  console.log('\n--- Test 1: Retry Logic ---');
  let attemptCount = 0;
  try {
    const result = await retryOperation(async () => {
      attemptCount++;
      // Fail the first two attempts, succeed on the third
      return unreliableAPICall('/data', attemptCount < 3);
    }, 3);
    console.log('Result:', result);
  } catch (error) {
    console.error('All retries failed:', error.message);
  }
  
  // Test 2: Multiple endpoints with mixed results
  console.log('\n--- Test 2: Multiple Endpoints ---');
  try {
    const endpoints = ['/users', '/posts', '/comments'];
    const results = await fetchMultipleEndpoints(endpoints);
    console.log('Successful requests:', results.successful);
    console.log('Failed requests:', results.failed);
  } catch (error) {
    console.error('Error:', error.message);
  }
  
  // Test 3: Operation chain
  console.log('\n--- Test 3: Operation Chain ---');
  try {
    const result = await chainOperations(10);
    console.log('Final result:', result);
  } catch (error) {
    console.error('Chain failed:', error.message);
  }
}

main();
