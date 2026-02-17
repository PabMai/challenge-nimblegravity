import { httpClient } from "@/config";
import { CANDIDATE_API_URL } from "@features/candidate";

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