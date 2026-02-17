import { useAppStore } from "@/shared/stores/appStore";
import { getCandidates } from "@features/candidate";

export const useCandidate = () => {

    const { setToast } = useAppStore();

    const searchCandidate = async (email: string) => {
        const candidate = await getCandidates(email);
        console.log('Candidate found:', candidate);

        if (!candidate.ok) {
            console.warn('No candidate found for email:', email);
            setToast({
                type: 'error',
                message: candidate.error || 'No candidate found with the provided email.',
            });

            return;
        }

        return candidate;
    }

    return {
        searchCandidate
    }
}
    