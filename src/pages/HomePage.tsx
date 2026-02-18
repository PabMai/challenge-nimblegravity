import { CandidateForm } from "@/features/candidate/components/CandidateForm";
import { JobList } from "@/features/job/components/JobList";
import { useCandidateStore } from "@features/candidate";

export function HomePage() {
    const candidate = useCandidateStore((state) => state.candidate);

    return (
        <section className="w-full">
            <CandidateForm />
            {
                candidate && (
                    <JobList />
                )
            }
        </section>
    );
}