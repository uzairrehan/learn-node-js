// Here's a simple example using the `crypto` module in Node.js to **hash a password** and **compare it** with a previously hashed password. This is commonly used in authentication systems.

// ### Example: Hashing a Password and Comparing

// 1. **Hash the password**: We'll take a user's password, hash it, and store the hash.
// 2. **Compare the input password**: When the user logs in, we'll hash the input password and compare it to the stored hash.

// #### Code Example:

// javascript
const crypto = require('crypto');

// Function to hash a password
function hashPassword(password) {
  const hash = crypto.createHash('sha256');
  hash.update(password);
  return hash.digest('hex');
}

// Example: User registers with a password
const userPassword = 'mySecretPassword123';
const hashedPassword = hashPassword(userPassword);
console.log('Stored hashed password:', hashedPassword);

// Simulate user login by entering the password again
const inputPassword = 'mySecretPassword123';  // User input during login
const inputPasswordHash = hashPassword(inputPassword);

// Compare hashed input password with stored password hash
if (inputPasswordHash === hashedPassword) {
  console.log('Login successful!');
} else {
  console.log('Invalid password!');
}
// ```

// ### Explanation:

// 1. **`hashPassword` Function**: Takes the plain text password, hashes it using SHA-256, and returns the hash in hexadecimal format.
// 2. **User Registration**: When a user registers, we hash their password and store the result.
// 3. **User Login**: When the user logs in, we hash the entered password and compare it with the stored hash. If they match, the login is successful.

// ### Output Example:

// Stored hashed password: 6f1a2b1d8a72fae1c9c8cc218dc61bc559d3fc39d1fdd8ed0bb40fa49ad019fa
// Login successful!

// This is a simple way to store and verify passwords securely using hashing in Node.js.
