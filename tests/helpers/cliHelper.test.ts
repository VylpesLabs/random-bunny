import fs from "fs";
import CliHelper from "../../src/helpers/cliHelper";
import ICliOptions from "../../src/contracts/ICliOptions";
import IReturnResult from "../../src/contracts/IReturnResult";
import OutputHelper from "../../src/helpers/outputHelper";
import { ErrorCode } from "../../src/constants/ErrorCode";

describe("Endpoint", () => {
    describe("GIVEN response is successful", () => {
        test("GIVEN options.o is defined, EXPECT output written to file", () => {
            // Arrange
            const response = {
                IsSuccess: true,
            } as IReturnResult;

            const options = {
                o: "file.txt",
            } as ICliOptions;

            OutputHelper.GenerateOutput = jest.fn().mockReturnValue("test output");

            fs.writeFileSync = jest.fn();

            console.log = jest.fn();

            console.error = jest.fn();

            // Act
            const result = CliHelper.Endpoint(response, options);

            // Assert
            expect(result).toBe(0);

            expect(OutputHelper.GenerateOutput).toHaveBeenCalledTimes(1);
            expect(OutputHelper.GenerateOutput).toHaveBeenCalledWith(response, options);

            expect(fs.writeFileSync).toHaveBeenCalledTimes(1);
            expect(fs.writeFileSync).toHaveBeenCalledWith("file.txt", "test output");

            expect(console.log).not.toHaveBeenCalled();

            expect(console.error).not.toHaveBeenCalled();
        });

        test("GIVEN options.o is undefined, EXPECT output logged to console", () => {
            // Arrange
            const response = {
                IsSuccess: true,
            } as IReturnResult;

            const options = {
                o: undefined,
            } as ICliOptions;

            OutputHelper.GenerateOutput = jest.fn().mockReturnValue("test output");

            fs.writeFileSync = jest.fn();

            console.log = jest.fn();

            console.error = jest.fn();

            // Act
            const result = CliHelper.Endpoint(response, options);

            // Assert
            expect(result).toBe(0);

            expect(OutputHelper.GenerateOutput).toHaveBeenCalledTimes(1);
            expect(OutputHelper.GenerateOutput).toHaveBeenCalledWith(response, options);

            expect(fs.writeFileSync).not.toHaveBeenCalled();

            expect(console.log).toHaveBeenCalledTimes(1);
            expect(console.log).toHaveBeenCalledWith("test output");

            expect(console.error).not.toHaveBeenCalled();
        });
    });

    test("GIVEN response is failure, EXPECT error logged to console", () => {
        // Arrange
        const response = {
            IsSuccess: false,
            Error: {
                Message: "error message",
                Code: ErrorCode.FailedToFetchReddit,
            },
        } as IReturnResult;

        const options = {
            o: "file.txt",
        } as ICliOptions;

        OutputHelper.GenerateOutput = jest.fn().mockReturnValue("test output");

        fs.writeFileSync = jest.fn();

        console.log = jest.fn();

        console.error = jest.fn();

        // Act
        const result = CliHelper.Endpoint(response, options);

        // Assert
        expect(result).toBe(1);

        expect(OutputHelper.GenerateOutput).not.toHaveBeenCalled();

        expect(fs.writeFileSync).not.toHaveBeenCalled();

        expect(console.log).not.toHaveBeenCalled();

        expect(console.error).toHaveBeenCalledTimes(1);
        expect(console.error).toHaveBeenCalledWith("error message", ErrorCode.FailedToFetchReddit);
    });
});