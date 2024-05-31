import axios from "axios";

export const getEpisodes = async (id) => {
    const response = (await axios.get(`https://api.anify.tv/episodes/${id}`)).data
    const gogoanime = response.find(provider => provider.providerId === "gogoanime");
    if (gogoanime) {
        const episodes = [];
        gogoanime.episodes.map((i, index) => {
            episodes.push({
                id: i.id.substring(1),
                episode: i.number
            });
        });
        return episodes
    } else {
        return []
    }
}