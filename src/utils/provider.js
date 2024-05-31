import { META } from "@consumet/extensions";

const anilist = new META.Anilist();

export const getEpisodes = async (id) => {
    const data = await anilist.fetchEpisodesListById(id);
    const episodes = [];
    if (data.length > 0) {
        data.map((i, index) => {
            episodes.push({
                id: i.id,
                episode: i.number
            });
        });
    }
    return episodes
}

export const getSources = async (id) => {
    const data = await anilist.fetchEpisodeSources(id);
    const sources = {
        default: data.sources.find(source => source.quality === "default").url,
        backup: data.sources.find(source => source.quality === "backup").url
    }
    return { sources, download: data.download }
}