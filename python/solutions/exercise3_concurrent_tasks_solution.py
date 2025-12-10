"""
Exercise 3: Concurrent Tasks - SOLUTION
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


async def fetch_city_data_concurrent(city):
    """Fetch weather and population data concurrently."""
    weather, population = await asyncio.gather(
        fetch_weather_data(city),
        fetch_population_data(city)
    )
    
    return {
        'city': city,
        'weather': weather,
        'population': population['population']
    }


async def fetch_multiple_cities_sequential(cities):
    """Fetch data for multiple cities sequentially."""
    results = []
    for city in cities:
        city_data = await fetch_city_data_concurrent(city)
        results.append(city_data)
    return results


async def fetch_multiple_cities_concurrent(cities):
    """Fetch data for multiple cities concurrently."""
    tasks = [fetch_city_data_concurrent(city) for city in cities]
    results = await asyncio.gather(*tasks)
    return results


async def main():
    """Main execution function."""
    print('Exercise 3: Concurrent Tasks - SOLUTION')
    
    # Test 1: Fetch single city data concurrently
    print('\n--- Test 1: Single City (Concurrent Weather & Population) ---')
    city_data = await fetch_city_data_concurrent('New York')
    print('City data:', city_data)
    
    # Test 2: Multiple cities - Sequential
    print('\n--- Test 2: Multiple Cities (Sequential) ---')
    cities = ['London', 'Paris', 'Tokyo']
    start_time = time.time()
    sequential_results = await fetch_multiple_cities_sequential(cities)
    elapsed = time.time() - start_time
    print(f'Results: {len(sequential_results)} cities')
    print(f'Sequential execution time: {elapsed:.2f} seconds')
    
    # Test 3: Multiple cities - Concurrent
    print('\n--- Test 3: Multiple Cities (Concurrent) ---')
    start_time = time.time()
    concurrent_results = await fetch_multiple_cities_concurrent(cities)
    elapsed = time.time() - start_time
    print(f'Results: {len(concurrent_results)} cities')
    print(f'Concurrent execution time: {elapsed:.2f} seconds')
    print('Notice how concurrent execution is much faster!')


if __name__ == '__main__':
    asyncio.run(main())
