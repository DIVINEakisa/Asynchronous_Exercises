/**
 * Exercise 2: Promises - SOLUTION
 */

// Simulates fetching user data - returns a Promise
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    console.log(`Fetching user ${userId}...`);
    setTimeout(() => {
      if (userId < 1) {
        reject(new Error('Invalid user ID'));
      } else {
        resolve({
          id: userId,
          name: 'Jane Smith',
          email: 'jane@example.com'
        });
      }
    }, 500);
  });
}

// Simulates fetching user posts - returns a Promise
function fetchUserPosts(userId) {
  return new Promise((resolve) => {
    console.log(`Fetching posts for user ${userId}...`);
    setTimeout(() => {
      resolve([
        'Understanding Async JavaScript',
        'Promises vs Callbacks',
        'Mastering Async/Await'
      ]);
    }, 400);
  });
}

// Combines user data with their posts
function combineUserDataWithPosts(userData, posts) {
  return new Promise((resolve) => {
    console.log('Combining data...');
    setTimeout(() => {
      resolve({
        ...userData,
        posts: posts
      });
    }, 200);
  });
}

// Main execution
console.log('Exercise 2: Promises - SOLUTION');
console.log('Starting to fetch data...');

let userDataCache;

fetchUserData(42)
  .then((userData) => {
    userDataCache = userData;
    return fetchUserPosts(42);
  })
  .then((posts) => {
    return combineUserDataWithPosts(userDataCache, posts);
  })
  .then((finalData) => {
    console.log('Final result:', finalData);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
