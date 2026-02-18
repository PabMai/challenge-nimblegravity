import {z} from 'zod';

export const PostulationSchema = z.object({
    uuid: z.uuid(),
    jobId: z.string(),
    candidateId: z.string(),
    repoUrl: z.string(),
    applicationId: z.string(),
});

export type Postulation = z.infer<typeof PostulationSchema>;