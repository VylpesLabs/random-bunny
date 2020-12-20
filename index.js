const fetch = require('node-fetch');

sortable = [
    'new',
    'hot',
    'top'
]

function randomBunny(subreddit, sortBy, cb) {
    if (!sortable.includes(sortBy)) sortBy = 'hot';

    fetch(`https://www.reddit.com/r/${subreddit}/${sortBy}.json`).then(res => {
        res.json().then(res => {
            const data = res.data.children;
            const size = data.length;

            const random = getRandom(0, size - 1);

            const image = data[random];
            let found = false;

            while (!found) {
                const random = getRandom(0, size - 1);

                const image = data[random].data['url'];
                const title = data[random].data['title'];

                if (image.includes('.jpg')) {
                    found = true;
                    cb(image, title);
                }
            }
        });
    });
}

function getRandom(min, max) {
    return Math.floor((Math.random() * max) + min);
}

module.exports = randomBunny;