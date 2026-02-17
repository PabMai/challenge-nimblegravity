import { Alert, Button } from "@/shared/ui";
import { useCandidate } from "@/features/candidate";
import type { Job, Postulation } from "@/shared/models";
import { useForm, type SubmitHandler } from "react-hook-form";

interface JobCardProps {
  job: Job;
}

type Inputs = {
  githubUrl: string;
  githubUrlRequired: string;
};

export function JobCard({ job }: JobCardProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  
  //const { applyJob } = useCandidate();
  //const postulation: Postulation = {} as Postulation;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    reset();
    console.log("Applying to job with data:", data);
    const postulation: Postulation = {
      jobId: job.id,
      repoUrl: data.githubUrl,
    };
    console.log("Constructed postulation object:", postulation);
    //applyJob(postulation);
    };
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="block p-6 border border-default rounded-base shadow-xs">
        <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">
          {job.title}
        </h5>
        <p className="text-body mb-2">GitHub Repository URL</p>

        <input
          type="text"
          className="w-full p-2 border mb-4 border-default rounded-base sm:text-sm"
          placeholder="Enter GitHub URL"
          {...register("githubUrl", {
            required: true,
          })}
        />

        {errors.githubUrl && (
          <Alert type="error">
            GitHub URL is required.
          </Alert>
        )}

        <div className="flex justify-end">
          <Button text="Apply" type="submit" />
        </div>
      </div>
    </form>
  );
}
