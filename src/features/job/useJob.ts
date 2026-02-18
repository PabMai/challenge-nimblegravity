import { useAppStore } from "@/shared/stores/useAppStore";
import { getJobs } from "@features/job";

export const useJob = () => {
    const { setToast } = useAppStore();

    const loadJobs = async () => {
        const response = await getJobs();
        console.log('Jobs found:', response);

        if (!response.ok) {
            console.warn('No jobs found');
            setToast({
                type: 'error',
                message: response.error || 'No jobs found.',
            });

            return;
        }

        return {
           ok: true,
           data: response.data,     
        };
    };

    return {
        loadJobs,
    };
};