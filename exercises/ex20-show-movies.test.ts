import { isViewedMessage } from './ex20-show-movies';

describe("Exercise 20", () => {
    const filmObjectViewed = {
        title: "Spiderman",
        director: "Some Director",
        isViewed: true,
    };
    const filmObjectNotViewed = {
        title: "Star Wars - The Last One",
        director: "Some Director",
        isViewed: false,
    };
    test("isViewedMessage is defined", () => {
        expect(isViewedMessage).toBeDefined();
    });
    test("isViewedMessage returns correct message when is ", () => {
        expect(isViewedMessage(filmObjectViewed)).toBe("Viewed: Spiderman from Some Director");
    });
    test("isViewedMessage returns correct message", () => {
        expect(isViewedMessage(filmObjectNotViewed)).toBe("Non Viewed: Star Wars - The Last One from Some Director");
    });
});