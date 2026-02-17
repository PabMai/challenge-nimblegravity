import { httpClient } from "@/config";

const JOB_API_URL = '/api/jobs';

export const getPostulations = async () => {
    try {
        const response = await httpClient
            .get(JOB_API_URL + '/get-list');

        console.log('Postulations fetched successfully:', response.data);

        return {
            ok: true,
            data: response.data,
        };
    } catch (error) {
        console.error('Error fetching postulations:', error);
        return {
            ok: false,
            error: 'Error fetching postulations.',
        };
    }
}