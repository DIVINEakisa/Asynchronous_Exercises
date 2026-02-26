"""
Exercise 3: Concurrent Tasks

Learn how to run multiple async tasks concurrently.

Tasks:
1. Use asyncio.gather() to run tasks concurrently
2. Use asyncio.create_task() for concurrent execution
3. Compare sequential vs concurrent execution times
"""

import asyncio
import time


async def fetch_weather_data(city):
    """Fetch weather data for a city."""
    print(f'Fetching weather for {city}...')
    await asyncio.sleep(0.5)
    return {
        'city': city,
        'temperature': 25,
        'condition': 'Sunny'
    }


async def fetch_population_data(city):
    """Fetch population data for a city."""
    print(f'Fetching population for {city}...')
    await asyncio.sleep(0.4)
    return {
        'city': city,
        'population': 1000000
    }


# TODO: Implement this async function
async def fetch_city_data_concurrent(city):
    """
    Fetch weather and population data concurrently.
    
    Args:
        city: The city name
        
    Returns:
        dict: Combined city data
    """
    # Use asyncio.gather() to fetch both data sources concurrently
    # Return a dictionary with city, weather, and population data
    pass


# TODO: Implement this async function
async def fetch_multiple_cities_sequential(cities):
    """
    Fetch data for multiple cities sequentially.
    
    Args:
        cities: List of city names
        
    Returns:
        list: List of city data dictionaries
    """
    # Use a for loop to fetch data for each city one by one
    pass


# TODO: Implement this async function
async def fetch_multiple_cities_concurrent(cities):
    """
    Fetch data for multiple cities concurrently.
    
    Args:
        cities: List of city names
        
    Returns:
        list: List of city data dictionaries
    """
    # Use asyncio.gather() or create_task() to fetch all cities concurrently
    pass


async def main():
    """Main execution function."""
    print('Exercise 3: Concurrent Tasks')
    
    # Test 1: Fetch single city data concurrently
    print('\n--- Test 1: Single City (Concurrent Weather & Population) ---')
    # TODO: Call fetch_city_data_concurrent for 'New York'
    # Print the result
    
    # Test 2: Multiple cities - Sequential
    print('\n--- Test 2: Multiple Cities (Sequential) ---')
    cities = ['London', 'Paris', 'Tokyo']
    start_time = time.time()
    # TODO: Call fetch_multiple_cities_sequential
    elapsed = time.time() - start_time
    print(f'Sequential execution time: {elapsed:.2f} seconds')
    
    # Test 3: Multiple cities - Concurrent
    print('\n--- Test 3: Multiple Cities (Concurrent) ---')
    start_time = time.time()
    # TODO: Call fetch_multiple_cities_concurrent
    elapsed = time.time() - start_time
    print(f'Concurrent execution time: {elapsed:.2f} seconds')


if __name__ == '__main__':
    asyncio.run(main())


# Expected output:
# The concurrent version should be significantly faster than sequential
