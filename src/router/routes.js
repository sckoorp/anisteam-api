import express from "express";
const router = express.Router();

import {
    getTrending,
    getPopular,
    getUpcoming,
    getFavorite,
    getInfo
} from "../modules/modules.js";

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

export default router