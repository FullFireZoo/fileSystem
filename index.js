const fs = require("fs");
const path = require("path");


// fs.unlink(filePath, (err) => {
//   if (err) throw err;

//   console.log("file Remove!");
// });

function createFile(nom, contenu){
fs.writeFile(nom, contenu , (err) => {
  if (err) throw err;

  console.log("the file as created!");
});

const filePath = path.join(process.cwd(), nom);

fs.readFile(filePath, (error, content) => {
  if (error) throw error;

  console.log(content.toString());
});
}

createFile("test.txt", "romain trop mignon")








// fs.mkdir(
//   `${process.cwd()}/myFolder`,
//   (err) => {
//     if (err) throw err;

//     console.log("folder created sucesslly");
//   }
// );


// fs.readdir(process.cwd(), (err, files) => {
//   if (err) throw err;

//   console.log(files);
// });