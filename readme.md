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

### Binary

The project can be downloaded as a binary for your system via the [GitHub Releases](https://github.com/Vylpes/random-bunny/releases) or [Gitea Releases](https://gitea.vylpes.xyz/RabbitLabs/random-bunny/releases) page.


## Usage

```ts
import randomBunny from "random-bunny";

// ... In an async function
const result = await randomBunny('rabbits', 'hot');
console.log(result);
```

## API

### `randomBunny()`

Returns a `json string` for a random post. Accepts 3 arguments: `subreddit`, `sortby` ('new', 'hot', 'top'), and `limit` (1-100, default 100)

The json string which gets returned consists of:
- archived
- author
- downs
- hidden
- permalink
- subreddit
- subredditSubscribers
- title
- ups
- url

`sortBy` will default to 'hot' if not given or invalid

## CLI

Random bunny can also be used as a CLI. This is accessible via the executable (see git releases) or via `src/cli.ts`

For more details, see the [documentation](https://docs.vylpes.xyz/books/random-bunny).

## Notes

* Node 4 or newer.
* based upon [Random Puppy](https://github.com/dylang/random-puppy)

## Links

* Discord: [Server Link](https://go.vylpes.xyz/A6HcA)
* Support: [helpdesk@vylpes.com](mailto:helpdesk@vylpes.com)

## License

MIT © [Vylpes](https://www.vylpes.com)