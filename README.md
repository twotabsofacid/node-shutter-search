# Node Shutter Search

> Search Shutterstock with node and return a random image based on a query term

### Usage

Require the package, like so:

```
const shutterSearch = require('shutter-search');
```

Then call it like:

```
new shutterSearch('fun').then((data) => {
	console.log(data);
});
```

which should return something like:

```
{
	src: 'https://thumb9.shutterstock.com/display_pic_with_logo/1412440/292297256/stock-photo-group-of-friends-having-fun-together-292297256.jpg',
	alt: 'Group of friends having fun together'
}
```

which you can use however you'd like.