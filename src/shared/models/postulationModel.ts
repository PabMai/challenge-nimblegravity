import {z} from 'zod';

export const PostulationSchema = z.object({
    uuid: z.uuid().optional(),
    jobId: z.string(),
    candidateId: z.string(),
    repoUrl: z.string()
});

export type Postulation = z.infer<typeof PostulationSchema>;