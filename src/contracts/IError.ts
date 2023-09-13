import { ErrorCode } from "../constants/ErrorCode";

export default interface IError {
    Code: ErrorCode;
    Message: string;
}