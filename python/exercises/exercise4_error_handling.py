"""
Exercise 4: Error Handling in Async Code

Learn proper error handling techniques in async Python code.

Tasks:
1. Handle exceptions in async functions with try/except
2. Handle errors in concurrent tasks
3. Implement retry logic for failed operations
"""

import asyncio


async def unreliable_api_call(endpoint, should_fail=False):
    """Simulate an unreliable API call."""
    await asyncio.sleep(0.3)
    if should_fail:
        raise Exception(f'Failed to fetch {endpoint}')
    return {'endpoint': endpoint, 'data': 'Success!'}


# TODO: Implement this async function
async def retry_operation(operation, max_retries=3):
    """
    Retry an async operation up to max_retries times.
    
    Args:
        operation: An async function to retry
        max_retries: Maximum number of retry attempts
        
    Returns:
        The result of the operation if successful
        
    Raises:
        The last exception if all retries fail
    """
    # Try the operation
    # If it fails, retry up to max_retries times
    # Log each attempt
    # If all retries fail, raise the last error
    pass


# TODO: Implement this async function
async def fetch_multiple_endpoints(endpoints):
    """
    Fetch data from multiple endpoints, handling individual failures.
    
    Args:
        endpoints: List of endpoint names
        
    Returns:
        dict: Dictionary with 'successful' and 'failed' lists
    """
    # Use asyncio.gather() with return_exceptions=True
    # Separate successful results from exceptions
    # Return formatted result
    pass


# TODO: Implement this async function
async def chain_operations(initial_value):
    """
    Chain multiple operations with error handling.
    
    Args:
        initial_value: Starting value
        
    Returns:
        The final result after all operations
    """
    # Implement a chain of operations:
    # 1. Double the value
    # 2. Add 10
    # 3. Square the result
    # Handle any errors that occur
    pass


async def main():
    """Main execution function."""
    print('Exercise 4: Error Handling')
    
    # Test 1: Retry logic
    print('\n--- Test 1: Retry Logic ---')
    attempt_count = [0]  # Using list to modify in nested function
    
    async def failing_operation():
        attempt_count[0] += 1
        # Fail the first two attempts, succeed on the third
        return await unreliable_api_call('/data', attempt_count[0] < 3)
    
    try:
        # TODO: Use retry_operation with failing_operation
        pass
    except Exception as e:
        print(f'All retries failed: {e}')
    
    # Test 2: Multiple endpoints with mixed results
    print('\n--- Test 2: Multiple Endpoints ---')
    try:
        endpoints = ['/users', '/posts', '/comments']
        # TODO: Call fetch_multiple_endpoints
        # Print successful and failed requests
        pass
    except Exception as e:
        print(f'Error: {e}')
    
    # Test 3: Operation chain
    print('\n--- Test 3: Operation Chain ---')
    try:
        # TODO: Call chain_operations with initial value 10
        pass
    except Exception as e:
        print(f'Chain failed: {e}')


if __name__ == '__main__':
    asyncio.run(main())
