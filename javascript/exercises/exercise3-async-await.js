/**
 * Exercise 3: Async/Await
 * 
 * Learn how to use async/await for cleaner asynchronous code.
 * 
 * Tasks:
 * 1. Implement async functions using await
 * 2. Handle multiple concurrent operations
 * 3. Implement proper error handling with try/catch
 */

// Simulates an API call to fetch weather data
function fetchWeatherData(city) {
  return new Promise((resolve, reject) => {
    console.log(`Fetching weather for ${city}...`);
    setTimeout(() => {
      if (!city) {
        reject(new Error('City name is required'));
      } else {
        resolve({
          city: city,
          temperature: Math.floor(Math.random() * 30) + 10,
          condition: 'Sunny'
        });
      }
    }, 500);
  });
}

// Simulates fetching population data
function fetchPopulationData(city) {
  return new Promise((resolve) => {
    console.log(`Fetching population for ${city}...`);
    setTimeout(() => {
      resolve({
        city: city,
        population: Math.floor(Math.random() * 1000000) + 100000
      });
    }, 400);
  });
}

// TODO: Implement this async function
// Fetch city data (weather and population) concurrently
async function fetchCityData(city) {
  // Use Promise.all to fetch both data sources concurrently
  // Return combined data object
}

// TODO: Implement this async function
// Fetch data for multiple cities sequentially
async function fetchMultipleCities(cities) {
  // Loop through cities and fetch data for each
  // Return array of city data
}

// Main execution
async function main() {
  console.log('Exercise 3: Async/Await');
  
  try {
    // TODO: Call fetchCityData for 'New York'
    // Log the result
    
    // TODO: Call fetchMultipleCities for ['London', 'Paris', 'Tokyo']
    // Log the results
    
    console.log('All data fetched successfully!');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Run the main function
main();

// Expected output:
// Exercise 3: Async/Await
// Fetching weather for New York...
// Fetching population for New York...
// City data: { weather: {...}, population: {...} }
// Fetching weather for London...
// Fetching population for London...
// ...
