import IFetchResult from "./contracts/IFetchResult";
import IRedditResult from "./contracts/IRedditResult";
import fetch from "node-fetch";

const sortable = [
    'new',
    'hot',
    'top'
];

export default async function randomBunny(subreddit: string, sortBy: string, maxTries = 100): Promise<IFetchResult> {
    if (!sortable.includes(sortBy)) sortBy = 'hot';

    const result = await fetch(`https://reddit.com/r/${subreddit}/${sortBy}.json`);

    if (!result) {
        return {
            IsSuccess: false
        }
    }

    const json = await result.json() as any;

    if (!json) {
        return {
            IsSuccess: false
        }
    }

    const data = json.data.children;
    const size = data.length;

    for (let i = 0; i < maxTries; i++) {
        const random = Math.floor((Math.random() * size - 1) + 0); // Between 0 and (size - 1)

        const randomSelect = data[random].data;

        const redditResult: IRedditResult = {
            Archived: randomSelect['archived'],
            Downs: randomSelect['downs'],
            Hidden: randomSelect['hidden'],
            Permalink: randomSelect['permalink'],
            Subreddit: randomSelect['subreddit'],
            SubredditSubscribers: randomSelect['subreddit_subscribers'],
            Title: randomSelect['title'],
            Ups: randomSelect['ups'],
            Url: randomSelect['url']
        };

        if (redditResult.Url.includes('.jpg')) {
            return {
                IsSuccess: true,
                Result: redditResult
            };
        }
    }

    return {
        IsSuccess: false
    }
}