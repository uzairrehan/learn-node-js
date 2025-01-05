

The `fs` (File System) module in Node.js allows you to work with the file system. It provides methods to read, write, delete, and manage files and directories.

To use it, you need to import the module:

```javascript
const fs = require('fs');
```

Here’s a simple explanation of its main functions with examples:

---

### **1. Reading Files**
- **`fs.readFile`**: Reads the content of a file asynchronously.

**Example**:
```javascript
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});
```

- **`fs.readFileSync`**: Reads the file synchronously.

**Example**:
```javascript
const fs = require('fs');

try {
  const data = fs.readFileSync('example.txt', 'utf8');
  console.log('File content:', data);
} catch (err) {
  console.error('Error reading file:', err);
}
```

---

### **2. Writing Files**
- **`fs.writeFile`**: Writes data to a file asynchronously.

**Example**:
```javascript
fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File written successfully!');
});
```

- **`fs.writeFileSync`**: Writes data synchronously.

**Example**:
```javascript
try {
  fs.writeFileSync('example.txt', 'Hello, Node.js!');
  console.log('File written successfully!');
} catch (err) {
  console.error('Error writing file:', err);
}
```

---

### **3. Appending to Files**
- **`fs.appendFile`**: Adds content to an existing file.

**Example**:
```javascript
fs.appendFile('example.txt', '\nAppended text.', (err) => {
  if (err) {
    console.error('Error appending file:', err);
    return;
  }
  console.log('Content appended successfully!');
});
```

---

### **4. Deleting Files**
- **`fs.unlink`**: Deletes a file.

**Example**:
```javascript
fs.unlink('example.txt', (err) => {
  if (err) {
    console.error('Error deleting file:', err);
    return;
  }
  console.log('File deleted successfully!');
});
```

---

### **5. Checking if a File Exists**
- **`fs.existsSync`**: Checks synchronously if a file exists.

**Example**:
```javascript
if (fs.existsSync('example.txt')) {
  console.log('File exists!');
} else {
  console.log('File does not exist.');
}
```

---

### **6. Creating Directories**
- **`fs.mkdir`**: Creates a directory.

**Example**:
```javascript
fs.mkdir('new-folder', (err) => {
  if (err) {
    console.error('Error creating folder:', err);
    return;
  }
  console.log('Folder created successfully!');
});
```

---

### **7. Reading Directories**
- **`fs.readdir`**: Reads the contents of a directory.

**Example**:
```javascript
fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }
  console.log('Directory contents:', files);
});
```

---

### **8. Renaming Files or Directories**
- **`fs.rename`**: Renames a file or directory.

**Example**:
```javascript
fs.rename('old-name.txt', 'new-name.txt', (err) => {
  if (err) {
    console.error('Error renaming file:', err);
    return;
  }
  console.log('File renamed successfully!');
});
```

---

### **Using Promises with `fs.promises`**
The `fs` module also provides a promise-based API for modern JavaScript.

**Example**:
```javascript
const fsPromises = require('fs/promises');

async function manageFile() {
  try {
    await fsPromises.writeFile('example.txt', 'Hello, Promises!');
    const data = await fsPromises.readFile('example.txt', 'utf8');
    console.log('File content:', data);
  } catch (err) {
    console.error('Error:', err);
  }
}

manageFile();
```
