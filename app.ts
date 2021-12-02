import randomBunny from "./src";

async function app() {
    const result = await randomBunny('rabbits', 'hot', 100);

    console.log(result);
}

app();