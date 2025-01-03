// const path = require("path")
// const os = require("os")
const fs = require("fs")


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



fs.writeFileSync("test.txt","this is the data","utf-8")