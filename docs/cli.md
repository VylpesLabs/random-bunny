# CLI

Since Version 2.2, Random Bunny contains a command line interface (CLI).

## Downloads

The project can be downloaded as a binary for your system via the [GitHub Releases](https://github.com/Vylpes/random-bunny/releases) or [Gitea Releases](https://gitea.vylpes.xyz/RabbitLabs/random-bunny/releases) page.

We currently support:
- Linux (x64)
- Windows (x64)
- macOS (x64, Arm64\*)

The git repository can also be cloned and ran via `yarn build` and `yarn start`.

> **NOTE:** We are aware of a bug in the macOS Arm64 builds failing to execute. For now you're still able to use the x64 builds under Rosetta fine. This will hopefully be fixed in a future release.

## Default Output

By default, the command will fetch a random image from `r/rabbits` and return it in a human-readable output.

```
$ randombunny

Archived = false
Downvotes = 0
Hidden = false
Permalink = /r/Rabbits/comments/1av1rg9/cute_baby_bun/
Subreddit = Rabbits
Subreddit Subscribers = 486084
Title = Cute baby bun
Upvotes = 211
Url = https://i.redd.it/sfz0srdrimjc1.png
```

## Help

The command also includes a help option in case you are stuck.

```
$ randombunny --help

# or

$ randombunny -h

Usage: random-bunny [options]

Get a random image url from a subreddit of your choosing

Options:
  -V, --version                output the version number
  -s, --subreddit <subreddit>  The subreddit to search (default: "rabbits")
  -j, --json                   Output as JSON
  -q, --query-metadata         Include query metadata in result
  -o <file>                    Output to file
  --sort <sort>                Sort by (choices: "hot", "new", "top", default: "hot")
  -h, --help                   display help for command
```

## JSON output

You can also convert the output into JSON, if you need to input it to another program.

```bash
$ randombunny --json

# or

$ randonbunny -j

{"Archived":false,"Downs":0,"Hidden":false,"Permalink":"/r/Rabbits/comments/1av1rg9/cute_baby_bun/","Subreddit":"Rabbits","SubredditSubscribers":486085,"Title":"Cute baby bun","Ups":210,"Url":"https://i.redd.it/sfz0srdrimjc1.png"}
```

## Sort

You can also choose the sorting option which reddit will use to return the available posts to randomise from.

This defaults to "hot". The valid options are "hot", "new", and "top".

```
$ randombunny --sort hot
$ randombunny --sort new
$ randomBunny --sort top
```


## Subreddit

You can change the subreddit which the command fetches from.

This defaults to "rabbits"

```
$ randombunny --subreddit rabbits
$ randombunny -s horses
```

## Output to file

If you'd rather send the output to a file, you can supply the `-o` flag.

```
$ randombunny -o ~/Desktop/output.txt
```
