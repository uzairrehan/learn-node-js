const path = require("path");
// const os = require("os")
const fs = require("fs");
const { error } = require("console");

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

const filePath = path.join(__dirname, "test.txt");

// const data = fs.readFileSync(filePath,"utf-8")

// console.log(data)

// fs.appendFileSync()
// fs.unlinkSync(filePath)

// const newUpdatedFileName = "updateTest.txt";
// const newFilePath = path.join(__dirname, newUpdatedFileName);
// const renameFile = fs.renameSync(filePath, newFilePath);
// console.log(renameFile);

// async way













fs.writeFile(
  "asyncTets.txt",
  "this is the data to be added",
  "utf-8",
  (error) => {
    if (error) {
      console.log("Cant save");
    } else {
      console.log("file saved");
    }
  }
);





//*-------------------------------------------------------------------------------------*
//* fs.writeFile(): Writes data to a file, replacing the file if it already exists.
// syntax: fs.writeFile(path, data, options, callback);

//? path: File path to write to.
//? data: Content to write.
//? options: Optional. Specifies encoding ('utf8'), mode, or flag.
//? callback: A function with an err parameter.
//*-------------------------------------------------------------------------------------*













// fs.writeFile(filePath, "This is the initial Data", "utf-8", (err) => {
//   if (err) console.error(err);
//   else console.log("File has been Saved");
// });












//*-------------------------------------------------------------------------------------*
//* fs.readFile(): Reads the contents of a file asynchronously and returns the data as a buffer or string.
//! syntax: fs.readFile(path, options, callback);

//? path: File path to read from.
//? options: Optional. An object or string specifying the encoding ('utf8') or flag ('r' for reading).
//? callback: A function with parameters (err, data).
//*-------------------------------------------------------------------------------------*





// fs.readFile(filePath, (err, data) => {
//   if (err) console.error(err);
//   else console.log(data.toString());
// });

// fs.readFile(filePath, "utf-8", (err, data) => {
//   if (err) console.error(err);
//   else console.log(data);
// });






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



