import express from "express";
import cors from "cors";
import apicache from "apicache-plus";
import router from "./router/routes.js";
import { config } from "dotenv";
config();

const server = express();
const port = process.env.SERVER_PORT || 3000
const age = process.env.API_CACHE_AGE || "30 minutes"

server.use(cors());
server.use(express.json());
server.use(apicache(age));
server.use("/api", router);

server.get("/", (request, response) => {
    return response.status(200).json({
        code: response.statusCode,
        type: "OK",
        message: "Hiruki API 🎉",
        docs: "https://docs.hiruki.xyz"
    });
});

server.listen(port, () => console.log("Listening..."));