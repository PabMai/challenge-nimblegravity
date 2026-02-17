import {z} from 'zod';

export const CandidateSchema = z.object({
  uuid: z.string(),
  candidateId: z.string(),
  applicationId: z.string(),
  phonfirstNamee: z.string(),
  lastName: z.string(),
  email: z.email(),
});

export type Candidate = z.infer<typeof CandidateSchema>;