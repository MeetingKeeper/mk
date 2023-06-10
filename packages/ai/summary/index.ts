import { loadSummarizationChain } from 'langchain/chains';
import { OpenAI, PromptTemplate } from 'langchain';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { Document } from 'langchain/dist/document';

const model = new OpenAI({
  temperature: 0.2,
  openAIApiKey: process.env.OPEN_AI_API_KEY,
});

export const getRecursiveDocs = async (text: string): Promise<Document[]> => {
  const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 });
  return textSplitter.createDocuments([text]);
};

function getSummary(prompt: string, docs: Document[]) {
  const combinePrompt =
    PromptTemplate.fromTemplate(`${prompt} delimited by triple backquotes.
  Return your response in bullet points which covers the key points of the text.
  {text}
  SUMMARY:`);

  const mapPrompt = PromptTemplate.fromTemplate(`${prompt}:
  {text}
  SUMMARY:`);

  const chain = loadSummarizationChain(model, {
    type: 'map_reduce',
    combinePrompt,
    combineMapPrompt: mapPrompt,
  });
  return chain.call({
    input_documents: docs,
  });
}

export const getInformativeSummary = async (docs: Document[]) => {
  const prompt = 'Provide an informative summary of the following conversation';
  return getSummary(prompt, docs);
};

export const getDecisionMakingSummary = async (docs: Document[]) => {
  const prompt = 'Analyze the decision-making process in the conversation and identify key moments where decisions were made or discussed';
  return getSummary(prompt, docs);
};

export const getActionOrientedSummary = async (docs: Document[]) => {
  const prompt = 'Extract the follow-up action items from the conversation';
  return getSummary(prompt, docs);
};
