

The `path` module in Node.js provides utilities for working with file and directory paths. It is a core module, so you can use it without installing any additional packages.

### Key Features of the `path` Module:
- **Platform-Independent**: Automatically handles differences in path formats between operating systems.
- **Path Manipulation**: Provides methods to join, resolve, normalize paths, and extract components like the directory name or file extension.

### Importing the `path` Module
```javascript
const path = require('path');
```

---

### Commonly Used Methods with Examples

#### 1. **`path.join()`**
Joins multiple path segments into a single path, handling separators automatically.

```javascript
const path = require('path');

const fullPath = path.join('/users', 'uzair', 'documents', 'file.txt');
console.log(fullPath);
// Output: '/users/uzair/documents/file.txt' (on Linux/macOS)
//         '\users\uzair\documents\file.txt' (on Windows)
```

---

#### 2. **`path.resolve()`**
Resolves a sequence of paths into an absolute path.

```javascript
const absolutePath = path.resolve('users', 'uzair', 'documents', 'file.txt');
console.log(absolutePath);
// Output: '/current/working/directory/users/uzair/documents/file.txt'
```

---

#### 3. **`path.basename()`**
Gets the base name (file name) of a path.

```javascript
const fileName = path.basename('/users/uzair/documents/file.txt');
console.log(fileName);
// Output: 'file.txt'
```

---

#### 4. **`path.dirname()`**
Gets the directory name of a path.

```javascript
const dirName = path.dirname('/users/uzair/documents/file.txt');
console.log(dirName);
// Output: '/users/uzair/documents'
```

---

#### 5. **`path.extname()`**
Gets the extension of a file from the path.

```javascript
const fileExt = path.extname('/users/uzair/documents/file.txt');
console.log(fileExt);
// Output: '.txt'
```

---

#### 6. **`path.parse()`**
Returns an object with information about a path (root, dir, base, ext, name).

```javascript
const parsedPath = path.parse('/users/uzair/documents/file.txt');
console.log(parsedPath);
// Output:
// {
//   root: '/',
//   dir: '/users/uzair/documents',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file'
// }
```

---

#### 7. **`path.format()`**
Takes an object and returns a path string (inverse of `path.parse()`).

```javascript
const formattedPath = path.format({
  dir: '/users/uzair/documents',
  base: 'file.txt',
});
console.log(formattedPath);
// Output: '/users/uzair/documents/file.txt'
```

---

#### 8. **`path.normalize()`**
Normalizes a path, resolving `..` and `.` segments.

```javascript
const normalizedPath = path.normalize('/users/uzair/../uzair/documents/./file.txt');
console.log(normalizedPath);
// Output: '/users/uzair/documents/file.txt'
```

---

#### 9. **`path.isAbsolute()`**
Checks if a path is an absolute path.

```javascript
console.log(path.isAbsolute('/users/uzair/file.txt')); // Output: true
console.log(path.isAbsolute('file.txt')); // Output: false
```

---

### Example: Using `path` in a Real-World Scenario

#### Task: Organize files into a specific directory structure
```javascript
const path = require('path');
const fs = require('fs');

const filePath = '/users/uzair/documents/project/file.txt';

// Extract components
const dirName = path.dirname(filePath);
const baseName = path.basename(filePath);
const fileExt = path.extname(filePath);

// Create new directory
const newDir = path.join(dirName, 'organized');
if (!fs.existsSync(newDir)) {
  fs.mkdirSync(newDir);
}

// Move the file
const newPath = path.join(newDir, baseName);
fs.renameSync(filePath, newPath);

console.log(`File moved to: ${newPath}`);
// Output: File moved to: /users/uzair/documents/project/organized/file.txt
```

This example uses the `path` module to reorganize files based on their paths dynamically.

