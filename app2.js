//ASYNC READFILE IN FS USING PROMISES | ASYNC AWAIT
const { readFile, writeFile } = require("fs");

//UTIL MODULE FOR PROMISIFYING readFile and writeFile
//OR YOU CAN JUST require('fs').promises and use the readFile and writeFile as it is and it will still fire promises
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


//ASYNC AWAIT USING PROMISE FUNCTION
const start = async () => {
    try {
        const firstText = await readFilePromise("./content/firstAsyncc.txt", 'utf8');
        const secondText = await readFilePromise('./content/secondAsyncc.txt', 'utf8');
        await writeFilePromise('./content/promisified-text.txt', `Combined:${firstText}${secondText}`, { flag: 'a'})
        console.log(firstText, secondText);
    } catch (error) 
    {
        console.log(error)
    }
};

start();

//ASYNC AWAIT USING PROMISE FUNCTION
// const start = async () => {
//     try {
//         const firstText = await getText("./content/firstAsyncc.txt");
//     const secondText = await getText('./content/secondAsyncc.txt')
//     console.log(firstText, secondText);
//   } catch (error) {
//     console.log(error)
// }
// };

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// console.log('starting to read')
// getText("./content/firstAsyncc.txt")
//   .then(res => {
//     console.log(res)
//     return getText('./content/secondAsyncc.txt')
//     .then(res => {
//         console.log(res)
//     })
//   })
//   .catch((err) => console.log(err));
// console.log('starting a new read')