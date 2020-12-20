# random-bunny

> Get a random image url from a subreddit of your choosing.

## Install

```
$ npm install --save random-bunny
```


## Usage

```js
const randomBunny = require('random-bunny');

randomBunny('rabbits', 'new', (image, title) => {
    console.log(title + ": " + image);
});
```


## API

### `randomBunny()`

Returns a `url` and `title` for a random post to the `callback`. Accepts 3 arguments: `subreddit`, `sortby` ('new', 'hot', 'top'), `callback(image, title)`

## Notes

* Node 4 or newer.
* based upon [Random Puppy](https://github.com/dylang/random-puppy)

## Links

* Discord: [Server Link](https://discord.gg/UyAhAVp)

## License

MIT © [Vylpes](https://gitlab.vylpes.com/Vylpes);
