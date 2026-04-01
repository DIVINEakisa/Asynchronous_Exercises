"""
Exercise 1: asyncio Basics

Learn the fundamentals of asyncio and coroutines in Python.

Tasks:
1. Implement async functions using async def
2. Use await to wait for async operations
3. Run async functions with asyncio.run()
"""

import asyncio


# TODO: Implement this async function
# Simulate fetching user data from an API
async def fetch_user_data(user_id):
    """
    Fetch user data asynchronously.
    
    Args:
        user_id: The ID of the user to fetch
        
    Returns:
        dict: User data with id, name, and email
    """
    # Use asyncio.sleep(0.5) to simulate network delay
    # Return a dictionary with user information
    pass


# TODO: Implement this async function
# Process the fetched user data
async def process_user_data(user_data):
    """
    Process user data asynchronously.
    
    Args:
        user_data: The user data to process
        
    Returns:
        dict: Processed user data with 'processed' flag
    """
    # Use asyncio.sleep(0.3) to simulate processing
    # Add a 'processed' key to the user data
    pass


# TODO: Implement the main async function
async def main():
    """Main execution function."""
    print('Exercise 1: asyncio Basics')
    print('Starting to fetch user data...')
    
    # Call fetch_user_data with user_id=123
    # Then call process_user_data with the result
    # Print the final result


# Run the async main function
if __name__ == '__main__':
    # TODO: Use asyncio.run() to execute the main function
    pass


# Expected output:
# Exercise 1: asyncio Basics
# Starting to fetch user data...
# Fetching user 123...
# Processing user data...
# Final result: {'id': 123, 'name': 'John Doe', 'email': 'john@example.com', 'processed': True}
