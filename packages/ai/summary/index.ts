import { loadSummarizationChain } from 'langchain/chains';
import { OpenAI, PromptTemplate } from "langchain";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { Document } from "langchain/dist/document";

const model = new OpenAI({
  temperature: 0.2,
  openAIApiKey: process.env.OPEN_AI_API_KEY,
});

export const getRecursiveDocs = async (text: string) : Promise<Document[]> => {
  const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 });
  return  textSplitter.createDocuments([text]);
}

function getSummary(combinePrompt: PromptTemplate, mapPrompt: PromptTemplate, docs: Document[]) {
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
  const combinePrompt = PromptTemplate.fromTemplate(`Provide an informative summary of the following conversation  delimited by triple backquotes.
  Return your response in bullet points which covers the key points of the text.
  {text}
  SUMMARY:`);

  const mapPrompt = PromptTemplate.fromTemplate(`Provide an informative summary of the following conversation:
  {text}
  SUMMARY:`);

  return getSummary(combinePrompt, mapPrompt, docs);
};

export const getDecisionMakingSummary = async (docs: Document[]) => {
  const combinePrompt = PromptTemplate.fromTemplate(`Analyze the decision-making process in the conversation and identify key moments where decisions were made or discussed delimited by triple backquotes.
  Return your response in bullet points which covers the key points of the text.
  {text}
  SUMMARY:`);

  const mapPrompt = PromptTemplate.fromTemplate(`Analyze the decision-making process in the following conversation and identify key moments where decisions were made or discussed:
  {text}
  SUMMARY:`);

  return getSummary(combinePrompt, mapPrompt, docs);
};

export const getActionOrientedSummary = async (docs: Document[]) => {
  const combinePrompt = PromptTemplate.fromTemplate(`Extract the follow-up action items from the conversation delimited by triple backquotes.
  Return your response in bullet points which covers the key points of the text.
  {text}
  ACTION-ORIENTED SUMMARY:`);

  const mapPrompt = PromptTemplate.fromTemplate(`Extract the follow-up action items from the conversation:
  {text}
  ACTION-ORIENTED SUMMARY:`);

  return getSummary(combinePrompt, mapPrompt, docs);
};
