import fs from "fs";
import path from "path";
import { Podcast } from "../models/podcast.model";

const pahData = path.join(__dirname, "../repository/podcast.json");

export const repositoryPodcast = async (podcastName?: string): Promise<Podcast[]> => {

    const language = "utf8";

    const rawData = fs.readFileSync(pahData, language);

    let jsonFile = JSON.parse(rawData);

    if(podcastName){
        jsonFile = jsonFile.filter((podcast: Podcast ) => podcast.podcastName === podcastName);
    };

    return jsonFile;
};

