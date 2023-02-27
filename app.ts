import randomBunny from "./dist/index.js";

async function app() {
    const result = await randomBunny('rabbits', 'hot');

    console.log(result);
}

app();