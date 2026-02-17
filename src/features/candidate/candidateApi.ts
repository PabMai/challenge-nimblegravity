import { httpClient } from "@/config";
import type { Postulation } from "@/shared/models";

const CANDIDATE_API_URL = '/api/candidate';

export const getCandidates = async (email: string) => {
    try {
        const response = await httpClient
            .get(CANDIDATE_API_URL + 'get-by-email?email=' + email);

        console.log('Candidates fetched successfully:', response.data);
        
        return {
            ok: true,
            data: response.data,
        };
    } catch (error) {
        console.error('Error fetching candidates:', error);
        return {
            ok: false,
            error: 'Error searching for candidate.',
        };
    }
}

export const postCandidate = async (postulation: Postulation) => {
    try {
        const response = await httpClient
            .post(CANDIDATE_API_URL + '/apply-to-job', postulation);

        console.log('Candidate posted successfully:', response.data);

        return {
            ok: true,
            data: response.data,
        };
    } catch (error) {
        console.error('Error posting candidate:', error);
        return {
            ok: false,
            error: 'Error posting candidate.',  
        };
     }
 }