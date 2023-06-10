import type { TSummaryInputSchema } from "./summary.schema";
import { TrpcSessionUser } from "../../trpc";
import { getActionOrientedSummary, getDecisionMakingSummary, getInformativeSummary, getRecursiveDocs } from "@pm/ai";

type SummaryOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
  input: TSummaryInputSchema;
};

export const summaryHandler = async ({ ctx, input }: SummaryOptions) => {
  // TODO store the result and query into the database
  const docs = await getRecursiveDocs(input.text);
  return Promise.all([getInformativeSummary(docs), getDecisionMakingSummary(docs), getActionOrientedSummary(docs)]);
};


