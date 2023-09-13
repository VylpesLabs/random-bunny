import IError from "./IError.js";
import IRedditResult from "./IRedditResult.js";

export default interface IReturnResult {
    IsSuccess: boolean;
    Result?: IRedditResult;
    Error?: IError;
}