import { exec } from "child_process";
import path from "path";

describe('version', () => {
    test('GIVEN -V flag is supplied, EXPECT version returned', async () => {
        const result = await cli(['-V'], '.');

        expect(result.code).toBe(0);
        expect(result.stdout).toBe('2.2\n');
    });

    test('GIVEN --version is supplied, EXPECT version returned', async () => {
        const result = await cli(['--version'], '.');

        expect(result.code).toBe(0);
        expect(result.stdout).toBe('2.2\n');
    });
});

describe('help', () => {
    test('GIVEN -h is supplied, EXPECT help returned', async () => {
        const result = await cli(['-h'], '.');

        expect(result.code).toBe(0);
        expect(result.stdout.split('\n')[0]).toBe('Usage: random-bunny [options]');
    });

    test('GIVEN --help is supplied, EXPECT help returned', async () => {
        const result = await cli(['--help'], '.');

        expect(result.code).toBe(0);
        expect(result.stdout.split('\n')[0]).toBe('Usage: random-bunny [options]');
    });
})

function cli(args: string[], cwd: string): Promise<cliResult> {
    return new Promise(resolve => {
        exec(`node ${path.resolve('./dist/cli.js')} ${args.join(' ')}`,
        { cwd },
        (error, stdout, stderr) => { resolve({
            code: error && error.code ? error.code : 0,
            error,
            stdout,
            stderr });
        });
    });
}

interface cliResult {
    code: number,
    error: any,
    stdout: string,
    stderr: string,
}