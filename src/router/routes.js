import express from "express";
const router = express.Router();

import { getTrending } from "../modules/modules.js";

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

export default router