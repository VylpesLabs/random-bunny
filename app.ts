import randomBunny from "./dist";

async function app() {
    const result = await randomBunny('rabbits', 'hot');

    console.log(result);
}

app();