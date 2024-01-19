import { Command, Option } from "commander";
import randomBunny from "./index";
import ICliOptions from "./contracts/ICliOptions";
import { exit } from "process";

const program = new Command();

program
    .name('random-bunny')
    .description('Get a random image url from a subreddit of your choosing')
    .version('2.2')
    .option('-s, --subreddit <subreddit>', 'The subreddit to search', 'rabbits')
    .option('-j, --json', 'Output as JSON')
    .option('-q, --query-metadata', 'Include query metadata in result')
    .addOption(new Option('--sort <sort>', 'Sort by').default('hot').choices(['hot', 'new', 'top']));

program.parse();

const options: ICliOptions = program.opts();

randomBunny(options.subreddit, options.sort)
    .then((response) => {
        if (response.IsSuccess) {
            const result = response.Result!;

            const outputLines: string[] = [];

            if (options.json) {
                console.log(JSON.stringify(result));
                return;
            }

            outputLines.push(`Archived = ${result.Archived}`);
            outputLines.push(`Downvotes = ${result.Downs}`);
            outputLines.push(`Hidden = ${result.Hidden}`);
            outputLines.push(`Permalink = ${result.Permalink}`);
            outputLines.push(`Subreddit = ${result.Subreddit}`);
            outputLines.push(`Subreddit Subscribers = ${result.SubredditSubscribers}`);
            outputLines.push(`Title = ${result.Title}`);
            outputLines.push(`Upvotes = ${result.Ups}`);
            outputLines.push(`Url = ${result.Url}`);

            if (options.queryMetadata != null) {
                outputLines.push(`Query.Subreddit = ${response.Query.subreddit}`);
                outputLines.push(`Query.Sort By = ${response.Query.sortBy}`);
            }

            console.log(outputLines.join("\n"));
            exit(0);
        } else {
            const error = response.Error!;

            console.error(error.Message, error.Code);
            exit(1);
        }
    });