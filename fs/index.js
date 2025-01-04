const path = require("path");
const os = require("os")
// const fs = require("fs");

// console.log("file name => " ,__filename);
// console.log("directory name => " ,__dirname);
// console.log(path)
// console.log("hello",path.parse)

// const pathName = path.join("folder","teacher","student.txt")

// console.log(pathName);

// const parse = path.parse(pathName)
// const join = path.join(pathName)
// const resolve = path.resolve(pathName)
// const extname = path.extname(pathName)
// const dirname = path.dirname(pathName)
// const basename = path.basename(pathName)

// const parse = path.parse(__filename)
// const join = path.join(__filename)
// const resolve = path.resolve(__filename)
// const extname = path.extname(__filename)
// const dirname = path.dirname(__filename)
// const basename = path.basename(__filename)

// console.log("parse", parse,"join",join,"resolve",resolve,"extname",extname,"dirname",dirname,"basename",basename)

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.uptime());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.networkInterfaces());
// console.log(os.cpus());
// console.log(os.tmpdir());

// fs.writeFileSync("test.txt","this is the data","utf-8")

// const filePath = path.join(__dirname, "test.txt");

// const data = fs.readFileSync(filePath,"utf-8")

// console.log(data)

// fs.appendFileSync()
// fs.unlinkSync(filePath)

// const newUpdatedFileName = "updateTest.txt";
// const newFilePath = path.join(__dirname, newUpdatedFileName);
// const renameFile = fs.renameSync(filePath, newFilePath);
// console.log(renameFile);

// async way

// fs.writeFile(
//   "asyncTets.txt",
//   "this is the data to be added",
//   "utf-8",
//   (error) => {
//     if (error) {
//       console.log("Cant save");
//     } else {
//       console.log("file saved");
//     }
//   }
// );

// fs.writeFile(filePath, "This is the initial Data", "utf-8", (err) => {
//   if (err) console.error(err);
//   else console.log("File has been Saved");
// });

//*-------------------------------------------------------------------------------------*
//* fs.writeFile(): Writes data to a file, replacing the file if it already exists.
// syntax: fs.writeFile(path, data, options, callback);

//? path: File path to write to.
//? data: Content to write.
//? options: Optional. Specifies encoding ('utf8'), mode, or flag.
//? callback: A function with an err parameter.
//*-------------------------------------------------------------------------------------*

//*-------------------------------------------------------------------------------------*
//* fs.readFile(): Reads the contents of a file asynchronously and returns the data as a buffer or string.
//! syntax: fs.readFile(path, options, callback);

//? path: File path to read from.
//? options: Optional. An object or string specifying the encoding ('utf8') or flag ('r' for reading).
//? callback: A function with parameters (err, data).
//*-------------------------------------------------------------------------------------*

//*-------------------------------------------------------------------------------------*
//* fs.appendFile(): Appends data to a file. If the file doesn’t exist, it is created.
//! syntax: fs.appendFile(path, data, options, callback);

//*-------------------------------------------------------------------------------------*
// fs.appendFile(filePath, "\nThis is the Updated Data", "utf-8", (err) => {
//   if (err) console.error(err);
//   else console.log("File has been Updated");
// });

//*-------------------------------------------------------------------------------------*
//* fs.unlink(): Deletes a file asynchronously.
//! syntax: fs.unlink(path, callback);

//*-------------------------------------------------------------------------------------*
// fs.unlink(filePath, (err) => {
//   if (err) console.error(err);
//   else console.log("File has been Deleted");
// });

// fs.readFile(filePath, (err, data) => {
//   if (err) console.error(err);
//   else console.log(data.toString());
// });

// fs.readFile(filePath, "utf-8", (err, data) => {
//   if (err) console.error(err);
//   else console.log(data);
// });



// with promises


// const fs = require("fs/promises");
// const path = require("path");

// const fileName = "fsPromises.txt";
// const filePath = path.join(__dirname, fileName);

// Why .then() and .catch()?
//? .then() ensures clear chaining of multiple asynchronous operations.
//? .catch() centralizes error handling, making it easy to debug and manage failures.
//*-------------------------------------------------------------------------------------*

// const filePath1 = __dirname;

// fs.promises
//   .readdir(filePath1)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//*-------------------------------------------------------------------------------------*
//* Create (Write a File):fs.promises.writeFile
//* Creates or overwrites a file with specified content.
//* The writeFile() method writes data to a file asynchronously.
//* If the file does not exist, it is created.
//* If it exists, its content is replaced.

//! syntax: fs.promises.writeFile(path, data, options).then().catch();
//? path: Path to the file.
//? data: Content to write.
//? options: Encoding ('utf8'), flags, etc. (optional).
//*-------------------------------------------------------------------------------------*

// fs.writeFile(filePath, "this is the initial data", "utf-8")
//   .then(console.log("File created successfully!"))
//   .catch((err) => console.log(err));

//*-------------------------------------------------------------------------------------*
//* Read (Read a File): readFile()
//* The readFile() method reads data from a file.
//* It can return the data as a Buffer or string based on the encoding provided.

//! syntax: fs.promises.readFile(path, options).then(data => ...).catch(err => ...);
//? path: Path to the file.
//? options: Encoding ('utf8') or no encoding for binary data.
//*-------------------------------------------------------------------------------------*

// fs.promises
//   .readFile(filePath, "utf-8")
//   .then((data) => console.log(data))
//   .catch((err) => console.error("Error reading file:", err));

//*-------------------------------------------------------------------------------------*
//* Update (Append Content to a File): appendFile()
//* Adds content to the end of a file.
//* The appendFile() method adds content without overwriting the existing data.

//! syntax: fs.promises.appendFile(path, data, options).then().catch();
//? path: Path to the file.
//? data: Content to append.
//? options: Encoding ('utf8') or no encoding for binary data.
//*-------------------------------------------------------------------------------------*

// fs.promises
//   .appendFile(filePath, "\nthis is the updated data", "utf-8")
//   .then(console.log("File updated successfully!"))
//   .catch((err) => console.log(err));

//*-------------------------------------------------------------------------------------*
//* Delete (Remove a File): unlink()
//* Deletes a file from the filesystem.
//* The unlink() method removes the specified file asynchronously.

//! syntax: fs.promises.unlink(path).then().catch();
//? path: Path to the file.
//*-------------------------------------------------------------------------------------*

// fs.promises
//   .unlink(filePath)
//   .then(console.log("File Deleted successfully!"))
//   .catch((err) => console.error("Error deleting file:", err));











const fs = require("fs/promises");
// const path = require("path");

// const fileName = "asyncFile.txt";
// const filePath = path.join(__dirname, fileName);

const filePath1 = __dirname;







// fs.promises
//   .readdir(filePath1)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// const readFolder = async () => {
//   try {
//     const res = await fs.readdir(filePath1);
//     console.log(res);
//   } catch (error) {
//     console.error(error);
//   }
// };
// readFolder();










//*-------------------------------------------------------------------------------------*
//* fsPromises.writeFile() : Writes data to a file asynchronously. If the file exists, it overwrites the content.
//! syntax: fs.Promises.writeFile(path, data, options);

//? path: The file path to write to.
//? data: The content to write to the file.
//? options: Optional. Specifies encoding (e.g., 'utf8'), mode, or flags.
//*-------------------------------------------------------------------------------------*

// const writeFileExample = async () => {
//   try {
//     await fs.writeFile(filePath1, "This is the initial Data", "utf-8");
//     console.log("File created successfully!");
//   } catch (error) {
//     console.error(error);
//   }
// };

// writeFileExample();









//*-------------------------------------------------------------------------------------*
//* Reading a File: fsPromises.readFile() : Reads the contents of a file asynchronously.
//! syntax: fsPromises.readFile(path, options);

//? path: The file path to read.
//? options: Optional. Can specify encoding (e.g., 'utf8') or return a Buffer if no encoding is provided.
//*-------------------------------------------------------------------------------------*
// const readFileExample = async () => {
//   try {
//     const data = await fs.readFile(filePath, "utf-8");
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// };

// readFileExample();












//*-------------------------------------------------------------------------------------*
//* Appending Data: fsPromises.appendFile() : Adds content to the end of a file. If the file does not exist, it creates a new one.
//! syntax: fsPromises.appendFile(path, data, options);

//? path: The file path to read.
//? options: Optional. Can specify encoding (e.g., 'utf8') or return a Buffer if no encoding is provided.
//*-------------------------------------------------------------------------------------*









// const appendFileExample = async () => {
//   try {
//     await fs.appendFile(filePath, "\nThis is the updated Data", "utf-8");
//     console.log("File updated successfully!");
//   } catch (error) {
//     console.error(error);
//   }
// };

// appendFileExample();








//*-------------------------------------------------------------------------------------*
//* Deleting a File: fsPromises.unlink() : Deletes a file by its path.
//! syntax: fsPromises.unlink(path)

//? path: The file path to delete.
//*-------------------------------------------------------------------------------------*





// const deleteFileExample = async () => {
//   try {
//     await fs.unlink(filePath);
//     console.log("File deleted successfully!");
//   } catch (error) {
//     console.error("Error deleting file:", error.message);
//   }
// };

// deleteFileExample();




