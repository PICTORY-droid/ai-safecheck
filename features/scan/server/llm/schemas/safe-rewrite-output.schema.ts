import { z } from "zod";

export const safeRewriteOutputSchema = z.object({
  safePrompt: z.string().min(1),
  rewriteNotes: z.array(z.string().min(1)),
  preservedIntent: z.boolean(),
  addedNewFacts: z.literal(false),
});

export type SafeRewriteOutputSchema = z.infer<typeof safeRewriteOutputSchema>;
