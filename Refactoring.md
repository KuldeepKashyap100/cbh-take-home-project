# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

1. File Structure and Separation of Concerns:
    - The original code was contained in a single file './dpk.js'. 
    - The refactored code introduces a modular structure by separating the logic into multiple files './generateDeterministicPartitionKey.js' and './getHasher.js'.
    - This separation improves code organization and makes it easier to manage and understand the different components of the codebase. 
    - Each file has a specific responsibility, promoting better maintainability and reusability.

2. Constants:
    - The constants 'TRIVIAL_PARTITION_KEY' and 'MAX_PARTITION_KEY_LENGTH' were initially defined within the deterministicPartitionKey function and were getting reassigned in each function call. 
    - In the refactored code, these constants have been moved to a separate file './constants/index.js'.
    - By extracting the constants into a separate module, it improves code readability and makes it easier to modify or update them if needed. 
    - It also encourages the DRY (Don't Repeat Yourself) principle.

3. Function Extraction and Reusability:
    - The hashing logic has been extracted into a separate function called getHasher in './getHasher.js'. This function encapsulates the creation of the hasher using the specified algorithm.
    - By extracting the hashing logic into a reusable function, it promotes code modularity and reusability. 
    - It also separates the concerns of hashing from the main 'generateDeterministicPartitionKey' function, making it easier to understand and test each component independently.
    - In 'getHasher' function used 'closure' and function 'currying' to cache the hasher instance which can be reused.    
    - Also used default arguments in 'getHasher' for 'algoritm'("sha3-512") and 'digest'("hex") input parms.
    - After doing the above changes now 'getHasher' is reusable function and can be used in other parts of the codebase if needed.

4. Simplified Conditionals and Readability:
    - In original code there were lot of if/else block which degrades readabilty. Removed all of the redundant conditional blocks and improved readability and reduced nesting.
    - Used optional chaining, it checks if 'event.partitionKey' exists without explicitly checking for event first. This reduces nesting and improves code readability.
    - Assigned 'DEFAULT_PARTITION_KEY' to 'generatedPartitionKey'. this removed one else block from original code.

5. Variable and Function Naming:
    - Used variable and function names which are more descriptive and meaningful the code becomes more self-explanatory easier to understand and maintain.
    - The 'deterministicPartitionKey' function has been renamed to 'generateDeterministicPartitionKey', which better reflects its purpose of generating a deterministic partition key.
    - Renamed variable 'candidate' to 'generatedPartitionKey' and 'data' to 'serializedEvent', which provides clearer context about its role in the code.
    - Created 'getHasher' function which returns a hasher function and it accurately describes its functionality of creating hashers.

