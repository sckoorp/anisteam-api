import express from "express";
const router = express.Router();

import {
    getSpotlights,
    getTrending,
    getPopular,
    getUpcoming,
    getFavorite,
    getMovies,
    getInfo,
    getSearch,
    getStream
} from "../modules/modules.js";

router.get("/spotlights", async (request, response) => {
    try {
        return response.status(200).json({
            code: response.statusCode,
            type: "OK",
            data: await getSpotlights()
        });
    } catch (error) {
        return response.status(500).json({
            code: response.statusCode,
            type: "Internal Server Error",
            message: error.message
        });
    }
});

router.get("/trending", async (request, response) => {
    try {
        const page = request.query.page || 1
        const per = request.query.per || 50
        return response.status(200).json({
            code: response.statusCode,
            type: "OK",
            data: await getTrending(page, per)
        });
    } catch (error) {
        return response.status(500).json({
            code: response.statusCode,
            type: "Internal Server Error",
            message: error.message
        });
    }
});

router.get("/popular", async (request, response) => {
    try {
        const page = request.query.page || 1
        const per = request.query.per || 50
        return response.status(200).json({
            code: response.statusCode,
            type: "OK",
            data: await getPopular(page, per)
        });
    } catch (error) {
        return response.status(500).json({
            code: response.statusCode,
            type: "Internal Server Error",
            message: error.message
        });
    }
});

router.get("/upcoming", async (request, response) => {
    try {
        const page = request.query.page || 1
        const per = request.query.per || 50
        return response.status(200).json({
            code: response.statusCode,
            type: "OK",
            data: await getUpcoming(page, per)
        });
    } catch (error) {
        return response.status(500).json({
            code: response.statusCode,
            type: "Internal Server Error",
            message: error.message
        });
    }
});

router.get("/favorite", async (request, response) => {
    try {
        const page = request.query.page || 1
        const per = request.query.per || 50
        return response.status(200).json({
            code: response.statusCode,
            type: "OK",
            data: await getFavorite(page, per)
        });
    } catch (error) {
        return response.status(500).json({
            code: response.statusCode,
            type: "Internal Server Error",
            message: error.message
        });
    }
});

router.get("/movies", async (request, response) => {
    try {
        const page = request.query.page || 1
        const per = request.query.per || 50
        return response.status(200).json({
            code: response.statusCode,
            type: "OK",
            data: await getMovies(page, per)
        });
    } catch (error) {
        return response.status(500).json({
            code: response.statusCode,
            type: "Internal Server Error",
            message: error.message
        });
    }
});

router.get("/info", async (request, response) => {
    try {
        const id = request.query.id
        if (id) {
            return response.status(200).json({
                code: response.statusCode,
                type: "OK",
                data: await getInfo(id)
            });
        } else {
            return response.status(400).json({
                code: response.statusCode,
                type: "Bad Request",
                message: "(id) query param is missing!"
            });
        }
    } catch (error) {
        return response.status(500).json({
            code: response.statusCode,
            type: "Internal Server Error",
            message: error.message
        });
    }
});

router.get("/search", async (request, response) => {
    try {
        const page = request.query.page || 1
        const per = request.query.per || 50
        const q = request.query.q
        if (q) {
            return response.status(200).json({
                code: response.statusCode,
                type: "OK",
                data: await getSearch(page, per, q)
            });
        } else {
            return response.status(400).json({
                code: response.statusCode,
                type: "Bad Request",
                message: "(q) query param is missing!"
            });
        }
    } catch (error) {
        return response.status(500).json({
            code: response.statusCode,
            type: "Internal Server Error",
            message: error.message
        });
    }
});

router.get("/stream", async (request, response) => {
    try {
        const id = request.query.id
        const episode = request.query.episode
        if (id || episode) {
            return response.status(200).json({
                code: response.statusCode,
                type: "OK",
                data: await getStream(id, episode)
            });
        } else {
            return response.status(400).json({
                code: response.statusCode,
                type: "Bad Request",
                message: "(id) or (episode) query param is missing!"
            });
        }
    } catch (error) {
        return response.status(500).json({
            code: response.statusCode,
            type: "Internal Server Error",
            message: error.message
        });
    }
});

export default router