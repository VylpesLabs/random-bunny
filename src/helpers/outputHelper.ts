import ICliOptions from "../contracts/ICliOptions";
import IReturnResult from "../contracts/IReturnResult";

export default class OutputHelper {
    public static GenerateOutput(response: IReturnResult, options: ICliOptions): string {
        const result = response.Result!;

        let outputObject = {};

        outputObject = { ...result };

        if (options.queryMetadata) {
            this.AppendObject(outputObject, response.Query, "query");
        }

        if (options.json) {
            return JSON.stringify(outputObject);
        }

        return this.GetFriendlyObjectText(outputObject, "");
    }

    /* eslint-disable @typescript-eslint/no-explicit-any */
    private static GetFriendlyObjectText(object: any, output: string, prefix: string = ""): string {
        for (const key in object) {
            if (typeof(object[key]) == "object")
                return this.GetFriendlyObjectText(object[key], output, `${key}.`);

            output += `${prefix}${key} = ${object[key]}\n`;
        }

        return output;
    }

    private static AppendObject(a: any, b: any, target: string): any {
        a[target] = { ...b };
    }
    /* eslint-enable @typescript-eslint/no-explicit-any */
}