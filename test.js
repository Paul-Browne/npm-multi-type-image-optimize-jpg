const fs = require("fs");
const optimizeJPG = require("./index.js");

const optimze = pathToJPG => {
	fs.readFile(pathToJPG, (err, data) => {
		if (err) throw err;
		optimizeJPG(data).then(res => {
			fs.writeFile(pathToJPG.replace("src", "dist"), res, err => {
				if (err) throw err;
				console.log('The file has been saved!');
			});
		})
	});
} 

optimze("./tests/src/images/landscape.jpg");

