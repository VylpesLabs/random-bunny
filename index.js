// Required Modules
const fetch = require('node-fetch');

// Valid sortBy names
const sortable = [
    'new',
    'hot',
    'top'
]

// Main function
function randomBunny(subreddit, sortBy, cb) {
    // If the sortable list doesn't include sortBy, default to 'hot'
    if (!sortable.includes(sortBy)) sortBy = 'hot';

    // Fetch the json from reddit
    // For example, if you're getting a random image from r/rabbits, sorted by new:
    // https://www.reddit.com/r/rabbits/new.json
    fetch(`https://www.reddit.com/r/${subreddit}/${sortBy}.json`).then(res => {
        res.json().then(res => {
            // Get the part of the json string which the data comes from
            const data = res.data.children;
            const size = data.length;

            // Found is used for the while loop in order to break out of the loop.
            // We need to loop as the json string will contain invalid data for what we need
            // Specifically videos.
            let found = false;

            // Loop until a valid image post is found
            while (!found) {
                // Generate random number
                const random = getRandom(0, size - 1);

                // Get variables from json to pass back
                const randomSelect = data[random].data;

                // The json string to send back
                const json = {
                    archived: randomSelect['archived'],
                    downs: randomSelect['downs'],
                    hidden: randomSelect['hidden'],
                    permalink: randomSelect['permalink'],
                    subreddit: randomSelect['subreddit'],
                    subredditSubscribers: randomSelect['subreddit_subscribers'],
                    title: randomSelect['title'],
                    ups: randomSelect['ups'],
                    url: randomSelect['url']
                };

                // If the post is a .jpg, send back the data and stop looping
                if (json.url.includes('.jpg')) {
                    found = true;
                    cb(json);
                }
            }
        });
    });
}

// Generate a random number
function getRandom(min, max) {
    return Math.floor((Math.random() * max) + min);
}

// Export Functions
module.exports = randomBunny;