// wrapper function
let jsonToCsv = async (data,fields,csvName) => {
    const jsonData = new JsonCsv({fields});
    const csvRes = jsonData.parse(data);
    fs.writeFile(csvName,csvRes); 
}

module.exports.jsonToCsv = jsonToCsv