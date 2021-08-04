"use strict";
/**
 * Given a film list, show which films have been seen and which ones have not
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.printFilmsByView = exports.isViewedMessage = void 0;
function isViewedMessage(film) {
    return film.isViewed ? `Viewed: ${film.title} from ${film.director}` :
        `Non Viewed: ${film.title} from ${film.director}`;
}
exports.isViewedMessage = isViewedMessage;
function printFilmsByView(moviesList) {
    for (let movie of moviesList) {
        console.log(isViewedMessage(movie));
    }
}
exports.printFilmsByView = printFilmsByView;
