const fs = require("fs");
const path = require("path");

const fullPath = path.join("/users", "uzair", "documents", "file.txt");
console.log(fullPath);

const absolutePath = path.resolve("users", "uzair", "documents", "file.txt");
console.log(absolutePath);

const fileName = path.basename("/users/uzair/documents/file.txt");
console.log(fileName);

const dirName = path.dirname("/users/uzair/documents/file.txt");
console.log(dirName);

const fileExt = path.extname("/users/uzair/documents/file.txt");
console.log(fileExt);

const parsedPath = path.parse("/users/uzair/documents/file.txt");
console.log(parsedPath);

const formattedPath = path.format({
  dir: "/users/uzair/documents",
  base: "file.txt",
});
console.log(formattedPath);

const normalizedPath = path.normalize(
  "/users/uzair/../uzair/documents/./file.txt"
);
console.log(normalizedPath);

console.log(path.isAbsolute("/users/uzair/file.txt"));
console.log(path.isAbsolute("file.txt"));


const filePath = "/users/uzair/documents/project/file.txt";

const baseName = path.basename(filePath);

const newDir = path.join(dirName, "organized");
if (!fs.existsSync(newDir)) {
  fs.mkdirSync(newDir);
}

const newPath = path.join(newDir, baseName);
fs.renameSync(filePath, newPath);

console.log(`File moved to: ${newPath}`);