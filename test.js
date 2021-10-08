import { readFile, writeFile } from "fs";
import optimizeJPG from "./index.js";

const optimze = pathToJPG => {
	readFile(pathToJPG, (err, data) => {
		if (err) throw err;
		optimizeJPG(data).then(res => {
			writeFile(pathToJPG.replace("src", "dist"), res, err => {
				if (err) throw err;
				console.log('The file has been saved!');
			});
		})
	});
} 

optimze("./tests/src/images/landscape.jpg");

