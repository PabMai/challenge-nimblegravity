import { useForm, type SubmitHandler } from "react-hook-form";

import { Alert, Button, Input } from "@/shared/ui";
import { type Job, type Postulation } from "@/shared/models";
import { useCandidate, useCandidateStore } from "@/features/candidate";

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

  const { applyJob, withoutCandidate } = useCandidate();
  const candidate = useCandidateStore((state) => state.candidate);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    reset();

    if (!candidate) {
      withoutCandidate();
      return;
    }

    const postulation: Postulation = {
      jobId: job.id,
      repoUrl: data.githubUrl,
      candidateId: candidate.candidateId,
      uuid: candidate.uuid,
      applicationId: candidate.applicationId,
    };

    applyJob(postulation);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="block p-6 border border-default rounded-base shadow-xs">
        <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">
          {job.title}
        </h5>
        <p className="text-body mb-2">GitHub Repository URL</p>

        <Input
          type="text"
          placeholder="Enter GitHub URL"
          {...register("githubUrl", { required: true })}
        />

        {errors.githubUrl && (
          <Alert type="error">GitHub URL is required.</Alert>
        )}

        <div className="flex justify-end mt-4">
          <Button text="Apply" type="submit" />
        </div>
      </div>
    </form>
  );
}
