import type { Node, Edge } from '@xyflow/svelte';


import in_context_learning from "@nodes/in_context_learning.json";
import writing_assistant from "@nodes/writing_assistant.json";
import content_idea_creation from "@nodes/content_idea_creation.json";
import generative_search_assistants from "@nodes/generative_search_assistants.json";
import data_extraction_conversational_search from "@nodes/data_extraction_conversational_search.json";
import developer_coding_assistants from "@nodes/developer_coding_assistants.json";
import playgrounds from "@nodes/playgrounds.json";
import autonomous_agent_ides from "@nodes/autonomous_agent_ides.json";
import llm_api_build_frameworks from "@nodes/llm_api_build_frameworks.json";
import prompt_engineering_tools from "@nodes/prompt_engineering_tools.json";
import vector_stores_semantic_databases from "@nodes/vector_stores_semantic_databases.json";
import operations_management from "@nodes/operations_management.json";
import data_centric_tooling from "@nodes/data_centric_tooling.json";
import models_hubs from "@nodes/models_hubs.json";


import in_context_learning_edges from "@edges/in_context_learning_edges.json";
import writing_assistant_edges from "@edges/writing_assistant_edges.json";
import content_idea_creation_edges from "@edges/content_idea_creation_edges.json";
import generative_search_assistants_edges from "@edges/generative_search_assistants_edges.json";
import data_extraction_conversational_search_edges from "@edges/data_extraction_conversational_search_edges.json";
import developer_coding_assistants_edges from "@edges/developer_coding_assistants_edges.json";
import playgrounds_edges from "@edges/playgrounds_edges.json";
import autonomous_agent_ides_edges from "@edges/autonomous_agent_ides_edges.json";
import llm_api_build_frameworks_edges from "@edges/llm_api_build_frameworks_edges.json";
import prompt_engineering_tools_edges from "@edges/prompt_engineering_tools_edges.json";
import vector_stores_semantic_databases_edges from "@edges/vector_stores_semantic_databases_edges.json";
import operations_management_edges from "@edges/operations_management_edges.json";
import data_centric_tooling_edges from "@edges/data_centric_tooling_edges.json";
import models_hubs_edges from "@edges/models_hubs_edges.json";

const position = { x: 0, y: 0 };
const edgeType = 'smoothstep';

const nodesData :Node[] = [
  ...in_context_learning,
  ...writing_assistant,
  ...content_idea_creation,
  ...generative_search_assistants,
  ...data_extraction_conversational_search,
  ...developer_coding_assistants,
  ...playgrounds,
  ...autonomous_agent_ides,
  ...llm_api_build_frameworks,
  ...prompt_engineering_tools,
  ...vector_stores_semantic_databases,
  ...operations_management,
  ...data_centric_tooling,
  ...models_hubs
];

// 遍历每个 nodesData 元素 增加position属性
nodesData.forEach((node, index) => {
  node.position = { x: position.x + 400 * (index % 5), y: position.y + 400 * Math.floor(index / 5) };
});

const edgesData :Edge[]= [
  ...in_context_learning_edges,
  ...writing_assistant_edges,
  ...content_idea_creation_edges,
  ...generative_search_assistants_edges,
  ...data_extraction_conversational_search_edges,
  ...developer_coding_assistants_edges,
  ...playgrounds_edges,
  ...autonomous_agent_ides_edges,
  ...llm_api_build_frameworks_edges,
  ...prompt_engineering_tools_edges,
  ...vector_stores_semantic_databases_edges,
  ...operations_management_edges,
  ...data_centric_tooling_edges,
  ...models_hubs_edges
]

export { nodesData as initialNodes,edgesData as initialEdges };
