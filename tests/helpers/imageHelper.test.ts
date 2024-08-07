import ImageHelper from "../../src/helpers/imageHelper";
import fetch from "got-cjs";

jest.mock('got-cjs');
const fetchMock = jest.mocked(fetch);

describe("FetchImageFromRedditGallery", () => {
    test("EXPECT image url to be returned", async () => {
        fetchMock.mockResolvedValue({
            body: "<html><body><img src='https://preview.redd.it/image.png' /></body></html>",
            errored: undefined,
            statusCode: 200,
        });

        const result = await ImageHelper.FetchImageFromRedditGallery("https://redd.it/gallery/image");

        expect(fetchMock).toHaveBeenCalledTimes(1);
        expect(fetchMock).toHaveBeenCalledWith("https://redd.it/gallery/image");

        expect(result).toBe("https://preview.redd.it/image.png");
    });

    test("GIVEN fetch is unable to return data, EXPECT undefined returned", async () => {
        fetchMock.mockResolvedValue(null);

        const result = await ImageHelper.FetchImageFromRedditGallery("https://redd.it/gallery/image");

        expect(result).toBeUndefined();
    });

    test("GIVEN fetch is an error, EXPECT undefined returned", async () => {
        fetchMock.mockResolvedValue({
            body: "<html><body><img src='https://preview.redd.it/image.png' /></body></html>",
            errored: "Error",
            statusCode: 200,
        });

        const result = await ImageHelper.FetchImageFromRedditGallery("https://redd.it/gallery/image");

        expect(result).toBeUndefined();
    });

    test("GIVEN fetch is not status code of 200, EXPECT undefined returned", async () => {
        fetchMock.mockResolvedValue({
            body: "<html><body><img src='https://preview.redd.it/image.png' /></body></html>",
            errored: undefined,
            statusCode: 500,
        });

        const result = await ImageHelper.FetchImageFromRedditGallery("https://redd.it/gallery/image");

        expect(result).toBeUndefined();
    });

    test("GIVEN image tag is not found, EXPECT undefined returned", async () => {
        fetchMock.mockResolvedValue({
            body: "<html><body></body></html>",
            errored: undefined,
            statusCode: 200,
        });

        const result = await ImageHelper.FetchImageFromRedditGallery("https://redd.it/gallery/image");

        expect(result).toBeUndefined();
    });

    test("GIVEN image source attribute is not found, EXPECT undefined returned", async () => {
        fetchMock.mockResolvedValue({
            body: "<html><body><img /></body></html>",
            errored: undefined,
            statusCode: 200,
        });

        const result = await ImageHelper.FetchImageFromRedditGallery("https://redd.it/gallery/image");

        expect(result).toBeUndefined();
    });

    test("GIVEN image source attribute is not found that is a preview.redd.it url, EXPECT undefined returned", async () => {
        fetchMock.mockResolvedValue({
            body: "<html><body><img src='main.png' /></body></html>",
            errored: undefined,
            statusCode: 200,
        });

        const result = await ImageHelper.FetchImageFromRedditGallery("https://redd.it/gallery/image");

        expect(result).toBeUndefined();
    });
});