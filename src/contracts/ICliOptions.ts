export default interface ICliOptions {
    subreddit: string,
    json?: boolean,
    sort: "new" | "hot" | "top",
    o?: string,
    limit: number,
    queryMetadata?: boolean,
}