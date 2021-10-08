import { promises as fs } from 'fs';
import optimizePNG from "./index.js";

const optimze = async path => {
	const data = await fs.readFile(path);
	const optimized = await optimizePNG(data);
	await fs.writeFile(path.replace("src", "dist"), optimized);
}  

optimze("./tests/src/images/landscape.jpg");

