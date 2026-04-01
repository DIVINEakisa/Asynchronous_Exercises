/**
 * Exercise 3: Async/Await - SOLUTION
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

// Fetch city data (weather and population) concurrently
async function fetchCityData(city) {
  const [weather, population] = await Promise.all([
    fetchWeatherData(city),
    fetchPopulationData(city)
  ]);
  
  return {
    city: city,
    weather: weather,
    population: population.population
  };
}

// Fetch data for multiple cities sequentially
async function fetchMultipleCities(cities) {
  const results = [];
  
  for (const city of cities) {
    const cityData = await fetchCityData(city);
    results.push(cityData);
  }
  
  return results;
}

// Main execution
async function main() {
  console.log('Exercise 3: Async/Await - SOLUTION');
  
  try {
    // Fetch data for a single city
    const newYorkData = await fetchCityData('New York');
    console.log('City data:', newYorkData);
    
    // Fetch data for multiple cities
    console.log('\nFetching data for multiple cities...');
    const citiesData = await fetchMultipleCities(['London', 'Paris', 'Tokyo']);
    console.log('Multiple cities data:', citiesData);
    
    console.log('\nAll data fetched successfully!');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Run the main function
main();
