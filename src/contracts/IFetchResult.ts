export default interface IFetchResult {
    data: {
        archived: boolean,
        author: string,
        downs: number,
        hidden: boolean,
        permalink: string,
        subreddit: string,
        subreddit_subscribers: number,
        title: string,
        ups: number,
        url: string
    }
}