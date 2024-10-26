import ICliOptions from "../contracts/ICliOptions";
import IReturnResult from "../contracts/IReturnResult";

export default class OutputHelper {
    public static GenerateOutput(response: IReturnResult, options: ICliOptions): string {
        const result = response.Result!;

        const outputLines: string[] = [];

        if (options.json) {
            return JSON.stringify(result);
        }

        outputLines.push(`Archived = ${result.Archived}`);
        outputLines.push(`Author = ${result.Author}`);
        outputLines.push(`Downvotes = ${result.Downs}`);

        if (result.Gallery.length > 1) {
            outputLines.push(`Gallery = ${result.Gallery.join(", ")}`);
        }

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
            outputLines.push(`Query.Limit = ${response.Query.limit}`);
        }

        return outputLines.join("\n");
    }
}