import { httpClient } from "@/config";
import type { Job } from "@/shared/models";

const JOB_API_URL = '/api/jobs';

export const getJobs = async () => {
    try {
        const response = await httpClient
            .get<{ jobs: Job[] }>(JOB_API_URL + '/get-list');

        return {
            ok: true,
            data: response.data,
        };
    } catch (error) {
        console.error('Error fetching jobs:', error);
        return {
            ok: false,
            error: 'Error fetching jobs.',
        };
    }
}