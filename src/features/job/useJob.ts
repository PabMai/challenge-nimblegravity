import { useAppStore } from "@/shared/stores/useAppStore";
import { getJobs } from "@features/job";

export const useJob = () => {
    const setToast = useAppStore((state) => state.setToast);

    const loadJobs = async () => {
        const response = await getJobs();

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