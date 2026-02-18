import { getCandidates, postCandidate, useCandidateStore } from "@features/candidate";
import { useAppStore } from "@/shared/stores/useAppStore";
import type { Postulation } from "@/shared/models"

export const useCandidate = () => {
  const { setToast } = useAppStore();
  const { setCandidate } = useCandidateStore();

  const searchCandidate = async (email: string) => {
    const candidate = await getCandidates(email);
    console.log("Candidate found:", candidate);

    if (!candidate.ok) {
      console.warn("No candidate found for email:", email);
      setToast({
        type: "error",
        message:
          candidate.error || "No candidate found with the provided email.",
      });

      return;
    }

    setToast({
        type: "success",
        message: "Candidate found successfully!",
    });

    setCandidate(candidate.data);
  };

  const applyJob = async (postulation: Postulation) => {
    const response = await postCandidate(postulation);
    console.log("Candidate applied successfully:", response);

    if (!response.ok) {
      console.warn("Error applying candidate to job:", response.error);
      setToast({
        type: "error",
        message: response.error || "Error applying to job.",
      });

      return;
    }

    setToast({
        type: "success",
        message: "Applied to job successfully!",
    });
  };

  return {
    searchCandidate,
    applyJob,
  };
};
