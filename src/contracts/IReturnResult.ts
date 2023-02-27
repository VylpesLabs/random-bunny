import IRedditResult from "./IRedditResult.js";

export default interface IReturnResult {
    IsSuccess: boolean;
    Result?: IRedditResult;
}