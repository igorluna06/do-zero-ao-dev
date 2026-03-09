import { repositoryPodcast } from "../repository/podcast-repository"

export const serviceFilterEpisodes = async (podcastName: string) => {

    const data = await repositoryPodcast(podcastName);

    return data;
};