

// var parseString = require("xml2js").parseString;
// var xml = `https://intra.pdx.fi/westpro/save/out/kotisivut-rc.xml`;
// parseString(xml, function(err, result) {
//   console.dir(result);
// });





// const fs = require('fs');
// const xml2js = require('xml2js');
// const util = require('util');

// const parser = new xml2js.Parser();

// fs.readFile('example.xml', (err, data) => {
//  parser.parseString(data, (err, result) => {
//      console.log(util.inspect(result, false, null, true));
//  });
// });





const fs = require('fs');
const xml2js = require('xml2js');
const util = require('util');
const http = require("https");
const file = fs.createWriteStream('test.xml');
const parser = new xml2js.Parser({ explicitArray: false });
http.get("https://intra.pdx.fi/westpro/save/out/kotisivut-rc.xml", response => {
    response.setEncoding('latin1');
    response.pipe(file);

});

setTimeout(function () {

    fs.readFile('test.xml', (err, data) => {
        parser.parseString(data, (err, result) => {
            console.log(util.inspect(result, false, null, true));

            // convert it to a JSON string
            const json = JSON.stringify(result, null, 4);

            // save JSON in a file
            fs.writeFileSync('user.json', json);
        });

    });

}, 1000);
