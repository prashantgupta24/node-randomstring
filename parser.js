	//parsing pmd.xml
     var XMLPath = __dirname+'/pmd.xml';
     var rawJSON = loadXMLDoc(XMLPath);

     var json=JSON.parse(rawJSON);
     var coverage=true;
     
     for(var i=0;i<json.pmd.file.length;i++){
     	for(var j=0;j<json.pmd.file[i].violation.length;j++){
     		if(json.pmd.file[i].violation[j].$.rule=="CheckRequireParams")
     		coverage=false;
     	}
     }
     
   
    function loadXMLDoc(filePath) {
        var fs = require('fs');
        var xml2js = require('xml2js');
        var json;
        try {
            var fileData = fs.readFileSync(filePath, 'ascii');

            var parser = new xml2js.Parser();
            parser.parseString(fileData.substring(0, fileData.length), function (err, result) {
            json = JSON.stringify(result);

            //console.log(JSON.stringify(result));
        });

        
        return json;
    } catch (ex) {console.log(ex)}
 }



//parsing randomstring.js.html file
var fs = require("fs");

var cheerio = require('cheerio');


var tags = cheerio.load(fs.readFileSync(__dirname+ '/coverage/lcov-report/node-randomstring/lib/randomstring.js.html'));

var value=tags('span.strong').text().trim();
var array=value.split(" ");

for(var a in array){
	array[a]=array[a].slice(0,array[a].length-1);
	//console.log(array[a]);
}

if(array[0] < 80)
	coverage=false;

if(!coverage) {
	console.log("Coverage criteria not met!");
	process.exit(1);
}
