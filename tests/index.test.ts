import randomBunny from "../src/index";
import fetch from "got-cjs";

jest.mock('got-cjs');
const fetchMock = jest.mocked(fetch);

describe('randomBunny', () => {
    test('GIVEN subreddit AND sortBy is supplied, EXPECT successful result', async() => {
        fetchMock.mockResolvedValue({
            body: JSON.stringify({
                data: {
                    children: [
                        {
                            data: {
                                archived: false,
                                downs: 0,
                                hidden: false,
                                permalink: '/r/Rabbits/comments/12pa5te/someone_told_pickles_its_monday_internal_fury/',
                                subreddit: 'Rabbits',
                                subreddit_subscribers: 298713,
                                title: 'Someone told pickles it’s Monday… *internal fury*',
                                ups: 1208,
                                url: 'https://i.redd.it/cr8xudsnkgua1.jpg',
                            },
                        },
                    ],
                }
            }),
        });

        const result = await randomBunny('rabbits', 'new');

        expect(result.IsSuccess).toBeTruthy();
        expect(result.Result).toBeDefined();

        expect(fetchMock).toBeCalledWith('https://reddit.com/r/rabbits/new.json?limit=100');
    });

    test('GIVEN sortBy is NOT supplied, expect it to default to hot', async () => {
        fetchMock.mockResolvedValue({
            body: JSON.stringify({
                data: {
                    children: [
                        {
                            data: {
                                archived: false,
                                downs: 0,
                                hidden: false,
                                permalink: '/r/Rabbits/comments/12pa5te/someone_told_pickles_its_monday_internal_fury/',
                                subreddit: 'Rabbits',
                                subreddit_subscribers: 298713,
                                title: 'Someone told pickles it’s Monday… *internal fury*',
                                ups: 1208,
                                url: 'https://i.redd.it/cr8xudsnkgua1.jpg',
                            },
                        },
                    ],
                }
            }),
        });

        const result = await randomBunny('rabbits');

        expect(result.IsSuccess).toBeTruthy();
        expect(result.Result).toBeDefined();

        expect(fetchMock).toBeCalledWith('https://reddit.com/r/rabbits/hot.json?limit=100');
    });

    test('GIVEN sortBy is NOT valid, expect it to default to hot', async () => {
        fetchMock.mockResolvedValue({
            body: JSON.stringify({
                data: {
                    children: [
                        {
                            data: {
                                archived: false,
                                downs: 0,
                                hidden: false,
                                permalink: '/r/Rabbits/comments/12pa5te/someone_told_pickles_its_monday_internal_fury/',
                                subreddit: 'Rabbits',
                                subreddit_subscribers: 298713,
                                title: 'Someone told pickles it’s Monday… *internal fury*',
                                ups: 1208,
                                url: 'https://i.redd.it/cr8xudsnkgua1.jpg',
                            },
                        },
                    ],
                }
            }),
        });

        const result = await randomBunny('rabbits', 'invalid');

        expect(result.IsSuccess).toBeTruthy();
        expect(result.Result).toBeDefined();

        expect(fetchMock).toBeCalledWith('https://reddit.com/r/rabbits/hot.json?limit=100');
    });

    test('GIVEN the fetch fails, EXPECT failure result', async () => {
        fetchMock.mockResolvedValue(null);

        const result = await randomBunny('rabbits', 'new');

        expect(result.IsSuccess).toBeFalsy();
        expect(result.Result).toBeUndefined();

        expect(fetchMock).toBeCalledWith('https://reddit.com/r/rabbits/new.json?limit=100');
    });

    test('GIVEN the result is NOT valid JSON, EXPECT failure result', async () => {
        fetchMock.mockResolvedValue({
            body: JSON.stringify(null),
        });

        const result = await randomBunny('rabbits', 'new');

        expect(result.IsSuccess).toBeFalsy();
        expect(result.Result).toBeUndefined();

        expect(fetchMock).toBeCalledWith('https://reddit.com/r/rabbits/new.json?limit=100');
    });

    test('GIVEN randomSelect does NOT find a response, EXPECT failure result', async () => {
        fetchMock.mockResolvedValue({
            body: JSON.stringify({
                data: {
                    children: [],
                }
            }),
        });

        const result = await randomBunny('rabbits', 'new');

        expect(result.IsSuccess).toBeFalsy();
        expect(result.Result).toBeUndefined();

        expect(fetchMock).toBeCalledWith('https://reddit.com/r/rabbits/new.json?limit=100');
    });

    test('GIVEN randomSelect does NOT find a valid response, EXPECT failure result', async () => {
        fetchMock.mockResolvedValue({
            body: JSON.stringify({
                data: {
                    children: [
                        {
                            data: {
                                archived: false,
                                downs: 0,
                                hidden: false,
                                permalink: '/r/Rabbits/comments/12pa5te/someone_told_pickles_its_monday_internal_fury/',
                                subreddit: 'Rabbits',
                                subreddit_subscribers: 298713,
                                title: 'Someone told pickles it’s Monday… *internal fury*',
                                ups: 1208,
                                url: 'https://i.redd.it/cr8xudsnkgua1.webp',
                            },
                        },
                    ],
                }
            }),
        });

        const result = await randomBunny('rabbits', 'new');

        expect(result.IsSuccess).toBeFalsy();
        expect(result.Result).toBeUndefined();

        expect(fetchMock).toBeCalledWith('https://reddit.com/r/rabbits/new.json?limit=100');
    });

    test.todo("GIVEN data fetched is a gallery AND an image is returned from the helper, EXPECT this to be used");

    test.todo("GIVEN data fetched is a gallery AND an image is not returned from the helper, EXPECT error");

    test.todo("GIVEN data fetched is not a gallery, EXPECT url to be used directly");
});