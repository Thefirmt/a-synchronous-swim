const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  if(req.url === '/background.jpg'){
      fs.readFile(path.join('.', 'spec', 'water-lg.jpg'), (err,data) => {
        if (err) {
          res.writeHead(404, headers);
        }
        console.log('Hello Pikachu')

        const buffMan = Buffer.from(data);
        res.write(data);
        // res.write(buffMan);
        // console.log(data)
        res.end();
        next();
      }
    )
    // fs.access(req.url, fs.constants.F_OK, (err) => {
    //   console.log(`${req.url} ${err ? res.writeHead(404, headers): 'exists'}`)
  } else if (req.method === 'GET') {
      res.writeHead(200, headers);
      const direction = req.url;
      var sendMe = direction.slice(12);
      res.write(sendMe);
      res.end();
      next();
  } else {
    res.writeHead(200, headers);
    res.end();
    next();
  }
};

