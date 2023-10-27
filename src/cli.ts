import { Command } from "commander";
const program = new Command();

program
    .name('random-bunny')
    .description('Get a random image url from a subreddit of your choosing')
    .version('2.2');

program.parse();