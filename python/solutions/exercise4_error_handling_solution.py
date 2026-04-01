"""
Exercise 4: Error Handling in Async Code - SOLUTION
"""

import asyncio


async def unreliable_api_call(endpoint, should_fail=False):
    """Simulate an unreliable API call."""
    await asyncio.sleep(0.3)
    if should_fail:
        raise Exception(f'Failed to fetch {endpoint}')
    return {'endpoint': endpoint, 'data': 'Success!'}


async def retry_operation(operation, max_retries=3):
    """Retry an async operation up to max_retries times."""
    last_error = None
    
    for attempt in range(1, max_retries + 1):
        try:
            print(f'Attempt {attempt}/{max_retries}...')
            result = await operation()
            print('Success!')
            return result
        except Exception as e:
            last_error = e
            print(f'Attempt {attempt} failed: {e}')
            if attempt < max_retries:
                print('Retrying...')
    
    raise last_error


async def fetch_multiple_endpoints(endpoints):
    """Fetch data from multiple endpoints, handling individual failures."""
    # Create tasks that might fail
    tasks = []
    for i, endpoint in enumerate(endpoints):
        # Make the second endpoint fail
        tasks.append(unreliable_api_call(endpoint, i == 1))
    
    # Gather with return_exceptions to get both results and exceptions
    results = await asyncio.gather(*tasks, return_exceptions=True)
    
    successful = []
    failed = []
    
    for i, result in enumerate(results):
        if isinstance(result, Exception):
            failed.append({
                'endpoint': endpoints[i],
                'error': str(result)
            })
        else:
            successful.append(result)
    
    return {
        'successful': successful,
        'failed': failed
    }


async def chain_operations(initial_value):
    """Chain multiple operations with error handling."""
    try:
        print(f'Starting with value: {initial_value}')
        
        # Step 1: Double the value
        await asyncio.sleep(0.2)
        step1 = initial_value * 2
        print(f'Step 1: {initial_value} * 2 = {step1}')
        
        # Step 2: Add 10
        await asyncio.sleep(0.2)
        step2 = step1 + 10
        print(f'Step 2: {step1} + 10 = {step2}')
        
        # Step 3: Square the result
        await asyncio.sleep(0.2)
        step3 = step2 * step2
        print(f'Step 3: {step2} * {step2} = {step3}')
        
        return step3
    except Exception as e:
        raise Exception(f'Operation chain failed: {e}')


async def main():
    """Main execution function."""
    print('Exercise 4: Error Handling - SOLUTION')
    
    # Test 1: Retry logic
    print('\n--- Test 1: Retry Logic ---')
    attempt_count = [0]
    
    async def failing_operation():
        attempt_count[0] += 1
        return await unreliable_api_call('/data', attempt_count[0] < 3)
    
    try:
        result = await retry_operation(failing_operation, 3)
        print('Result:', result)
    except Exception as e:
        print(f'All retries failed: {e}')
    
    # Test 2: Multiple endpoints with mixed results
    print('\n--- Test 2: Multiple Endpoints ---')
    try:
        endpoints = ['/users', '/posts', '/comments']
        results = await fetch_multiple_endpoints(endpoints)
        print('Successful requests:', results['successful'])
        print('Failed requests:', results['failed'])
    except Exception as e:
        print(f'Error: {e}')
    
    # Test 3: Operation chain
    print('\n--- Test 3: Operation Chain ---')
    try:
        result = await chain_operations(10)
        print(f'Final result: {result}')
    except Exception as e:
        print(f'Chain failed: {e}')


if __name__ == '__main__':
    asyncio.run(main())
