import axios from "axios";
import { config } from "dotenv"; config();
import {
    TrendingQuery,
    PopularQuery,
    UpcomingQuery,
    FavoriteQuery,
    MoviesQuery,
    InfoQuery,
    SearchQuery
} from "../queries/queries.js";
import { formatType, formatStatus } from "../utils/formater.js";
import { getSeason } from "../utils/timing.js";
import { getEpisodes, getSources } from "../utils/provider.js";
import { base64encode } from "../utils/encoder.js";

const getData = axios.create({
    baseURL: process.env.ANILIST_API_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
});

export const getTrending = async (page, per) => {
    const query = TrendingQuery(page, per);
    const response = (await getData.post("", { query })).data
    const pagination = {
        currentPage: response.data.Page.pageInfo.currentPage,
        hasNextPage: response.data.Page.pageInfo.hasNextPage
    }
    const data = response.data.Page.media.map(media => ({
        id: media.id,
        title: media.title.romaji,
        cover: media.coverImage.extraLarge,
        type: formatType(media.format),
        year: media.seasonYear,
        score: media.averageScore ? `${media.averageScore}%` : null,
        episodes: media.episodes,
        description: media.description,
        studio: media.studios.nodes.length > 0 ? media.studios.nodes[0].name : null,
        genres: media.genres
    }));

    return { pagination, data }
}

export const getPopular = async (page, per) => {
    const query = PopularQuery(page, per);
    const response = (await getData.post("", { query })).data
    const pagination = {
        currentPage: response.data.Page.pageInfo.currentPage,
        hasNextPage: response.data.Page.pageInfo.hasNextPage
    }
    const data = response.data.Page.media.map(media => ({
        id: media.id,
        title: media.title.romaji,
        cover: media.coverImage.extraLarge,
        type: formatType(media.format),
        year: media.seasonYear,
        score: media.averageScore ? `${media.averageScore}%` : null,
        episodes: media.episodes,
        description: media.description,
        studio: media.studios.nodes.length > 0 ? media.studios.nodes[0].name : null,
        genres: media.genres
    }));

    return { pagination, data }
}

export const getUpcoming = async (page, per) => {
    const query = UpcomingQuery(page, per, getSeason());
    const response = (await getData.post("", { query })).data
    const pagination = {
        currentPage: response.data.Page.pageInfo.currentPage,
        hasNextPage: response.data.Page.pageInfo.hasNextPage
    }
    const data = response.data.Page.media.map(media => ({
        id: media.id,
        title: media.title.romaji,
        cover: media.coverImage.extraLarge,
        type: formatType(media.format),
        year: media.seasonYear,
        score: media.averageScore ? `${media.averageScore}%` : null,
        episodes: media.episodes,
        description: media.description,
        studio: media.studios.nodes.length > 0 ? media.studios.nodes[0].name : null,
        genres: media.genres
    }));

    return { pagination, data }
}

export const getFavorite = async (page, per) => {
    const query = FavoriteQuery(page, per);
    const response = (await getData.post("", { query })).data
    const pagination = {
        currentPage: response.data.Page.pageInfo.currentPage,
        hasNextPage: response.data.Page.pageInfo.hasNextPage
    }
    const data = response.data.Page.media.map(media => ({
        id: media.id,
        title: media.title.romaji,
        cover: media.coverImage.extraLarge,
        type: formatType(media.format),
        year: media.seasonYear,
        score: media.averageScore ? `${media.averageScore}%` : null,
        episodes: media.episodes,
        description: media.description,
        studio: media.studios.nodes.length > 0 ? media.studios.nodes[0].name : null,
        genres: media.genres
    }));

    return { pagination, data }
}

export const getMovies = async (page, per) => {
    const query = MoviesQuery(page, per);
    const response = (await getData.post("", { query })).data
    const pagination = {
        currentPage: response.data.Page.pageInfo.currentPage,
        hasNextPage: response.data.Page.pageInfo.hasNextPage
    }
    const data = response.data.Page.media.map(media => ({
        id: media.id,
        title: media.title.romaji,
        cover: media.coverImage.extraLarge,
        type: formatType(media.format),
        year: media.seasonYear,
        score: media.averageScore ? `${media.averageScore}%` : null,
        episodes: media.episodes,
        description: media.description,
        studio: media.studios.nodes.length > 0 ? media.studios.nodes[0].name : null,
        genres: media.genres
    }));

    return { pagination, data }
}

export const getInfo = async (id) => {
    const query = InfoQuery(id);
    const response = (await getData.post("", { query })).data
    const recommendations = [];
    if (response.data.Media.recommendations.nodes.length > 0) {
        response.data.Media.recommendations.nodes.map(media => {
            recommendations.push({
                id: media.mediaRecommendation.id,
                title: media.mediaRecommendation.title.romaji,
                cover: media.mediaRecommendation.coverImage.extraLarge,
                type: formatType(media.mediaRecommendation.format),
                year: media.mediaRecommendation.seasonYear,
                score: media.mediaRecommendation.averageScore ? `${media.mediaRecommendation.averageScore}%` : null,
                episodes: media.mediaRecommendation.episodes,
                description: media.mediaRecommendation.description,
                studio: media.mediaRecommendation.studios.nodes.length > 0
                    ? media.mediaRecommendation.studios.nodes[0].name
                    : null,
                genres: media.mediaRecommendation.genres
            });
        });
    }
    return {
        id: response.data.Media.id,
        title: response.data.Media.title.romaji,
        cover: response.data.Media.coverImage.extraLarge,
        type: formatType(response.data.Media.format),
        status: formatStatus(response.data.Media.status),
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

export const getSearch = async (page, per, q) => {
    const query = SearchQuery(page, per, q);
    const response = (await getData.post("", { query })).data
    const pagination = {
        currentPage: response.data.Page.pageInfo.currentPage,
        hasNextPage: response.data.Page.pageInfo.hasNextPage
    }
    const data = response.data.Page.media.map(media => ({
        id: media.id,
        title: media.title.romaji,
        cover: media.coverImage.extraLarge,
        type: formatType(media.format),
        year: media.seasonYear,
        score: media.averageScore ? `${media.averageScore}%` : null,
        episodes: media.episodes,
        description: media.description,
        studio: media.studios.nodes.length > 0 ? media.studios.nodes[0].name : null,
        genres: media.genres
    }));

    return { pagination, data }
}

export const getStream = async (id, episode) => {
    const sources = await getSources(episode);
    const source = sources.sources.default || sources.sources.backup
    return {
        sources: sources.sources,
        iframe: `https://plyr.link/p/player.html#${base64encode(source)}`,
        download: sources.download,
        info: await getInfo(id)
    }
}