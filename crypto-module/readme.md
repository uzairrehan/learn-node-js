

The `crypto` module in Node.js is used for cryptographic operations like hashing, encryption, and decryption. It provides cryptographic functionality to ensure the security of data and communications.

### Common Use Cases:

1. **Hashing**: Convert data (like passwords) into fixed-size strings.
2. **Encryption**: Convert data into unreadable format for secure transmission.
3. **Decryption**: Convert encrypted data back into its original form.

### How to use the `crypto` module in Node.js?

You can import it like this:

```javascript
const crypto = require('crypto');
```

### 1. **Hashing Example**:

A common use case for hashing is creating a hashed password or data that doesn't need to be reversible. One popular algorithm is SHA-256.

```javascript
const crypto = require('crypto');

// Example: Hash a string with SHA-256
const hash = crypto.createHash('sha256');
hash.update('Hello World');
const result = hash.digest('hex');

console.log(result);  // Prints the SHA-256 hash of the string "Hello World"
```

### 2. **HMAC (Hash-based Message Authentication Code) Example**:

HMAC is a mechanism to verify data integrity and authenticity using a cryptographic hash function and a secret key.

```javascript
const crypto = require('crypto');

// Example: Generate HMAC with SHA-256
const secretKey = 'mysecretkey';
const message = 'Hello World';

const hmac = crypto.createHmac('sha256', secretKey);
hmac.update(message);
const hmacResult = hmac.digest('hex');

console.log(hmacResult);  // Prints the HMAC of the message "Hello World"
```

### 3. **Encryption and Decryption Example (AES)**:

Here is an example of how to encrypt and decrypt data using AES (Advanced Encryption Standard).

#### Encryption:

```javascript
const crypto = require('crypto');

// Encrypt a message using AES-256-CBC
const algorithm = 'aes-256-cbc';
const password = 'password123';  // Password to derive encryption key
const key = crypto.scryptSync(password, 'salt', 32); // Generate a 256-bit key
const iv = crypto.randomBytes(16);  // Initialization vector

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Hello World', 'utf8', 'hex');
encrypted += cipher.final('hex');

console.log('Encrypted:', encrypted);
console.log('IV:', iv.toString('hex'));  // Store IV for later decryption
```

#### Decryption:

```javascript
const crypto = require('crypto');

// Decrypt the message using AES-256-CBC
const algorithm = 'aes-256-cbc';
const password = 'password123';
const key = crypto.scryptSync(password, 'salt', 32);  // Same key
const iv = Buffer.from('YOUR_IV_HERE', 'hex');  // Use the IV saved earlier

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update('ENCRYPTED_MESSAGE_HERE', 'hex', 'utf8');
decrypted += decipher.final('utf8');

console.log('Decrypted:', decrypted);
```

In the above code, replace `'ENCRYPTED_MESSAGE_HERE'` with the actual encrypted text you want to decrypt.

### 4. **Generating Random Data Example**:

You can also use `crypto` to generate random strings or numbers, which is useful for things like generating unique tokens.

```javascript
const crypto = require('crypto');

// Generate a random 16-byte string in hexadecimal format
const randomBytes = crypto.randomBytes(16).toString('hex');
console.log(randomBytes);  // Prints a random string of 16 bytes in hexadecimal
```

### Summary:

- **Hashing**: `crypto.createHash('sha256')`
- **HMAC**: `crypto.createHmac('sha256', 'secret-key')`
- **Encryption**: `crypto.createCipheriv('aes-256-cbc', key, iv)`
- **Decryption**: `crypto.createDecipheriv('aes-256-cbc', key, iv)`
- **Random Data**: `crypto.randomBytes(size)`