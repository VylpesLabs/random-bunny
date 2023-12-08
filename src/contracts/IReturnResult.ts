import IError from "./IError.js";
import IRedditResult from "./IRedditResult.js";
import QueryResult from "./QueryResult.js";

export default interface IReturnResult {
    IsSuccess: boolean;
    Query: QueryResult;
    Result?: IRedditResult;
    Error?: IError;
}