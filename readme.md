# random-bunny

> Get a random image url from a subreddit of your choosing.

## Install

```
$ npm install --save random-bunny
```


## Usage

```js
const randomBunny = require('random-bunny');

randomBunny('rabbits', 'new', res => {
    console.log(res.title + ": " + res.url);
});
```


## API

### `randomBunny()`

Returns a `json string` for a random post to the `callback`. Accepts 3 arguments: `subreddit`, `sortby` ('new', 'hot', 'top'), `callback(res)`

The json string which gets returned consists of:
- archived
- downs
- hidden
- permalink
- subreddit
- subredditSubscribers
- title
- ups
- url

## Notes

* Node 4 or newer.
* based upon [Random Puppy](https://github.com/dylang/random-puppy)

## Links

* Discord: [Server Link](https://discord.gg/UyAhAVp)

## License

MIT © [Vylpes](https://gitlab.vylpes.com/Vylpes)