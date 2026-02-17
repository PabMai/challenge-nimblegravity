import {z} from 'zod';

export const PostulationModel = z.object({
    uuid: z.uuid(),
    jobId: z.string(),
    candidateId: z.string(),
    repoUrl: z.string()
});

export type Postulation = z.infer<typeof PostulationModel>;