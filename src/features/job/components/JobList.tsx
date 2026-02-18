import { useEffect, useState } from "react";

import { JobCard } from "./JobCard";
import { JobNotFound, useJob } from "@features/job";
import { useAppStore } from "@/shared/stores/useAppStore";
import type { Job } from "@/shared/models";

export function JobList() {
    const setIsLoading = useAppStore((state) => state.setIsLoading);
    const { loadJobs } = useJob();
    const [jobsResponse, setJobsResponse] = 
        useState<{ ok: boolean; data?: Job[] } | null>(null);

    useEffect(() => {
        const fetchJobs = async () => {
            setIsLoading(true);
            const response = await loadJobs();
            setJobsResponse(response);
            setIsLoading(false);
        };
        fetchJobs();
    }, []);

    if (!jobsResponse) {
        return;
    }

    if (!jobsResponse.ok) {
        return <JobNotFound />;
    }

    const jobs = jobsResponse.data as Job[];

    return (
        <>
            <div className="text-lg font-semibold mb-4">Jobs</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    jobs.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))
                }
            </div>
        </>
    );
}