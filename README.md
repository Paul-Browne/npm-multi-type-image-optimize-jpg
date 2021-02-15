# imagemin-most-optimized-jpg
Returns the best optimized image from jpegtran, mozjpeg or the original if optimization didn't improve it.

### usage

`npm i imagemin-most-optimized-jpg`

or 

`npm i -D imagemin-most-optimized-jpg`


```js
const fs = require("fs");
const optimJPG = require("imagemin-most-optimized-jpg");

fs.readFile("/path/to/source/image.jpg", (err, data) => {
	if (err) throw err;
	optimJPG(data).then(image => {
		// assumes "/path/to/dist/" directory exists
		fs.writeFile("/path/to/dist/image.jpg", image, err => {
			if (err) throw err;
			console.log('The file has been saved!');
		});
	})
});
```

Pass plugin quality levels as options for mozjpeg.

```js
const fs = require("fs");
const optimJPG = require("imagemin-most-optimized-jpg");

const options = {			// defauls shown
	mozjpeg: 75				// 0-100, 0 - super bad, 100 - best quality
}

fs.readFile("/path/to/source/image.jpg", (err, data) => {
	if (err) throw err;
	optimJPG(data, options).then(image => {
		// assumes "/path/to/dist/" directory exists
		fs.writeFile("/path/to/dist/image.jpg", image, err => {
			if (err) throw err;
			console.log('The file has been saved!');
		});
	})
});
```