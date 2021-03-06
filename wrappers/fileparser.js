/* CONTAINS HELPER FUNCTIONS FOR FILE PARSING FROM JSON */

const JsonCsv = require("json2csv").Parser,
    _ = require("underscore"),
    fs = require("fs");

// wrapper function
const jsonToCsv = async (data, csvName, explode) => {
    try {
        const fields = _.keys(data[0]);
        const jsonData = explode ? new JsonCsv({fields, unwind: explode}) : new JsonCsv({fields});
        const csvRes = jsonData.parse(data);
        await fs.writeFile(csvName, csvRes, (e) => console.log(e));
        console.log(`${csvName} written to current directory`);
    } 
    catch(e) {
        console.log(e); 
    }
}

// export wrapper func
module.exports.jsonToCsv = jsonToCsv