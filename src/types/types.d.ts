export interface Movie {
    id: number;
    title: string;
    overview: string;
    backdrop_path: string;
    release_date: string;
}

export interface Movies {
    id: number,
    title?: string,
    name?: string,
    backdrop_path: string,
    poster_path: string
}

export interface Props {
    title: string,
    url: string
}

export interface Card {
    brand: string,
    video: string,
    image: string
}