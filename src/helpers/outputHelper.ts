import ICliOptions from "../contracts/ICliOptions";
import IReturnResult from "../contracts/IReturnResult";

export default class OutputHelper {
    public static GenerateOutput(response: IReturnResult, options: ICliOptions): string {
        const result = response.Result!;

        let outputObject: any = {};

        outputObject = { ...result };

        if (options.queryMetadata) {
            outputObject = { ...outputObject, ...response.Query }
        }

        if (options.json) {
            return JSON.stringify(outputObject);
        }

        return this.GetFriendlyObjectText(outputObject);
    }

    /* eslint-disable @typescript-eslint/no-explicit-any */
    private static GetFriendlyObjectText(object: any): string {
        let output = "";

        for (const key in object) {
            output += `${key} = ${object[key]}\n`;
        }

        return output;
    }
    /* eslint-enable @typescript-eslint/no-explicit-any */
}