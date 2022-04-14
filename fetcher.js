//EG:
//> node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html

//fetch inputted data
const args = process.argv.slice(2)


const uRL = args[0];
const localPath = args[1];

//use fs and request
const fs = require('fs')
const request = require('request');

request(`${uRL}`, (error, response, body) => { 
  fs.writeFile(localPath, body, err => {
    if(err) {
      console.error(err);
      return
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`)
  })
 })
