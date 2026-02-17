import { CandidateForm } from "@/features/candidate/components/CandidateForm";
import { JobList } from "@/features/job/components/JobList";


export function HomePage() {
    return (
        <section className="w-full mt-8">
            <CandidateForm />
            <JobList />
        </section>
    );
}