# random-bunny

> Get a random image url from a subreddit of your choosing.

## Install

```bash
npm install --save random-bunny
```

or if you're using yarn

```bash
yarn add random-bunny
```


## Usage

```ts
import randomBunny from "random-bunny";

// ... In an async function
const result = await randomBunny('rabbits', 'hot', 100);
console.log(result);
```

## API

### `randomBunny()`

Returns a `json string` for a random post. Accepts 3 arguments: `subreddit`, `sortby` ('new', 'hot', 'top'), `maxTries?` (default 100)

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

`sortBy` will default to 'hot' if not given or invalid

`maxTries` prevents the script from rerolling too many times. The script rerolls the randomiser if the post its given doesn't contain an image. Default 100.

## Notes

* Node 4 or newer.
* based upon [Random Puppy](https://github.com/dylang/random-puppy)

## Links

* Discord: [Server Link](https://discord.gg/UyAhAVp)
* Twitter: [@Vylpes](https://twitter.com/Vylpes)
* Email (General): [ethan@vylpes.com](mailto:ethan@vylpes.com)
* Email (Support): [helpdesk@vylpes.com](mailto:helpdesk@vylpes.com)

## License

MIT © [Vylpes](https://www.vylpes.com)