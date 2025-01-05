

Node.js includes **over 35 built-in modules** (as of the latest versions). These modules are designed to provide essential functionality and can be imported directly without installation using the `require()` or `import` syntax.

Here’s a list of some of the **most used and famous Node.js built-in modules**:

---

### **1. `fs` (File System)**
- **Purpose**: To work with the file system (read, write, delete, rename, etc.).
- **Example Use Case**: Reading or writing files in a Node.js application.
  
```javascript
const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

---

### **2. `http`**
- **Purpose**: To create web servers and handle HTTP requests and responses.
- **Example Use Case**: Building RESTful APIs or simple HTTP servers.

```javascript
const http = require('http');
http.createServer((req, res) => {
  res.write('Hello, world!');
  res.end();
}).listen(3000);
```

---

### **3. `path`**
- **Purpose**: To work with and manipulate file paths.
- **Example Use Case**: Joining or normalizing file paths.

```javascript
const path = require('path');
console.log(path.join(__dirname, 'example.txt'));
```

---

### **4. `os`**
- **Purpose**: To interact with the operating system.
- **Example Use Case**: Getting system information like CPU or memory usage.

```javascript
const os = require('os');
console.log(os.totalmem());
```

---

### **5. `events`**
- **Purpose**: To create and handle custom events.
- **Example Use Case**: Event-driven programming in Node.js.

```javascript
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('greet', () => {
  console.log('Hello there!');
});

emitter.emit('greet');
```

---

### **6. `stream`**
- **Purpose**: To handle streaming data like file reading, writing, and piping.
- **Example Use Case**: Working with large files or network streams.

```javascript
const fs = require('fs');
const readStream = fs.createReadStream('example.txt');
readStream.on('data', chunk => {
  console.log(chunk.toString());
});
```

---

### **7. `util`**
- **Purpose**: To provide utility functions, such as promisifying callbacks or inspecting objects.
- **Example Use Case**: Debugging or converting callback-based APIs to promises.

```javascript
const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);
setTimeoutPromise(1000).then(() => console.log('1 second passed'));
```

---

### **8. `crypto`**
- **Purpose**: To provide cryptographic functionality, such as hashing and encryption.
- **Example Use Case**: Generating hashes or encrypting data.

```javascript
const crypto = require('crypto');
console.log(crypto.createHash('sha256').update('Hello').digest('hex'));
```

---

### **9. `url`**
- **Purpose**: To parse and format URLs.
- **Example Use Case**: Parsing query parameters from a URL.

```javascript
const url = require('url');
const parsed = url.parse('https://example.com/path?name=Uzair');
console.log(parsed.query); // Output: name=Uzair
```

---

### **10. `child_process`**
- **Purpose**: To spawn child processes and execute shell commands.
- **Example Use Case**: Running shell commands or executing other programs.

```javascript
const { exec } = require('child_process');
exec('ls', (err, stdout) => {
  if (err) throw err;
  console.log(stdout);
});
```

---

### Other Frequently Used Modules:
- **`net`**: For creating TCP servers and clients.
- **`dns`**: For DNS resolution and lookup.
- **`cluster`**: For creating child processes for load balancing.
- **`timers`**: For managing timed operations (like `setTimeout`).

These modules cover a wide range of functionality, making Node.js a powerful platform for building applications. If you're diving into backend development, learning these core modules is essential!