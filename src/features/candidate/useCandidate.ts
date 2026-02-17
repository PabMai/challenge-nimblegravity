import { getCandidates } from "@features/candidate";

export const useCandidate = () => {

    const searchCandidate = async (email: string) => {
        const candidate = await getCandidates(email);
        return candidate;
    }

    return {
        searchCandidate
    }
}
    