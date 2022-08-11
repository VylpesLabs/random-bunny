import IRedditResult from "./IRedditResult";

export default interface IReturnResult
 {
    IsSuccess: boolean;
    Result?: IRedditResult;
}