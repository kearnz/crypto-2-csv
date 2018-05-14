const JsonCsv = require('json2csv').Parser,
    _ = require('underscore'),
    fs = require('fs');

// wrapper function
let jsonToCsv = async (data, csvName, explode) => {
    const fields = _.keys(data[0]);
    const jsonData = explode ? new JsonCsv({fields, unwind: explode}) : new JsonCsv({fields});
    const csvRes = jsonData.parse(data);
    fs.writeFile(csvName,csvRes);
}

module.exports.jsonToCsv = jsonToCsv