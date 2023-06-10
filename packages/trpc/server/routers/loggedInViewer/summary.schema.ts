import { z } from "zod";

export const ZSummaryInputSchema = z.object({
  text: z.string(),
});

export type TSummaryInputSchema = z.infer<typeof ZSummaryInputSchema>;
