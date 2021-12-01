import IRedditResult from "./IRedditResult";

export default interface IFetchResult {
    IsSuccess: boolean;
    Result?: IRedditResult;
}