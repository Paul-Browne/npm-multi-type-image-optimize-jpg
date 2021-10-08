# imagemin-most-optimized-jpg
Returns the best optimized image from jpegtran, mozjpeg or the original if optimization didn't improve it.

### usage

`npm i imagemin-most-optimized-jpg`

or 

`npm i -D imagemin-most-optimized-jpg`


```js
import { promises as fs } from 'fs';
import optimizeJPG from "imagemin-most-optimized-jpg";

const optimze = async path => {
	const data = await fs.readFile(path);
	const optimized = await optimizeJPG(data);
	await fs.writeFile("/path/to/dist/image.jpg"), optimized);
}  

optimze("/path/to/source/image.jpg");
```

Pass plugin quality levels as options for mozjpeg.

```js
import { promises as fs } from 'fs';
import optimizeJPG from "imagemin-most-optimized-jpg";

const options = {			
	// defaults shown

	// 0-100, 0 - super bad, 100 - best quality
	mozjpeg: 75
}

const optimze = async path => {
	const data = await fs.readFile(path);
	const optimized = await optimizeJPG(data);
	await fs.writeFile("/path/to/dist/image.jpg"), optimized);
}  

optimze("/path/to/source/image.jpg");
```