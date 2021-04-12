# random-bunny

> Get a random image url from a subreddit of your choosing.

## Install

```
$ npm install --save random-bunny
```


## Usage

```js
const { randomBunny } = require('random-bunny');

randomBunny('rabbits', 'new', res => {
    console.log(res.title + ": " + res.url);
});
```

```js
const { promise } = require('random-bunny');

promise('rabbits', 'new').then((res) => {
    console.log(res.title);
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

### `promise()`

Returns a `json string` for a random post in a `promise`. Accepts 2 arguments: `subreddit`, `sortby` ('new', 'hot', 'top').

The json string returned in the promise consists of the same above.

## Notes

* Node 4 or newer.
* based upon [Random Puppy](https://github.com/dylang/random-puppy)

## Links

* Discord: [Server Link](https://discord.gg/UyAhAVp)

## License

MIT © [Vylpes](https://gitlab.vylpes.com/Vylpes)