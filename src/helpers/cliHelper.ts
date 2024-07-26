import { writeFileSync } from "fs";
import ICliOptions from "../contracts/ICliOptions";
import IReturnResult from "../contracts/IReturnResult";
import OutputHelper from "./outputHelper";

export default class CliHelper {
    public static Endpoint(response: IReturnResult, options: ICliOptions): number {
        if (response.IsSuccess) {
            const output = OutputHelper.GenerateOutput(response, options);

            if (options.o) {
                writeFileSync(options.o, `${output}\n`);
            } else {
                console.log(output);
            }

            return 0;
        } else {
            const error = response.Error!;

            console.error(error.Message, error.Code);
            return 1;
        }
    }
}