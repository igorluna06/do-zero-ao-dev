import { repositoryPodcast } from "../repository/podcast-repository"
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { HttpStatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<PodcastTransferModel> => {

    //Define a interface de retorno
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body:[],
    };

    //Buscando os dados
    const queryString = podcastName?.split("?p=")[1] || "";

    const data = await repositoryPodcast(queryString);
    responseFormat.statusCode = data.length !== 0 ? HttpStatusCode.OK : HttpStatusCode.NO_CONTENT;

    responseFormat.body = data;

    return responseFormat;
};