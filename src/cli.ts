import { Command, Option } from "commander";
import randomBunny from "./index";
import ICliOptions from "./contracts/ICliOptions";
import { exit } from "process";
import CliHelper from "./helpers/cliHelper";

const program = new Command();

program
    .name('random-bunny')
    .description('Get a random image url from a subreddit of your choosing')
    .version('2.2')
    .option('-s, --subreddit <subreddit>', 'The subreddit to search', 'rabbits')
    .option('-j, --json', 'Output as JSON')
    .option('-q, --query-metadata', 'Include query metadata in result')
    .option('-o <file>', 'Output to file')
    .addOption(new Option('--sort <sort>', 'Sort by').default('hot').choices(['hot', 'new', 'top']));

program.parse();

const options: ICliOptions = program.opts();

randomBunny(options.subreddit, options.sort)
    .then((response) => exit(CliHelper.Endpoint(response, options)));