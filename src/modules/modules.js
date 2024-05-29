import axios from "axios";
import { config } from "dotenv"; config();
import { TrendingQuery, PopularQuery, UpcomingQuery } from "../queries/queries.js";
import { getNextSeason } from "../utils/timing.js";

const getData = axios.create({
    baseURL: process.env.ANILIST_API_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
});

export const getTrending = async (page, perPage) => {
    const query = TrendingQuery(page, perPage);
    const response = (await getData.post("", { query })).data;
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
    const response = (await getData.post("", { query })).data;
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
    const response = (await getData.post("", { query })).data;
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