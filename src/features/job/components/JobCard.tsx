import type { Job } from "@/shared/models";
import { Button } from "@/shared/ui";

interface JobCardProps {
  job: Job;
}
    
export function JobCard({ job }: JobCardProps) {
  return (
    <div className="block p-6 border border-default rounded-base shadow-xs">
      <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">
        {job.title}
      </h5>
      <p className="text-body mb-2">
        GitHub Repository URL
      </p>

      <input type="text" className="w-full p-2 border mb-4 border-default rounded-base sm:text-sm" placeholder="Enter GitHub URL" />

      <div className="flex justify-end">
        <Button text="Apply" type="button" />
      </div>
    </div>
  );
}
