"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex20_show_movies_1 = require("./ex20-show-movies");
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
        expect(ex20_show_movies_1.isViewedMessage).toBeDefined();
    });
    test("isViewedMessage returns correct message when is ", () => {
        expect(ex20_show_movies_1.isViewedMessage(filmObjectViewed)).toBe("Viewed: Spiderman from Some Director");
    });
    test("isViewedMessage returns correct message", () => {
        expect(ex20_show_movies_1.isViewedMessage(filmObjectNotViewed)).toBe("Non Viewed: Star Wars - The Last One from Some Director");
    });
});
