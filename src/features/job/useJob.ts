import { useAppStore } from "@/shared/stores/appStore";
import { getPostulations } from "@features/job";

export const useJob = () => {
    const { setToast } = useAppStore();

    const loadPostulations = async () => {
        const response = await getPostulations();
        console.log('Postulations found:', response);

        if (!response.ok) {
            console.warn('No postulations found');
            setToast({
                type: 'error',
                message: response.error || 'No postulations found.',
            });

            return;
        }

        return {
           ok: true,
           data: response.data,     
        };
    };

    return {
        loadPostulations,
    };
};