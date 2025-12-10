# Python Asynchronous Exercises

This directory contains exercises for learning asynchronous Python programming with asyncio.

## Setup

Make sure you have Python 3.7 or higher installed.

```bash
pip install -r requirements.txt
```

## Exercises

### Exercise 1: asyncio Basics
**File**: `exercises/exercise1_asyncio_basics.py`

Learn the fundamentals of asyncio and coroutines in Python.

**Run**: `python exercises/exercise1_asyncio_basics.py`

**Topics**:
- `async def` functions (coroutines)
- `await` keyword
- `asyncio.run()`
- `asyncio.sleep()`

### Exercise 2: Async Functions
**File**: `exercises/exercise2_async_functions.py`

Create and compose multiple async functions.

**Run**: `python exercises/exercise2_async_functions.py`

**Topics**:
- Creating async functions
- Chaining async operations
- Exception handling in async functions

### Exercise 3: Concurrent Tasks
**File**: `exercises/exercise3_concurrent_tasks.py`

Learn how to run multiple tasks concurrently for better performance.

**Run**: `python exercises/exercise3_concurrent_tasks.py`

**Topics**:
- `asyncio.gather()` for concurrent execution
- `asyncio.create_task()`
- Sequential vs concurrent execution
- Performance comparison

### Exercise 4: Error Handling
**File**: `exercises/exercise4_error_handling.py`

Master error handling patterns in async Python code.

**Run**: `python exercises/exercise4_error_handling.py`

**Topics**:
- Try/except with async functions
- `asyncio.gather()` with `return_exceptions=True`
- Retry logic for failed operations
- Error handling in concurrent tasks

## Solutions

Solution files are available in the `solutions/` directory. Try to solve the exercises on your own first before checking the solutions!

## Tips

- Read the docstrings and TODO comments carefully
- Start with the simpler exercises and progress to more complex ones
- Run the exercises after implementing to see if they work correctly
- Use `print()` statements to understand the execution flow
- Compare your solution with the provided solutions
- Pay attention to the execution time in Exercise 3 to see the benefits of concurrent execution
