"""
Exercise 1: asyncio Basics - SOLUTION
"""

import asyncio


async def fetch_user_data(user_id):
    """Fetch user data asynchronously."""
    print(f'Fetching user {user_id}...')
    await asyncio.sleep(0.5)
    return {
        'id': user_id,
        'name': 'John Doe',
        'email': 'john@example.com'
    }


async def process_user_data(user_data):
    """Process user data asynchronously."""
    print('Processing user data...')
    await asyncio.sleep(0.3)
    return {
        **user_data,
        'processed': True
    }


async def main():
    """Main execution function."""
    print('Exercise 1: asyncio Basics - SOLUTION')
    print('Starting to fetch user data...')
    
    user_data = await fetch_user_data(123)
    processed_data = await process_user_data(user_data)
    
    print('Final result:', processed_data)


if __name__ == '__main__':
    asyncio.run(main())
