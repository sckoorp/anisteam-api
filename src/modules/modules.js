import axios from "axios";
import { config } from "dotenv"; config();
import {
    TrendingQuery,
    PopularQuery,
    UpcomingQuery,
    FavoriteQuery,
    MoviesQuery,
    InfoQuery
} from "../queries/queries.js";
import { getNextSeason } from "../utils/timing.js";
import { getEpisodes, getSources } from "../utils/provider.js";
import { base64encode } from "../utils/encoder.js";

const getData = axios.create({
    baseURL: process.env.ANILIST_API_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
});

export const getTrending = async (page, perPage) => {
    const query = TrendingQuery(page, perPage);
    const response = (await getData.post("", { query })).data
    const pagination = {
        currentPage: response.data.Page.pageInfo.currentPage,
        hasNextPage: response.data.Page.pageInfo.hasNextPage
    }
    const data = [];
    response.data.Page.media.map((i, index) => {
        data.push({
            id: i.id,
            title: i.title.romaji,
            cover: i.coverImage.extraLarge,
            type: i.format === "TV" ? "TV Show" : i.format === "TV_SHORT" ? "TV Short"
                : i.format === "MOVIE" ? "Movie" : i.format === "SPECIAL" ? "Special"
                    : i.format === "MUSIC" ? "Music" : i.format,
            year: i.seasonYear,
            score: i.averageScore ? `${i.averageScore}%` : null,
            episodes: i.episodes,
            description: i.description,
            studio: i.studios.nodes.length > 0 ? i.studios.nodes[0].name : null,
            genres: i.genres
        });
    });
    return { pagination, data }
}

export const getPopular = async (page, perPage) => {
    const query = PopularQuery(page, perPage);
    const response = (await getData.post("", { query })).data
    const pagination = {
        currentPage: response.data.Page.pageInfo.currentPage,
        hasNextPage: response.data.Page.pageInfo.hasNextPage
    }
    const data = [];
    response.data.Page.media.map((i, index) => {
        data.push({
            id: i.id,
            title: i.title.romaji,
            cover: i.coverImage.extraLarge,
            type: i.format === "TV" ? "TV Show" : i.format === "TV_SHORT" ? "TV Short"
                : i.format === "MOVIE" ? "Movie" : i.format === "SPECIAL" ? "Special"
                    : i.format === "MUSIC" ? "Music" : i.format,
            year: i.seasonYear,
            score: i.averageScore ? `${i.averageScore}%` : null,
            episodes: i.episodes,
            description: i.description,
            studio: i.studios.nodes.length > 0 ? i.studios.nodes[0].name : null,
            genres: i.genres
        });
    });
    return { pagination, data }
}

export const getUpcoming = async (page, perPage) => {
    const query = UpcomingQuery(page, perPage, getNextSeason());
    const response = (await getData.post("", { query })).data
    const pagination = {
        currentPage: response.data.Page.pageInfo.currentPage,
        hasNextPage: response.data.Page.pageInfo.hasNextPage
    }
    const data = [];
    response.data.Page.media.map((i, index) => {
        data.push({
            id: i.id,
            title: i.title.romaji,
            cover: i.coverImage.extraLarge,
            type: i.format === "TV" ? "TV Show" : i.format === "TV_SHORT" ? "TV Short"
                : i.format === "MOVIE" ? "Movie" : i.format === "SPECIAL" ? "Special"
                    : i.format === "MUSIC" ? "Music" : i.format,
            year: i.seasonYear,
            score: i.averageScore ? `${i.averageScore}%` : null,
            episodes: i.episodes,
            description: i.description,
            studio: i.studios.nodes.length > 0 ? i.studios.nodes[0].name : null,
            genres: i.genres
        });
    });
    return { pagination, data }
}

export const getFavorite = async (page, perPage) => {
    const query = FavoriteQuery(page, perPage);
    const response = (await getData.post("", { query })).data
    const pagination = {
        currentPage: response.data.Page.pageInfo.currentPage,
        hasNextPage: response.data.Page.pageInfo.hasNextPage
    }
    const data = [];
    response.data.Page.media.map((i, index) => {
        data.push({
            id: i.id,
            title: i.title.romaji,
            cover: i.coverImage.extraLarge,
            type: i.format === "TV" ? "TV Show" : i.format === "TV_SHORT" ? "TV Short"
                : i.format === "MOVIE" ? "Movie" : i.format === "SPECIAL" ? "Special"
                    : i.format === "MUSIC" ? "Music" : i.format,
            year: i.seasonYear,
            score: i.averageScore ? `${i.averageScore}%` : null,
            episodes: i.episodes,
            description: i.description,
            studio: i.studios.nodes.length > 0 ? i.studios.nodes[0].name : null,
            genres: i.genres
        });
    });
    return { pagination, data }
}

export const getMovies = async (page, perPage) => {
    const query = MoviesQuery(page, perPage);
    const response = (await getData.post("", { query })).data
    const pagination = {
        currentPage: response.data.Page.pageInfo.currentPage,
        hasNextPage: response.data.Page.pageInfo.hasNextPage
    }
    const data = [];
    response.data.Page.media.map((i, index) => {
        data.push({
            id: i.id,
            title: i.title.romaji,
            cover: i.coverImage.extraLarge,
            type: i.format === "TV" ? "TV Show" : i.format === "TV_SHORT" ? "TV Short"
                : i.format === "MOVIE" ? "Movie" : i.format === "SPECIAL" ? "Special"
                    : i.format === "MUSIC" ? "Music" : i.format,
            year: i.seasonYear,
            score: i.averageScore ? `${i.averageScore}%` : null,
            episodes: i.episodes,
            description: i.description,
            studio: i.studios.nodes.length > 0 ? i.studios.nodes[0].name : null,
            genres: i.genres
        });
    });
    return { pagination, data }
}

export const getInfo = async (id) => {
    const query = InfoQuery(id);
    const response = (await getData.post("", { query })).data
    const recommendations = [];
    if (response.data.Media.recommendations.nodes.length > 0) {
        response.data.Media.recommendations.nodes.map((i, index) => {
            recommendations.push({
                id: i.mediaRecommendation.id,
                title: i.mediaRecommendation.title.romaji,
                cover: i.mediaRecommendation.coverImage.extraLarge,
                type: i.mediaRecommendation.format === "TV" ? "TV Show"
                    : i.mediaRecommendation.format === "TV_SHORT" ? "TV Short"
                        : i.mediaRecommendation.format === "MOVIE" ? "Movie"
                            : i.mediaRecommendation.format === "SPECIAL" ? "Special"
                                : i.mediaRecommendation.format === "MUSIC" ? "Music"
                                    : i.mediaRecommendation.format,
                year: i.mediaRecommendation.seasonYear,
                score: i.mediaRecommendation.averageScore ? `${i.mediaRecommendation.averageScore}%` : null,
                episodes: i.mediaRecommendation.episodes,
                description: i.mediaRecommendation.description,
                studio: i.mediaRecommendation.studios.nodes.length > 0
                    ? i.mediaRecommendation.studios.nodes[0].name
                    : null,
                genres: i.mediaRecommendation.genres
            });
        });
    }
    return {
        id: response.data.Media.id,
        title: response.data.Media.title.romaji,
        cover: response.data.Media.coverImage.extraLarge,
        type: response.data.Media.format === "TV" ? "TV Show" : response.data.Media.format === "TV_SHORT" ? "TV Short"
            : response.data.Media.format === "MOVIE" ? "Movie" : response.data.Media.format === "SPECIAL" ? "Special"
                : response.data.Media.format === "MUSIC" ? "Music" : response.data.Media.format,
        year: response.data.Media.seasonYear,
        score: response.data.Media.averageScore ? `${response.data.Media.averageScore}%` : null,
        episodes: response.data.Media.episodes,
        description: response.data.Media.description,
        studio: response.data.Media.studios.nodes.length > 0 ? response.data.Media.studios.nodes[0].name : null,
        genres: response.data.Media.genres,
        recommendations,
        episodesList: await getEpisodes(id)
    }
}

export const getStream = async (id, episode) => {
    const sources = await getSources(episode);
    const source = sources.sources.default || sources.sources.backup
    return {
        sources: sources.sources,
        iframe: `https://plyr.link/p/player.html#${base64encode(source ? source : sources.sources.backup)}`,
        download: sources.download,
        info: await getInfo(id)
    }
}