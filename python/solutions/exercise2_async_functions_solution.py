"""
Exercise 2: Async Functions - SOLUTION
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


async def fetch_user_posts(user_id):
    """Fetch posts for a user."""
    print(f'Fetching posts for user {user_id}...')
    await asyncio.sleep(0.4)
    return [
        'Understanding Async Python',
        'asyncio vs threading',
        'Mastering Coroutines'
    ]


async def combine_user_data_with_posts(user_data, posts):
    """Combine user data with their posts."""
    print('Combining data...')
    await asyncio.sleep(0.2)
    return {
        **user_data,
        'posts': posts
    }


async def main():
    """Main execution function."""
    print('Exercise 2: Async Functions - SOLUTION')
    print('Starting to fetch data...')
    
    try:
        user_data = await fetch_user_data(42)
        posts = await fetch_user_posts(42)
        final_data = await combine_user_data_with_posts(user_data, posts)
        print('Final result:', final_data)
    except ValueError as e:
        print(f'Error: {e}')


if __name__ == '__main__':
    asyncio.run(main())
