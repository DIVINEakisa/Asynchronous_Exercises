"""
Exercise 2: Async Functions

Learn how to create and compose async functions.

Tasks:
1. Create multiple async functions
2. Chain async operations
3. Handle async function returns
"""

import asyncio


async def fetch_user_data(user_id):
    """Fetch user data asynchronously."""
    print(f'Fetching user {user_id}...')
    await asyncio.sleep(0.5)
    
    if user_id < 1:
        raise ValueError('Invalid user ID')
    
    return {
        'id': user_id,
        'name': 'Jane Smith',
        'email': 'jane@example.com'
    }


# TODO: Implement this async function
async def fetch_user_posts(user_id):
    """
    Fetch posts for a user.
    
    Args:
        user_id: The user's ID
        
    Returns:
        list: List of post titles
    """
    # Simulate API call with asyncio.sleep(0.4)
    # Return a list of 3 post titles
    pass


# TODO: Implement this async function
async def combine_user_data_with_posts(user_data, posts):
    """
    Combine user data with their posts.
    
    Args:
        user_data: The user data dictionary
        posts: List of post titles
        
    Returns:
        dict: Combined data
    """
    # Simulate processing with asyncio.sleep(0.2)
    # Return user_data with posts added
    pass


# TODO: Implement the main async function
async def main():
    """Main execution function."""
    print('Exercise 2: Async Functions')
    print('Starting to fetch data...')
    
    try:
        # Fetch user data for user_id=42
        # Then fetch user posts for the same user
        # Combine the data
        # Print the final result
        pass
    except ValueError as e:
        print(f'Error: {e}')


if __name__ == '__main__':
    asyncio.run(main())


# Expected output:
# Exercise 2: Async Functions
# Starting to fetch data...
# Fetching user 42...
# Fetching posts for user 42...
# Combining data...
# Final result: {'id': 42, 'name': 'Jane Smith', 'email': 'jane@example.com', 'posts': [...]}
