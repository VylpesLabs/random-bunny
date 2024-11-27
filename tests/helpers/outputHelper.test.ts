import ICliOptions from "../../src/contracts/ICliOptions";
import IReturnResult from "../../src/contracts/IReturnResult";
import OutputHelper from "../../src/helpers/outputHelper";

describe("GenerateOutput", () => {
    test("EXPECT standout output to be returned", () => {
        // Arrange
        const response = {
            IsSuccess: true,
            Query: {
                subreddit: "rabbits",
                sortBy: "hot",
                limit: 100,
            },
            Result: {
                Archived: false,
                Author: 'author',
                Downs: 0,
                Hidden: false,
                Permalink: "/r/Rabbits/comments/1dj8pbt/this_is_my_ms_bear/",
                Subreddit: "Rabbits",
                SubredditSubscribers: 654751,
                Title: "This is my Ms Bear!",
                Ups: 17,
                Url: "https://preview.redd.it/d5yno653zf7d1.jpg?width=640&crop=smart&auto=webp&s=5064d1caec3c12ac2855eb57ff131d0b313d5e9d",
                Gallery: ["https://preview.redd.it/d5yno653zf7d1.jpg?width=640&crop=smart&auto=webp&s=5064d1caec3c12ac2855eb57ff131d0b313d5e9d"],
            },
        } as IReturnResult;

        const options = {} as ICliOptions;

        // Act
        const result = OutputHelper.GenerateOutput(response, options);

        // Assert
        expect(result).toMatchSnapshot();
    });

    test("GIVEN options.json is true, EXPECT output to be returned as JSON", () => {
        // Arrange
        const response = {
            IsSuccess: true,
            Query: {
                subreddit: "rabbits",
                sortBy: "hot",
                limit: 100,
            },
            Result: {
                Archived: false,
                Author: 'author',
                Downs: 0,
                Hidden: false,
                Permalink: "/r/Rabbits/comments/1dj8pbt/this_is_my_ms_bear/",
                Subreddit: "Rabbits",
                SubredditSubscribers: 654751,
                Title: "This is my Ms Bear!",
                Ups: 17,
                Url: "https://preview.redd.it/d5yno653zf7d1.jpg?width=640&crop=smart&auto=webp&s=5064d1caec3c12ac2855eb57ff131d0b313d5e9d",
                Gallery: ["https://preview.redd.it/d5yno653zf7d1.jpg?width=640&crop=smart&auto=webp&s=5064d1caec3c12ac2855eb57ff131d0b313d5e9d"],
            },
        } as IReturnResult;

        const options = {
            json: true,
        } as ICliOptions;

        // Act
        const result = OutputHelper.GenerateOutput(response, options);

        // Assert
        expect(result).toMatchSnapshot();
    });

    test("GIVEN options.queryMetadata is supplied, EXPECT query metadata to be added", () => {
        // Arrange
        const response = {
            IsSuccess: true,
            Query: {
                subreddit: "rabbits",
                sortBy: "hot",
                limit: 100,
            },
            Result: {
                Archived: false,
                Author: 'author',
                Downs: 0,
                Hidden: false,
                Permalink: "/r/Rabbits/comments/1dj8pbt/this_is_my_ms_bear/",
                Subreddit: "Rabbits",
                SubredditSubscribers: 654751,
                Title: "This is my Ms Bear!",
                Ups: 17,
                Url: "https://preview.redd.it/d5yno653zf7d1.jpg?width=640&crop=smart&auto=webp&s=5064d1caec3c12ac2855eb57ff131d0b313d5e9d",
                Gallery: ["https://preview.redd.it/d5yno653zf7d1.jpg?width=640&crop=smart&auto=webp&s=5064d1caec3c12ac2855eb57ff131d0b313d5e9d"],
            },
        } as IReturnResult;

        const options = {
            queryMetadata: true,
        } as ICliOptions;

        // Act
        const result = OutputHelper.GenerateOutput(response, options);

        // Assert
        expect(result).toMatchSnapshot();
    });

    test("GIVEN options.queryMetadata AND options.json is supplied, EXPECT query metadata to be in JSON format", () => {
        // Arrange
        const response = {
            IsSuccess: true,
            Query: {
                subreddit: "rabbits",
                sortBy: "hot",
                limit: 100,
            },
            Result: {
                Archived: false,
                Author: 'author',
                Downs: 0,
                Hidden: false,
                Permalink: "/r/Rabbits/comments/1dj8pbt/this_is_my_ms_bear/",
                Subreddit: "Rabbits",
                SubredditSubscribers: 654751,
                Title: "This is my Ms Bear!",
                Ups: 17,
                Url: "https://preview.redd.it/d5yno653zf7d1.jpg?width=640&crop=smart&auto=webp&s=5064d1caec3c12ac2855eb57ff131d0b313d5e9d",
            },
        } as IReturnResult;

        const options = {
            json: true,
            queryMetadata: true,
        } as ICliOptions;

        // Act
        const result = OutputHelper.GenerateOutput(response, options);

        // Assert
        expect(result).toMatchSnapshot();
    });
});