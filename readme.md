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
const result = await randomBunny('rabbits', 'hot');
console.log(result);
```

## API

### `randomBunny()`

Returns a `json string` for a random post. Accepts 2 arguments: `subreddit`, and `sortby` ('new', 'hot', 'top')

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

## Notes

* Node 4 or newer.
* based upon [Random Puppy](https://github.com/dylang/random-puppy)

## Links

* Discord: [Server Link](https://go.vylpes.xyz/A6HcA)
* Support: [helpdesk@vylpes.com](mailto:helpdesk@vylpes.com)

## License

MIT © [Vylpes](https://www.vylpes.com)