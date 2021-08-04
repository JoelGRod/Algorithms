/**
 * Given a film list, show which films have been seen and which ones have not
 */

interface Movie {
    title: string;
    director: string;
    isViewed: boolean;
}

export function isViewedMessage(film: Movie): string {
    return film.isViewed ? `Viewed: ${film.title} from ${film.director}` : 
                    `Non Viewed: ${film.title} from ${film.director}`;
}

export function printFilmsByView(moviesList: Movie[]): void {

    for(let movie of moviesList) {
        console.log(isViewedMessage(movie));
    }

}