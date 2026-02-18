import { getCandidates, postCandidate, useCandidateStore } from "@features/candidate";
import { useAppStore } from "@/shared/stores/useAppStore";
import { PostulationSchema, type Postulation } from "@/shared/models"

export const useCandidate = () => {
  const setToast = useAppStore((state) => state.setToast);
  const setCandidate = useCandidateStore((state) => state.setCandidate);

  const searchCandidate = async (email: string) => {
    const candidate = await getCandidates(email);

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

    const result = PostulationSchema.safeParse(postulation);

    if (!result.success) {
      console.error("Invalid postulation data:", result.error);

      setToast({
        type: "error",
        message: "Invalid postulation data.",
      });

      return;
    }

    const response = await postCandidate(postulation);

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

  const withoutCandidate = () => {
    setToast({
      type: "error",
      message: "No candidate information found. Please search for a candidate before applying.",
    });
  }

  return {
    searchCandidate,
    applyJob,
    withoutCandidate,
  };
};
