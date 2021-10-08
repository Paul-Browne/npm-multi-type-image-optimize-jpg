import { readFile, writeFile } from 'fs/promises';
import optimizePNG from "./index.js";

const optimze = async path => {
	const data = await readFile(path);
	const optimized = await optimizePNG(data);
	await writeFile(path.replace("src", "dist"), optimized);
}  

optimze("./tests/src/images/landscape.jpg");

